<?php

namespace Vietiso\Core\Queue\Transport\Database;

use Vietiso\Core\Collection\Arr;
use Vietiso\Core\Coroutine\Timer;
use Vietiso\Core\Database\Connection;
use Vietiso\Core\Queue\Transport\Transport;

class DatabaseTransport extends Transport
{
    private Connection $connection;

    private $configChannels;

    private $queues = [];

    public function __construct(#[\SensitiveParameter] array $connectionOptions)
    {
        $this->configChannels = Arr::pull($connectionOptions, 'channels');
        $this->connection = new Connection($connectionOptions);

        foreach ($this->configChannels as $configChannel) {
            $channel = $this->connection->channel();
            if (!empty($configChannel['queues'])) {
                foreach ($configChannel['queues'] as $job) {
                    $queue = new \AMQPQueue($channel);
                    $this->queues[] = [$queue, $job, $channel];
                    $queue->setName($this->getQueueRoute($job));
                    $queue->setFlags(AMQP_DURABLE);
                    $queue->declareQueue();
                }
            }
        }
    }
    
    public function consume(): void
    {
        $sleepTime = $this->getSleepTime() * 1000;
        Timer::interval(function () {
            
        }, $sleepTime);
    }
}