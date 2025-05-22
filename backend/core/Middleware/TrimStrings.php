<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Middleware\TransformsRequest;

class TrimStrings extends TransformsRequest
{
    protected function transform(string $key, mixed $value): mixed
    {
        return preg_replace('~^[\s\x{FEFF}\x{200B}]+|[\s\x{FEFF}\x{200B}]+$~u', '', $value ?? '') ?? trim($value);
    }
}