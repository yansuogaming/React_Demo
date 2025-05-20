<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class RequiredIf extends Required
{
    public function __construct(
        protected string|callable $field,
        protected array $values = [],
        protected string $message = 'The :attribute is required'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (
            is_string($this->field)
            && in_array(Arr::get($values, $this->field), $this->values)
        ) {
            return parent::check($value, $values, $property);
        }

        if (is_callable($callback = $this->field) && $callback) {
            return parent::check($value, $values, $property);
        }

        return true;
    }
}