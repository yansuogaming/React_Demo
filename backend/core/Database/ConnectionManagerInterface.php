<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\Database\ConnectionInterface;

interface ConnectionManagerInterface
{
    public function addConnection(string $name, array $config): void;

    public function connection(?string $name = null): ConnectionInterface;

    public function getConnection(?string $name = null): ConnectionInterface;

    public function getConfig(?string $name = null): ?array;

    public function setDefaultConnection(string $defaultConnection): static;

    public function getDefaultConnection(): ?string;

    public function disconnect(): void;
}