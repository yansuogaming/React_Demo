<?php

namespace Vietiso\Core\Server\Events;

use Swoole\WebSocket\Frame;
use Swoole\WebSocket\Request;

class MessageEvent extends ServerEvent
{
    public function handle(Server $swooleServer, Frame $frame): void
    {
        $request = $this->app->get('request');
        $request->initRequest($swooleRequest);
        $response = $this->app->get('route_dispacher')->dispatch(
            $request->method(),
            $request->uri()
        );
        $response->send($swooleResponse);
        $this->app->forgetScopedInstances();
        Context::delete();
    }
}