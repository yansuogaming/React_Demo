<?php

namespace Vietiso\Core\WebSocket;

class SenderPipeMessage
{
    public function __construct(public string $name, public array $arguments)
    {
    }
}