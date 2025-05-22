<?php

namespace Vietiso\Modules\Common\Models;

use Vietiso\Core\Database\Model\Model;
use Vietiso\Core\Date\Date;

class Album extends Model
{
    protected string $table = 'albums';

    protected ?string $primaryKey = 'id';

    public static function getCache(string $key, callable $callback, int $ttl)
    {
        
    }
}