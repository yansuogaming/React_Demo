<?php

namespace Vietiso\Core\HttpClient\Facade;

use Vietiso\Core\Support\Facade;

/**
 * @method static \Vietiso\Core\HttpClient\Response get(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Response post(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Response put(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Response delete(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Response head(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Response patch(string $url, array $params = [])
 * @method static \Vietiso\Core\HttpClient\Http timeout(float $timeout)
 * @method static \Vietiso\Core\HttpClient\Http connectTimeout(float $timeout)
 * @method static \Vietiso\Core\HttpClient\Http withBasicAuth(string $username, string $password)
 * @method static \Vietiso\Core\HttpClient\Http withHeaders(array $headers)
 * @method static \Vietiso\Core\HttpClient\Http replaceHeaders(array $headers)
 * @method static \Vietiso\Core\HttpClient\Http withToken(string $token)
 * @method static \Vietiso\Core\HttpClient\Http v2()
 */
class Http extends Facade
{
    public static function eventdb(string $langId)
    {
        return Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept-Language' => $langId
        ])
        ->withToken(env('EVENTDB_TOKEN'));
    }

    protected static function getFacadeAccessor(): string
    {
        return 'http.client';
    }
}