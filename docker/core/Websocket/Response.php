<?php

namespace Vietiso\Core\WebSocket;

use Swoole\Http\Request;
use Swoole\Http\Response as SwooleResponse;
use Swoole\WebSocket\Frame as SwooleFrame;
use Swoole\WebSocket\Server;
use Vietiso\Core\WebSocket\Frame;

class Response
{
    protected int $fd = 0;

    public function __construct(protected mixed $connection)
    {
    }

    public function push(Frame $frame): bool
    {
        $data = (string) $frame->getPayloadData();
        $flags = swoole_get_flags_from_frame($frame);

        if ($this->connection instanceof SwooleResponse) {
            $this->connection->push($data, $frame->getOpcode(), $flags);
            return true;
        }

        if ($this->connection instanceof Server) {
            $this->connection->push($this->fd, $data, $frame->getOpcode(), $flags);
            return true;
        }

        throw new \InvalidArgumentException('The websocket connection is invalid.');
    }

    public function init(mixed $frame): static
    {
        switch (true) {
            case is_int($frame):
                $this->fd = $frame;
                break;
            case $frame instanceof Request || $frame instanceof SwooleFrame:
                $this->fd = $frame->fd;
                break;
        }

        return $this;
    }

    public function getFd(): int
    {
        return $this->fd;
    }

    public function close(): bool
    {
        if ($this->connection instanceof SwooleResponse) {
            return $this->connection->close();
        }

        if ($this->connection instanceof Server) {
            return $this->connection->disconnect($this->fd);
        }

        return false;
    }
}