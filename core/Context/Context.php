<?php

namespace Vietiso\Core\Context;

use Vietiso\Core\Coroutine\Coroutine;

class Context
{
    protected static $pool = [];

    public static function get($key): mixed
    {
        if(static::has($key)) {
            $cid = Coroutine::id();
            return static::$pool[$cid][$key];
        }

        return null;
    }

    public static function has(string $key): bool
    {
        $cid = Coroutine::id();
        if ($cid < 0) {
            return false;
        }

        return isset(static::$pool[$cid][$key]);
    }

    public static function put(string $key, mixed $item): void
    {
        $cid = Coroutine::id();
        if ($cid > 0) {
            self::$pool[$cid][$key] = $item;
        }
    }

    public static function push(string $key, mixed $item): void
    {
        $cid = Coroutine::id();
        if ($cid > 0) {
            if (!isset(self::$pool[$cid][$key])) {
                self::$pool[$cid][$key] = [];
            }
            self::$pool[$cid][$key][] = $item;
        }
    }

    public static function delete($key = null): void
    {
        $cid = Coroutine::id();

        if ($cid > 0) {
            if (is_null($key)) {
                unset(self::$pool[$cid]);
                return;
            }

            unset(self::$pool[$cid][$key]);
        }
    }
}
