<?php

namespace Vietiso\Core\Pool;

interface PoolInterface
{
    public function get(): object;

    public function release(object $connection): void;

    public function flush(): void;

    public function flushOne(): void;

    public function getConnectionsInChannel(): int;

    public function getCurrentConnections(): int;
}