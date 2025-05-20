<?php

namespace Vietiso\Core\ValidatedDTO;

use Vietiso\Core\Container\ServiceProvider;

class ValidatorServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton('validator', fn() => new Validator());
    }
}