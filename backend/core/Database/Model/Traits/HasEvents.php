<?php

namespace Vietiso\Core\Database\Model\Traits;

use Vietiso\Core\Event\EventDispatcherInterface;
use Vietiso\Core\Event\EventListenerProviderInterface;
use Vietiso\Core\Event\NullDispatcher;

trait HasEvents
{
    protected static EventListenerProviderInterface $listenerProvider;

    protected static EventDispatcherInterface $eventDispatcher;

    public static function setListenerProvider(EventListenerProviderInterface $listenerProvider): void
    {
        static::$listenerProvider = $listenerProvider;
    }
    
    public static function setEventDispatcher(EventDispatcherInterface $eventDispatcher): void
    {
        static::$eventDispatcher = $eventDispatcher;
    }

    public static function creating(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function created(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function updating(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function updated(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function saving(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback); 
    }

    public static function saved(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function deleting(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function deleted(callable $callback): void
    {
        static::registerModelEvent(__FUNCTION__, $callback);
    }

    public static function withoutEvents(callable $callback): mixed
    {
        $dispatcher = static::$eventDispatcher;

        static::setEventDispatcher(new NullDispatcher(static::$listenerProvider));

        try {
            return $callback();            
        } finally {
            static::setEventDispatcher($dispatcher);
        }
    }

    public function saveQuietly(): bool
    {
        return static::withoutEvents(fn () => $this->save());
    }

    public function deleteQuietly(): bool
    {
        return static::withoutEvents(fn () => $this->delete());
    }

    protected function fireModelEvent(string $event): void
    {
        $class = static::class;
        static::$eventDispatcher->dispatch("model:$class.$event", [$this]);
    }

    protected static function registerModelEvent(string $event, callable $callback): void
    {
        $class = static::class;
        static::$listenerProvider->listen("model:$class.$event", $callback);
    }
}