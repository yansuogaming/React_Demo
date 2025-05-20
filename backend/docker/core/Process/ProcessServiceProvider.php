<?php

namespace Vietiso\Core\Process;

use Vietiso\Core\Container\ServiceProvider;

class ProcessServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->transient('process', fn() => new Process());
    }
}