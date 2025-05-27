<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Config\RepositoryInterface;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;

class HandleCors
{
    protected bool $supportsCredentials;
    protected bool $allowedHeaders;

    public function __construct(protected RepositoryInterface $config)
    {
        $corsConfig = $this->config->get('cors', []);
        $this->supportsCredentials = $corsConfig['supports_credentials'] ?? false;
        $this->allowedHeaders = $options['allowed_headers'] ?? $this->allowedHeaders;
        // $this->allowAllOrigins = $this->config->get('cors.allowed_origins', ['*']) === ['*'];
        // $this->allowedOrigins = $this->config->get('cors.allowed_origins', []);
    }

    public function handle(Request $request, \Closure $next): Response
    {
        if (!$this->shouldRun($request)) {
            return $next($request);
        }

        if ($this->isPreflightRequest($request)) {
            $response = $this->handlePreflightRequest($request);

            $this->varyHeader($response, 'Access-Control-Request-Method');

            return $response;
        }

        $response = $next($request);

        if ($request->isMethod('OPTIONS')) {
            $this->varyHeader($response, 'Access-Control-Request-Method');
        }

        return $this->addActualRequestHeaders($response, $request);
    }

    protected function shouldRun(Request $request): bool
    {
        $paths = $this->getPathsByHost($request->getHost());

        foreach ($paths as $path) {
            if ($path !== '/') {
                $path = trim($path, '/');
            }

            if ($request->fullUrlIs($path) || $request->is($path)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the CORS paths for the given host.
     */
    protected function getPathsByHost(string $host): array
    {
        $paths = $this->config->get('cors.paths', []);

        if (isset($paths[$host])) {
            return $paths[$host];
        }

        return array_filter($paths, fn ($path) => is_string($path));
    }

    protected function isPreflightRequest(Request $request): bool
    {
        return $request->isMethod('OPTIONS') && $request->headers->has('Access-Control-Request-Method');
    }

    protected function handlePreflightRequest(Request $request): Response
    {
        $response = new Response();
        $response->setStatusCode(204);
        return $this->addPreflightRequestHeaders($response, $request);
    }

    protected function addPreflightRequestHeaders(Response $response, Request $request): Response
    {
        $this->configureAllowedOrigin($response, $request);

        if ($response->headers->has('Access-Control-Allow-Origin')) {
            $this->configureAllowCredentials($response, $request);

            $this->configureAllowedMethods($response, $request);

            $this->configureAllowedHeaders($response, $request);

            $this->configureMaxAge($response, $request);
        }

        return $response;
    }

    private function configureAllowedOrigin(Response $response, Request $request): void
    {
        if ($this->allowAllOrigins === true && !$this->supportsCredentials) {
            // Safe+cacheable, allow everything
            $response->headers->set('Access-Control-Allow-Origin', '*');
        } elseif ($this->isSingleOriginAllowed()) {
            // Single origins can be safely set
            $response->headers->set('Access-Control-Allow-Origin', array_values($this->allowedOrigins)[0]);
        } else {
            // For dynamic headers, set the requested Origin header when set and allowed
            if ($this->isCorsRequest($request) && $this->isOriginAllowed($request)) {
                $response->headers->set('Access-Control-Allow-Origin', (string) $request->headers->get('Origin'));
            }

            $this->varyHeader($response, 'Origin');
        }
    }

    private function configureAllowCredentials(Response $response, Request $request): void
    {
        if ($this->supportsCredentials) {
            $response->headers->set('Access-Control-Allow-Credentials', 'true');
        }
    }
}