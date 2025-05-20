<?php

namespace Vietiso\Core\HttpClient;

use Vietiso\Core\Container\ServiceProvider;

class HttpClientServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton('http.client', fn() => new Http);
    }
}