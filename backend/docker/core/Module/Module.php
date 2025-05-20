<?php

namespace Vietiso\Core\Module;

class Module
{
    protected string $id;

    protected string $name;

    protected string $description;

    protected string $pathModule;

    protected array $configs;

    public function __construct(string $pathFileModule)
    {
        $infoModule = require $pathFileModule;
        $this->id = basename($pathFileModule, '.module.php');
        $this->pathModule = dirname($pathFileModule);
        $this->configs = $infoModule;
    }

    public function getPath(): string
    {
        return $this->pathModule;
    }

    public function getName(): string
    {
        return $this->configs['name'];
    }

    public function getConfig(string $key): mixed
    {
        return $this->configs[$key] ?? false;
    }

    public function getDescription(): string
    {
        return $this->configs['description'] ?? '';
    }

    public function getMiddlewares(): array
    {
        return $this->configs['middlewares'] ?? [];
    }

    public function providers(): array
    {
        return $this->configs['providers'] ?? [];
    }

    public function getControllers(): array
    {
        return $this->configs['controllers'] ?? [];
    }

    public function getCommands(): array
    {
        return $this->configs['commands'] ?? [];
    }

    public function getId(): string
    {
        return $this->id;
    }
}