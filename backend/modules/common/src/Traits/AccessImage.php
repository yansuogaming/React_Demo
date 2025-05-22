<?php

namespace Vietiso\Modules\Common\Traits;

use Vietiso\Core\Database\Attributes\Accessor;

trait AccessImage
{
    #[Accessor('image')]
    public function getImage($image)
    {
        if (empty($image) || filter_var($image, FILTER_VALIDATE_URL)) {
            return $image;
        }

        return config('app.url') . $image;
    }
}
