<?php

namespace Vietiso\Core\Mail\Mailables;

class Text implements ContentInterface
{
    public function __construct(protected string $content) {}

    public function __tostring(): string
    {
        return $this->content;
    }
}