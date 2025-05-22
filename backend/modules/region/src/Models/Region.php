<?php

namespace Vietiso\Modules\Region\Models;

use Vietiso\Core\Context\Context;
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
            $admin->created_user_id = Context::get('admin')['id'];
        });

        static::updating(function (Region $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->updated_at = $now;
            $admin->updated_user_id = Context::get('admin')['id'];
        });
    }
}