<?php

use Vietiso\Core\ErrorHandler\Exception\DumperException;
use Symfony\Component\VarDumper\VarDumper;
use Swoole\Coroutine;

require __DIR__ . '/Config/functions.php';
require __DIR__ . '/Websocket/functions.php';
require __DIR__ . '/Collection/functions.php';
require __DIR__ . '/Support/functions.php';
require __DIR__ . '/Route/functions.php';
require __DIR__ . '/Filesystem/functions.php';

function env(string $key, mixed $default = null): mixed
{
    $result = $_SERVER[$key] ?? $default;
    if (is_string($result)) {
        switch (mb_strtolower($result)) {
            case 'false':
                return false;
            case 'true':
                return true;
            case 'null':
                return null;
        }
    }
    return $result;
}

function dd(mixed ...$vars): never
{
    if (Coroutine::getCid() > -1) {
        throw new DumperException(...$vars);
    } else {
        dump(...$vars);
        die;
    }
}

function dump(mixed ...$vars): void
{
    foreach ($vars as $k => $v) {
        VarDumper::dump($v, (string) (is_int($k) ? 1 + $k : $k));
    }
}