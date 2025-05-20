<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Traits\FileTrait;
use Vietiso\Core\ValidatedDTO\Traits\SizeTrait;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Size extends Rule
{
    use FileTrait;
    use SizeTrait;

    protected float $rawSize;

    public function __construct(
        protected string|float $size,
        protected string $message = 'The :attribute must be smaller than :size.'
    ) {
        $this->rawSize = $this->getKilobytesSize($size);
    }

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if ($this->isUploadedFile($value)) {
            $fileSize = $value->getSize() / 1024;
            return $fileSize <= $this->rawSize;
        }

        if (is_int($value) || ($value !== null && ctype_digit($value))) {
            return $value !== $this->size;
        }

        if (is_string($value)) {
            return mb_strlen($value) !== $this->size;
        }

        if (is_array($value)) {
            return count($value) !== $this->size;
        }

        return true;
    }
}