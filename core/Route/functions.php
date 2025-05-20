<?php

use Vietiso\Core\App;

function route(string $name, array $params = []): ?string
{
    return App::service('route_collection')->getUrl($name, $params);
}