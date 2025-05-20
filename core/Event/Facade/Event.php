<?php

namespace Vietiso\Core\Event\Facade;

use Vietiso\Core\Support\Facade;

class Event extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'event_dispatcher';
    }
}