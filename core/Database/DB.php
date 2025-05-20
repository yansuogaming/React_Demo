<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\App;
use Vietiso\Core\Database\Query\QueryRaw;
use Vietiso\Core\Support\Facade;

/**
 * @method static \Vietiso\Core\Database\Query\Builder query()
 * @method static bool insert(string $query, array $bindings = [])
 * @method static string|false insertGetId(string $query, string $name, array $bindings = [])
 * @method static int update(string $query, array $bindings = [])
 * @method static int delete(string $query, array $bindings = [])
 */
class DB extends Facade
{
    protected static function getFacadeAccessor(): string|object
    {
        return static::connection();
    }

    public static function connection(?string $connection = null): ConnectionInterface
    {
        return App::service('database')->connection($connection);
    }

    public static function raw(string $sql, array $bindings = []): QueryRaw
    {
        return new QueryRaw($sql, $bindings);
    }
}