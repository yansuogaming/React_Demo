<?php

namespace Vietiso\Core\Queue;

use Vietiso\Core\App;
use Vietiso\Core\Container\ServiceProvider;
use Vietiso\Core\Queue\Commands\QueueCommand;
use Vietiso\Core\Queue\QueueInterface;
use Vietiso\Core\Queue\Queue;

class QueueServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('queue', fn() => new Queue);
        $this->app->alias('queue', QueueInterface::class);
    }

    public function boot()
    {
        $this->app->get('console')->add(App::make(QueueCommand::class));
        $this->app->get('module.manager')->addExtend('jobs', function ($jobs) {
            var_dump($jobs);
        });
    }
}