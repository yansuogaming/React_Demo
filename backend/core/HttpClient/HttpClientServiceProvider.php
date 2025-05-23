<?php

namespace Vietiso\Core\HttpClient;

use Vietiso\Core\Container\ServiceProvider;

class HttpClientServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->transient('http.client', fn() => new Http);
    }
}