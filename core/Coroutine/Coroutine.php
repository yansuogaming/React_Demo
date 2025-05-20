<?php

namespace Vietiso\Core\Coroutine;

use ArrayObject;
use Swoole\Coroutine as SwooleCo;
use Vietiso\Core\Coroutine\Exception\CoroutineDestroyedException;
use Vietiso\Core\Coroutine\Exception\RunningInNonCoroutineException;
use Vietiso\Core\Coroutine\Exception\RuntimeException;

class Coroutine
{
    /**
     * @var callable
     */
    private $callable;

    private ?int $id = null;

    public function __construct(callable $callable)
    {
        $this->callable = $callable;
    }

    public static function create(callable $callable, mixed ...$data): static
    {
        $coroutine = new static($callable);
        $coroutine->execute(...$data);
        return $coroutine;
    }

    public static function batch(iterable $tasks): array
    {
        return \Swoole\Coroutine\batch(iterator_to_list($tasks));
    }

    public static function parallel(int $numberCoroutine, callable $fn): void
    {
        \Swoole\Coroutine\parallel($numberCoroutine, $fn);
    }

    public function execute(mixed ...$data): static
    {
        $this->id = SwooleCo::create($this->callable, ...$data);
        return $this;
    }

    public function getId(): int
    {
        if (is_null($this->id)) {
            throw new RuntimeException('Coroutine was not be executed.');
        }
        return $this->id;
    }

    public static function id(): int
    {
        return SwooleCo::getCid();
    }

    public static function pid(?int $id = null): int
    {
        if ($id) {
            $cid = SwooleCo::getPcid($id);
            if ($cid === false) {
                throw new CoroutineDestroyedException(sprintf('Coroutine #%d has been destroyed.', $id));
            }
        } else {
            $cid = SwooleCo::getPcid();
        }
        if ($cid === false) {
            throw new RunningInNonCoroutineException('Non-Coroutine environment don\'t has parent coroutine id.');
        }
        return max(0, $cid);
    }

    public static function set(array $config): void
    {
        SwooleCo::set($config);
    }

    public static function getContextFor(?int $id = null): ?ArrayObject
    {
        if ($id === null) {
            return SwooleCo::getContext();
        }

        return SwooleCo::getContext($id);
    }

    public static function defer(callable $callable): void
    {
        SwooleCo::defer($callable);
    }

    /**
     * Yield the current coroutine.
     */
    public static function yield(): mixed
    {
        return SwooleCo::yield();
    }

    /**
     * Resume the coroutine by coroutine Id.
     */
    public static function resumeById(int $id): mixed
    {
        return SwooleCo::resume($id);
    }

    /**
     * Get the coroutine stats.
     */
    public static function stats(): array
    {
        return SwooleCo::stats();
    }

    public static function exists(?int $id = null): bool
    {
        return SwooleCo::exists($id);
    }
}