<?php

namespace Vietiso\Core\Database\Model;

use Vietiso\Core\Collection\Collection as BaseCollection;

class Collection extends BaseCollection
{
    public function toQuery()
    {
        $model = $this->first();
        if (!$model) {
            throw new \LogicException('Unable to create query for empty collection.');
        }

        return $model->newModelQuery()->whereIn(
            $model->getKeyName(),
            array_map(fn ($model) => $model->getKey(), $this->items)
        );
    }
}