<?php

namespace Vietiso\Core\Event;

use Vietiso\Core\App;

class EventDispatcher implements EventDispatcherInterface
{
    protected array $listeners = [];

    protected array $sorted = [];

    public function __construct(protected EventListenerProviderInterface $listenerProvider) {}

    public function dispatch(string|object $event, array $payload = []): ?object
    {
        if (class_exists($event)) {
            $event = App::make($event);
            array_unshift($payload, $event);
        }

        $listeners = $this->listenerProvider->getListenersForEvent($event);
        foreach ($listeners as $listener) {
            $stopPropagation = App::call($listener, $payload);
            if ($stopPropagation === false) {
                return is_object($event) ? $event : null;
            }
        }
        return is_object($event) ? $event : null;
    }
}