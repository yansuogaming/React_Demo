<?php

namespace Vietiso\Core\Queue\Commands;

use Vietiso\Core\Console\BaseCommand;
use Vietiso\Core\Queue\TransportFactory;

class QueueCommand extends BaseCommand
{
    protected string $signature = 'queue:work';

    public function handle(): void
    {
        $factory = new TransportFactory();
        $factory->driver()->consume();
    }
}