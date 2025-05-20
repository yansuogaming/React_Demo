<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Json extends Rule
{
    public function __construct(protected string $message = 'The :attribute must be a valid JSON string') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (! is_string($value) || empty($value)) {
            return false;
        }

        if (function_exists('json_validate')) {
            return json_validate($value);
        }

        json_decode($value);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return false;
        }

        return true;
    }
}