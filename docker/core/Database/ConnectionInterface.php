<?php

namespace Vietiso\Core\Database;

use PDO;
use PDOStatement;
use Vietiso\Core\Database\Query\Builder;

interface ConnectionInterface
{
    public function select(string $query, array $bindings = [], int $mode = PDO::FETCH_DEFAULT, mixed ...$args): array;

    public function selectOne(string $query, array $bindings = [], int $mode = PDO::FETCH_DEFAULT, mixed ...$args): mixed;

    public function insert(string $query, array $bindings = []): int;

    public function insertGetId(string $query, string $name, array $bindings = []): string|false;

    public function delete(string $query, array $bindings = []): int;

    public function update(string $query, array $bindings = []): int;

    public function statement(string $query, array $bindings = []): PDOStatement|false;

    public function transaction(callable $callback, int $retries = 1): mixed;

    public function beginTransaction(): bool;

    public function commit(): bool;

    public function rollBack(): bool;

    public function getAttribute(int $attribute): mixed;

    public function setAttribute(int $attribute, mixed $value): static;

    public function lastInsertId(string $name): string|false;

    public function ping(): bool;

    public function getPrefix(): ?string;

    public function getLastQueryTime(): int;

    public function config(): array;

    public function bindValues(PDOStatement $statement, array $bindings): static;

    public function query(): Builder;

    public function reconnect(): mixed;

    public function disconnect(): void;
}