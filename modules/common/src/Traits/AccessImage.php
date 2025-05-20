<?php

namespace Vietiso\Modules\Common\Traits;

use Vietiso\Core\Database\Attributes\Accessor;

trait AccessImage
{
    #[Accessor('image')]
    public function getImage($image)
    {
        return config('app.url') . $image;
    }
}
