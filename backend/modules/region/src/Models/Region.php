<?php

namespace Vietiso\Modules\Region\Models;

use Vietiso\Core\Database\Model\Model;

class Region extends Model
{
    protected string $table = 'regions';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (Region $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->created_at = $now;
        });
    }
}