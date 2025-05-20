<?php

namespace Vietiso\Modules\Experience\Models;

use Vietiso\Core\Database\Model\Model;
use Vietiso\Modules\Common\Traits\AccessImage;

class Experience extends Model
{
    use AccessImage;

    protected string $table = 'experiences';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (Experience $experience) {
            $now = date('Y-m-d H:i:s');
            $experience->created_at = $now;
        });

        static::updating(function (Experience $experience) {
            $now = date('Y-m-d H:i:s');
            $experience->updated_at = $now;
        });
    }
}