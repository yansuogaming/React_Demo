<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Property;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Uppercase extends Rule
{
    public function __construct(protected string $message = 'The :attribute mus be uppercase.') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return mb_strtoupper($value, mb_detect_encoding($value)) === $value;
    }
}