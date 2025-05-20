<?php

namespace Vietiso\Core\Pool;

use SplQueue;
use Swoole\Coroutine;
use Swoole\Coroutine\Channel as CoroutineChannel;

class Channel
{
    protected CoroutineChannel $channel;

    protected SplQueue $queue;

    public function __construct(protected int $size)
    {
        $this->channel = new CoroutineChannel($size);
        $this->queue = new SplQueue();
    }

    public function pop(float $timeout): object|false
    {
        if ($this->isCoroutine()) {
            return $this->channel->pop($timeout);
        }
        return $this->queue->shift();
    }

    public function push(object $data): bool
    {
        if ($this->isCoroutine()) {
            return $this->channel->push($data);
        }
        $this->queue->push($data);
        return true;
    }

    public function length(): int
    {
        if ($this->isCoroutine()) {
            return $this->channel->length();
        }
        return $this->queue->count();
    }

    protected function isCoroutine(): bool
    {
        return Coroutine::getCid() > 0;
    }
}