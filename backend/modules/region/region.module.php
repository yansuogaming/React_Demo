<?php

use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\Region\Controllers\RegionController;

return [
    'name' => 'Quản lý vùng miền',
    'middlewares' => [
        Authenticate::class
    ],
    'controllers' => [
        RegionController::class
    ]
];