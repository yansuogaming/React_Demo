<?php

namespace Vietiso\Core\Hashing\Facade;

use Vietiso\Core\Support\Facade;
use Vietiso\Core\App;

/**
 * @method static array info(string $hashedValue)
 * @method static string make(string $value, array $options = [])
 * @method static bool check(string $value, string $hashedValue, array $options = [])
 * @method static bool needsRehash(string $hashedValue, array $options = [])
 *
 * @see \Vietiso\Core\Hashing\HashManager
 */
class Hash extends Facade
{
    protected static function getFacadeAccessor(): string|object
    {
        return 'hash.driver';
    }

    public static function driver(?string $driver = null): mixed
    {
        return App::service('hash')->driver($driver);
    }
}