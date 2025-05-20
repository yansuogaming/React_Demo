<?php

namespace Vietiso\Core\Event;

interface EventDispatcherInterface extends \Psr\EventDispatcher\EventDispatcherInterface
{
    public function dispatch(string|object $event, array $payload = []): ?object;
}
