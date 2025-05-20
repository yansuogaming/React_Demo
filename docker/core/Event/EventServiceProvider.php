<?php

namespace Vietiso\Core\Event;

use Vietiso\Core\Container\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(
            'events',
            fn () => new EventListenerProvider()
        );
        $this->app->alias('events', EventListenerProviderInterface::class);

        $this->app->singleton(
            'event_dispatcher',
            fn () => new EventDispatcher($this->app->get('events'))
        );
        $this->app->alias('event_dispatcher', EventDispatcherInterface::class);
    }
}