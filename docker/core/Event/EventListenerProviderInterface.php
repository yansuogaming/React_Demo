<?php

namespace Vietiso\Core\Event;

interface EventListenerProviderInterface
{
    public function getListenersForEvent(string|object $event): array;

    public function listen(string $event, callable $callable): static;

    public function subscriber(string $subscriber): static;

    public function clearListeners(string $event): void;
}