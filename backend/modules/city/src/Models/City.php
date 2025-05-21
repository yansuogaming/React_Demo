<?php

namespace Vietiso\Modules\City\Models;

use Vietiso\Core\Context\Context;
use Vietiso\Core\Database\Model\Model;

class City extends Model
{
    protected string $table = 'cities';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (City $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->created_at = $now;
            $admin->created_user_id = Context::get('admin')['id'];
        });

        static::updating(function (City $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->updated_at = $now;
            $admin->updated_user_id = Context::get('admin')['id'];
        });
    }
}