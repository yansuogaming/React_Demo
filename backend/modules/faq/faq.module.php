<?php

use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\Faq\Controllers\FAQController;

return [
    'name' => 'Quản lý faq',
    'middlewares' => [
        Authenticate::class
    ],
    'providers' => [
        
    ],
    'controllers' => [
        FAQController::class
    ],
    'commands' => [
        
    ],
    'tasks' => [

    ]
];