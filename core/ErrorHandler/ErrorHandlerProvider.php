<?php

namespace Vietiso\Core\ErrorHandler;

use Vietiso\Core\Container\ServiceProvider;

class ErrorHandlerProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('error_handler', fn () => new Handler());
    }

    public function boot()
    {
        $this->app->get('error_handler')->registerErrorHandler();
        $this->app->get('error_handler')->registerExceptionHandler();
    }
}