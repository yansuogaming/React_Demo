<?php

namespace Vietiso\Core\Websocket\Collector;

class Fd
{
    public function __construct(public int $fd, public string $class) {}
}