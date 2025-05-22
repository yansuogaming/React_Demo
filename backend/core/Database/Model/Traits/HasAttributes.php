<?php

namespace Vietiso\Core\Database\Model\Traits;

use Vietiso\Core\Database\Attributes\Accessor;
use Vietiso\Core\Database\Attributes\Mutator;
use Vietiso\Core\Database\Query\QueryRaw;

trait HasAttributes
{
    protected array $appends = [];

    protected array $original = [];

    protected array $attributes = [];

    protected static array $accessors = [];

    protected static array $mutators = [];

    protected function registerAccessors(): void
    {
        $attribute = Accessor::class;
        $methods = $this->getReflectionMethodsByAttribute($attribute);
        foreach ($methods as $method) {
            $reflectionAttribute = $method->getAttributes($attribute)[0];
            $accessor = (string)$reflectionAttribute->newInstance();
            static::$accessors[static::class][$accessor] = $method->getName();
        }
    }

    protected function registerMutators()
    {
        $attribute = Mutator::class;
        $methods = $this->getReflectionMethodsByAttribute($attribute);
        foreach ($methods as $method) {
            $reflectionAttribute = $method->getAttributes($attribute)[0];
            $mutator = (string)$reflectionAttribute->newInstance();
            static::$mutators[static::class][$mutator] = $method->getName();
        }
    }

    public function hasMutator(?string $field = null): bool
    {
        return is_null($field)
            ? !empty(static::$mutators[static::class])
            : isset(static::$mutators[static::class][$field]);
    }

    public function hasAccessor(?string $field = null): bool
    {
        return is_null($field)
            ? !empty(static::$accessors[static::class])
            : isset(static::$accessors[static::class][$field]);
    }

    public function getKey(): mixed
    {
        return $this->original[$this->primaryKey];
    }

    public function setAttributes(array $fields): static
    {
        foreach ($fields as $key => $value) {
            $this->setAttribute($key, $value);
        }
        return $this;
    }

    public function setAttribute(string $key, mixed $value): static
    {
        if ($this->hasMutator($key)) {
            $method = static::$mutators[static::class][$key];
            $value = $this->{$method}($value);
        }

        $this->attributes[$key] = $value;
        return $this;
    }

    public function setData(array $data): static
    {
        $this->original = $data;
        $this->attributes = $data;
        return $this;
    }

    public function getOriginal(?string $field = null): mixed
    {
        if (is_null($field)) {
            return $this->original;
        }
        return $this->original[$field] ?? null;
    }

    public function getAttribute(string $key): mixed
    {
        if ($this->hasAccessor($key)) {
            $method = static::$accessors[static::class][$key];
            return $this->{$method}($this->attributes[$key]);
        }
        return $this->attributes[$key];
    }

    public function getAttributes(): array
    {
        return $this->attributes;
    }

    public function offsetExists(mixed $offset): bool
    {
        return isset($this->attributes[$offset]);
    }

    public function offsetGet(mixed $offset)
    {
        return $this->attributes[$offset];
    }

    public function offsetSet(mixed $offset, mixed $value)
    {
        $this->setAttribute($offset, $value);
    }

    public function offsetUnset(mixed $offset)
    {
        unset($this->attributes[$offset]);
    }

    public function __get(string $name): mixed
    {
        return $this->getAttribute($name);
    }

    public function __set(string $name, mixed $value): void
    {
        $this->setAttribute($name, $value);
    }
}