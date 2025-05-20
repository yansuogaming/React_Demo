<?php

namespace Vietiso\Core\Console\Commands;

use Vietiso\Core\Console\BaseCommand;

class RouteCommand extends BaseCommand
{
    protected string $signature = 'route:list';

    protected string $description = 'Khởi tạo server application';

    public function handle(): void
    {
        $this->app->get('server')->start();
    }
}