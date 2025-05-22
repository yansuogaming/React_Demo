<?php

namespace Vietiso\Modules\Faq\Controllers;

use Vietiso\Core\Database\DB;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Delete;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Route\Attributes\Put;
use Vietiso\Modules\Faq\DTOs\FAQDTO;
use Vietiso\Modules\User\Models\FAQ;

#[Group('api/faq')]
class FAQController
{
    #[Get('/')]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $langId = $request->input('lang_id');
        $orderField = $request->input('order_field', 'created_at');

        $faqs = FAQ::whereQuestion("%$keyword%", 'like')
            ->whereNull('deleted_at')
            ->whereLangId($langId)
            ->orderBy($orderField, $orderBy)
            ->paginate($perPage);

        return Response::json([
            'message' => 'Get faq successfully',
            ...$faqs->toArray(),
        ]);
    }

    #[Post('/')]
    public function create(FAQDTO $faqDTO)
    {
        $success = DB::transaction(function () use ($faqDTO) {
            $faq = FAQ::create([
                'question' => $faqDTO->question,
                'answers' => $faqDTO->answers,
                'lang_id' => $faqDTO->langId,
                'is_active' => 1,
                'translation_of' => $faqDTO->translationOf,
            ]);

            if ($faqDTO->translationOf == 0) {
                $faq->translation_of = $faq->id;
                return $faq->save();
            }

            return true;
        });

        if ($success) {
            return Response::json([
                'message' => 'Thêm faq thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Thêm faq thất bại.'
        ], 500);
    }

    #[Get('{id:\d+}')]
    public function show(Request $request, int $id)
    {
        $faq = FAQ::find($id);
        $translationOf = $faq->translation_of;
        if ($request->has('lang_id') && $request->input('lang_id') != $faq->lang_id) {
            $faq = FAQ::where('translation_of', $id)
                ->where('lang_id', $request->input('lang_id'))
                ->first();
        }

        return Response::json([
            'message' => 'Lấy faq thành công',
            'data' => !empty($faq) ? $faq : [
                'id' => 0,
                'question' => '',
                'answers' => '',
                'lang_id' => $request->input('lang_id'),
                'translation_of' => $translationOf
            ]
        ]);
    }

    #[Post('{id:\d+}')]
    public function update(FAQDTO $faqDTO, int $id)
    {
        $faq = FAQ::find($id);
        if ($faq->lang_id == $faqDTO->langId) {
            $faq->answers = $faqDTO->answers;
            $faq->question = $faqDTO->question;
            if ($faq->update()) {
                return Response::json([
                    'message' => 'Cập nhật faq thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật faq thất bại',
            ], 500);
        }

        $faq = FAQ::whereLangId($faqDTO->langId)
            ->whereTranslationOf($faqDTO->translationOf)
            ->first();
        if ($faq) {
            $faq->answers = $faqDTO->answers;
            $faq->question = $faqDTO->question;
            if ($faq->update()) {
                return Response::json([
                    'message' => 'Cập nhật faq thành công',
                ]);
            }

            return Response::json([
                'message' => 'Cập nhật faq thất bại',
            ], 500);
        }

        $faq = FAQ::create([
            'question' => $faqDTO->question,
            'answers' => $faqDTO->answers,
            'lang_id' => $faqDTO->langId,
            'is_active' => 1,
            'translation_of' => $faqDTO->translationOf,
        ]);

        if ($faq) {
            return Response::json([
                'message' => 'Cập nhật faq thành công.'
            ], 201);
        }

        return Response::json([
            'message' => 'Cập nhật faq thất bại.'
        ], 500);
    }

    #[Delete('{faq:\d+}')]
    public function delete(FAQ $faq)
    {
        $deleted = $faq->update([
            'deleted_at' => date('Y-m-d H:i:s')
        ]);
        if ($deleted) {
            return Response::json([
                'message' => 'Xoá faq thành công',
            ]);
        }

        return Response::json([
            'message' => 'Xoá faq thất bại'
        ], 500);
    }

    #[Put('status/{faq:\d+}')]
    public function updateStatus(FAQ $faq)
    {
        $updated = FAQ::where('translation_of', $faq->translation_of)->update([
            'is_active' => $faq->is_active == 1 ? 0 : 1
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
}