<?php

namespace Vietiso\Core\Database\Model;

use ArrayAccess;
use Vietiso\Core\Database\Model\Traits\{HasRelationships, HidesAttributes, HasAttributes, HasScopes, HasEvents};
use Vietiso\Core\Collection\Arr;
use ReflectionAttribute;
use IteratorAggregate;
use Vietiso\Core\App;
use JsonSerializable;
use ReflectionObject;
use ArrayIterator;
use Traversable;

/**
 * @method static \Vietiso\Core\Database\Model\Model setModel(\Vietiso\Core\Database\Model\Model $model)
 * @method static \Vietiso\Core\Database\Model\Collection get(array $columns = [])
 * @method static \Vietiso\Core\Database\Model\Model find(mixed $id, array|string|null $columns = null)
 * @method static \Vietiso\Core\Database\Model\Model findOrFail(mixed $id, array|string|null $columns = null)
 * @method static \Vietiso\Core\Database\Model\Model whereKey(mixed $id)
 * @method static \Vietiso\Core\Database\Model\Model withoutGlobalScope(string $globalScope)
 * @method static \Vietiso\Core\Database\Model\Model withoutGlobalScopes(string ...$globalScopes)
 * @method static \Vietiso\Core\Database\Model\Model|false create(iterable $fields)
 * @method static string toSql()
 * @method static string toRawSql()
 * @method static \Vietiso\Core\Pagination\Paginator paginate(int $perPage, ?int $page = null, ?string $pageName = null, ?int $total = null)
 * @method static \Vietiso\Core\Pagination\Paginator fastPaginate(int $perPage, ?int $page = null, ?string $pageName = null, ?int $total = null)
 * @method static \Vietiso\Core\Database\Model\Model from(\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder|\Vietiso\Core\Database\Query\QueryRaw|string $table, ?string $alias = null)
 * @method static \Vietiso\Core\Database\Model\Model table(\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder|\Vietiso\Core\Database\Query\QueryRaw|string $table, ?string $alias = null)
 * @method static \Vietiso\Core\Database\Model\Model wrap(string $alias)
 * @method static ?array find(string $id, string $primaryKey = 'id')
 * @method static \Vietiso\Core\Database\Model\Model select(\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder|\Vietiso\Core\Database\Query\QueryRaw|string ...$columns)
 * @method static \Vietiso\Core\Database\Model\Model addSelect(\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder|\Vietiso\Core\Database\Query\QueryRaw|string ...$columns)
 * @method static \Vietiso\Core\Database\Model\Model selectRaw(string $query, array $bindings = [])
 * @method static int insert(iterable $fields)
 * @method static int insertOrIgnore(iterable $fields)
 * @method static int insertGetId(iterable $fields, string $primaryKey = 'id')
 * @method static int insertUsing(array $columns, \Closure|\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder|\Vietiso\Core\Database\Query\QueryRaw $query)
 * @method static int delete()
 * @method static int update(array $fields)
 * @method static \Vietiso\Core\Collection\Collection get(array $columns = [], ?string $model = null)
 * @method static array toArray()
 * @method static \Vietiso\Core\Database\Model\Model limit(int $limit, ?int $offset = null)
 * @method static \Vietiso\Core\Collection\Collection pluck(string $column)
 * @method static \Vietiso\Core\Database\Model\Model offset(int $offset)
 * @method static \Vietiso\Core\Database\Model\Model groupBy(string ...$groupColumn)
 * @method static \Vietiso\Core\Database\Model\Model orderBy(\Vietiso\Core\Database\Query\QueryRaw|string $column, string $order = 'asc')
 * @method static \Vietiso\Core\Database\Model\Model orderByDesc(string $column)
 * @method static \Vietiso\Core\Database\Model\Model orderByRaw(string $orderBy, array $bindings = [])
 * @method static \Vietiso\Core\Database\Model\Model reorder(string $column, string $order = 'asc')
 * @method static int count(?string $column = null)
 * @method static int max(string $column)
 * @method static int min(string $column)
 * @method static int avg(string $column)
 * @method static int sum(string $column)
 * @method static bool exists()
 * @method static bool doesntExist()
 * @method static \Generator cursor()
 * @method static \Vietiso\Core\Database\Model\Model where(string|array|callable $columns, mixed $value = null, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhere(mixed $columns, mixed $value = null, string $condition = '=', string $logicalOperator = 'or')
 * @method static \Vietiso\Core\Database\Model\Model whereNull(string $column)
 * @method static \Vietiso\Core\Database\Model\Model whereNot(mixed $columns, mixed $value = null, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model orWhereNot(mixed $columns, mixed $value = null, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereNotNull(string $column)
 * @method static \Vietiso\Core\Database\Model\Model orWhereNull(string $column)
 * @method static \Vietiso\Core\Database\Model\Model orWhereNotNull(string $column)
 * @method static \Vietiso\Core\Database\Model\Model whereAny(array $columns, mixed $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereAny(array $columns, mixed $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereAll(array $columns, mixed $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereAll(array $columns, mixed $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereDate(string $column, string|\DateTimeInterface $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereDate(string $column, string|DateTimeInterface $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereMonth(string $column, string|\DateTimeInterface $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereMonth(string $column, string|\DateTimeInterface $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereDay(string $column, string|\DateTimeInterface $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereDay(string $column, string|\DateTimeInterface $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereYear(string $column, string|\DateTimeInterface $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereYear(string $column, string|DateTimeInterface $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereTime(string $column, string|\DateTimeInterface $value, string $condition = '=', string $logicalOperator = 'and')
 * @method static \Vietiso\Core\Database\Model\Model orWhereTime(string $column, string|\DateTimeInterface $value, string $condition = '=')
 * @method static \Vietiso\Core\Database\Model\Model whereIn(string $column, iterable|callable|\Vietiso\Core\Database\Query\Builder|\Vietiso\Core\Database\Model\Builder $values, bool $isNot = false, string $logicalOperator = 'and')
 */
class Model implements IteratorAggregate, JsonSerializable, ArrayAccess
{
    use HasRelationships;
    use HidesAttributes;
    use HasAttributes;
    use HasScopes;
    use HasEvents;

    /**
     * The name of the "created at" column.
     */
    public const CREATED_AT = 'created_at';

    /**
     * The name of the "updated at" column.
     */
    public const UPDATED_AT = 'updated_at';

    public bool $timestamps = true;

    /**
     * Indicates if the IDs are auto-incrementing.
     */
    protected bool $incrementing = true;

    /**
     * The connection name for the model.
     */
    protected ?string $connection = null;

    /**
     * The table associated with the model.
     */
    protected string $table;

    /**
     * The primary key for the table
     */
    protected ?string $primaryKey = null;

    protected static array $booted = [];

    public function __construct()
    {
        $this->bootIfNotBooted();
    }

    protected function bootIfNotBooted()
    {
        if (!isset(static::$booted[static::class])) {
            static::$booted[static::class] = true;
            $this->registerAccessors();
            $this->registerMutators();
            $this->registerLocalScopes();
            $this->registerGlobalScopes();
            $this->registerRelationships();
            static::booting();
            static::boot();
            static::booted();
        }
    }

    protected static function booting(): void {}

    protected static function boot(): void {}

    protected static function booted(): void {}

    public function incrementing(): bool
    {
        return $this->incrementing;
    }

    public function getTable(): string
    {
        return $this->table;
    }

    public function setTable(string $table): static
    {
        $this->table = $table;
        return $this;
    }

    public function getKeyName(): string
    {
        return $this->primaryKey ?? 'id';
    }

    public function getKey(): mixed
    {
        return $this->getOriginal($this->getKeyName());
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator($this->attributes);
    }

    public function jsonSerialize(): ?array
    {
        $originals = $this->original;
        foreach ($originals as $key => $_) {
            $originals[$key] = $this->getAttribute($key);
        }
        return Arr::except(array_diff($originals, $this->visible), $this->hidden);
    }

    public function newModelQuery(): Builder
    {
        $builder = App::service('database')->getConnection($this->connection)->query();
        $builder = new Builder($builder);
        return $builder->from($this->table)->setModel($this);
    }

    public function save(): bool
    {
        if ($this->fireModelEvent('saving') === false) {
            return false;
        }

        $query = $this->newModelQuery();

        if (!empty($this->getKey())) {
            $saved = $this->performUpdate($query);
        } else {
            $saved = $this->performInsert($query);
        }

        if ($saved) {
            $this->fireModelEvent('saved');
        }

        return $saved;
    }

    public function update(array $fields): bool
    {
        return $this->setAttributes($fields)->save();
    }

    public function delete(): bool|null
    {
        if (is_null($this->getKeyName())) {
            throw new \LogicException('No primary key defined on model.');
        }

        if ($this->fireModelEvent('deleting') === false) {
            return false;
        }

        $query = $this->newModelQuery();
        $deleted = (int) $query->whereKey($this->getKey())->delete();

        if ($deleted) {
            $this->fireModelEvent('deleted');
        }
        return $deleted;
    }

    public function isDirty(): bool
    {
        foreach ($this->getAttributes() as $field => $value) {
            if (!isset($this->original[$field])) {
                return true;
            }

            if ($value != $this->original[$field]) {
                return true;
            }
        }
        return false;
    }

    public function newModel(array $fields): static
    {
        return (new static())->setAttributes($fields);
    }

    protected function performUpdate(Builder $query): bool
    {
        if ($this->fireModelEvent('updating') === false) {
            return false;
        }

        $updated = (int) $query
            ->whereKey($this->getKey())
            ->update($this->getAttributes());
        if ($updated) {
            $this->fireModelEvent('updated');
        }

        return $updated;
    }

    protected function performInsert(Builder $query): bool
    {
        if ($this->fireModelEvent('creating') === false) {
            return false;
        }

        if ($this->incrementing()) {
            $inserted = $this->insertAndSetId($query);
        } else {
            $inserted = (bool) $query->insert($this->getAttributes());
            $this->original = $this->getAttributes();
        }

        if ($inserted) {
            $this->fireModelEvent('created');
        }
        return $inserted;
    }

    protected function insertAndSetId(Builder $query): bool
    {
        $key = $query->insertGetId($this->getAttributes());
        if ($key > 0) {
            $this->attributes[$this->getKeyName()] = $key;
            $this->original = $this->getAttributes();
            return true;
        }
        return false;
    }

    protected function getReflectionObject(): ReflectionObject
    {
        return new ReflectionObject($this);
    }

    protected function getObjectAttributes(?string $attribute = null): array
    {
        $attributes = $this->getReflectionObject()->getAttributes($attribute);
        return array_map(fn (ReflectionAttribute $attribute) => $attribute->newInstance(), $attributes);
    }

    protected function getReflectionMethodsByAttribute(string $attribute): array
    {
        $methods = $this->getReflectionObject()->getMethods();
        return array_filter($methods, function ($method) use ($attribute) {
            return !empty($method->getAttributes($attribute));
        });
    }

    protected function getReflectionMethodsByReturnType(string $returnType): array
    {
        $methods = $this->getReflectionObject()->getMethods();
        return array_filter($methods, function ($method) use ($returnType) {
            $type = (string) $method->getReturnType();
            return $type === $returnType || (class_exists($type) && is_subclass_of($type, $returnType));
        });
    }

    protected function getClassAttributes(?string $attribute = null): ?array
    {
        return $this->getReflectionObject()->getAttributes($attribute);
    }

    public function __call(string $method, array $parameters): mixed
    {
        return $this->newModelQuery()->{$method}(...$parameters);
    }

    public static function __callStatic(string $method, array $parameters): mixed
    {
        return (new static())->{$method}(...$parameters);
    }
}