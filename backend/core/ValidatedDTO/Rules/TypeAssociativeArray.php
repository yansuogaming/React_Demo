<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Validator;

#[Attribute(Attribute::TARGET_PROPERTY)]
class TypeAssociativeArray extends Rule
{
    public function __construct(
        public readonly ?string $schema = null,
        protected string $message = 'The :attribute must be associative array.'
    ) {}

    public function setValidator(Validator $validator): void
    {
        parent::setValidator($validator);
        if (!$this->validator->has($this->schema)) {
            $this->validator->compile($this->schema);
        }
    }

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return is_array($value) && !array_is_list($value);
    }
}