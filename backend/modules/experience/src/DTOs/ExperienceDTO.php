<?php

namespace Vietiso\Modules\Experience\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\Rules\TypeString;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class ExperienceDTO extends ValidatedDTO
{
    #[Required]
    #[TypeString]
    public $title;

    #[Required]
    #[TypeString]
    public $content;

    #[Required]
    #[TypeString]
    public $image;
}