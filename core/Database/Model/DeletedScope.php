<?php

namespace Vietiso\Core\Database\Model;

use Vietiso\Core\Database\Model\Builder;
use Vietiso\Core\Database\Model\Model;
use Vietiso\Core\Database\Scope;

class DeletedScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        $builder->where('deleted_at', '2024-05-23 04:33:41', '!=');
    }
}