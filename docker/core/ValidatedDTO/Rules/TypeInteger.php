<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\ValidatedDTO\Property;

#[Attribute(Attribute::TARGET_PROPERTY)]
class TypeInteger extends Rule
{
    public function __construct(protected string $message = 'The :attribute must be integer') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return is_int($value) || ctype_digit($value);
    }
}