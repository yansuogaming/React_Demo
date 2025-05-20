<?php

namespace Vietiso\Core\Database;

use Swoole\Coroutine;

class ConnectionManager implements ConnectionManagerInterface
{
    protected array $connections = [];

    protected array $configs = [];

    protected ?string $defaultConnection = null;

    public function addConnection(string $name, array $config): void
    {
        $this->configs[$name] = $config;
    }

    public function connection(?string $name = null): ConnectionInterface
    {
        return $this->getConnection($name);
    }

    public function getConnection(?string $name = null): ConnectionInterface
    {
        $name = is_null($name) ? $this->defaultConnection : $name;

        $cid = Coroutine::getuid();
        if (isset($this->connections[$cid][$name])) {
            return $this->connections[$cid][$name];
        }

        if (isset($this->configs[$name])) {
            $connection = new Connection($this->configs[$name]);
            $this->connections[$cid][$name] = $connection;
            return $connection;
        }

        throw new \RuntimeException("");
    }

    public function getConfig(?string $name = null): ?array
    {
        $name = is_null($name) ? $this->defaultConnection : $name;
        return !empty($this->configs[$name]) ? $this->configs[$name] : null;
    }

    public function setDefaultConnection(string $defaultConnection): static
    {
        $this->defaultConnection = $defaultConnection;
        return $this;
    }

    public function getDefaultConnection(): ?string
    {
        return $this->defaultConnection;
    }

    public function disconnect(): void
    {
        $cid = Coroutine::getuid();
        if (!empty($this->connections[$cid])) {
            foreach ($this->connections[$cid] as $connection) {
                $connection->disconnect();
            }
            $this->connections[$cid] = [];
        }
    }
}