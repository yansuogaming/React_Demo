<?php

namespace Vietiso\Modules\User\Models;

use Vietiso\Core\Database\Model\Model;

class FAQ extends Model
{
    protected string $table = 'faqs';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (FAQ $admin) {
            $now = date('Y-m-d H:i:s');
            $admin->created_at = $now;
        });
    }
}