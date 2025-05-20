<?php

use Vietiso\Modules\Event\Controllers\EventServiceProvider;
use Vietiso\Modules\Faq\Controllers\EventController;

return [
    'name' => 'Quản lý event',
    'providers' => [
        EventServiceProvider::class
    ],
    'controllers' => [
        EventController::class
    ]
];