<?php

namespace Vietiso\Core\Server\Events;

use Swoole\Server;
use Vietiso\Core\App;

class TaskEvent extends ServerEvent
{
    public function handle(Server $server, int $taskId, int $workerId, array $data)
    {
        [$task, $data] = $data;
        $task = App::make($task);
        $data = $task->process($taskId, $workerId, $data);
        if (!is_null($data)) {
            $server->finish($data);
            $task->finish($taskId, $data);
        }
    }
}