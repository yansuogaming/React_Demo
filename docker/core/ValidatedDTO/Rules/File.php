<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Traits\FileTrait;

#[Attribute(Attribute::TARGET_PROPERTY)]
class File extends Rule
{
    use FileTrait;

    public function __construct(protected string $message = 'The :attribute must be file.') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return $this->isUploadedFile($value);
    }
}