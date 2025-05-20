<?php

namespace Vietiso\Core\Log;

use Vietiso\Core\App;
use Vietiso\Core\Support\Facade;

class Log extends Facade
{
    public static function get($name = 'vietiso', $group = 'default'): Logger
    {
        return App::service('log')->get($name, $group);
    }

    protected static function getFacadeAccessor(): string|object
    {
        return App::service('log')->get();
    }
}