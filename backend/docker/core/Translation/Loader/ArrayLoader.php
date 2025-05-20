<?php

namespace Vietiso\Core\Translation\Loader;

class ArrayLoader implements LoaderInterface
{
    protected array $resource;

    public function load(mixed $resource, string $locale): void
    {
        foreach ($resource as $key => $value) {
            $this->resource[$locale][$key] = $value;
        }
    }
}