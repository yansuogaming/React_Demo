<?php

namespace Vietiso\Core\Server;

class Server
{
    protected \Swoole\Server $swooleServer;

    public function __construct(
        object|string $driver,
        protected string $host,
        protected int $port,
        protected int $mode,
        protected int $socketType,
        protected array $configs = []
    )
    {
        $this->swooleServer = new $driver(
            $this->host,
            $this->port,
            $this->mode,
            $this->socketType
        );
        $this->swooleServer->set($configs);
    }

    public function mode(): int
    {
        return $this->mode;
    }

    public function listen(string $event, callable $handler): void
    {
        $this->swooleServer->on($event, $handler);
    }

    public function start(): bool
    {
        return $this->swooleServer->start();
    }

    public function task(string $task, mixed $data, int $taskWorkerIndex = -1): int|false
    {
        return $this->swooleServer->task([$task, $data], $taskWorkerIndex);
    }

    public function taskWait(string $task, mixed $data, float $timeout = 0.5, int $taskWorkerIndex = -1): int|false
    {
        return $this->swooleServer->taskwait([$task, $data], $timeout, $taskWorkerIndex);
    }

    public function taskWaitMulti(array $tasks, float $timeout = 0.5): bool|array
    {
        return $this->swooleServer->taskWaitMulti($tasks, $timeout);
    }

    public function taskCo(array $tasks, float $timeout = 0.5): bool|array
    {
        return $this->swooleServer->taskCo($tasks, $timeout);
    }

    public function __call(string $method, array $args = []): mixed
    {
        return $this->swooleServer->{$method}(...$args);
    }
}