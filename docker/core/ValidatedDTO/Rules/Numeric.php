<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Numeric extends Rule
{
    public function __construct(protected string $message = 'The :attribute mus be numeric') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return is_numeric($value);
    }
}