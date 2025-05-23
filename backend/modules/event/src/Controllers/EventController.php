<?php

namespace Vietiso\Modules\Faq\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Modules\City\Models\City;

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
        $langId = $request->input('lang_id', 'en');

        $res = Http::eventdb('vn')
            ->post('/events', [
                'per_page' => 16,
                'keyword' => $keyword,
                'order_by' => 'asc',
                'lang_id' => $langId,
                'type' => $type
            ])->json();
        
        $events = collect(!empty($res['events']) ? $res['events'] : []);
        $listCityCode = $events->pluck('city_code');

        if (!empty($listCityCode)) {
            $cities = City::whereIn('city_code', $listCityCode)
                ->where('lang_id', $langId)
                ->select('city_code', 'title')
                ->get();
            $events = $events->map(function ($event) use ($cities) {
                foreach ($cities as $city) {
                    if ($event['city_code'] == $city['city_code']) {
                        $event['city'] = $city['title'];
                        break;
                    }
                }
                return $event;
            });
        }
        
        return Response::json([
            'events' => $events,
            'total_page' => !empty($res['total_page']) ? $res['total_page'] : 0
        ]);
    }
}