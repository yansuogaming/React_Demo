<?php

namespace Vietiso\Core\Config;

use Vietiso\Core\Container\ServiceProvider;

class ConfigServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('config', fn() => new Repository());
        $this->app->alias('config', RepositoryInterface::class);
    }

    public function boot()
    {
        $fileConfigs = glob($this->app->getConfigPath() . '/*.php');
        foreach ($fileConfigs as $file) {
            $name = pathinfo($file, PATHINFO_FILENAME);
            $config = require_once $file;
            $this->app->get('config')->set($name, $config);
        }
        date_default_timezone_set(config('app.timezone'));
    }
}