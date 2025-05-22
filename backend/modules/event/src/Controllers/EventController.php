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

        $res = Http::eventdb('vn')
            ->post('/events', [
                'per_page' => $perPage,
                'keyword' => $keyword,
                'order_by' => $orderBy,
                'lang_id' => $langId,
                'order_field' => $orderField
            ])->json();
        return Response::json($res);
    }

    #[Get('list-ongoing-and-upcomming')]
    public function getListEventGoingOn(Request $request)
    {
        $res = Http::eventdb('vn')
            ->get('/list-going-on');
        return Response::json($res->json());
    }

    #[Get('/list-approved')]
    public function getAllApprovedEvents(Request $request)
    {
        $type = $request->input('type', 'all');
        $keyword = $request->input('keyword', '');
        $langId = $request->input('lang_id', '');

        $res = Http::eventdb('vn')
            ->post('/events', [
                'per_page' => 16,
                'keyword' => $keyword,
                'order_by' => 'asc',
                'lang_id' => $langId,
                'type' => $type
            ])->json();
        return Response::json($res);
    }
}