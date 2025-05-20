<?php

declare(strict_types=1);

namespace Vietiso\Core\Http;

use Vietiso\Core\Container\ServiceProvider;
use Vietiso\Core\Http\Exception\Handler;

class HttpServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->scoped('request', fn() => new Request());
        $this->app->alias('request', Request::class);
        $this->app->singleton('http.handle_exception', fn() => new Handler($this->app));
    }

    public function boot(): void
    {
        $this->app->get('twig.loader')->addPath(join_paths(__DIR__, 'view'), 'http_exception');
    }
}