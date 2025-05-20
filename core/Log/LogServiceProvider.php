<?php

namespace Vietiso\Core\Log;

use Vietiso\Core\Container\ServiceProvider;

class LogServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('log', function () {
            return new LoggerFactory($this->app->get('config'));
        });
    }
}