<?php

namespace Vietiso\Core\Mail;

use Vietiso\Core\Container\ServiceProvider;

class MailServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('mailer_factory', fn () => new MailerFactory);
        $this->app->transient('mailer', fn () => $this->app->get('mailer_factory')->driver());
        $this->app->alias('mailer', MailerInterface::class);
    }
}