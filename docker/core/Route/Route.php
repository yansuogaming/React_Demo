<?php

namespace Vietiso\Core\Route;

use Vietiso\Core\App;
use Vietiso\Core\Module\Module;

class Route
{
    protected array $action;

    protected ?string $name = null;

    protected ?Module $module = null;

    protected array $middlewares = [];

    public function __construct(array $config)
    {
        $this->action = $config['action'];
        $this->name = $config['name'];
        $this->module = $config['module'] ?? null;
        $middlewares = array_merge(
            App::service('middleware.collection')->all($this->module?->getId()),
            $config['middlewares']
        );
        $middlewares = array_diff($middlewares, $config['excluded_middlewares']);
        $this->middlewares = $middlewares;
    }

    public function hasName(): bool
    {
        return !is_null($this->name);
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getAction(): array
    {
        return $this->action;
    }

    public function getModule(): ?Module
    {
        return $this->module;
    }

    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }
}