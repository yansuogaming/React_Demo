<?php

namespace Vietiso\Modules\Experience\Models;

use Vietiso\Core\Database\Model\Model;
use Vietiso\Modules\Common\Traits\AccessImage;

class ExperienceType extends Model
{
    use AccessImage;

    protected string $table = 'experience_types';

    protected ?string $primaryKey = 'id';

    protected static function booted(): void
    {
        static::creating(function (ExperienceType $experienceType) {
            $now = date('Y-m-d H:i:s');
            $experienceType->created_at = $now;
        });

        static::updating(function (ExperienceType $experienceType) {
            $now = date('Y-m-d H:i:s');
            $experienceType->updated_at = $now;
        });
    }
}