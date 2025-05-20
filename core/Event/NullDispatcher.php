<?php

namespace Vietiso\Core\Event;

class NullDispatcher implements EventDispatcherInterface
{
    public function __construct(protected EventListenerProviderInterface $listenerProvider) {}

    public function dispatch(string|object $event, array $payload = []): ?object
    {
        return null;
    }
}