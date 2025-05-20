<?php

namespace Vietiso\Core\Route;

use Vietiso\Core\Route\Attributes\Delete;
use Vietiso\Core\Route\Attributes\Route;
use Vietiso\Core\Route\Attributes\Patch;
use Vietiso\Core\Route\Attributes\Head;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Put;
use FastRoute\RouteCollector;
use FastRoute\DataGenerator;
use FastRoute\RouteParser;
use ReflectionMethod;
use ReflectionClass;
use Vietiso\Core\Module\Module;
use Vietiso\Core\Route\Attributes\Group;

class RouteCollection extends RouteCollector implements RouteCollectionInterfade
{
    protected array $collection = [];

    public function __construct(RouteParser $routeParser, DataGenerator $dataGenerator)
    {
        parent::__construct($routeParser, $dataGenerator);
    }

    public function addRoute($httpMethod, $uri, $route): void
    {
        parent::addRoute($httpMethod, $uri, $route);
        if ($route->hasName()) {
            $this->collection[$route->getName()] = $this->currentGroupPrefix . $uri;
        }
    }

    public function getUrl(string $name, array $params = []): ?string
    {
        if (isset($this->collection[$name])) {
            $uri = $this->collection[$name];
            $uri = preg_replace_callback('/{(\w+)}/', function ($matches) use (&$params) {
                $key = $matches[1];
                if (isset($params[$key])) {
                    $value = $params[$key];
                    unset($params[$key]);
                    return $value;
                }
                return $matches[0];
            }, $uri);

            while (strpos($uri, '[') !== false) {
                $uri = preg_replace_callback('/\[([^\[\]]+)\]/', function ($matches) use (&$params) {
                    $optionalPart = $matches[1];
                    if (preg_match_all('/{(\w+)}/', $optionalPart, $keys)) {
                        foreach ($keys[1] as $key) {
                            if (!isset($params[$key])) {
                                return null;
                            }
                        }
                    }

                    $result = preg_replace_callback('/{(\w+)}/', function ($m) use (&$params) {
                        $key = $m[1];
                        $value = $params[$key];
                        unset($params[$key]);
                        return $value;
                    }, $optionalPart);

                    return $result;
                }, $uri);
            }

            $uri = preg_replace('/{(\w+)}/', '', $uri);

            if (!empty($params)) {
                $queryString = http_build_query($params);
                $uri .= "?$queryString";
            }

            return config('app.url') . $uri;
        }

        return null;
    }

    public function register(string $controller, ?Module $module = null): void
    {
        $controller = new ReflectionClass($controller);
        $groupRouteAttribute = $this->getGroupControllerAttribute($controller);
        if ($groupRouteAttribute?->isDeprecated()) {
            return;
        }

        $prefix = !empty($groupRouteAttribute) ? $groupRouteAttribute->getPrefix() : '';
        $prefixName = !empty($groupRouteAttribute) ? $groupRouteAttribute->getName() : '';
        $this->addGroup($prefix, function () use ($controller, $module, $prefixName, $groupRouteAttribute, $prefix) {
            $methods = $controller->getMethods(ReflectionMethod::IS_PUBLIC);
            foreach ($methods as $method) {
                $routeAttribute = $this->getRouteAttribute($method);
                if (
                    strpos($method->getName(), '__') !== 0
                    && is_object($routeAttribute)
                    && !$routeAttribute->isDeprecated()
                ) {
                    $route = new \Vietiso\Core\Route\Route([
                        'action' => [$controller->getName(), $method->getName()],
                        'name' => $routeAttribute->getName() ? $prefixName.$routeAttribute->getName() : null,
                        'module' => $module,
                        'middlewares' => array_merge(
                            !empty($groupRouteAttribute) ? $groupRouteAttribute->getMiddlewares() : [],
                            $routeAttribute->getMiddlewares()
                        ),
                        'excluded_middlewares' => array_merge(
                            !empty($groupRouteAttribute) ? $groupRouteAttribute->getExcludedMiddlewares() : [],
                            $routeAttribute->getExcludedMiddlewares()
                        ),
                    ]);

                    $this->addRoute(
                        $routeAttribute->getMethod(),
                        $routeAttribute->getUri(),
                        $route
                    );
                }
            }
        });
    }

    protected function getGroupControllerAttribute(ReflectionClass $controller): ?Group
    {
        $attibutes = $controller->getAttributes(Group::class);
        if (!empty($attibutes)) {
            return $attibutes[0]->newInstance();
        }

        return null;
    }

    protected function getRouteAttribute(ReflectionMethod $method): object|null
    {
        $attibutes = $method->getAttributes();
        $allowAttributes = [
            Get::class,
            Post::class,
            Put::class,
            Delete::class,
            Patch::class,
            Head::class,
            Route::class
        ];
        if (!empty($attibutes)) {
            foreach ($attibutes as $attibute) {
                if (in_array($attibute->getName(), $allowAttributes)) {
                    return $attibute->newInstance();
                }
            }
        }
        return null;
    }
}