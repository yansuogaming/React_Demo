<?php

namespace Vietiso\Core\Config;

interface RepositoryInterface
{
    /**
     * Get config by name.
     */
    public function get(string $name): mixed;

    /**
     * Set config.
     */
    public function set(string $name, mixed $config): static;

    /**
     * Set original config.
     */
    public function setOriginal(string $name, mixed $config): static;

    /**
     * Check has config.
     */
    public function has(string $name): bool;

    /**
     * Copy config.
     *
     * @throws \Vietiso\Core\Config\Exceptions\ConfigNotFoundException If config file not found
     */
    public function copy(string $from, string $to): bool;
}