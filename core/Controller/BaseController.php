<?php

namespace Vietiso\Core\Controller;

use Vietiso\Core\Http\RedirectResponse;

class BaseController
{
    protected function redirect(string $url, int $status = 302): RedirectResponse
    {
        return new RedirectResponse($url, $status);
    }

    protected function redirectToRoute(string $route, array $parameters = [], int $status = 302): RedirectResponse
    {
        return $this->redirect(route($route, $parameters), $status);
    }
}