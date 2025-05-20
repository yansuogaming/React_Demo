<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\ValidatedDTO\Property;

#[Attribute(Attribute::TARGET_PROPERTY)]
class TypeString extends Rule
{
    public function __construct(protected string $message = 'The :attribute must be string') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return is_string($value);
    }
}