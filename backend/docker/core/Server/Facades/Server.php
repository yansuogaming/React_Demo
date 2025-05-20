<?php

namespace Vietiso\Core\Server\Facades;

use Vietiso\Core\Support\Facade;

class Server extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'server';
    }
}