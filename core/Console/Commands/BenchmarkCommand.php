<?php

namespace Vietiso\Core\Console\Commands;

use Vietiso\Core\Console\BaseCommand;

class BenchmarkCommand extends BaseCommand
{
    protected string $signature = 'benchmark {signature?} {--tableToWatch=}';

    public function handle(): void
    {
        // $this->app->get('server')->start();
    }
}