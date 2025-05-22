<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Modules\Common\Models\Cache;

#[Group('api/weather')]
class WeatherController
{
    #[Get('{cityName}')]
    public function getWeatherCity(string $cityName)
    {
        $res = Cache::getCache('weather', function () use ($cityName) {
            $res = Http::withHeaders([
                'User-Agent' => 'your-app-name (your-email@example.com)'
            ])
            ->get("http://api.openweathermap.org/data/2.5/weather?q={$cityName},%20VN&units=metric&appid=fc94a02e7f94ea96ef2e403d1a1d47cb"); 
            return $res->json();
        }, 900);
        return Response::json($res);
    }
}