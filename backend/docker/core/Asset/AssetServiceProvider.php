<?php

namespace Vietiso\Core\Asset;

use Vietiso\Core\Container\ServiceProvider;

class AssetServiceProvider extends ServiceProvider
{
    public function register(): void
    {
    }

    public function boot()
    {
        $this->app->get('route_collection')->register(AssetController::class);
    }
}