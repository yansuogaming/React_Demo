<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;

class HandleCors
{
    public function handle(Request $request, \Closure $next): Response
    {
        if ($request->isMethod('options')) {
            $response = new Response('', 200);
        } else {
            $response = $next($request);
        }

        $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        $response->withHeader('Access-Control-Allow-Credentials', 'true');
        $response->withHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        $response->withHeader('Access-Control-Allow-Headers', 'X-Requested-With,Authorization,Content-Type');
        $response->withHeader('Access-Control-Max-Age', '86400');
        return $response;
    }
}