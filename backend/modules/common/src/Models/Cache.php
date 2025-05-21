<?php

namespace Vietiso\Modules\Common\Models;

use Vietiso\Core\Database\Model\Model;
use Vietiso\Core\Date\Date;

class Cache extends Model
{
    protected string $table = 'cache';

    protected ?string $primaryKey = 'id';

    public static function getCache(string $key, callable $callback, int $ttl)
    {
        $item = static::where('key', $key)
            ->first();
        if (!empty($item)) {
            $expiryTime = new \DateTime($item->expiry_time);
            $expiryTime = $expiryTime->getTimestamp();
            if ($expiryTime <= time()) {
                return unserialize($item->value);
            }

            $value = $callback();
            $item->expiry_time = Date::now()->addSeconds($ttl);
            $item->value = serialize($value);
            $item->save();
            return $value;
        }


        $value = $callback();
        static::insert([
            'key' => $key,
            'value' => serialize($value),
            'expiry_time' => Date::now()->addSeconds($ttl)
        ]);
        return $value;
    }
}