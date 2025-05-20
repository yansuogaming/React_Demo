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
use Vietiso\Modules\Experience\DTOs\ExperienceTypeDTO;
use Vietiso\Modules\Experience\Models\ExperienceType;

#[Group('api/experience-type')]
class ExperienceTypeController
{
    #[Get(
        uri: '/',
        excludedMiddlewares: [Authenticate::class]
    )]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $orderField = $request->input('order_field', 'created_at');

        $experienceTypes = ExperienceType::whereTitle("%$keyword%", 'like')
            ->whereNull('deleted_at')
            ->orderBy($orderField, $orderBy)
            ->paginate($perPage);

        return Response::json([
            'message' => 'Get experience types successfully',
            ...$experienceTypes->toArray(),
        ]);
    }

    #[Get('{experienceType:\d+}')]
    public function show(ExperienceType $experienceType)
    {
        return Response::json([
            'message' => 'Get experience type successfully',
            'data' => $experienceType,
        ]);
    }

    #[Post('/')]
    public function store(ExperienceTypeDTO $experienceTypeDTO)
    {
        $experienceType = ExperienceType::create([
            'title' => $experienceTypeDTO->title,
            'intro' => $experienceTypeDTO->intro,
            'image' => str_replace(config('app.url'), '', $experienceTypeDTO->image),
        ]);
        if ($experienceType) {
            return Response::json([
                'message' => 'Created successfully',
            ], 201);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Post('{experienceType:\d+}')]
    public function update(ExperienceType $experienceType, ExperienceTypeDTO $experienceTypeDTO)
    {
        $oldImage = $experienceType->getOriginal('image');
        $image = $experienceTypeDTO->image;
        if (!empty($image)) {
            $image = str_replace(config('app.url'), '', $image);
        }

        // Nếu image mới không giống image cũ và image cũ có tồn tại
        if ($oldImage != $image && file_exists(storage_path($oldImage))) {
            unlink(storage_path($oldImage));
        }

        $experience = $experienceType->update([
            'title' => $experienceTypeDTO->title,
            'intro' => $experienceTypeDTO->intro,
            'image' => $image,
        ]);
        if ($experience) {
            return Response::json([
                'message' => 'Cập nhật loại trải nghiệm thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Delete('{experienceType:\d+}')]
    public function delete(ExperienceType $experienceType)
    {
        $deleted = $experienceType->update([
            'deleted_at' => date('Y-m-d H:i:s')
        ]);
        if ($deleted) {
            return Response::json([
                'message' => 'Xoá loại hình trải nghiệm thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Server error',
        ], 500);
    }

    #[Put('status/{experienceType:\d+}')]
    public function updateStatus(ExperienceType $experienceType)
    {
        $experienceType->is_active = $experienceType->is_active == 1 ? 0 : 1;
        $updated = $experienceType->save();
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