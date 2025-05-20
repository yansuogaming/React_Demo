<?php

namespace Vietiso\Core\ValidatedDTO;

use Vietiso\Core\ValidatedDTO\Traits\FileTrait;

abstract class Rule
{
    use FileTrait;

    protected Validator $validator;

    protected string $message;

    protected bool $preRenderMesage = false;

    abstract public function check(mixed &$value, array &$values, Property $property): bool;

    public function setValidator(Validator $validator): void
    {
        $this->validator = $validator;
    }

    public function message(mixed $value, string $attribute): string
    {
        if (!$this->preRenderMesage) {
            $this->message = $this->preRenderMesage($this->message, $attribute);
        }

        $message = $this->message;
        if (is_scalar($value)) {
            $message = str_replace(':value', $value, $message);
        }

        return $message;
    }

    protected function preRenderMesage(string $message, string $attribute): string
    {
        $message = str_replace(':attribute', $attribute, $message);
        $properties = get_object_vars($this);
        unset($properties['message']);
        $properties = array_keys($properties);
        foreach ($properties as $property) {
            $method = sprintf("render%sText", ucfirst($property));
            if (method_exists($this, $method)) {
                $message = str_replace(":$property", $this->{$method}(), $message);
                continue;
            }

            if (is_scalar($this->{$property})) {
                $message = str_replace(":$property", (string) $this->{$property}, $message);
            }
        }
        $this->preRenderMesage = true;
        return $message;
    }
}