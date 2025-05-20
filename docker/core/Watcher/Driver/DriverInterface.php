<?php

namespace Vietiso\Core\Watcher\Driver;

use Vietiso\Core\Watcher\Event;

interface DriverInterface
{
    public function on(Event|array $events, callable $callback): static;

    public function add(string $path, ?string $regex = null): static;

    public function run(): void;
}