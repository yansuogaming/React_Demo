<?php

namespace Vietiso\Core\Translation;

use Vietiso\Core\Container\ServiceProvider;

class TranslationServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('translator', fn () => new Translator);
    }
}