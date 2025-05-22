<?php

namespace Vietiso\Modules\Region\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Nullable;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\Rules\TypeInteger;
use Vietiso\Core\ValidatedDTO\Rules\TypeString;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class CityDTO extends ValidatedDTO
{
    #[Required]
    #[TypeString]
    public $title;

    #[Required]
    #[TypeString]
    public $intro;

    #[Required]
    #[TypeString]
    public $image;

    #[Required('Vui lòng nhập ngôn ngữ.')]
    public $langId;

    #[Nullable]
    #[TypeInteger]
    public $translationOf = 0;
}