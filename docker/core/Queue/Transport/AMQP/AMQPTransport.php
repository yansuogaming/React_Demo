<?php

namespace Vietiso\Core\Queue\Transport\AMQP;

use Vietiso\Core\App;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\Coroutine\Timer;
use Vietiso\Core\Coroutine\Coroutine;
use Vietiso\Core\Coroutine\WaitGroup;
use Vietiso\Core\Log\Log;
use Vietiso\Core\Queue\Transport\Transport;

class AMQPTransport extends Transport
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
    
    public function consume()
    {
        $sleepTime = $this->getSleepTime() * 1000;
        Timer::interval(function () {
            $waitGroup = WaitGroup::create();
            foreach ($this->queues as $item) {
                list($queue, $job, $channel) = $item;
                if ($message = $queue->get(AMQP_NOPARAM)) {
                    $job = App::make($job)
                        ->setChannel($channel)
                        ->setQueue($queue)
                        ->setMessage($message);
                    $waitGroup->add();
                    Coroutine::create(function () use ($job, $waitGroup) {
                        try {
                            $job->handle();
                        } catch (\Throwable $th) {
                            echo $th->getMessage();
                            Log::error($th);
                        } finally {
                            $waitGroup->done();
                        }
                    });
                }
            }
            $waitGroup->wait();
        }, $sleepTime);
    }
}