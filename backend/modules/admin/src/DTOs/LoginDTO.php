<?php

namespace Vietiso\Modules\Admin\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Email;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class LoginDTO extends ValidatedDTO
{
    #[Required('Vui lòng nhập email.')]
    #[Email('Email không hợp lệ.')]
    public $email;

    #[Required('Vui lòng nhập password.')]
    public $password;
}