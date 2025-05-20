<?php

namespace Vietiso\Core\Database\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class GlobalScope
{
    public readonly array $scopes;

    public function __construct(string ...$scopes)
    {
        $this->scopes = $scopes;
    }
}