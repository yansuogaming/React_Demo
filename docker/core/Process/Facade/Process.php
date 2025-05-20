<?php

namespace Vietiso\Core\Process\Facade;

use Vietiso\Core\Support\Facade;

class Process extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'process';
    }
}