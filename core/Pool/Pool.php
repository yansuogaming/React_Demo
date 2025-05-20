<?php

namespace Vietiso\Core\Pool;

use RuntimeException;
use Vietiso\Core\App;

abstract class Pool implements PoolInterface
{
    protected Channel $channel;

    protected PoolOptionInterface $option;

    protected int $currentConnections = 0;
    
    public function __construct(array $config = [])
    {
        $this->initOption($config);
        $this->channel = new Channel($this->option->getMaxConnections());
    }

    public function get(): object
    {
        $connection = $this->getConnection();

        return $connection;
    }

    public function release(object $connection): void
    {
        $this->channel->push($connection);
    }

    public function flush(): void
    {

    }

    public function flushOne(): void
    {

    }

    public function getConnectionsInChannel(): int
    {
        return $this->channel->length();
    }

    public function getCurrentConnections(): int
    {
        return $this->currentConnections;
    }

    protected function initOption(array $options = []): void
    {
        $this->option = App::make(PoolOption::class, [
            'minConnections' => $options['min_connections'] ?? 1,
            'maxConnections' => $options['max_connections'] ?? 10,
            'connectTimeout' => $options['connect_timeout'] ?? 10.0,
            'waitTimeout' => $options['wait_timeout'] ?? 3.0,
            'heartbeat' => $options['heartbeat'] ?? -1,
            'maxIdleTime' => $options['max_idle_time'] ?? 60.0,
            'events' => $options['events'] ?? [],
        ]);
    }

    abstract protected function createConnection(): object;

    protected function getConnection(): object
    {
        $num = $this->getConnectionsInChannel();

        try {
            if ($num === 0 && $this->currentConnections < $this->option->getMaxConnections()) {
                ++$this->currentConnections;
                return $this->createConnection();
            }
        } catch (\Throwable $throwable) {
            --$this->currentConnections;
            throw $throwable;
        }

        $connection = $this->channel->pop($this->option->getWaitTimeout());
        if (!is_object($connection)) {
            throw new RuntimeException('Connection pool exhausted. Cannot establish new connection before wait_timeout.');
        }
        return $connection;
    }
}