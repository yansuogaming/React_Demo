<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Email extends Rule
{
    protected string $pattern;

    public function __construct(
        protected bool $precise = false,
        protected string $message = 'The :attribute is not valid email.'
    )
    {
        if ($precise) {
            $this->pattern = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
        } else {
            $this->pattern = "/^\S+@\S+\.\S+$/";
        }
    }

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        return !empty($value) && preg_match($this->pattern, $value);
    }
}