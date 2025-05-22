<?php

namespace Vietiso\Modules\User\Controllers;

use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;

#[Group('api/user')]
class UserController
{
    #[Get('/login')]
    public function login()
    {

    }

    #[Get('/logout')]
    public function logout()
    {

    }
}