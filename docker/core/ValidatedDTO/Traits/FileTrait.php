<?php

namespace Vietiso\Core\ValidatedDTO\Traits;

use Vietiso\Core\Http\File\UploadedFile;

trait FileTrait
{   
    /**
     * Check the $value is uploaded file
     */
    public function isUploadedFile(mixed $value): bool
    {
        return $value instanceof UploadedFile;
    }

    /**
     * Resolve uploaded file value
     */
    public function resolveUploadedFileValue(mixed $value): ?array
    {
        return null;
    }
}