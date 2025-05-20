<?php

namespace Vietiso\Core\Event;

interface EventSubscriberInterface
{
    public function subscribe(EventDispatcherInterface $dispatcher): void;

    public static function getSubscribedEvents(): array;
}