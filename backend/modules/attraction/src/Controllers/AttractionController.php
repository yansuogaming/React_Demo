<?php

namespace Vietiso\Modules\Attraction\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Support\Str;

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

    #[Get('{slug}')]
    public function detailAttraction(Request $request, string $slug)
    {
        $res = Http::travelIndex($request->input('lang_id', 'en'))
            ->post("/resources/get_detail_by_slug/$slug", [
                'has_gallery' => 1,
                'openFrom' => '_view',
            ]);

        $res = $res->json();
        $resource = $res['oneResources'];
        $more_information = isset($resource['more_information']) && !empty($resource['more_information']) 
			? @json_decode($resource['more_information'], true)
            : [];
		$list_local_fields = isset($more_information['local']) && !empty($more_information['local']) 
			? $more_information['local']
            : [];
		$links_bookings = isset($more_information['links_booking']) && !empty($more_information['links_booking']) 
			? $more_information['links_booking']
            : [];
		$list_vieweds = isset($response['list_vieweds']) && !empty($response['list_vieweds']) 
			? $response['list_vieweds']
            : [];
		$logs_viewed = isset($resource['logs_viewed']) && !empty($resource['logs_viewed']) 
			? json_decode($resource['logs_viewed'], true)
            : [];

        $services = [
            'tour' => 'Vé tham quan',
            'hotel' => 'Ở đâu?',
            'shopping' => 'Mua sắm',
            'transport' => 'Phương tiện',
            'restaurant' => 'Ăn gì ngon?',
        ];

		if (!empty($links_bookings)) {
			$tmp = $links_bookings;
			$links_bookings = array();
			foreach($tmp as $key => $val) {
				$kk = (int) !empty($val);
				$links_bookings[$key] = array('url' => $val, 'order' => $kk, 'title' => $services[$key]);
			}
			$order_no = @array_column($links_bookings, 'order');
			@array_multisort($order_no, SORT_DESC, $links_bookings);
		} else {
			foreach(array('tour','hotel','shopping','transport','restaurant') as $key) {
				$links_bookings[$key] = array(
					'url' => '',
					'title' => $services[$key]
				);
			}
		}
        return Response::json([
            ...$res,
            'links_bookings' => $links_bookings,
        ]);
    }
}