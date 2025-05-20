<?php

namespace Vietiso\Core\Database\Model;

use Vietiso\Core\Database\Exception\ModelNotFoundException;
use Vietiso\Core\Database\Query\Builder as QueryBuilder;
use Vietiso\Core\Database\Query\Traits\BuildsQueries;
use Vietiso\Core\Database\Scope;
use Vietiso\Core\App;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\Pagination\Paginator;
use Vietiso\Core\Collection\Collection;

class Builder
{
    use BuildsQueries;

    protected ?Model $model = null;

    protected array $widthoutGlobalSopes = [];

    public function __construct(protected QueryBuilder $query)
    {
    }

    public function setModel(Model $model): static
    {
        $this->model = $model;
        return $this;
    }

    public function get(array $columns = []): Collection
    {
        return $this->applyGlobalScopes()->get($columns, get_class($this->model));
    }

    public function find(mixed $id, array|string|null $columns = null): ?Model
    {
        return $this->whereKey($id)->get(Arr::wrap($columns))->first();
    }

    public function findOrFail(mixed $id, array|string|null $columns = null): ?Model
    {
        $result = $this->whereKey($id)->get(Arr::wrap($columns))->first();
        if (empty($result)) {
            throw new ModelNotFoundException;
        }
        return $result;
    }

    public function whereKey(mixed $id): static
    {
        $this->query->where($this->model->getKeyName(), $id);
        return $this;
    }

    public function withoutGlobalScope(string $globalScope): static
    {
        if (!in_array($globalScope, $this->widthoutGlobalSopes)) {
            $this->widthoutGlobalSopes[] = $globalScope;
        }
        return $this;
    }

    public function withoutGlobalScopes(string ...$globalScopes): static
    {
        foreach ($globalScopes as $globalScope) {
            $this->withoutGlobalScope($globalScope);
        }
        return $this;
    }

    protected function applyGlobalScopes(): QueryBuilder
    {
        $scopes = array_diff($this->model->getGlobalScopes(), $this->widthoutGlobalSopes);
        foreach ($scopes as $scope) {
            if (isset(class_implements($scope)[Scope::class])) {
                App::call([$scope, 'apply'], [$this, $this->model]);
            }
        }
        return $this->query;
    }

    public function create(iterable $fields): Model|false
    {
        $model = $this->model->newModel($this->iteratorToArray($fields));
        $saved = $model->save();
        if ($saved) {
            return $model;
        }
        return false;
    }

    protected function fetchToModel(array $fields): Model
    {
        $model = get_class($this->model);
        return (new $model())->setData($fields);
    }

    public function toSql(): string
    {
        return $this->applyGlobalScopes()->toSql();
    }

    public function toRawSql(): string
    {
        return $this->applyGlobalScopes()->toRawSql();
    }

    public function paginate(
        int $perPage,
        ?int $page = null,
        ?string $pageName = null,
        ?int $total = null
    ): Paginator
    {
        return $this->applyGlobalScopes()->paginate(
            $perPage,
            $page,
            $pageName,
            $total,
            get_class($this->model),
        );
    }

    public function fastPaginate(
        int $perPage,
        ?int $page = null,
        ?string $pageName = null,
        ?int $total = null
    ): Paginator
    {
        return $this->applyGlobalScopes()->fastPaginate(
            $perPage,
            $page,
            $this->model->getKeyName(),
            $pageName,
            $total,
            get_class($this->model)
        );
    }

    public function __call(string $method, array $arguments): mixed
    {
        if ($this->model?->hasLocalScope($method)) {
            $method = 'scope' . ucfirst($method);
            $this->model->{$method}($this, ...$arguments);
            return $this;
        }

        $result = $this->query->{$method}(...$arguments);
        if ($result === $this->query) {
            return $this;
        }
        return $result;
    }
}