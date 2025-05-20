<?php

namespace Vietiso\Core\Queue\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class Route
{
    public function __construct(
        protected string $key
    ) {}

    public function __toString()
    {
        return $this->key;
    }
}