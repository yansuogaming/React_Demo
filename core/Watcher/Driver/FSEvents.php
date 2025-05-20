<?php

namespace Vietiso\Core\Watcher\Driver;

class FSEvents implements DriverInterface
{
    

    public function on(array $events, callable $callback): static
    {
        return $this;
    }
}