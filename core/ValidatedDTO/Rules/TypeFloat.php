<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Property;

#[Attribute(Attribute::TARGET_PROPERTY)]
class TypeFloat extends Rule
{
    public function __construct(protected string $message = 'The :attribute must be float.') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return filter_var($value, FILTER_VALIDATE_FLOAT);
    }
}