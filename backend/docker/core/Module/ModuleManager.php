<?php

namespace Vietiso\Core\Module;

class ModuleManager implements \IteratorAggregate
{
    protected array $modules = [];

    protected array $extends = [];

    public function add(string $key, Module $module): void
    {
        $this->modules[$key] = $module;
    }

    public function addExtend(string $key, callable $callback): void
    {
        $this->extends[$key] = $callback;
    }

    public function getExtends(): array
    {
        return $this->extends;
    }

    public function has(string $key): bool
    {
        return isset($this->modules[$key]);
    }

    public function get(string $key): ?Module
    {
        return $this->modules[$key] ?? null;
    }

    public function getIterator(): \Traversable
    {
        return new \ArrayIterator($this->modules);
    }

    public function all(): array
    {
        return $this->modules;
    }
}