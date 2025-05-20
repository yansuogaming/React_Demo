<?php

namespace Vietiso\Core\Console;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Vietiso\Core\Container\ServiceProvider;

class ConsoleServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('console.input', fn() => new Input());
        $this->app->alias('console.input', InputInterface::class);

        $this->app->singleton('console.output', fn() => new Output());
        $this->app->alias('console.output', OutputInterface::class);

        $this->app->singleton(
            'console',
            fn() => new Application(
                $this->app,
                $this->app->get('console.input'),
                $this->app->get('console.output'),
            )
        );
    }
}