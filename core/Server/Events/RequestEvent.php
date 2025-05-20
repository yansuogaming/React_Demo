<?php

namespace Vietiso\Core\Server\Events;

use Swoole\Http\Request as SwooleRequest;
use Swoole\Http\Response as SwooleResponse;
use Vietiso\Core\Context\Context;
use Vietiso\Core\Coroutine\Coroutine;

class RequestEvent extends ServerEvent
{
    public function handle(SwooleRequest $swooleRequest, SwooleResponse $swooleResponse): void
    {
        Coroutine::defer([$this, 'terminateRequest']);
        $request = $this->app->get('request');
        $request->initRequest($swooleRequest);
        $response = $this->app->get('route_dispacher')->handle($request);
        $response->prepare($request);
        $response->send($swooleResponse);
    }

    public function terminateRequest(): void
    {
        if (!empty($terminateRequest = $this->app->terminateRequest)) {
            $terminateRequest($this->app);
        }
        $this->app->forgetScopedInstances();
        Context::delete();
    }
}