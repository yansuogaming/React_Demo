<?php

namespace Vietiso\Core\Session;

use Vietiso\Core\Container\ServiceProvider;

class SessionServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->scoped('session', fn () => new SessionManager($this->app));
        $this->app->alias('session', SessionManager::class);
    }
}