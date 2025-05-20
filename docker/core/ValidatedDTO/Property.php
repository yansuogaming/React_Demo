<?php

namespace Vietiso\Core\ValidatedDTO;

use ReflectionClass;
use Vietiso\Core\Support\Str;
use Vietiso\Core\ValidatedDTO\Rules\Bail;
use Vietiso\Core\ValidatedDTO\Rules\Nullable;

class Property
{
    public readonly bool $hasNullable;
    public readonly bool $hasBail;
    public array $rules;

    public function __construct(
        public readonly string $name,
        public readonly string $realName,
        array $rules = []
    ) {
        $this->hasNullable = isset($rules[Nullable::class]);
        $this->hasBail = isset($rules[Bail::class]);
        unset($rules[Nullable::class]);
        unset($rules[Bail::class]);

        foreach ($rules as $rule) {
            $ruleName = (new ReflectionClass($rule))->getName();
            $this->rules[$ruleName] = $rule;
        }
    }
}