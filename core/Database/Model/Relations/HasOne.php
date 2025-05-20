<?php

namespace Vietiso\Core\Database\Model\Relations;

use Vietiso\Core\Database\Model\Builder;
use Vietiso\Core\Database\Model\Model;

class HasOne extends Relation
{
    public function __construct(
        protected Builder $builder,
        protected Model $parent,
        protected string $foreignKey,
        protected string $primaryKey
    )
    {
    }
    
    public function getResults()
    {
        return $this->builder
            ->where(
                $this->foreignKey,
                $this->parent->{$this->primaryKey}
            )->first();
    }

    public function create(array $fields): Model|false
    {
        $fields[$this->foreignKey] = $this->parent->{$this->primaryKey};
        return $this->builder->create($fields);
    }

    
}