<?php

namespace Vietiso\Core\Mail;

use Vietiso\Core\Mail\Mailables\ContentInterface;
use Vietiso\Core\Mail\Mailables\Envelope;
use Vietiso\Core\Mail\Mailables\Headers;

abstract class Mailable
{
    abstract public function content(): ContentInterface;

    public function envelope(): ?Envelope
    {
        return null;
    }

    public function headers(): ?Headers
    {
        return null;
    }

    public function attachments(): ?array
    {
        return null;
    }
}