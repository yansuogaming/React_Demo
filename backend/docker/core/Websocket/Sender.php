<?php

namespace Vietiso\Core\WebSocket;

use Vietiso\Core\WebSocket\Response as WsResponse;
use Swoole\Server;
use Vietiso\Core\Log\Log;

class Sender
{
    protected ?int $workerId = null;

    protected array $responses = [];

    protected bool $isCoroutineServer = false;

    public function __construct()
    {
        $this->isCoroutineServer = true;
    }

    public function __call($name, $arguments)
    {
        [$fd, $method] = $this->getFdAndMethodFromProxyMethod($name, $arguments);

        if ($this->isCoroutineServer) {
            if (isset($this->responses[$fd])) {
                array_shift($arguments);
                if ($method === 'disconnect') {
                    $method = 'close';
                }

                $result = $this->responses[$fd]->{$method}(...$arguments);
                Log::debug(
                    sprintf(
                        "[WebSocket] Worker send to #{$fd}.Send %s",
                        $result ? 'success' : 'failed'
                    )
                );
                return $result;
            }
            return false;
        }

        if (! $this->proxy($fd, $method, $arguments)) {
            $this->sendPipeMessage($name, $arguments);
        }
        return true;
    }

    public function pushFrame(int $fd, Frame $frame): bool
    {
        if ($this->isCoroutineServer) {
            if (isset($this->responses[$fd])) {
                return (new WsResponse($this->responses[$fd]))->init($fd)->push($frame);
            }

            return false;
        }

        if ($this->check($fd)) {
            return (new WsResponse($this->getServer()))->init($fd)->push($frame);
        }

        $this->sendPipeMessage(
            'push',
            [
                $fd, (string) $frame->getPayloadData(),
                $frame->getOpcode(), swoole_get_flags_from_frame($frame)
            ]
        );
        return false;
    }

    public function proxy(int $fd, string $method, array $arguments): bool
    {
        $result = $this->check($fd);
        if ($result) {
            /** @var \Swoole\WebSocket\Server $server */
            $server = $this->getServer();
            $result = $server->{$method}(...$arguments);
            Log::debug(
                sprintf(
                    "[WebSocket] Worker.{$this->workerId} send to #{$fd}.Send %s",
                    $result ? 'success' : 'failed'
                )
            );
        }

        return $result;
    }

    public function setWorkerId(int $workerId): void
    {
        $this->workerId = $workerId;
    }

    public function check($fd): bool
    {
        $info = $this->getServer()->connection_info($fd);

        if (($info['websocket_status'] ?? null) === WEBSOCKET_STATUS_ACTIVE) {
            return true;
        }

        return false;
    }

    public function setResponse(int $fd, mixed $response): void
    {
        if ($response === null) {
            unset($this->responses[$fd]);
        } else {
            $this->responses[$fd] = $response;
        }
    }

    public function getResponse(int $fd): mixed
    {
        return $this->responses[$fd] ?? null;
    }

    public function getResponses(): array
    {
        return $this->responses;
    }

    public function getFdAndMethodFromProxyMethod(string $method, array $arguments): array
    {
        if (! in_array($method, ['push', 'disconnect'])) {
            throw new \InvalidArgumentException(sprintf('Method [%s] is not allowed.', $method));
        }

        return [(int) $arguments[0], $method];
    }

    protected function getServer(): Server
    {
        global $server;
        return $server;
    }

    protected function sendPipeMessage(string $name, array $arguments): void
    {
        $server = $this->getServer();
        $workerCount = $server->setting['worker_num'] - 1;
        for ($workerId = 0; $workerId <= $workerCount; ++$workerId) {
            if ($workerId !== $this->workerId) {
                $server->sendMessage(new SenderPipeMessage($name, $arguments), $workerId);
                Log::debug("[WebSocket] Let Worker.{$workerId} try to {$name}.");
            }
        }
    }
}