<?php

namespace Vietiso\Core\Hashing;

use Vietiso\Core\Hashing\Hasher\Argon2IdHasher;
use Vietiso\Core\Hashing\Hasher\BcryptHasher;
use Vietiso\Core\Hashing\Hasher\ArgonHasher;
use Vietiso\Core\Config\RepositoryInterface;
use Vietiso\Core\Support\Manager;

class HashManager extends Manager
{
    public function __construct(protected RepositoryInterface $config) {}

    public function createBcryptDriver(): BcryptHasher
    {
        return new BcryptHasher($this->config->get('hashing.bcrypt.rounds'));
    }

    public function createArgonDriver(): ArgonHasher
    {
        return new ArgonHasher(
            $this->config->get('hashing.argon.memory_cost'),
            $this->config->get('hashing.argon.time_cost'),
            $this->config->get('hashing.argon.threads')
        );
    }

    public function createArgon2IdDriver(): Argon2IdHasher
    {
        return new Argon2IdHasher(
            $this->config->get('hashing.argon2_id.memory_cost'),
            $this->config->get('hashing.argon2_id.time_cost'),
            $this->config->get('hashing.argon2_id.threads')
        );
    }

    public function getDefaultDriver(): string
    {
        return $this->config->get('hashing.default');
    }
}