<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Required extends Rule
{
    public function __construct(protected string $message = 'The :attribute is required') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (isset($property->rules[File::class]) || isset($property->rules[Image::class])) {
            return $this->isUploadedFile($value);
        }

        if (is_string($value)) {
            return mb_strlen(trim($value), 'UTF-8') > 0;
        }

        if (is_array($value)) {
            return count($value) > 0;
        }

        return !is_null($value);
    }
}