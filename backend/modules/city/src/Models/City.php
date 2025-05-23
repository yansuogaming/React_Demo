<?php

namespace Vietiso\Modules\City\Models;

use Vietiso\Core\Database\Model\Model;
use Vietiso\Modules\Common\Traits\AccessBanner;
use Vietiso\Modules\Common\Traits\AccessImage;

class City extends Model
{
    use AccessImage, AccessBanner;

    protected string $table = 'cities';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (City $city) {
            $now = date('Y-m-d H:i:s');
            $city->created_at = $now;
        });

        static::updating(function (City $city) {
            $now = date('Y-m-d H:i:s');
            $city->updated_at = $now;
        });
    }
}