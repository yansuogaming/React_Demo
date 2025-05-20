<?php

namespace Vietiso\Core\ErrorHandler\ErrorRenderer;

use Symfony\Component\VarDumper\Caster\ReflectionCaster;
use Vietiso\Core\ErrorHandler\Exception\DumperException;
use Symfony\Component\VarDumper\Dumper\HtmlDumper;
use Symfony\Component\VarDumper\Cloner\VarCloner;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Http\Request;
use Throwable;

class JsonErrorRenderer
{
    public static function render(Throwable $exception): Response
    {
        return Response::json([
            'message' => $exception->getMessage(),
            'exception' => get_class($exception),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'trace' => $exception->getTrace()
        ])->setEncodingOptions(JSON_PRETTY_PRINT);
    }
}