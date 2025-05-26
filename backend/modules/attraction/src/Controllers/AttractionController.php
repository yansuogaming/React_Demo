<?php

namespace Vietiso\Modules\Attraction\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/attraction')]
class AttractionController
{
    #[Get('/')]
    public function getListAttraction(Request $request)
    {
        $page = $request->input('page', 1);
        $perPage = $request->input('per_page', 10);
        $res = Http::travelIndex($request->input('lang_id', 'en'))
            ->get('/attractions', [
                'page' => $page,
                'per_page' => $perPage
            ]);
        
        return Response::json($res->json());
    }
}