<?php

namespace Vietiso\Core\Container;

use Psr\Container\ContainerInterface as PsrContainerInterface;

interface ContainerInterface extends PsrContainerInterface
{
    /**
     * Get the globally available instance of the container.
     */
    public static function getInstance(): static;

    /**
     * Get service by id.
     */
    public function get(string $id): array|object;

    /**
     * Register a shared binding in the container.
     */
    public function singleton(string $id, callable $callback): void;

    /**
     * Register a shared binding if it hasn't already been registered.
     */
    public function singletonIf(string $id, callable $callback): void;

    /**
     * Register a transient binding in the container.
     */
    public function transient(string $id, callable $callback): void;

    /**
     * Register a transient binding if it hasn't already been registered.
     */
    public function transientIf(string $id, callable $callback): void;

    /**
     * Register a scoped binding in the container.
     */
    public function scoped(string $id, callable $callback): void;

    /**
     * Register a scoped binding if it hasn't already been registered.
     */
    public function scopedIf(string $id, callable $callback): void;

    /**
     * Check service exists
     * 
     * @param string $id
     * @return bool
     */
    public function has(string $id): bool;

    /**
     * Set alias call service.
     */
    public function alias(string $id, string $alias): self;

    /**
     * Get the alias for an abstract if available.
     */
    public function getAlias(string $id): array;

    /**
     * Clear all of the scoped instances from the container.
     */
    public function forgetScopedInstances(): void;

    /**
     * Singletons should not be restorable from strings.
     */
    public function __wakeup();
}