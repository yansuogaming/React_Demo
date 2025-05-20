<?php

namespace Vietiso\Core\Database;

use Vietiso\Core\Database\Model\Builder;
use Vietiso\Core\Database\Model\Model;

interface Scope
{
    public function apply(Builder $builder, Model $model): void;
}