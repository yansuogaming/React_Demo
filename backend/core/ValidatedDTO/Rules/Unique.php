<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Closure;
use Attribute;
use Vietiso\Core\Database\DB;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\ValidatedDTO\Property;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Unique extends Rule
{
    public function __construct(
        protected string $tableOrModel,
        protected ?string $field = null,
        protected ?Closure $ignoreField = null,
        protected ?string $connection = null,
        protected string $message = null
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (is_null($this->field)) {
            $this->field = $property->name;
        }

        if (class_exists($this->tableOrModel)) {
            $model = $this->tableOrModel;
            $model = new $model();
            return $model->where($this->field, $value)->doesntExist();
        }

        return DB::connection($this->connection)
            ->query()
            ->from($this->tableOrModel)
            ->where($this->field, $value)
            ->exists();
    }
}