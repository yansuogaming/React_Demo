<?php

namespace Vietiso\Core\Mail;

interface MailerInterface
{
    public function send(Mailable $mail): void;
}