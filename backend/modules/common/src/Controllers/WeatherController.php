<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/weather')]
class WeatherController
{
    #[Get('{city:\d+}')]
    public function getWeatherCity($city)
    {
        
    }

    protected function getLocationByCityName(string $cityName)
    {
        $res = Http::get("https://nominatim.openstreetmap.org/search?q={$cityName}&format=json&limit=1");
    }
}