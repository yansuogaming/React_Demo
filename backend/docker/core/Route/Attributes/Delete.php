<?php

namespace Vietiso\Core\Route\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Delete extends Get
{
    public function getMethod(): string
    {
        return 'DELETE';
    }
}