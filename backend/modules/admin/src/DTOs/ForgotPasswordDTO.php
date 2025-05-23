<?php

namespace Vietiso\Modules\Admin\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Email;
use Vietiso\Core\ValidatedDTO\Rules\Exists;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Modules\Admin\Models\Admin;

class ForgotPasswordDTO extends ValidatedDTO
{
    #[Required('Vui lòng nhập email.')]
    #[Email('Email không hợp lệ.')]
    #[Exists(Admin::class, 'email')]
    public $email;
}