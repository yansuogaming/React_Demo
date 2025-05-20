<?php

namespace Vietiso\Core\Twig\Extension;

use Twig\TwigFilter;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class RouteExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('route', [static::class, 'generatorUrlByRoute'])
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('route', [static::class, 'generatorUrlByRoute'])
        ];
    }

    public static function generatorUrlByRoute(string $name, array $params = []): ?string
    {
        return route($name, $params);
    }
}