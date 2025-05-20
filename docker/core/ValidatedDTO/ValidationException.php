<?php

namespace Vietiso\Core\ValidatedDTO;

use Vietiso\Core\Support\Arrayable;

class ValidationException extends \RuntimeException
{
    public function __construct(string $message, protected string $dto, protected array $errors)
    {
        $this->message = $message;
    }

    public function getStatusCode(): int
    {
        return 422;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }

    public function getDTO(): string
    {
        return $this->dto;
    }
}