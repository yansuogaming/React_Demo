<?php

namespace Vietiso\Core\Container\AOP;

class AspectCollector
{
    private array $classes = [];
    
    public function add(string $class)
    {
        $this->classes[$class];
    }
}