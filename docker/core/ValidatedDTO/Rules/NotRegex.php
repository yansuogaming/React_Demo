<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class NotRegex extends Rule
{
    public function __construct(
        protected string $pattern,
        protected string $message = 'The :attribute is not valid format'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return !(bool) preg_match($this->pattern, $value);
    }
}