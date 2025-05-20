<?php

namespace Vietiso\Core\ErrorHandler\Exception;

use RuntimeException;

class DumperException extends RuntimeException
{
    public readonly array $vars;

    public function __construct(mixed ...$vars)
    {
        $this->vars = $vars;
    }
}