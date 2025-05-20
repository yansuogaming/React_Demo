<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Http\Exception\TokenMismatchHttpException;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;

class VerifyCsrfToken
{
    public function handle(Request $request, \Closure $next): Response
    {
        $token = $request->getSession()->get('_token');
        if (
            in_array($request->method(), ['POST', 'PUT', 'PATCH', 'DELETE'])
            && (
                empty($token)
                || (!empty($token) && $token !== $request->input('_token'))
            )
        ) {
            throw new TokenMismatchHttpException;
        }

        return $next($request);
    }
}