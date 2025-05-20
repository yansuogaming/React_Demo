<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\Database\Query\PostgreBuilder;
use Vietiso\Core\Database\Query\MysqlBuilder;
use Vietiso\Core\Database\Query\Builder;
use PDOStatement;
use PDOException;
use PDO;

class Connection implements ConnectionInterface
{
    protected string $query = '';

    protected array $params = [];

    protected ?PDO $pdo;

    protected ?string $prefix = null;

    protected ?int $lastQueryTime = null;

    protected int $transactions = 0;

    public function __construct(protected array $config)
    {
        $this->connect();
    }

    public function select(string $query, array $bindings = [], int $mode = PDO::FETCH_DEFAULT, mixed ...$args): array
    {
        return $this->statement($query, $bindings)->fetchAll($mode, ...$args);
    }

    public function selectOne(string $query, array $bindings = [], int $mode = PDO::FETCH_DEFAULT, mixed ...$args): mixed
    {
        $result = $this->select($query, $bindings, $mode, ...$args);
        return array_shift($result);
    }

    public function insert(string $query, array $bindings = []): int
    {
        return $this->statement($query, $bindings)->rowCount();
    }

    public function insertGetId(string $query, string $name, array $bindings = []): string|false
    {
        $this->statement($query, $bindings);
        return $this->lastInsertId($name);
    }

    public function delete(string $query, array $bindings = []): int
    {
        return $this->statement($query, $bindings)->rowCount();
    }

    public function update(string $query, array $bindings = []): int
    {
        return $this->statement($query, $bindings)->rowCount();
    }

    public function statement(string $query, array $bindings = []): PDOStatement|false
    {
        $statement = $this->pdo->prepare($query);
        $this->bindValues($statement, $bindings);
        $statement->execute();
        $this->lastQueryTime = time();
        return $statement;
    }

    public function transaction(callable $callback, int $retries = 1): mixed
    {
        for ($i = 1; $i <= $retries; $i++) { 
            try {
                $this->beginTransaction();

                $result = $callback();
            } catch (\Exception $e) {
                if ($i === $retries) {
                    throw new \Exception($e);
                }

                continue;
            }

            if ($this->transactions === 1) {
                if ($this->pdo->inTransaction()) {
                    $this->commit();
                }
            } else {
                $this->transactions = max(0, $this->transactions - 1);
            }

            return $result;
        }
        return false;
    }

    public function beginTransaction(): bool
    {
        if ($this->transactions === 0) {
            $transactionCreated = $this->pdo->beginTransaction();
        } else {
            $transactionCreated = (bool) $this->pdo->exec("savepoint trans{$this->transactions}");
        }

        if ($transactionCreated) {
            $this->transactions++;
            return true;
        }

        return false;
    }

    public function commit(): bool
    {
        $this->transactions = 0;
        return $this->pdo->commit();
    }

    public function rollBack(): bool
    {
        if ($this->transactions === 1) {
            if ($this->pdo->inTransaction()) {
                $this->transactions = 0;
                return $this->pdo->rollBack();
            }
        }

        $rolledBack = (bool) $this->pdo->exec("rollback to savepoint trans{$this->transactions}");
        $this->transactions--;
        return $rolledBack;
    }

    public function bindValues(PDOStatement $statement, array $bindings): static
    {
        foreach ($bindings as $key => $value) {
            $value = $value instanceof \DateTimeInterface ? $value->format('Y-m-d H:i:s.u') : $value;
            $statement->bindValue(
                is_string($key) ? $key : $key + 1,
                $value,
                match (true) {
                    is_int($value) => PDO::PARAM_INT,
                    is_resource($value) => PDO::PARAM_LOB,
                    is_null($value) => PDO::PARAM_NULL,
                    default => PDO::PARAM_STR,
                }
            );
        }
        return $this;
    }

    public function getAttribute(int $attribute): mixed
    {
        return $this->pdo->getAttribute($attribute);
    }

    public function setAttribute(int $attribute, mixed $value): static
    {
        $this->pdo->setAttribute($attribute, $value);
        return $this;
    }

    public function lastInsertId(string $name): string|false
    {
        return $this->pdo->lastInsertId($name);
    }

    public function ping(): bool
    {
        try {
            $this->select('SELECT 1');
        } catch (PDOException) {
            return false;
        }
        return true;
    }

    public function reconnect(int $retries = 3): bool
    {
        for ($i = 0; $i < $retries; $i++) { 
            try {
                $this->connect();
                return true;
            } catch (\Throwable) {
                if ($i == $retries - 1) {
                    return false;
                }
            }
        }

        return false;
    }

    public function disconnect(): void
    {
        $this->pdo = null;
    }

    public function getPrefix(): ?string
    {
        return $this->prefix;
    }

    public function getLastQueryTime(): int
    {
        return $this->lastQueryTime;
    }

    public function config(): array
    {
        return $this->config;
    }

    public function query(): Builder
    {
        $driver = $this->config['driver'];
        return match ($driver) {
            'mysql' => new MysqlBuilder($this),
            'postgres' => new PostgreBuilder($this),
            'sqlite' => new MysqlBuilder($this)
        };
    }

    protected function connect(): void
    {
        $config = &$this->config;
        $this->pdo = new PDO($this->getDsn($config), options: $config['options'] ?: null);

        if (!empty($config['database'])) {
            $this->statement("use `{$config['database']}`;");
        }
        if (!empty($config['prefix'])) {
            $this->prefix = $config['prefix'];
        }

        $this->lastQueryTime = time();
    }

    protected function getDsn(array $config): string
    {
        return $this->hasSocket($config)
            ? $this->getSocketDsn($config) : $this->getHostDsn($config);
    }

    protected function hasSocket(array $config): bool
    {
        return !empty($config['unix_socket']);
    }

    protected function getSocketDsn(array $config): string
    {
        return "{$config['driver']}:unix_socket={$config['unix_socket']};dbname={$config['database']}";
    }

    protected function getHostDsn(array $config): string
    {
        extract($config, EXTR_SKIP);
        return !empty($port)
            ? "$driver:dbname=$database;host=$host;port=$port;user=$username;password=$password;"
            : "$driver:dbname=$database;host=$host;user=$username;password=$password";
    }
}