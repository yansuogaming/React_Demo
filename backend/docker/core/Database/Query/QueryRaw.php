<?php

namespace Vietiso\Core\Database\Query;

class QueryRaw
{
    public function __construct(public readonly string $sql, public readonly array $bindings = []) {}

    public function getBindings(): array
    {
        return $this->bindings;
    }

    public function __toString(): string
    {
        return $this->sql;
    }
}