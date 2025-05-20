<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Min extends Rule
{
    public function __construct(
        protected float $min,
        protected ?string $abc = null,
        protected string $message = 'The :attribute minimum is :min'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (is_int($value) || ctype_digit($value)) {
            return $value >= $this->min;
        }

        if (is_array($value)) {
            return count($value) >= $this->min;
        }

        return mb_strlen($value) >= $this->min;
    }
}