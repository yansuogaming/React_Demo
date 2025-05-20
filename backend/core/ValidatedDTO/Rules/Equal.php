<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Equal extends Rule
{
    public function __construct(
        protected string $field,
        protected bool $strict = false,
        protected string $message = 'The :attribute must be same with :field.'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return $this->strict
            ? $value === Arr::get($values, $this->field)
            : $value == Arr::get($values, $this->field);
    }
}