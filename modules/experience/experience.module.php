<?php

use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\Experience\Controllers\ExperienceController;
use Vietiso\Modules\Experience\Controllers\ExperienceTypeController;

return [
    'name' => 'Module experience',
    'middlewares' => [
        Authenticate::class
    ],
    'providers' => [
        
    ],
    'controllers' => [
        ExperienceController::class,
        ExperienceTypeController::class,
    ],
    'commands' => [
        
    ],
    'tasks' => [

    ]
];