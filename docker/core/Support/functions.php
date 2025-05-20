<?php

use Vietiso\Core\Support\Str;
use Vietiso\Core\Support\Stringable;

function str(string $string): Stringable
{
    return Str::of($string);
}