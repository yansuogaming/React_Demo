<?php

namespace Vietiso\Modules\Region\Controllers;

use Vietiso\Core\Database\DB;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Delete;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Route\Attributes\Put;
use Vietiso\Modules\Region\DTOs\RegionDTO;
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

     #[Get('{id:\d+}')]
    public function show(Request $request, int $id)
    {
        $faq = Region::find($id);
        $translationOf = $faq->translation_of;
        if ($request->has('lang_id') && $request->input('lang_id') != $faq->lang_id) {
            $faq = Region::where('translation_of', $id)
                ->where('lang_id', $request->input('lang_id'))
                ->first();
        }

        return Response::json([
            'message' => 'Lấy faq thành công',
            'data' => !empty($faq) ? $faq : [
                'id' => 0,
                'title' => '',
                'intro' => '',
                'lang_id' => $request->input('lang_id'),
                'translation_of' => $translationOf
            ]
        ]);
    }

    #[Post('/')]
    public function create(RegionDTO $regionDTO)
    {
        $success = DB::transaction(function () use ($regionDTO) {
            $region = Region::create([
                'title' => $regionDTO->title,
                'image' => $regionDTO->image,
                'intro' => $regionDTO->intro,
                'lang_id' => $regionDTO->langId,
                'translation_of' => $regionDTO->translationOf,
                'is_active' => 1,
            ]);

            if ($regionDTO->translationOf == 0) {
                $region->translation_of = $region->id;
                return $region->save();
            }

            return true;
        });

        if ($success) {
            return Response::json([
                'message' => 'Thêm vùng miền thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Thêm vùng miền thất bại.'
        ], 500);
    }

    #[Post('{id:\d+}')]
    public function update(RegionDTO $regionDTO, int $id)
    {
        $faq = Region::find($id);
        if ($faq->lang_id == $regionDTO->langId) {
            $faq->title = $regionDTO->title;
            $faq->image = $regionDTO->image;
            $faq->intro = $regionDTO->intro;
            $faq->langId = $regionDTO->langId;
            if ($faq->update()) {
                return Response::json([
                    'message' => 'Cập nhật faq thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật faq thất bại',
            ], 500);
        }

        $faq = Region::whereLangId($regionDTO->langId)
            ->whereTranslationOf($regionDTO->translationOf)
            ->first();
        if ($faq) {
            $faq->title = $regionDTO->title;
            $faq->image = $regionDTO->image;
            $faq->intro = $regionDTO->intro;
            if ($faq->update()) {
                return Response::json([
                    'message' => 'Cập nhật faq thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật faq thất bại',
            ], 500);
        }

        $region = Region::create([
            'title' => $regionDTO->title,
            'image' => $regionDTO->image,
            'intro' => $regionDTO->intro,
            'lang_id' => $regionDTO->langId,
            'translation_of' => $regionDTO->translationOf,
            'is_active' => 1,
        ]);

        if ($region) {
            return Response::json([
                'message' => 'Cập nhật vùng miền thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Cập nhật vùng miền thất bại.'
        ], 500);
    }

    #[Put('status/{region:\d+}')]
    public function updateStatus(Region $region)
    {
        $updated = Region::where('translation_of', $region->translation_of)->update([
            'is_active' => $region->is_active == 1 ? 0 : 1
        ]);
        if ($updated) {
            return Response::json([
                'message' => 'Cập nhật thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Cập nhật thất bại',
        ], 500);
    }

    #[Delete('{region:\d+}')]
    public function delete(Region $region)
    {
        $updated = Region::where('translation_of', $region->translation_of)->update([
            'deleted_at' => date('Y-m-d H:i:s')
        ]);
        if ($updated) {
            return Response::json([
                'message' => 'Xoá vùng miền thành công',
            ], 200);
        }

        return Response::json([
            'message' => 'Xoá vùng miền thất bại',
        ], 500);
    }
}