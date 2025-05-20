<?php

use Vietiso\Core\App;

function storage_path(?string $path = null): string
{
    return App::getInstance()->storagePath($path);
}

function join_paths(string ...$paths): string
{
    return join(DS, $paths);
}