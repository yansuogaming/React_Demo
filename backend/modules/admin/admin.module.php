<?php

use Vietiso\Modules\Admin\Controllers\AuthController;
use Vietiso\Modules\Admin\Middlewares\Authenticate;

return [
    'name' => 'Module admin',
    'middlewares' => [
        Authenticate::class
    ],
    'providers' => [
        
    ],
    'controllers' => [
        AuthController::class
    ],
    'commands' => [
        
    ],
    'tasks' => [

    ]
];