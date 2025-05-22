<?php

namespace Vietiso\Core\Database\Query;

use Closure;
use Vietiso\Core\Database\Model\Builder as ModelBuilder;
use Vietiso\Core\Database\Query\Traits\BuildsQueries;
use Vietiso\Core\Database\ConnectionInterface;
use Vietiso\Core\Database\Query\QueryRaw;
use Vietiso\Core\Pagination\Paginator;
use Vietiso\Core\Collection\Collection;
use Vietiso\Core\Database\Connection;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\Support\Str;
use Vietiso\Core\Macro\Macroable;
use Doctrine\SqlFormatter\{Highlighter, NullHighlighter, SqlFormatter};
use DateTimeInterface;
use Generator;
use Vietiso\Core\App;

class Builder
{
    use Macroable {
        Macroable::__call as ___call;
    }

    use BuildsQueries;

    protected array $bindings = [
        'select' => [],
        'insert' => [],
        'update' => [],
        'delete' => [],
        'join' => [],
        'condition' => [],
        'orderBy' => [],
        'union' => []
    ];

    protected array $fields = [];

    protected Builder|QueryRaw|string $table;

    protected string $alias = '';

    protected array $segments = [
        'insert' => false,
        'update' => false,
        'delete' => false,
        'select' => true,
        'join' => false,
        'condition' => false,
        'groupBy' => false,
        'having' => false,
        'orderBy' => false,
        'limit' => false,
        'offset' => false,
        'lock' => false
    ];

    protected array $conditions = [];

    protected array $orderBy = [];

    protected array $joinTables = [];

    protected array $stackGroupConditions = [];

    protected array $groupColumns = [];

    protected array $unions = [];

    protected ?int $limit;

    protected ?int $offset;

    protected ?string $wrap = null;

    public function __construct(protected Connection $connection)
    {
    }

    public function from(Builder|ModelBuilder|QueryRaw|string $table, ?string $alias = null): static
    {
        if ($alias) {
            $this->alias = $alias;
        }
        $this->table = $table;
        return $this;
    }

    public function table(Builder|ModelBuilder|QueryRaw|string $table, ?string $alias = null): static
    {
        return $this->from($table, $alias);
    }

    public function wrap(string $alias): static
    {
        $this->wrap = $alias;
        return $this;
    }

    public function find(string $id, string $primaryKey = 'id'): ?array
    {
        $this->conditions = [];
        return $this->where($primaryKey, $id)->first();
    }

    public function select(Builder|ModelBuilder|QueryRaw|string ...$columns): static
    {
        $this->fields = [];
        return $this->addSelect(...$columns);
    }

    public function addSelect(Builder|ModelBuilder|QueryRaw|string ...$columns): static
    {
        foreach ($columns as $column) {
            $this->fields[] = $column;
            if (is_object($column)) {
                $this->addBindValues($column->getBindings(), 'select');
            }
        }
        return $this;
    }

    public function selectRaw(string $query, array $bindings = []): static
    {
        $queryRaw = new QueryRaw($query);
        $this->fields = [$queryRaw];
        $this->addBindValues($bindings, 'select');
        return $this;
    }

    public function insert(iterable $fields): int
    {
        $fields = $this->iteratorToArray($fields);
        $this->fields = $fields;
        $this->addBindValues($fields, 'insert');
        return $this->run('insert', function (ConnectionInterface $connection) {
            return $connection->insert($this->toSql(), $this->getBindings());
        });
    }

    public function insertOrIgnore(iterable $fields): int
    {
        $fields = $this->iteratorToArray($fields);
        $this->fields = $fields;
        $this->addBindValues($fields, 'insert');
        return $this->run('insert', function (ConnectionInterface $connection) {
            $sql = $this->toSql();
            $insert = 'insert';
            $position = strpos($sql, $insert);
            if ($position !== false) {
                $sql = substr_replace($sql, 'insert ignore', $position, strlen($insert));
            }
            return $connection->insert($sql, $this->getBindings());
        });
    }

    public function insertGetId(iterable $fields, string $primaryKey = 'id'): int
    {
        $fields = $this->iteratorToArray($fields);
        $this->fields = $fields;
        $this->addBindValues($fields, 'insert');
        return $this->run('insert', function (ConnectionInterface $connection) use ($primaryKey) {
            return $connection->insertGetId($this->toSql(), $primaryKey, $this->getBindings());
        });
    }

    public function insertUsing(array $columns, \Closure|Builder|ModelBuilder|QueryRaw $query): int
    {
        if ($query instanceof \Closure) {
            $callback = $query;
            $query = new static($this->connection);
            $callback($query);
        }
        return $this->run('insert', function (ConnectionInterface $connection) use ($query, $columns) {
            $columns = join(', ', $this->backtick($columns));
            return $connection->insert(
                "insert into {$this->getTable()} ($columns) $query",
                $query->getBindings()
            );
        });
    }

    public function delete(): int
    {
        return $this->run('delete', function (ConnectionInterface $connection) {
            return $connection->delete($this->toSql(), $this->getBindings());
        });
    }

    public function update(array $fields): int
    {
        $this->fields = $fields;
        foreach ($fields as $value) {
            if ($value instanceof QueryRaw) {
                $this->addBindValues($value->getBindings(), 'update');
                continue;
            }
            $this->addBindValue($value, 'update');
        }
        return $this->run('update', function (ConnectionInterface $connection) {
            return $connection->update($this->toSql(), $this->getBindings());
        });
    }

    public function get(array $columns = [], ?string $model = null): Collection
    {
        $collection = new Collection($this->toArray());
        if (!empty($columns)) {
            $collection->only(...$columns);
        }
        if (is_null($model)) {
            return $collection;
        }

        return $collection->map(function ($item) use ($model) {
            return (new $model())->setData($item);
        });
    }

    public function toArray(): array
    {
        return $this->run('select', function (ConnectionInterface $connection) {
            return $connection->select($this->toSql(), $this->getBindings());
        });
    }

    public function limit(int $limit, ?int $offset = null): static
    {
        $this->segments['limit'] = true;
        $this->limit = $limit;
        if ($offset !== null) {
            $this->offset($offset);
        }
        return $this;
    }

    public function pluck(string $column): Collection
    {
        $results = $this->toArray();
        return new Collection(Arr::pluck($results, $column));
    }

    public function offset(int $offset): static
    {
        $this->segments['offset'] = true;
        $this->offset = $offset;
        return $this;
    }

    public function groupBy(string ...$groupColumn): static
    {
        $this->segments['groupBy'] = true;
        $this->groupColumns = array_merge($this->groupColumns, $groupColumn);
        return $this;
    }

    public function orderBy(QueryRaw|string $column, string $order = 'asc'): static
    {
        $this->segments['orderBy'] = true;
        if (is_string($column)) {
            $this->orderBy[$column] = $order;
        } else {
            $this->orderBy[] = $column;
        }
        return $this;
    }

    public function orderByDesc(string $column): static
    {
        return $this->orderBy($column, 'desc');
    }

    public function orderByRaw(string $orderBy, array $bindings = []): static
    {
        return $this->orderBy(new QueryRaw($orderBy, $bindings));
    }

    public function reorder(string $column, string $order = 'asc'): static
    {
        $this->orderBy = [];
        return $this->orderBy($column, $order);
    }

    public function count(?string $column = null): int
    {
        if (is_null($column)) {
            $column = 1;
        } else {
            $column = $this->getColumn($column);
        }
        return array_values($this->selectRaw("count($column)")->first())[0];
    }

    public function max(string $column): int
    {
        return array_values($this->selectRaw("max($column)")->first())[0];
    }

    public function min(string $column): int
    {
        return array_values($this->selectRaw("min($column)")->first())[0];
    }

    public function avg(string $column): int
    {
        return array_values($this->selectRaw("avg($column)")->first())[0];
    }

    public function sum(string $column): int
    {
        return array_values($this->selectRaw("sum($column)")->first())[0];
    }

    public function exists(): bool
    {
        return !empty($this->first());
    }

    public function doesntExist(): bool
    {
        return empty($this->first());
    }

    public function cursor(): Generator
    {
        return $this->run('select', function (ConnectionInterface $connection) {
            $statement = $connection->statement($this->toSql(), $this->getBindings());
            while ($row = $statement->fetch()) {
                yield $row;
            }
        });
    }

    public function where(
        string|array|Closure $columns,
        mixed $value = null,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $this->segments['condition'] = true;

        if (is_array($columns)) {
            return $this->addNestedCondition(function () use ($columns, $logicalOperator) {
                foreach ($columns as $column => $value) {
                    if (is_array($value)) {
                        $this->addCondition($value[0], $value[1], $value[2], $logicalOperator);
                        continue;
                    }
                    $this->addCondition($column, '=', $value, $logicalOperator);
                }
            }, $logicalOperator);
        } else if ($columns instanceof Closure) {
            return $this->addNestedCondition($columns, $logicalOperator);
        }

        if (is_callable($value)) {
            $builder = new static($this->connection);
            $value($builder);
            $value = $builder;
        }

        return $this->addCondition($columns, $condition, $value, $logicalOperator);
    }

    public function orWhere(mixed $columns, mixed $value = null, string $condition = '=', string $logicalOperator = 'or'): static
    {
        return $this->where($columns, $value, $condition, $logicalOperator);
    }

    public function whereNull(string $column): static
    {
        return $this->whereRaw("$column is null");
    }

    public function whereNot(mixed $columns, mixed $value = null, string $condition = '='): static
    {
        return $this->where($columns, $value, $condition, 'and not');
    }

    public function orWhereNot(mixed $columns, mixed $value = null, string $condition = '='): static
    {
        return $this->where($columns, $value, $condition, 'or not');
    }

    public function whereNotNull(string $column): static
    {
        return $this->where("$column is not null");
    }

    public function orWhereNull(string $column): static
    {
        return $this->orWhere($column, null, 'is');
    }

    public function orWhereNotNull(string $column): static
    {
        return $this->orWhere($column, null, 'is not');
    }

    public function whereAny(
        array $columns,
        mixed $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        return $this->where(function (Builder $query) use (&$columns, &$value, &$condition) {
            foreach ($columns as $column) {
                $query->orWhere($column, $value, $condition);
            }
        }, $logicalOperator);
    }

    public function orWhereAny(array $columns, mixed $value, string $condition = '='): static
    {
        return $this->whereAny($columns, $value, $condition, 'or');
    }

    public function whereAll(
        array $columns,
        mixed $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        return $this->where(function (Builder $query) use (&$columns, &$value, &$condition) {
            foreach ($columns as $column) {
                $query->where($column, $value, $condition);
            }
        }, $logicalOperator);
    }

    public function orWhereAll(array $columns, mixed $value, string $condition = '='): static
    {
        return $this->whereAll($columns, $value, $condition, 'or');
    }

    public function whereDate(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $value = $value instanceof DateTimeInterface ? $value->format('Y-m-d') : $value;
        return $this->whereRaw("date($column) $condition ?", [$value], $logicalOperator);
    }

    public function orWhereDate(string $column, string|DateTimeInterface $value, string $condition = '='): static
    {
        return $this->whereDate($column, $value, $condition, 'or');
    }

    public function whereMonth(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $value = $value instanceof DateTimeInterface ? $value->format('m') : $value;
        return $this->whereRaw("month($column) $condition ?", [$value], $logicalOperator);
    }

    public function orWhereMonth(string $column, string|DateTimeInterface $value, string $condition = '='): static
    {
        return $this->whereMonth($column, $value, $condition, 'or');
    }

    public function whereDay(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $value = $value instanceof DateTimeInterface ? $value->format('d') : $value;
        return $this->whereRaw("day($column) $condition ?", [$value], $logicalOperator);
    }

    public function orWhereDay(string $column, string|DateTimeInterface $value, string $condition = '='): static
    {
        return $this->whereDay($column, $value, $condition, 'or');
    }

    public function whereYear(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $value = $value instanceof DateTimeInterface ? $value->format('Y') : $value;
        return $this->whereRaw("YEAR($column) $condition ?", [$value], $logicalOperator);
    }

    public function orWhereYear(string $column, string|DateTimeInterface $value, string $condition = '='): static
    {
        return $this->whereYear($column, $value, $condition, 'or');
    }

    public function whereTime(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '=',
        string $logicalOperator = 'and'
    ): static
    {
        $value = $value instanceof DateTimeInterface ? $value->format('H:i:s') : $value;
        return $this->whereRaw("time($column) $condition ?", [$value], $logicalOperator);
    }

    public function orWhereTime(
        string $column,
        string|DateTimeInterface $value,
        string $condition = '='
    ): static
    {
        return $this->whereTime($column, $value, $condition, 'or');
    }

    public function whereIn(
        string $column,
        iterable|callable|Builder|ModelBuilder $values,
        bool $isNot = false,
        string $logicalOperator = 'and'
    ): static
    {
        $logicalOperator = $isNot ? 'not in' : 'in';
        if (is_iterable($values)) {
            $values = $this->iteratorToArray($values);

            $placeholders = '?';
            foreach (array_slice($values, 1) as $_) {
                $placeholders .= ", ?";
            }
            return $this->whereRaw(
                "$column $logicalOperator ($placeholders)",
                $values,
                $logicalOperator
            );
        }

        if (is_callable($values)) {
            $builder = new static($this->connection);
            $values($builder);
            $values = $builder;
        }

        return $this->whereRaw(
            "$column $logicalOperator ({$values->toSql()})",
            $values->getBindings(),
            $logicalOperator
        );
    }

    public function orWhereIn(string $column, iterable|callable|Builder|ModelBuilder $values): static
    {
        return $this->whereIn($column, $values, false, 'or');
    }

    public function whereNotIn(string $column, array|callable|Builder|ModelBuilder $items): static
    {
        return $this->whereIn($column, $items, true, 'and');
    }
    
    public function orWhereNotIn(string $column, array|callable|Builder|ModelBuilder $items): static
    {
        return $this->whereIn($column, $items, true, 'not');
    }

    public function whereColumn(
        string|array $first,
        string|array|null $second = null,
        string $operator = '=',
        string $logicalOperator = 'and'
    ): static
    {
        if (is_array($first)) {
            return $this->addNestedCondition(function () use ($first) {
                foreach ($first as $key => $value) {
                    if (is_array($value)) {
                        if (count($value) === 3) {
                            $this->whereRaw("{$this->getColumn($value[0])} {$value[1]} {$this->getColumn($value[2])}");
                            continue;
                        }
                        $this->whereRaw("{$this->getColumn($value[0])} = {$this->getColumn($value[1])}");
                        continue;
                    }

                    $this->whereRaw("{$this->getColumn($key)} = {$this->getColumn($value)}");
                }
            }, $logicalOperator);
        }

        return $this->whereRaw(
            "{$this->getColumn($first)} $operator {$this->getColumn($second)}",
            logicalOperator: $logicalOperator
        );
    }

    public function orWhereColumn(string|array $first, string|array|null $second = null, string $operator = '='): static
    {
        return $this->whereColumn($first, $second, $operator, 'or');
    }

    public function whereExists(callable|Builder|ModelBuilder $callback, string $logicalOperator = 'and'): static
    {
        if (is_callable($callback)) {
            $builder = new static($this->connection);
            $callback($builder);
        } else {
            $builder = $callback;
        }
        return $this->whereRaw("exists ({$builder->toSql()})", $builder->getBindings(), $logicalOperator);
    }

    public function orWhereExists(callable|Builder|ModelBuilder $callback): static
    {
        return $this->whereExists($callback, 'or');
    }

    public function whereRaw(string $query, array $bindings = [], string $logicalOperator = 'and'): static
    {
        $this->segments['condition'] = true;
        $queryRaw = new QueryRaw($query, $bindings);
        $this->addConditionRaw($queryRaw, $logicalOperator);
        return $this;
    }

    public function orWhereRaw(string $query, array $bindings = []): static
    {
        return $this->whereRaw($query, $bindings, 'or');
    }

    public function join(
        string $table,
        string|callable $first,
        ?string $second = null,
        string $condition = '=',
        string $type = 'inner'
    ): static
    {
        $this->segments['join'] = true;
        $table = $this->getTable($table);
        if (is_string($first)) {
            $this->joinTables[$table] = [
                "$type join",
                $this->getColumn($first),
                $this->getColumn($second),
                $condition
            ];
            return $this;
        }

        $joinClause = new JoinClause($this->connection);
        $joinClause->from($table);
        $first($joinClause);
        $this->joinTables[$table] = [
            "$type join",
            $joinClause
        ];
        return $this;
    }

    public function leftJoin(string $table, string|callable $first, string $second, string $condition = '='): static
    {
        return $this->join($table, $first, $second, $condition, 'left');
    }

    public function rightJoin(string $table, string|callable $first, string $second, string $condition = '='): static
    {
        return $this->join($table, $first, $second, $condition, 'right');
    }

    public function joinSub(Builder|QueryRaw $table, string $alias, callable $callback, string $type = 'inner'): static
    {
        $this->segments['join'] = true;
        
        $joinClause = new JoinClause($this->connection);
        $joinClause->from($table, $alias);
        $callback($joinClause);
        $this->joinTables[$alias] = [
            "$type join",
            $joinClause
        ];
        return $this;
    }

    public function leftJoinSub(Builder|QueryRaw $table, string $alias, callable $callback): static
    {
        return $this->joinSub($table, $alias, $callback, 'left');
    }

    public function rightJoinSub(Builder|QueryRaw $table, string $alias, callable $callback): static
    {
        return $this->joinSub($table, $alias, $callback, 'right');
    }

    public function union(Builder|QueryRaw $query): static
    {
        $this->addBindValues($query->getBindings(), 'union');
        $this->unions[] = ['union', (string)$query];
        return $this;
    }
    
    public function unionall(Builder|QueryRaw $query): static
    {
        $this->addBindValues($query->getBindings(), 'union');
        $this->unions[] = ['union all', (string)$query];
        return $this;
    }

    public function increment(string|array $column, int|float $value = 1, array $fields = []): int
    {
        $column = $this->getColumn($column);
        return $this->update([new QueryRaw("$column = $column + ?", [$value]), ...$fields]);
    }

    public function incrementEach(array $fields): int
    {
        $updateFields = [];
        foreach ($fields as $column => $value) {
            $column = $this->getColumn($column);
            $updateFields[] = new QueryRaw("$column = $column + ?", [$value]);
        }
        return $this->update($updateFields);
    }

    public function decrement(string|array $column, int|float $value = 1, array $fields = []): int
    {
        $column = $this->getColumn($column);
        return $this->update([new QueryRaw("$column = $column - ?", [$value]), ...$fields]);
    }

    public function decrementEach(array $fields): int
    {
        $updateFields = [];
        foreach ($fields as $column => $value) {
            $column = $this->getColumn($column);
            $updateFields[] = new QueryRaw("$column = $column - ?", [$value]);
        }
        return $this->update($updateFields);
    }

    public function truncate(): int
    {
        return $this->run('truncate', function (ConnectionInterface $connection) {
            return $connection->statement("truncate table {$this->getTable()}")->rowCount();
        });
    }

    public function transaction(callable $callback, $retries = 1): bool
    {
        return $this->connection->transaction($callback, $retries);
    }

    public function beginTransaction(): bool
    {
        return $this->connection->beginTransaction();
    }

    public function commit(): bool
    {
        return $this->connection->commit();
    }

    public function rollBack(): bool
    {
        return $this->connection->rollBack();
    }

    public function paginate(
        int $perPage,
        ?int $page = null,
        ?string $pageName = null,
        ?int $total = null,
        ?string $model = null
    ): Paginator
    {
        $countBuilder = clone $this;
        $total = $countBuilder->count();
        if (is_null($page)) {
            $page = App::service('request')->input('page', 1);
        }
        $offset = ($page - 1) * $perPage;
        $data = $this->limit($perPage, $offset)->get(model: $model);

        return App::make(
            Paginator::class,
            [
                'data' => $data,
                'perPage' => $perPage,
                'page' => $page,
                'pageName' => $pageName,
                'total' => $total,
                'from' => $offset
            ]
        );
    }

    // public function cusorPaginate(int $perPage, ?string $nextPage = null, string $primaryKey = 'id', ?string $model = null)
    // {
    //     $nextPage = $nextPage ?? App::service('request')->input('next_page', null);
    //     if (is_null($nextPage)) {
    //         $data = $this->limit($perPage)->get(model: $model);
    //         $lastId = $data->last()->;
    //     }
    // }

    public function fastPaginate(
        int $perPage,
        ?int $page = null,
        string $primaryKey = 'id',
        ?string $pageName = null,
        ?int $total = null,
        ?string $model = null
    ): Paginator
    {
        if (is_null($page)) {
            $page = App::service('request')->input('page', 1);
        }

        $countBuilder = clone $this;
        $total = $countBuilder->count();

        $offset = ($page - 1) * $perPage;
        $subQueryBuilder = clone $this;
        $subQueryBuilder
            ->select($primaryKey)
            ->limit($perPage, $offset);

        $selectBindings = $this->bindings['select'];
        $this->clearBindings();
        $this->bindings['select'] = $selectBindings;

        $lockSegment = $this->segments['lock'];
        $selectSegment = $this->segments['select'];
        $this->clearSegmentsSql();
        $this->segments['lock'] = $lockSegment;
        $this->segments['select'] = $selectSegment;

        $table = &$this->table;
        $data = $this->joinSub($subQueryBuilder, 'sub_query', function (JoinClause $join) use ($primaryKey, &$table) {
            $join->on("sub_query.$primaryKey", "$table.{$primaryKey}");
        })->get(model: $model);
        return App::make(
            Paginator::class,
            [
                'data' => $data,
                'perPage' => $perPage,
                'page' => $page,
                'pageName' => $pageName,
                'total' => $total,
                'from' => $offset
            ]
        );
    }

    protected function clearBindings(): void
    {
        $this->bindings = [
            'select' => [],
            'insert' => [],
            'update' => [],
            'delete' => [],
            'join' => [],
            'condition' => [],
            'union' => []
        ];
    }

    protected function clearSegmentsSql(): void
    {
        $this->segments = [
            'insert' => false,
            'update' => false,
            'delete' => false,
            'select' => true,
            'join' => false,
            'condition' => false,
            'groupBy' => false,
            'having' => false,
            'orderBy' => false,
            'limit' => false,
            'offset' => false,
            'lock' => false
        ];
    }

    protected function addConditionRaw(QueryRaw $queryRaw, string $logicalOperator = 'and'): void
    {
        if (!empty($this->stackGroupConditions)) {
            $conditionPointer = null;
            foreach (array_keys($this->stackGroupConditions) as $stackName) {
                if (is_null($conditionPointer)) {
                    $conditionPointer = &$this->conditions[$stackName];
                } else {
                    $conditionPointer = &$conditionPointer[$stackName];
                }
            }
            $currentStack = array_key_last($this->stackGroupConditions);
            if (empty($conditionPointer)) {
                $conditionPointer['nested_cond'] = $this->stackGroupConditions[$currentStack];
                $whereRaw = (string)$queryRaw;
            } else {
                $whereRaw = " $logicalOperator $queryRaw";
            }
            $conditionPointer[] = $whereRaw;
            $this->addBindValues($queryRaw->getBindings(), 'condition');
        } else {
            if (!empty($this->conditions)) {
                $whereRaw = " $logicalOperator $queryRaw";
            } else {
                $whereRaw = (string)$queryRaw;
            }
            $this->conditions[] = $whereRaw;
            $this->addBindValues($queryRaw->getBindings(), 'condition');
        }
    }

    protected function addCondition(string $column, string $condition, mixed $value, string $logicalOperator = 'and'): static
    {
        if (!empty($this->stackGroupConditions)) {
            $conditionPointer = null;
            foreach (array_keys($this->stackGroupConditions) as $stackName) {
                if (is_null($conditionPointer)) {
                    $conditionPointer = &$this->conditions[$stackName];
                } else {
                    $conditionPointer = &$conditionPointer[$stackName];
                }
            }
            $currentStack = array_key_last($this->stackGroupConditions);
            if (empty($conditionPointer)) {
                $conditionPointer['nested_cond'] = $this->stackGroupConditions[$currentStack];
                if (str_contains($logicalOperator, 'not')) {
                    $logicalOperator = 'not ';
                } else {
                    $logicalOperator = null;
                }
            } else {
                $logicalOperator = " $logicalOperator ";
            }
            $column = "$logicalOperator{$this->getColumn($column)}";
            $conditionPointer[] = [$column, $condition, ($value instanceof Builder ? "({$value->toSql()})" : '?')];
            $this->addBindValue($value, 'condition');
        } else {
            if (!empty($this->conditions)) {
                $logicalOperator = " $logicalOperator ";
            } else {
                if (str_contains($logicalOperator, 'not')) {
                    $logicalOperator = 'not ';
                } else {
                    $logicalOperator = null;
                }
            }
            $column = "$logicalOperator{$this->getColumn($column)}";
            $this->conditions[] = [$column, $condition, $value instanceof Builder ? "({$value->toSql()})" : '?'];
            $this->addBindValue($value, 'condition');
        }
        return $this;
    }

    protected function addNestedCondition(callable $callback, string $logicalOperator = 'and'): static
    {
        if (empty($this->conditions)) {
            if (str_contains($logicalOperator, 'not')) {
                $logicalOperator = 'not ';
            } else {
                $logicalOperator = null;
            }
        } else {
            $logicalOperator = " $logicalOperator ";
        }
        $this->stackGroupConditions['groupCondition' . count($this->conditions)] = "$logicalOperator(%s)";
        $callback($this);
        array_pop($this->stackGroupConditions);
        return $this;
    }

    protected function run(string $typeDML, callable $callback): mixed
    {
        $this->setTypeDML($typeDML);
        $results = $callback($this->connection);
        return $results;
    }

    protected function buildSelect(): string
    {
        if (empty($this->fields)) {
            $fields = '*';
        } else {
            $fields = array_map(function ($field) {
                return is_string($field) ? $this->getColumn($field) : (string)$field;
            }, $this->fields);
            $fields = join(', ', $fields);
        }
        return "select {$fields} from {$this->getTable()}";
    }

    protected function buildInsert(): string
    {
        $firstKey = key($this->fields);
        // Trg hợp insert nhiều bản ghi
        if (is_array($this->fields[$firstKey])) {
            $fields = str_repeat('?, ', count($this->fields[$firstKey]) - 1);
            $fields = '(' . substr($fields, 0, -2) . ')';
            $fields = str_repeat("$fields, ", count($this->fields));
            $fields = substr($fields, 0, -2);
            $columns = join(', ', $this->backtick(array_keys($this->fields[$firstKey])));
        }
        
        // Trg hợp insert 1 bản ghi
        else {
            $fields = '(' . substr(str_repeat('?, ', count($this->fields)), 0, -2) . ')';
            $columns = join(', ', $this->backtick(array_keys($this->fields)));
        }

        $sql = "insert into {$this->getTable()} ($columns) values $fields";
        return $sql;
    }

    protected function buildUpdate(): string
    {
        $sets = '';
        foreach ($this->fields as $key => $value) {
            if (empty($sets)) {
                $sets .= $value instanceof QueryRaw ? (string)$value : "{$this->getColumn($key)} = ?";
            } else {
                $sets .= $value instanceof QueryRaw ? ", $value" : ", {$this->getColumn($key)} = ?";
            }
        }
        return "update {$this->getTable()} set $sets";
    }

    protected function buildDelete(): string
    {
        return "delete from {$this->getTable()}";
    }

    protected function buildJoin(): string
    {
        $segments = [];
        foreach ($this->joinTables as $table => $join) {
            if (is_string($join[1])) {
                $segments[] = "{$join[0]} $table on {$join[1]} {$join[3]} {$join[2]}";
            } else {
                $segments[] = "{$join[0]} {$join[1]}";
                $this->addBindValues($join[1]->getBindings(), 'join');
            }
        }

        return join(' ', $segments);
    }

    protected function buildCondition(array $conditions = [], string $prefix = 'where '): ?string
    {
        if (empty($conditions)) {
            $conditions = $this->conditions;
        }
        if (!empty($conditions)) {
            $command = '';
            $nestedCond = empty($conditions['nested_cond']) ? '%s' : $conditions['nested_cond'];
            foreach ($conditions as $key => $value) {
                if (is_int($key)) {
                    if (is_array($value)) {
                        $command .= "{$value[0]} {$value[1]} {$value[2]}";
                    } else {
                        $command .= $value;
                    }
                } else if ($key !== 'nested_cond') {
                    $command .= $this->buildCondition($value, '');
                }
            }
            return !empty($command) ? sprintf($nestedCond, "$prefix$command") : null;
        }

        return null;
    }

    protected function buildLimit(): string
    {
        return "limit {$this->limit}";
    }

    protected function buildOffset(): string
    {
        return "offset {$this->offset}";
    }

    protected function buildGroupBy(): string
    {
        $groupColumns = join(', ', $this->backtick($this->groupColumns));
        return "group by $groupColumns";
    }

    protected function buildOrderBy(): string
    {
        $sql = 'order by ';
        $firstKey = array_key_first($this->orderBy);
        foreach ($this->orderBy as $column => $order) {
            if ($column !== $firstKey) {
                $sql .= ", ";
            }

            if ($order instanceof QueryRaw) {
                $sql .= (string) $order;
                $this->addBindValues($order->getBindings(), 'orderBy');
                continue;
            }
            $sql .= "{$this->getColumn($column)} $order";
        }
        return $sql;
    }

    protected function buildUnion(): string
    {
        $query = null;
        if (!empty($unions = $this->unions)) {
            foreach ($unions as $union) {
                $query .= "{$union[0]} {$union[1]}";
            }
        }
        return $query;
    }

    protected function buildLock(): string
    {
        return $this->segments['lock'];
    }

    protected function addBindValue(mixed $value, string $fieldName): void
    {
        if ($value instanceof Builder) {
            $this->bindings[$fieldName] = array_merge($this->bindings[$fieldName], $value->getBindings());
            return;
        }
        $this->bindings[$fieldName][] = $value;
    }

    protected function addBindValues(array $fields, string $fieldName): void
    {
        foreach ($fields as $value) {
            if (is_array($value)) {
                $this->addBindValues($value, $fieldName);
                continue;
            }
            $this->addBindValue($value, $fieldName);
        }
    }

    public function getBindings(): array
    {
        $bindings = [];
        foreach ($this->bindings as $value) {
            if (!empty($value)) {
                array_push($bindings, ...$value);
            }
        }
        return $bindings;
    }

    public function lock(string $lock): static
    {
        $this->segments['lock'] = $lock;
        return $this;
    }

    public function lockForUpdate(): static
    {
        return $this->lock('for update');
    }

    public function sharedLock(): static
    {
        return $this->lock('lock in share mode');
    }

    protected function setTypeDML(string $type): void
    {
        $this->segments['insert'] = false;
        $this->segments['update'] = false;
        $this->segments['delete'] = false;
        $this->segments['select'] = false;
        $this->segments[$type] = true;
    }

    protected function backtick(array $items): array
    {
        return array_map([$this, 'getColumn'], $items);
    }

    protected function getTable(?string $table = null): string
    {
        $table = is_null($table) ? $this->table : $table;

        $prefix = $this->getPrefix();
        if (is_string($table)) {
            if (!empty($this->alias)) {
                return "`$prefix$table` as `$prefix{$this->alias}`";
            }

            return "`$prefix$table`";
        }

        if (!empty($this->alias)) {
            return "($table) as `$prefix{$this->alias}`";
        }
        return "($table)";
    }

    protected function getPrefix(): ?string
    {
        return $this->connection->getPrefix();
    }

    protected function getColumn(string|QueryRaw $column): string
    {
        if ($column instanceof QueryRaw) {
            return $column->sql;
        }

        if (trim($column) === '*') {
            return '*';
        }

        if (str_contains($column, '.')) {
            $segments = explode('.', $column);
            $prefix = $this->getPrefix();

            if (trim($segments[1]) === '*') {
                return "`$prefix{$segments[0]}`.*";
            }

            return "`$prefix{$segments[0]}`.`{$segments[1]}`";
        }

        return "`$column`";
    }

    public function toSql(): string
    {
        $segments = array_filter($this->segments);
        foreach ($segments as $key => &$segment) {
            $key = ucfirst($key);
            $segment = call_user_func([$this, "build{$key}"]);
        }
        unset($segment);

        $query = join(' ', $segments);
        if (!empty($this->unions)) {
            $query = "($query)";
            foreach ($this->unions as $union) {
                $query .= " {$union[0]} ($union[1])";
            }
        }

        $prefix = $this->getPrefix();
        if (!empty($segments['select']) && !empty($this->wrap)) {
            return "($query) as `$prefix{$this->wrap}`";
        }
        return $query;
    }

    public function toRawSql(bool $pretty = false, Highlighter $highlighter = new NullHighlighter()): string
    {
        $sql = $this->toSql();
        $bindings = $this->getBindings();
        foreach ($bindings as $value) {
            if (!is_resource($value)) {
                $position = strpos($sql, '?');
                if ($position !== false) {
                    if (!is_int($value) && !is_float($value)) {
                        $value = (string)$value;
                        $value = "'$value'";
                    }
                    $sql = substr_replace($sql, $value, $position, 1);
                }
            }
        }
        return $pretty ? (new SqlFormatter($highlighter))->format($sql) : $sql;
    }

    public function explain(): array
    {
        return $this->run('select', function (ConnectionInterface $connection) {
            return $connection->select("explain {$this->toSql()}", $this->getBindings());
        });
    }

    public function __toString(): string
    {
        return $this->toSql();
    }

    protected function camelToSnake(string $camelCase): string
    { 
        $pattern = '/(?<=\\w)(?=[A-Z])|(?<=[a-z])(?=[0-9])/'; 
        $snakeCase = preg_replace($pattern, '_', $camelCase); 
        return strtolower($snakeCase); 
    }

    public function iteratorToArray(iterable $fields): array
    {
        if ($fields instanceof Collection) {
            $fields = $fields->all();
        } else if (is_iterable($fields) && !is_array($fields)) {
            $fields = iterator_to_array($fields);
        }

        return $fields;
    }

    protected function dymaicWhere(string $method, mixed $value, string $condition)
    {
        $string = substr($method, 5);
        $segments = preg_split(
            '/(And|Or)(?=[A-Z])/', $string, -1, PREG_SPLIT_DELIM_CAPTURE
        );

        $connector = 'and';
        foreach ($segments as $segment) {
            if ($segment === 'And' || $segment === 'Or') {
                $connector = strtolower($segment);
            } else {
                $this->where(Str::snake($segment), $value, $condition, $connector);
            }
        }

        return $this;
    }

    public function __call(string $method, array $parameters = []): mixed
    {
        if (str_starts_with($method, 'where')) {
            return $this->dymaicWhere($method, $parameters[0], !empty($parameters[1]) ? $parameters[1] : '=');
        }
        return $this->___call($method, $parameters);
    }
}
