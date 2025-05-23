<?php

namespace Vietiso\Modules\City\Controllers;

use Vietiso\Core\Database\Attributes\FindBy;
use Vietiso\Core\Database\DB;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Route\Attributes\Put;
use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\City\Models\City;
use Vietiso\Modules\Region\DTOs\CityDTO;
use Vietiso\Modules\Region\Models\Region;

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

    #[Get(
        uri: '{city:\d+}',
        excludedMiddlewares: [Authenticate::class]
    )]
    public function show(City $city)
    {
        return Response::json([
            'city' => $city
        ]);
    }

    #[Get(
        uri: '{slug}',
        excludedMiddlewares: [Authenticate::class]
    )]
    public function getCityBySlug(#[FindBy('slug')] City $city)
    {
        return Response::json([
            'city' => $city
        ]);
    }

    #[Post('/')]
    public function create(CityDTO $cityDTO)
    {
        $success = DB::transaction(function () use ($cityDTO) {
            $city = City::create([
                'title' => $cityDTO->title,
                'intro' => $cityDTO->intro,
                'image' => $cityDTO->image,
                'banner' => $cityDTO->banner,
                'lang_id' => $cityDTO->langId,
                'content' => $cityDTO->content,
                'content_getting_to' => $cityDTO->contentGettingTo,
                'content_when_to_visit' => $cityDTO->contentWhenToVisit,
                'translation_of' => $cityDTO->translationOf,
                'is_active' => 1,
            ]);

            if ($cityDTO->translationOf == 0) {
                $city->translation_of = $city->id;
                return $city->save();
            }

            return true;
        });

        if ($success) {
            return Response::json([
                'message' => 'Thêm thành phố thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Thêm thành phố thất bại.'
        ], 500);
    }

    #[Put('{id:\d+}')]
    public function update(CityDTO $cityDTO, int $id)
    {
        $city = City::find($id);
        if ($city->lang_id == $cityDTO->langId) {
            $city->title = $cityDTO->title;
            $city->intro = $cityDTO->intro;
            $city->lang_id = $cityDTO->langId;
            $city->content = $cityDTO->content;
            $city->content_getting_to = $cityDTO->contentGettingTo;
            $city->content_when_to_visit = $cityDTO->contentWhenToVisit;
            $city->content_accessibility = $cityDTO->contentAccessibility;
            $city->image = str_replace(config('app.url'), '', $cityDTO->image);
            $city->banner = str_replace(config('app.url'), '', $cityDTO->banner);
            $city->region_id = $cityDTO->regionId;
            if ($city->save()) {
                return Response::json([
                    'message' => 'Cập nhật thành phố thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật thành phố thất bại',
            ], 500);
        }

        $city = City::whereLangId($cityDTO->langId)
            ->whereTranslationOf($cityDTO->translationOf)
            ->first();
        if ($city) {
            $city->title = $cityDTO->title;
            $city->intro = $cityDTO->intro;
            $city->lang_id = $cityDTO->langId;
            $city->content = $cityDTO->content;
            $city->content_getting_to = $cityDTO->contentGettingTo;
            $city->content_when_to_visit = $cityDTO->contentWhenToVisit;
            $city->content_accessibility = $cityDTO->contentAccessibility;
            $city->image = str_replace(config('app.url'), '', $cityDTO->image);
            $city->banner = str_replace(config('app.url'), '', $cityDTO->banner);
            $city->region_id = $cityDTO->regionId;
            if ($city->save()) {
                return Response::json([
                    'message' => 'Cập nhật thành phố thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật thành phố thất bại',
            ], 500);
        }

        $city = City::create([
            'title' => $cityDTO->title,
            'intro' => $cityDTO->intro,
            'image' => str_replace(config('app.url'), '', $cityDTO->image),
            'banner' => str_replace(config('app.url'), '', $cityDTO->banner),
            'lang_id' => $cityDTO->langId,
            'content' => $cityDTO->content,
            'content_getting_to' => $cityDTO->contentGettingTo,
            'content_when_to_visit' => $cityDTO->contentWhenToVisit,
            'content_accessibility' => $cityDTO->contentAccessibility,
            'translation_of' => $cityDTO->translationOf,
            'is_active' => 1,
            'region_id' => $cityDTO->regionId,
        ]);

        if ($city) {
            return Response::json([
                'message' => 'Cập nhật thành phố thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Cập nhật thành phố thất bại.'
        ], 500);
    }
}