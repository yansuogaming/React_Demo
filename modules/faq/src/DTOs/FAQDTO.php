<?php

namespace Vietiso\Modules\Faq\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Nullable;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\Rules\TypeInteger;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class FAQDTO extends ValidatedDTO
{
    #[Required('Vui lòng nhập câu hỏi.')]
    public $question;

    #[Required('Vui lòng nhập ngôn ngữ.')]
    public $langId;

    #[Required('Vui lòng nhập câu trả lời.')]
    public $answers;

    #[Nullable]
    #[TypeInteger]
    public $translationOf = 0;
}