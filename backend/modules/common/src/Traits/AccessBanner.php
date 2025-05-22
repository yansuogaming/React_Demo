<?php

namespace Vietiso\Modules\Common\Traits;

use Vietiso\Core\Database\Attributes\Accessor;

trait AccessBanner
{
    #[Accessor('banner')]
    public function getBanner($banner)
    {
        return filter_var($banner, FILTER_VALIDATE_URL)
            ? $banner
            : config('app.url') . $banner;
    }
}
