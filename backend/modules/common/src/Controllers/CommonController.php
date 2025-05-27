<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\Common\DTOs\UploadImageDTO;
use Vietiso\Modules\Common\Enums\PlaceType;

#[Group('api/common')]
class CommonController
{
    #[Post('upload-image')]
    public function uploadImage(UploadImageDTO $uploadImageDTO)
    {
        $image = $uploadImageDTO->image->move($uploadImageDTO->folder);
        if (!empty($image)) {
            return Response::json([
                'message' => 'Upload ảnh thành công',
                'image' => config('app.url') . $image
            ], 200);
        }

        return Response::json([
            'message' => 'Upload ảnh thất bại',
        ], 500);
    }

    #[Get('list-destination')]
    public function getListDestination(Request $request)
    {
        $type = $request->input('place_type', PlaceType::SIGHTSEEING->value);
        $cityId = $request->input('slug', );
        if (!PlaceType::in($type)) {
            return Response::json([
                'message' => 'Loại địa điểm không hợp lệ',
            ], 400);
        }

        if ($cityId <= 0) {
            return Response::json([
                'message' => 'City id không hợp lệ',
            ], 400);
        }

        $res = call_user_func_array([$this, 'getList' . ucfirst($type)], [$cityId]);
        return Response::json($res->json());
    }

    #[Get('resource/{resourceId:\d+}')]
    public function getDetailResource(int $resourceId)
    {
        $res = Http::travelIndex('en')
            ->get("app/front/travelindex/resource/detail/{$resourceId}");

        return Response::json($res->json());
    }

    protected function getListSightseeing(int $cityId)
    {
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);
        return $res;
    }

    protected function getListFood(int $cityId)
    {
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);
        return $res;
    }

    protected function getListEntertainment(int $cityId)
    {
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);
        return $res;
    }

    protected function getListRest(int $cityId)
    {
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);
        return $res;
    }

    protected function getListShopping(int $cityId)
    {
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);
        return $res;
    }
}