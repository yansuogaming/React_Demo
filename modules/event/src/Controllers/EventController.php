<?php

namespace Vietiso\Modules\Faq\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/event')]
class EventController
{
    #[Get('/')]
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $keyword = $request->input('keyword', '');
        $orderBy = $request->input('order_by', 'desc');
        $langId = $request->input('lang_id');
        $orderField = $request->input('order_field', 'created_at');

        $res = Http::post('http://eventdb.itourism.vn/api/events', [
            'per_page' => $perPage,
            'keyword' => $keyword,
            'order_by' => $orderBy,
            'lang_id' => $langId,
            'order_field' => $orderField
        ])->json();
        return Response::json($res);
    }

    #[Get('list-going-on')]
    public function getListEventGoingOn(Request $request)
    {
        $res = Http::eventdb('vn')
            ->get('http://eventdb.itourism.vn/api/list-going-on');
        return Response::json($res->json());
    }
}