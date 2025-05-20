<?php

namespace Vietiso\Core\Queue\Transport;

use ReflectionClass;
use Vietiso\Core\Queue\Attributes\Route;
use Vietiso\Core\Support\Manager;

abstract class Transport
{
    protected int $second = 3;

    abstract public function consume();

    public function setSleepTime(int $second): static
    {
        $this->second = $second;
        return $this;
    }

    public function getSleepTime(): int
    {
        return $this->second;
    }

    protected function getQueueRoute($handler): string
    {
        $reflectionClass = new ReflectionClass($handler);
        $attribute = $reflectionClass->getAttributes(Route::class);
        if (!empty($attribute)) {
            return (string) $attribute[0]->newInstance();
        }
        return '';
    }
}