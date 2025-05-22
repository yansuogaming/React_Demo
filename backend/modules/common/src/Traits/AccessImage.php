<?php

namespace Vietiso\Modules\Common\Traits;

use Vietiso\Core\Database\Attributes\Accessor;

trait AccessImage
{
    #[Accessor('image')]
    public function getImage($image)
    {
        return filter_var($image, FILTER_VALIDATE_URL)
            ? $image
            : config('app.url') . $image;
    }
}
