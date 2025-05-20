<?php

namespace Vietiso\Core\Route;

use Vietiso\Core\Module\Module;

interface RouteCollectionInterfade
{
    public function addRoute($httpMethod, $uri, $options): void;

    public function getUrl(string $name, array $params = []): ?string;

    public function register(string $controller, ?Module $module = null): void;
}