<?php

namespace Vietiso\Core\Twig\Middleware;

use Vietiso\Core\App;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Twig\Extension\CollectionExtension;
use Vietiso\Core\Twig\Extension\CsrfExtension;
use Vietiso\Core\Twig\Extension\OldInputExtension;
use Vietiso\Core\Twig\Extension\RouteExtension;
use Vietiso\Core\Twig\TwigEnvironment;

class ShareErrorsFromSession
{
    public function __construct(protected TwigEnvironment $twig) {}

    public function handle(Request $request, \Closure $next): Response
    {
        $this->twig->addGlobal('errors', $request->getSession()->getErrors());
        $this->twig->addExtension(App::make(OldInputExtension::class));
        $this->twig->addExtension(App::make(CsrfExtension::class));
        $this->twig->addExtension(App::make(CollectionExtension::class));
        $this->twig->addExtension(App::make(RouteExtension::class));
        return $next($request);
    }
}