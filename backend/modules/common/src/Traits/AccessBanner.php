<?php

namespace Vietiso\Modules\Common\Traits;

use Vietiso\Core\Database\Attributes\Accessor;

trait AccessBanner
{
    #[Accessor('banner')]
    public function getBanner($banner)
    {
        if (empty($banner) || filter_var($banner, FILTER_VALIDATE_URL)) {
            return $banner;
        }

        return config('app.url') . $banner;
    }
}
