<?php

namespace Vietiso\Core\Server;

abstract class Taskable
{
    abstract public function process(int $taskId, int $workerId, mixed $data = null);

    public function finish(int $taskId, mixed $data = null)
    {
        return $data;
    }
}