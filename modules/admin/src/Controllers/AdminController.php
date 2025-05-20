<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;

#[Group('api/admin')]
class AdminController
{
    #[Get('profile')]
    public function showProfile(Request $request)
    {
        
    }

    #[Post('profile')]
    public function updateProfile()
    {

    }
}