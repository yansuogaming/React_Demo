<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\MimeTypeGuesser;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Traits\FileTrait;

#[Attribute(Attribute::TARGET_PROPERTY)]
class MimeType extends Rule
{
    use FileTrait;

    protected array $allowMimeTypes = [
        MimeTypeGuesser::getMimeType('jpeg'),
        MimeTypeGuesser::getMimeType('png'),
        MimeTypeGuesser::getMimeType('bmp'),
        MimeTypeGuesser::getMimeType('gif'),
        MimeTypeGuesser::getMimeType('svg'),
        MimeTypeGuesser::getMimeType('webp')
    ];

    public function __construct(protected string $message = 'The :attribute must be image') {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (is_string($value)) {
            return in_array(mime_content_type($value), $this->allowMimeTypes);
        }

        if ($this->isUploadedFile($value)) {
            return in_array($value['type'], $this->allowMimeTypes);
        }

        return false;
    }
}