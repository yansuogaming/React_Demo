<?php

namespace Vietiso\Core\Coroutine;

interface ChannelInterface
{
    public static function create(int $capacity = 1): static;

    public function getCapacity(): int;

    public function length(): int;

    public function getLength(): int;

    public function isFull(): bool;

    public function stats(): array;

    public function isAvailable(): bool;

    public function close(): bool;

    public function isClosing(): bool;

    public function isTimeout(): bool;
}