<?php

namespace Vietiso\Core\Environment;

use Vietiso\Core\Container\ServiceProvider;

class EnvironmentServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton('env', fn () => Environment::createUnsafeImmutable($this->app->getBasePath()));
    }

    public function boot(): void
    {
        $this->app->get('env')->load();
    }
}