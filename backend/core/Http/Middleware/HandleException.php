<?php

namespace Vietiso\Core\Http\Middleware;

use Throwable;
use Vietiso\Core\App;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;

class HandleException
{
    public function __construct(protected App $app) {}

    public function handle(Request $request, \Closure $next): Response
    {
        try {
            $response = $next($request);
        } catch (\Throwable $th) {
            $response = $this->app->get('http.handle_exception')
                ->render($request, $th);
        }

        return $response;
    }
}