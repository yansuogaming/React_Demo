<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\Container\ServiceProvider;
use Vietiso\Core\Database\Model\Model;
use Vietiso\Core\Database\ConnectionManager;

class DatabaseServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton('database', fn () => new ConnectionManager);
        $this->app->alias('database', ConnectionManager::class);
    }

    public function boot(): void
    {
        Model::setListenerProvider($this->app->get('events'));
        Model::setEventDispatcher($this->app->get('event_dispatcher'));

        $database = $this->app->get('database');
        foreach (config('database.connections') as $connection => $config) {
            $database->addConnection($connection, $config);
        }
        $database->setDefaultConnection(config('database.default'));
    }
}