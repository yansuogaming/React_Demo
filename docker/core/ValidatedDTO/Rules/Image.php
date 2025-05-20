<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\MimeTypeGuesser;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\Traits\FileTrait;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Image extends Rule
{
    use FileTrait;

    protected array $allowTypes = [];

    public function __construct(protected string $message = 'The :attribute must be image.') {
        $this->allowTypes = [
            MimeTypeGuesser::getMimeType('jpeg'),
            MimeTypeGuesser::getMimeType('png'),
            MimeTypeGuesser::getMimeType('bmp'),
            MimeTypeGuesser::getMimeType('gif'),
            MimeTypeGuesser::getMimeType('svg'),
            MimeTypeGuesser::getMimeType('webp')
        ];
    }

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (is_string($value)) {
            return file_exists($value) && in_array(mime_content_type($value), $this->allowTypes);
        }

        if ($this->isUploadedFile($value)) {
            return in_array($value->getClientMimeType(), $this->allowTypes);
        }

        return false;
    }
}