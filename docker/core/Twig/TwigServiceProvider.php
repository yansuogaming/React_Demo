<?php

namespace Vietiso\Core\Twig;

use Vietiso\Core\Container\ServiceProvider;
use Vietiso\Core\Twig\Extension\OldInputExtension;

class TwigServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('twig.config', fn() => new TwigConfig(config('twig')));
        $this->app->singleton('twig.loader', fn() => new TwigLoader());
        $this->app->scoped(
            'twig.environment',
            fn() => new TwigEnvironment(
                $this->app->get('twig.loader'),
                config('twig.options')
            )
        );
        $this->app->alias('twig.environment', TwigEnvironment::class);
    }

    public function boot()
    {
        $loader = $this->app->get('twig.loader');
        $modules = $this->app->get('module.manager');
        foreach ($modules as $key => $module) {
            if (is_dir($dirView = join_paths($module->getPath(), 'views'))) {
                $loader->addPath($dirView, $key);
            }
        }
    }
}