<?php

namespace Vietiso\Modules\City\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/city')]
class CityController
{
    #[Get('sync')]
    public function sync(Request $request)
    {
        $cities = Http::get('https://connect.itourism.vn/api/get-list-city')->json();
        foreach ($cities as $city) {
            
        }
        return Response::json($cities);
    }
}