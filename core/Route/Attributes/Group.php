<?php

namespace Vietiso\Core\Route\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class Group
{
    protected string $prefix;

    public function __construct(
        string $prefix = '',
        protected ?string $name = null,
        protected ?string $summary = null,
        protected ?string $description = null,
        protected bool $deprecated = false,
        protected array $middlewares = [],
        protected array $excludedMiddlewares = []
    )
    {
        $prefix = trim($prefix, '/');
        $this->prefix = !empty($prefix) ? "/$prefix" : '';
    }

    public function getPrefix(): string
    {
        return $this->prefix;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }

    public function getExcludedMiddlewares(): array
    {
        return $this->excludedMiddlewares;
    }

    public function isDeprecated(): bool
    {
        return $this->deprecated;
    }

    public function getName(): ?string
    {
        return $this->name;
    }
}