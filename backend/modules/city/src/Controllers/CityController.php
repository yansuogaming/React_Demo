<?php

namespace Vietiso\Modules\City\Controllers;

use Vietiso\Core\Database\Attributes\FindBy;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\City\Models\City;

#[Group('api/city')]
class CityController
{
    #[Get('')]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $langId = $request->input('lang_id');
        $orderField = $request->input('order_field', 'created_at');

        $cities = City::whereTitle("%$keyword%", 'like')
            ->whereNull('deleted_at')
            ->paginate($perPage);

        return Response::json([
            'message' => 'Get cities successfully',
            ...$cities->toArray(),
        ]);
    }

    #[Get('{city:\d+}')]
    public function show(City $city)
    {
        return Response::json([
            'city' => $city
        ]);
    }

    #[Get('{slug}')]
    public function getCityBySlug(#[FindBy('slug')] City $city)
    {
        return Response::json([
            'city' => $city
        ]);
    }

    #[Post('{city:\d+}')]
    public function create(City $city)
    {
        
    }
}