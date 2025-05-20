<?php

namespace Vietiso\Core\Watcher;

use Vietiso\Core\Watcher\Driver\DriverInterface;
use Vietiso\Core\Watcher\Driver\FSEvents;
use Vietiso\Core\Watcher\Driver\Inotify;
use Vietiso\Core\Watcher\Driver\Polling;

class Watcher
{
    public static function create(bool $polling = false): DriverInterface
    {
        if (!$polling) {
            $os = PHP_OS;
            if (stripos($os, 'Linux') !== false) {
                return new Inotify();
            }
            
            if (stripos($os, 'Darwin') !== false) {
                return new FSEvents();
            }
        }

        return new Polling();
    }
}