<?php

use Vietiso\Modules\Common\Controllers\CommonController;
use Vietiso\Modules\Common\Controllers\WeatherController;

return [
    'name' => 'Module common',
    'middlewares' => [],
    'controllers' => [
        CommonController::class,
        WeatherController::class
    ],
];