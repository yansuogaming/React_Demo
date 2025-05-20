<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class BeforeOrEqual extends Rule
{
    public function __construct(
        protected string $time,
        protected string $message = 'The :attribute may only allows alphabet and spaces.'
    ) {}

    public function check(mixed $value, array $values, Property $property): bool
    {
        
    }
}