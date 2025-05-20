<?php

namespace Vietiso\Modules\Region\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\Region\Models\Region;

#[Group('api/region')]
class RegionController
{
    #[Get('/')]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $orderField = $request->input('order_field', 'created_at');

        $experiences = Region::whereTitle("%$keyword%", 'like')
            ->whereNull('deleted_at')
            ->orderBy($orderField, $orderBy)
            ->paginate($perPage);

        return Response::json([
            'message' => 'Get experience successfully',
            ...$experiences->toArray(),
        ]);
    }

    #[Get('{region:\d+}')]
    public function show(Region $region)
    {

    }

    #[Post('/')]
    public function create(Region $region)
    {

    }
}