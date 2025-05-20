<?php

namespace Vietiso\Modules\Experience\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Delete;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Route\Attributes\Put;
use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\Common\DTOs\UploadImageDTO;
use Vietiso\Modules\Experience\DTOs\ExperienceDTO;
use Vietiso\Modules\Experience\Models\Experience;

#[Group(
    prefix: 'api/experience',
    middlewares: [Authenticate::class]
)]
class ExperienceController
{
    #[Get('/')]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $orderField = $request->input('order_field', 'created_at');

        $experiences = Experience::whereTitle("%$keyword%", 'like')
            ->whereNull('deleted_at')
            ->orderBy($orderField, $orderBy)
            ->paginate($perPage);

        return Response::json([
            'message' => 'Get experience successfully',
            ...$experiences->toArray(),
        ]);
    }

    #[Get('{experience:\d+}')]
    public function show(Experience $experience)
    {
        return Response::json([
            'message' => 'Get experience successfully',
            'data' => $experience,
        ]);
    }

    #[Post('/')]
    public function store(ExperienceDTO $experienceDTO)
    {
        $experience = Experience::create([
            'title' => $experienceDTO->title,
            'content' => $experienceDTO->content,
            'image' => str_replace(config('app.url'), '', $experienceDTO->image),
        ]);
        if ($experience) {
            return Response::json([
                'message' => 'Created successfully',
            ], 201);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Post('image')]
    public function uploadImage(UploadImageDTO $uploadImageDTO)
    {
        $image = $uploadImageDTO->image->move('experiences');
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

    #[Post('{experience:\d+}')]
    public function update(Experience $experience, ExperienceDTO $experienceDTO)
    {
        $oldImage = $experience->getOriginal('image');
        $image = $experienceDTO->image;
        if (!empty($image)) {
            $image = str_replace(config('app.url'), '', $image);
        }

        if ($oldImage != $image && file_exists(storage_path($oldImage))) {
            unlink(storage_path($oldImage));
        }

        $experience = $experience->update([
            'title' => $experienceDTO->title,
            'content' => $experienceDTO->content,
            'image' => $image,
        ]);
        if ($experience) {
            return Response::json([
                'message' => 'Cập nhật trải nghiệm thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Delete('{experience:\d+}')]
    public function delete(Experience $experience)
    {
        $deleted = $experience->update([
            'deleted_at' => date('Y-m-d H:i:s')
        ]);
        if ($deleted) {
            return Response::json([
                'message' => 'Xoá trải nghiệm thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Delete('delete-image')]
    public function deleteImage(Request $request)
    {
        $image = $request->input('image');
        if ($image) {
            $image = str_replace(config('app.url'), '', $image);
            $deleted = unlink(storage_path($image));
            if ($deleted) {
                return Response::json([
                    'message' => 'Deleted successfully',
                ], 200);
            }

            return Response::json([
                'message' => 'Server error',
            ], 500);
        }

        return Response::json([
            'message' => 'Image not found',
        ], 404);
    }

    #[Put('status/{experience:\d+}')]
    public function updateStatus(Experience $experience)
    {
        $experience->is_active = $experience->is_active == 1 ? 0 : 1;
        $updated = $experience->save();
        if ($updated) {
            return Response::json([
                'message' => 'Cập nhật thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Cập nhật thất bại',
        ], 500);
    }
}