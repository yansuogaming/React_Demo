<?php

namespace Vietiso\Modules\Common\DTOs;

use Vietiso\Core\ValidatedDTO\Rules\Image;
use Vietiso\Core\ValidatedDTO\Rules\Required;
use Vietiso\Core\ValidatedDTO\Rules\Size;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

class UploadImageDTO extends ValidatedDTO
{
    #[Required('Vui lòng upload ảnh.')]
    #[Image('Đây không phải là ảnh')]
    #[Size('5MB', 'Bạn chỉ được upload ảnh dưới :size')]
    public $image;
}