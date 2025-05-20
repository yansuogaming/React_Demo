<?php

namespace Vietiso\Core\Route\Attributes;

use Attribute;
use Vietiso\Core\Collection\Arr;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Version
{
    public readonly array $versions;

    public function __construct(int|array $versions)
    {
        $this->versions = Arr::wrap($versions);
    }
}