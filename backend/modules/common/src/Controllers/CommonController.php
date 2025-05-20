<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Response;
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
}