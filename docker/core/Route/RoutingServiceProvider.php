<?php

namespace Vietiso\Core\Route;

use FastRoute\DataGenerator\GroupCountBased;
use Vietiso\Core\Container\ServiceProvider;
use FastRoute\RouteParser\Std;

class RoutingServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(
            'route_collection',
            fn() => new RouteCollection(new Std(), new GroupCountBased())
        );

        $this->app->singleton(
            'route_dispacher',
            fn() => new RouteDispacher(
                $this->app->get('route_collection'),
                $this->app->get('stack_middleware'),
                $this->app->get('middleware.collection')
            )
        );

        // $this->app->singleton(
        //     'route_url_generator',
        //     fn() => new RouteUrlGenerator($this->app->get('route_collection'))
        // );
    }
}