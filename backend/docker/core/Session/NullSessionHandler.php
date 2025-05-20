<?php

namespace Vietiso\Core\Session;

use SessionHandlerInterface;

class NullSessionHandler implements SessionHandlerInterface
{
    public function open(string $path, string $name): bool
    {
        return true;
    }

    public function close(): bool
    {
        return true;
    }

    public function read(string $sessionId): string
    {
        return '';
    }

    public function write(string $sessionId, string $data): bool
    {
        return true;
    }

    public function destroy(string $sessionId): bool
    {
        return true;
    }

    public function gc(int $lifetime): int
    {
        return 0;
    }
}