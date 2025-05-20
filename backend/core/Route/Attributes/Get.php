<?php

namespace Vietiso\Core\Route\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Get
{
    protected string $uri;

    public function __construct(
        string $uri,
        protected ?string $name = null,
        protected ?string $summary = null,
        protected ?string $description = null,
        protected ?string $schema = null,
        protected bool $deprecated = false,
        protected array $middlewares = [],
        protected array $excludedMiddlewares = []
    ){
        $uri = mb_trim($uri);
        if ($uri == '/' || $uri == '') {
            $this->uri = '';
        } else {
            $this->uri = '/' . trim($uri, '/');
        }
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getSchema(): ?string
    {
        return $this->schema;
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

    public function getUri(): string
    {
        return $this->uri;
    }

    public function getMethod(): string|array
    {
        return 'GET';
    }

    public function getName(): ?string
    {
        return $this->name;
    }
}