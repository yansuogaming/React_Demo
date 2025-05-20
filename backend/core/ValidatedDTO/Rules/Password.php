<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\Support\Str;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Password extends Rule
{
    protected string $message = 'The password :attribute is invalid.';

    public function __construct(protected array $rules = []) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        foreach ($this->rules as $method => &$params) {
            $method = 'check' . Str::studly($method);
            if (!$this->{$method}($value, ...$params)) {
                return false;
            }
        }
        return true;
    }

    protected function checkMin(mixed &$value, int &$min, string &$message = ''): bool
    {
        if (mb_strlen($value) < $min) {
            $this->message = $message;
            return false;
        }
        return true;
    }

    protected function checkMax(mixed &$value, int &$max, string &$message = ''): bool
    {
        if (mb_strlen($value) > $max) {
            $this->message = $message;
            return false;
        }
        return true;
    }

    protected function checkLetters(mixed &$value, string &$message): bool
    {
        if (!preg_match('/\pL/u', $value)) {
            $this->message = $message;
            return false;
        }

        return true;
    }

    protected function checkNumbers(mixed &$value, string &$message): bool
    {
        if (!preg_match('/\pN/u', $value)) {
            $this->message = $message;
            return false;
        }

        return true;
    }
}