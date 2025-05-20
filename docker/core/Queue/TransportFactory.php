<?php

namespace Vietiso\Core\Queue;

use Vietiso\Core\Queue\Transport\AMQP\AMQPTransport;
use Vietiso\Core\Support\Manager;

class TransportFactory extends Manager
{
    public function getDefaultDriver(): string
    {
        return config('queue.default');
    }

    public function createRabbitmqDriver()
    {
        return new AMQPTransport(config('queue.connections.rabbitmq'));
    }
}