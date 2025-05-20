<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Traits\FileTrait;

#[Attribute(Attribute::TARGET_PROPERTY)]
class UploadedFile extends Rule
{
    use FileTrait;

    public function __construct(
        protected ?int $maxSize = null,
        protected ?int $minSize = null,
        protected array $allowedTypes = [],
        protected string $message = 'The :attribute is not valid uploaded file'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (!$this->isUploadedFile($value)) {
            return false;
        }

        if ($value['error']) {
            return false;
        }

        return true;
    }
}