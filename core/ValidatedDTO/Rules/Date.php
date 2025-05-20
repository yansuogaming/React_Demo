<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Date extends Rule
{
    public function __construct(
        protected string $format = 'Y-m-d',
        protected string $message = 'The :attribute is not valid date format.'
    ) {}

    public function check(mixed &$value, array &$values, Property &$property): bool
    {
        return date_create_from_format($this->format, $value) !== false;
    }
}