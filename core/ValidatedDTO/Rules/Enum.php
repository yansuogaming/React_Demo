<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Vietiso\Core\ValidatedDTO\Rule;
use Vietiso\Core\ValidatedDTO\ValidatedDTO;
use Vietiso\Core\ValidatedDTO\Property;

class Enum extends Rule
{
    protected string $message = 'The selected :attribute is invalid.';

    public function __construct(
        protected string $enum,
        protected array $only = [],
        protected array $except = []
    ) {
        if (enum_exists($enum)) {
            throw \InvalidArgumentException('');
        }

        foreach ($only as $item) {
            if (!$item instanceof $enum) {
                throw \InvalidArgumentException('');
            }
        }

        foreach ($except as $item) {
            if (!$item instanceof $enum) {
                throw \InvalidArgumentException('');
            }
        }
    }

    public function check(mixed $value, array $values, Property $property): bool
    {

    }
}