<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Container\ServiceProvider;

class MiddlewareServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(
            'middleware.collection',
            fn() => new MiddlewareCollection($this->app->get('module.manager'))
        );
        $this->app->alias('middleware.collection', MiddlewareCollection::class);

        $this->app->scoped(
            'stack_middleware',
            fn() => new StackMiddleware()
        );
    }
}