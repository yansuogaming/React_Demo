<?php

namespace Vietiso\Core\Middleware;

use Vietiso\Core\Http\Request;
use Closure;

class TrustProxies
{
    /**
     * The trusted proxies for the application.
     *
     * @var array<int, string>|string|null
     */
    protected $proxies;

    /**
     * The trusted proxies headers for the application.
     */
    protected int $headers = Request::HEADER_X_FORWARDED_FOR |
                             Request::HEADER_X_FORWARDED_HOST |
                             Request::HEADER_X_FORWARDED_PORT |
                             Request::HEADER_X_FORWARDED_PROTO |
                             Request::HEADER_X_FORWARDED_AWS_ELB;

    /**
     * The proxies that have been configured to always be trusted.
     *
     * @var array<int, string>|string|null
     */
    protected static $alwaysTrustProxies;

    /**
     * The proxies headers that have been configured to always be trusted.
     *
     * @var int|null
     */
    protected static $alwaysTrustHeaders;

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): mixed
    {
        $request::setTrustedProxies([], $this->getTrustedHeaderNames());

        $this->setTrustedProxyIpAddresses($request);

        return $next($request);
    }

    /**
     * Sets the trusted proxies on the request.
     */
    protected function setTrustedProxyIpAddresses(Request $request): void
    {
        $trustedIps = $this->proxies() ?: config('trustedproxy.proxies');

        if ($trustedIps === '*' || $trustedIps === '**') {
            $this->setTrustedProxyIpAddressesToTheCallingIp($request);
            return;
        }

        $trustedIps = is_string($trustedIps)
                ? array_map('trim', explode(',', $trustedIps))
                : $trustedIps;

        if (is_array($trustedIps)) {
            $this->setTrustedProxyIpAddressesToSpecificIps($request, $trustedIps);
            return;
        }
    }

    /**
     * Specify the IP addresses to trust explicitly.
     */
    protected function setTrustedProxyIpAddressesToSpecificIps(Request $request, array $trustedIps): void
    {
        $request->setTrustedProxies($trustedIps, $this->getTrustedHeaderNames());
    }

    /**
     * Set the trusted proxy to be the IP address calling this servers.
     */
    protected function setTrustedProxyIpAddressesToTheCallingIp(Request $request): void
    {
        $request->setTrustedProxies([$request->headers->get('remote_addr')], $this->getTrustedHeaderNames());
    }

    /**
     * Retrieve trusted header name(s), falling back to defaults if config not set.
     *
     * @return int A bit field of Request::HEADER_*, to set which headers to trust from your proxies.
     */
    protected function getTrustedHeaderNames(): int
    {
        $headers = $this->headers();

        if (is_int($headers)) {
            return $headers;
        }

        return match ($headers) {
            'HEADER_X_FORWARDED_AWS_ELB' => Request::HEADER_X_FORWARDED_AWS_ELB,
            'HEADER_FORWARDED' => Request::HEADER_FORWARDED,
            'HEADER_X_FORWARDED_FOR' => Request::HEADER_X_FORWARDED_FOR,
            'HEADER_X_FORWARDED_HOST' => Request::HEADER_X_FORWARDED_HOST,
            'HEADER_X_FORWARDED_PORT' => Request::HEADER_X_FORWARDED_PORT,
            'HEADER_X_FORWARDED_PROTO' => Request::HEADER_X_FORWARDED_PROTO,
            'HEADER_X_FORWARDED_PREFIX' => Request::HEADER_X_FORWARDED_PREFIX,
            default => Request::HEADER_X_FORWARDED_FOR | Request::HEADER_X_FORWARDED_HOST | Request::HEADER_X_FORWARDED_PORT | Request::HEADER_X_FORWARDED_PROTO | Request::HEADER_X_FORWARDED_PREFIX | Request::HEADER_X_FORWARDED_AWS_ELB,
        };
    }

    /**
     * Get the trusted headers.
     *
     * @return int
     */
    protected function headers(): int|null
    {
        return static::$alwaysTrustHeaders ?: $this->headers;
    }

    /**
     * Get the trusted proxies.
     */
    protected function proxies(): array|string|null
    {
        return static::$alwaysTrustProxies ?: $this->proxies;
    }

    /**
     * Specify the IP addresses of proxies that should always be trusted.
     */
    public static function at(array|string $proxies): void
    {
        static::$alwaysTrustProxies = $proxies;
    }

    /**
     * Specify the proxy headers that should always be trusted.
     */
    public static function withHeaders(int $headers): void
    {
        static::$alwaysTrustHeaders = $headers;
    }

    /**
     * Flush the state of the middleware.
     */
    public static function flushState(): void
    {
        static::$alwaysTrustHeaders = null;
        static::$alwaysTrustProxies = null;
    }
}