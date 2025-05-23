<?php

use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\City\Controllers\CityController;

return [
    'name' => 'Module city',

    'middlewares' => [
        Authenticate::class
    ],

    'controllers' => [
        CityController::class
    ],

];