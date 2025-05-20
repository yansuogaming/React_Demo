<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\Database\ConnectionManager;
use Vietiso\Core\Container\ContainerInterface;
use Vietiso\Core\Container\ServiceProviderManager;
use Vietiso\Core\Database\DatabaseServiceProvider;

class DatabaseManager
{
    public function __construct(protected ContainerInterface $container)
    {
        $serviceProviderManager = new ServiceProviderManager($container);
        $serviceProviderManager->register(DatabaseServiceProvider::class);
        $serviceProviderManager->boot();
    }

    public function __call(string $name , array $arguments): mixed
    {
        return $this->container->get(ConnectionManager::class)->{$name}(...$arguments);
    }
}