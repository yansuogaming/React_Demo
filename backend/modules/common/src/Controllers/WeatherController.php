<?php

namespace Vietiso\Modules\Common\Controllers;

use GeoIp2\Database\Reader;
use Vietiso\Core\Http\Request;
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

        $res = $this->getWeatherByLocation(
            $location[0]['lat'],
            $location[0]['lon']
        );
        return Response::json($res);
    }

    #[Get('/')]
    public function getWeather(Request $request)
    {
        $cityDbReader = new Reader(storage_path(join_paths('geolite', 'GeoLite2-City.mmdb')));
        try {
            $record = $cityDbReader->city($request->ip());
        } catch (\Throwable $th) {
            $record = $cityDbReader->city('124.158.4.43');
        }
        
        $res = $this->getWeatherByLocation(
            $record->location->latitude,
            $record->location->longitude
        );
        return Response::json($res);
    }

    protected function getWeatherByLocation($lat, $lon)
    {
        return Cache::getCache("weather-$lat-$lon", function () use ($lat, $lon) {
            $res = Http::get("https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon=$lon&appid=fc94a02e7f94ea96ef2e403d1a1d47cb&units=metric");
            return $res->json();
        }, 900);
    }
}
