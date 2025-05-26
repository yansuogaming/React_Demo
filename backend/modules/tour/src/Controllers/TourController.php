<?php

namespace Vietiso\Modules\Tour\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\City\Models\City;

#[Group('api/tour')]
class TourController
{
    #[Get('/list-trending')]
    public function getListApproved()
    {
        $tours = Http::tourdb('en')->get('/tour/list-trending');
        return Response::json($tours->json());
    }

    // #[Get('/list-tour')]
    // public function getListTour()
    // {
    //     $tours = Http::tourdb('en')->get('/tour/list-tour');
    //     // dd($tours);
    //     return Response::json($tours->json());
    // }

    #[Post('/list-tour')]
    public function getAllItineraries(Request $request)
    {
        $duration = $request->input('duration', '');
        $departure_point = $request->input('departure_point', '');
        $travel_style = $request->input('travel_style', '');
        $keyword = $request->input('keyword', '');
        $langId = $request->input('lang_id', 'en');
        $rating = $request->input('rating', 0);

        $res = Http::tourdb('en')
            ->post('/tour/list-tour', [
                'per_page' => 10,
                'keyword' => $keyword,
                'order_by' => 'desc',
                'lang_id' => $langId,
                'duration' => $duration,
                'departure_point' => $departure_point,
                'travel_style' => $travel_style,
                'rating' => $rating,
            ])->json();
        // ->json()
        // dd($res);
        return Response::json([
            'itineraries' => !empty($res['data']['list_tours']) ? $res['data']['list_tours'] : [],
            'total_page' => !empty($res['data']['total_page']) ? $res['data']['total_page'] : 0,
        ]);
    }

    #[Post('/list-departure')]
    public function getListDeparture(Request $request)
    {
        $langId = $request->input('lang_id', 'en');

        $res = Http::tourdb('en')
            ->post('/tour/list-departure', [
                'lang_id' => $langId,
            ])->json();

        return Response::json([
            'list_departure' => !empty($res['list_departure']) ? $res['list_departure'] : [],
        ]);
    }

    #[Post('/list-travelstyle')]
    public function getListTravelStyle(Request $request)
    {
        $langId = $request->input('lang_id', 'en');

        $res = Http::tourdb('en')
            ->post('/tour/list-travelstyle', [
                'lang_id' => $langId,
            ])->json();

        return Response::json([
            'list_travelstyle' => !empty($res['list_travelstyle']) ? $res['list_travelstyle'] : [],
        ]);
    }
}
