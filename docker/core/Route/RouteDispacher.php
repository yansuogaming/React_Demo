<?php

namespace Vietiso\Core\Route;

use Vietiso\Core\Http\Exception\MethodNotAllowedHttpException;
use Vietiso\Core\Http\Exception\NotFoundHttpException;
use Vietiso\Core\Middleware\StackMiddleware;
use FastRoute\Dispatcher\GroupCountBased;
use ReflectionMethod;
use Vietiso\Core\Http\Response;
use Vietiso\Core\App;
use Vietiso\Core\Database\Model\Model;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Middleware\MiddlewareCollection;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\Database\Attributes\FindBy;

class RouteDispacher extends GroupCountBased
{
    public function __construct(
        RouteCollection $routeCollection,
        protected StackMiddleware $stackMiddleware,
        protected MiddlewareCollection $middlewareCollection
    )
    {
        parent::__construct($routeCollection->getData());
    }

    public function handle(Request $request): Response
    {
        $middlewares = [];
        $routeInfo = $this->dispatch($request->method(), $request->uri());
        switch ($routeInfo[0]) {
            case \FastRoute\Dispatcher::NOT_FOUND:
                $callback = fn() => throw new NotFoundHttpException();
                break;
            case \FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
                $allowedMethods = $routeInfo[1];
                $callback = function () use ($allowedMethods) {
                    throw new MethodNotAllowedHttpException($allowedMethods);
                };
                break;
            default:
                $route = $routeInfo[1];
                $routeParams = $routeInfo[2];
                $middlewares = $route->getMiddlewares();
                $callback = function ($request) use ($route, $routeParams) {
                    $controller = App::make($route->getAction()[0]);
                    $method = $route->getAction()[1];
                    $request->setRoute($route);
                    $res = $controller->{$method}(...$this->getParamMethod(
                        $controller,
                        $method,
                        $request,
                        $routeParams
                    ));

                    if ($res instanceof Response) {
                        return $res;
                    }

                    throw new \UnexpectedValueException('Controller must return a valid Response instance.');
                };
                break;
        }

        return $this->stackMiddleware
            ->send($request)
            ->through(...array_merge($this->middlewareCollection->all(), $middlewares))
            ->then($callback);
    }

    protected function getParamMethod(object $controller, string $method, Request $request, array $routeParams): array
    {
        $reflection = new ReflectionMethod($controller, $method);
        $params = $reflection->getParameters();
        $res = [];
        foreach ($params as $param) {
            $typeParam = (string) $param->getType();
            $nameParam = $param->getName();

            if (is_a($typeParam, Request::class, true)) {
                $res[] = $request;
                continue;
            }

            $attributeFindBy = $param->getAttributes(FindBy::class);
            if (!empty($attributeFindBy)) {
                $findBy = $attributeFindBy[0]->newInstance();
                if (
                    !empty($field = (string) $findBy)
                    && isset($routeParams[$field])
                    && is_a($typeParam, Model::class, true)
                ) {
                    $record = $typeParam::where($field, $routeParams[$field])->first();
                    if (empty($record)) {
                        throw new NotFoundHttpException;
                    }
                    $res[] = $record;
                    continue;
                }
            }

            if (isset($routeParams[$nameParam])) {
                if (is_a($typeParam, Model::class, true)) {
                    $res[] = $typeParam::findOrFail($routeParams[$param->getName()]);
                    continue;
                }

                if (enum_exists($typeParam)) {
                    $val = $typeParam::tryFrom($routeParams[$nameParam]);
                    if (is_null($val)) {
                        throw new NotFoundHttpException;
                    }

                    $res[] = $val;
                    continue;
                }

                $res[] = $routeParams[$nameParam];
                continue;
            }

            if (is_a($typeParam, ValidatedDTO::class, true)) {
                if (!App::service('validator')->has($typeParam)) {
                    App::service('validator')->compile($typeParam);
                }

                $res[] = App::service('validator')->validate($typeParam, $request->all());
            }
        }

        return $res;
    }
}