<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Url extends Rule
{
    public function __construct(protected string $message = 'The :attribute is not valid url') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return filter_var($value, FILTER_VALIDATE_URL) !== false;
    }
}