<?php

namespace Vietiso\Core\ValidatedDTO\Rules;

use Attribute;
use Vietiso\Core\ValidatedDTO\Property;
use Vietiso\Core\ValidatedDTO\Rule;
use libphonenumber\PhoneNumberUtil;

#[Attribute(Attribute::TARGET_PROPERTY)]
class Phone extends Rule
{
    public function __construct(
        protected ?string $region = null,
        protected string $message = 'The :attribute is invalid.'
    ) {}

    public function check(mixed &$value, array &$values, Property $property): bool
    {
        if (empty($value)) {
            return false;
        }

        $phoneUtil = PhoneNumberUtil::getInstance();
        return $phoneUtil->isValidNumber($phoneUtil->parse($value, $this->region));
    }
}