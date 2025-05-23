<?php

namespace Vietiso\Modules\Region\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Max;
use Vietiso\Core\ValidatedDTO\Rules\Nullable;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\Rules\TypeInteger;
use Vietiso\Core\ValidatedDTO\Rules\TypeString;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class CityDTO extends ValidatedDTO
{
    #[Required]
    #[TypeString]
    #[Max(255)]
    public $title;

    #[Required]
    #[TypeString]
    public $intro;

    #[Required]
    #[TypeString]
    #[Max(255)]
    public $image;

    #[Required]
    #[TypeString]
    #[Max(255)]
    public $banner;

    #[Required('Vui lòng nhập ngôn ngữ.')]
    public $langId;

    #[Required]
    #[TypeString]
    public $content;

    #[Required]
    #[TypeString]
    public $contentGettingTo;

    #[Required]
    #[TypeString]
    public $contentWhenToVisit;

    #[Required]
    #[TypeString]
    public $contentAccessibility;

    #[Nullable]
    #[TypeInteger]
    public $translationOf = 0;

    #[TypeInteger]
    public $regionId;
}