<?php

namespace Vietiso\Core\Route\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Head extends Get
{
    public function getMethod(): string
    {
        return 'HEAD';
    }
}