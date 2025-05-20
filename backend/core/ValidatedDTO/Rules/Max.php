<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Max extends Rule
{
    public function __construct(
        protected float $max,
        protected string $message = 'The :attribute maximum is :max'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (is_int($value) || ctype_digit($value)) {
            return $value <= $this->max;
        }

        if (is_array($value)) {
            return count($value) <= $this->max;
        }

        return mb_strlen($value) <= $this->max;
    }
}