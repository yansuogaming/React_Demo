<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Alpha extends Rule
{
    public function __construct(protected string $message = 'The :attribute only allows alphabet characters.') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return is_string($value) && preg_match('/^[\pL\pM]+$/u', $value);
    }
}