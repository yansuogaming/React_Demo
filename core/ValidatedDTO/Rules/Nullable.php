<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Nullable extends Rule
{
    protected string $message = '';

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return true;
    }
}