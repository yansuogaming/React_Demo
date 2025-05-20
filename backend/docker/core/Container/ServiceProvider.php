<?php

namespace Vietiso\Core\Container;

use Vietiso\Core\App;

abstract class ServiceProvider
{
    public function __construct(protected App $app) {}

    abstract public function register();
}