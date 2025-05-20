<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/meta')]
class MetaController
{
    #[Get('{city:\d+}')]
    public function getWeatherCity($city)
    {
           
    }
}