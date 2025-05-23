<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Support\Str;
use Vietiso\Modules\Common\Models\Cache;

#[Group('api/weather')]
class WeatherController
{
    #[Get('{cityName}')]
    public function getWeatherCity(string $cityName)
    {
        $cityName = urldecode($cityName);
        $slug = Str::slug($cityName);
        $location = Cache::getCache("location-$slug", function () use ($cityName) {
            $res = Http::withHeaders([
                'User-Agent' => 'your-app-name (your-email@example.com)'
            ])
            ->get("https://nominatim.openstreetmap.org/search?q=$cityName&format=json");
            return $res->json();
        }, 900);

        $res = Cache::getCache("weather-$slug", function () use ($location) {
            $lat = $location[0]['lat'];
            $lon = $location[0]['lon'];
            $res = Http::get("https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon=$lon&appid=fc94a02e7f94ea96ef2e403d1a1d47cb&units=metric");
            return $res->json();
        }, 900);
        return Response::json($res);
    }
}
