<?php

namespace Vietiso\Core\Mail\Facade;

use Vietiso\Core\App;
use Vietiso\Core\Support\Facade;
use Vietiso\Core\Mail\MailerInterface;

class Mail extends Facade
{
    protected static function getFacadeAccessor(): string|object
    {
        return 'mailer';
    }

    public static function driver(string $driver): MailerInterface
    {
        return App::service('mailer_factory')->driver($driver);
    }
}