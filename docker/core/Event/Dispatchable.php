<?php

namespace Vietiso\Core\Event;

use Vietiso\Core\App;
use Vietiso\Core\Event\EventDispatcherInterface;

trait Dispatchable
{
    public static function dispatch(mixed ...$params): void
    {
        App::service('event_dispatcher')->dispatch(new static(...$params));
    }

    public static function dispatchIf(bool $condition, mixed ...$params): void
    {
        if ($condition) {
            static::dispatch(...$params);
        }
    }

    public static function dispatchUnless(bool $condition, mixed ...$params): void
    {
        if (!$condition) {
            static::dispatch(...$params);
        }
    }
}