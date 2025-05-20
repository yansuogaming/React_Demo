<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class NotIn extends Rule
{
    public function __construct(
        protected array $disallowedValues,
        protected bool $strict = false,
        protected string $message = 'The :attribute is not allowing :disallowedValues'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return !in_array($value, $this->disallowedValues, $this->strict);
    }

    protected function renderAllowedValuesText(): string
    {
        return join(',', $this->disallowedValues);
    }
}