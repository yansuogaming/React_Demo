<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\Database\DB;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Exists extends Rule
{
    public function __construct(
        protected string $tableOrModel,
        protected string $field = 'id',
        protected ?string $connection = null,
        protected string $message = 'The value of :attribute does not exist.'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (class_exists($this->tableOrModel)) {
            $model = $this->tableOrModel;
            $model = new $model();
            return $model->where($this->field, $value)->exists();
        }

        return DB::connection($this->connection)
            ->query()
            ->from($this->tableOrModel)
            ->where($this->field, $value)
            ->exists();
    }
}