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

        $res = Http::tourdb('en')
            ->post('/tour/list-tour', [
                'per_page' => 10,
                'keyword' => $keyword,
                'order_by' => 'asc',
                'lang_id' => $langId,
                'duration' => $duration,
                'departure_point' => $departure_point,
                'travel_style' => $travel_style,
            ])->json();
        dd($res);

        $itineraries = collect(!empty($res['itineraries']) ? $res['itineraries'] : []);

        // $cities = City->where('lang_id', $langId)
        //     ->select('city_code', 'title')
        //     ->get();

        return Response::json([
            'itineraries' => $itineraries,
            'total_page' => !empty($res['total_page']) ? $res['total_page'] : 0
        ]);
    }
}
