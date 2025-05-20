<?php

namespace Vietiso\Modules\Common\Controllers;

use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;

#[Group('api/settings')]
class SettingController
{
    #[Get('/')]
    public function showSetting()
    {
        
    }

    #[Get('profile')]
    public function showProfile()
    {
        
    }

    #[Post('profile')]
    public function updateProfile()
    {

    }
}