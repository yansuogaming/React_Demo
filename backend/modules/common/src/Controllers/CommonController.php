<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\Common\DTOs\UploadImageDTO;

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
        $cityId = $request->input('city_id', 255);
        $res = Http::travelIndex('en')
            ->post('/app/front/travelindex/resources/map', [
                'city_id' => $cityId,
            ]);

        return Response::json($res->json());
    }

    #[Get('resource/{resourceId:\d+}')]
    public function getDetailResource(int $resourceId)
    {
        $res = Http::travelIndex('en')
            ->get("app/front/travelindex/resource/detail/{$resourceId}");

        return Response::json($res->json());
    }
}