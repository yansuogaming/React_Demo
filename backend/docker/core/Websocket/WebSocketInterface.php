<?php

namespace Vietiso\Core\WebSocket;

interface WebSocketInterface
{
    public const ON_MESSAGE = 'message';

    public const ON_CLOSE = 'close';

    public function on(string $event, callable $callback): void;

    public function start(): void;
}