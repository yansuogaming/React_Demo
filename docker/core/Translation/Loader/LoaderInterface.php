<?php

namespace Vietiso\Core\Translation\Loader;

interface LoaderInterface
{
    public function load(mixed $resource, string $locale): void;
}