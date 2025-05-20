<?php

namespace Vietiso\Core\Container;

class ServiceProviderManager
{
    protected array $providers = [];

    public function __construct(protected ContainerInterface $container) {}

    public function register(string $provider): void
    {
        if (is_subclass_of($provider, ServiceProvider::class) && !in_array($provider, $this->providers)) {
            $provider = new $provider($this->container);
            if (method_exists($provider, 'register')) {
                $provider->register();
            }
            $this->providers[] = $provider;
        }
    }

    public function boot(): void
    {
        foreach ($this->providers as &$provider) {
            if (method_exists($provider, 'boot')) {
                $provider->boot();
            }
            unset($provider);
        }
    }
}