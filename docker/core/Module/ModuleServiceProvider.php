<?php

namespace Vietiso\Core\Module;

use Vietiso\Core\Container\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('module.manager', fn () => new ModuleManager());
        $this->app->alias('module.manager', ModuleManager::class);

        $this->app->singleton('module.installer', fn() => new ModuleInstaller(
            $this->app->get('module.manager'),
            $this->app->get('route_collection'),
            $this->app->get('console'),
            $this->app->get('console.input'),
            $this->app->get('console.output'),
            $this->app->get('middleware.collection')
        ));
        $this->app->alias('module.installer', ModuleInstaller::class);
    }

    public function boot()
    {
        $this->app->get('module.installer')->install();
    }
}