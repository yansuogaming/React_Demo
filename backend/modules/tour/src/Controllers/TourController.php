<?php

namespace Vietiso\Modules\Tour\Controllers;

use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/tour')]
class TourController
{
    #[Get('/list-trending')]
    public function getListApproved()
    {
        $tours = Http::tourdb('en')->get('/tour/list-trending');
        return Response::json($tours->json());
    }

    #[Get('/list-tour')]
    public function getListTour()
    {
        $tours = Http::tourdb('en')->get('/tour/list-tour');
        // dd($tours);
        return Response::json($tours->json());
    }
}
