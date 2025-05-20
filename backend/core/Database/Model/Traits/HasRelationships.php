<?php

namespace Vietiso\Core\Database\Model\Traits;

use Vietiso\Core\Database\Model\Relations\HasOne;
use Vietiso\Core\Database\Model\Relations\Relation;
use ReflectionMethod;

trait HasRelationships
{
    protected array $relations = [];

    protected function registerRelationships()
    {
        $this->relations = array_map(function (ReflectionMethod $method) {
            return $method->getName();
        }, $this->getReflectionMethodsByReturnType(Relation::class));
    }

    protected function hasOne(string $model, string $foreignKey, string $primaryKey): HasOne
    {
        $model = new $model();
        return new HasOne($model->newModelQuery(), $this, $foreignKey, $primaryKey);
    }
}