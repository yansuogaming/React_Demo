<?php

namespace Vietiso\Modules\Admin\Models;

use Vietiso\Core\Database\Model\Model;

class Admin extends Model
{
    protected string $table = 'admins';

    protected ?string $primaryKey = 'id';

    protected array $hidden = [
        'password'
    ];

    protected static function booted(): void
    {
        static::creating(function (Admin $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->created_at = $now;
        });
    }
}