<?php

namespace Vietiso\Core\Translation;

interface MessageRepositoryInterface
{
    public function import(string $domain, mixed $resource): void;

    public function add(string $key, string $value): void;

    public function get(string $key): mixed;
}