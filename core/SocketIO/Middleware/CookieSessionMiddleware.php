<?php

namespace Vietiso\Core\SocketIO\Middleware;

use Swoole\Http\Response;
use Vietiso\Core\SocketIO\SidGenerator;
use Vietiso\Core\SocketIO\Socket;

class CookieSessionMiddleware
{
    public function handle(Socket $socket, Response $response, callable $next)
    {
        $request = $socket->getRequest();
        $sessionId = $request->cookie[$this->cookieName] ?? SidGenerator::generateFromSocket($socket, [['rand', 4]]);

        $session = $this->server->getSessionStorage()->getSession($sessionId);
        $session->commit();

        $socket->setSession($session);

        $response->setCookie($this->cookieName, $sessionId);

        $next();
    }
}
