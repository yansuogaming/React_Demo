<?php

namespace Vietiso\Core\ValidatedDTO;

use Vietiso\Core\Support\Str;

class Validator
{
    protected array $schemas = [];

    public function compile(string $schema): void
    {
        $properties = [];
        $reflectionClass = new \ReflectionClass($schema);
        $reflectionProperties = $reflectionClass->getProperties();
        foreach ($reflectionProperties as $reflectionProperty) {
            $propertyName = $reflectionProperty->getName();
            if (!isset($values[$propertyName])) {
                $propertyNameSnake = Str::snake($propertyName);
            }

            $rules = $reflectionProperty->getAttributes(Rule::class, \ReflectionAttribute::IS_INSTANCEOF);
            if (!empty($rules)) {
                foreach ($rules as $index => $rule) {
                    $rules[$rule->getName()] = $rule->newInstance();
                    $rules[$rule->getName()]->setValidator($this);
                    unset($rules[$index]);
                }

                $properties[] = new Property($propertyNameSnake, $propertyName, $rules);
            }
        }
        $this->schemas[$schema] = $properties;
    }

    public function has(string $schema): bool
    {
        return isset($this->schemas[$schema]);
    }

    public function validate(string $schema, array $values): ValidatedDTO
    {
        $errors = [];
        $properties = $this->schemas[$schema];
        $dto = new $schema();
        foreach ($properties as $property) {
            $value = $values[$property->name] ?? null;
            if ($property->hasNullable && empty($value)) {
                continue;
            }

            foreach ($property->rules as $ruleName => $rule) {
                if (!$rule->check($value, $values, $property, $errors)) {
                    $errors[$property->name][] = $rule->message($value, $property->name);
                    if ($property->hasBail) {
                        break;
                    }

                    continue;
                }

                if ($ruleName === 'type_list') {
                    foreach ($value as $index => $item) {
                        $errorsBag = $this->validate($rule->schema, $item);
                        if (is_array($errorsBag)) {
                            foreach ($errorsBag as $field => &$message) {
                                $errors["{$property->name}.$index.$field"] = $message;
                            }
                        }
                    }
                    continue;
                }

                if ($ruleName === 'type_associative_array') {
                    $errorsBag = $this->validate($rule->schema, $value);
                    if (is_array($errorsBag)) {
                        foreach ($errorsBag as $field => &$message) {
                            $errors["{$property->name}.$field"][] = $message;
                        }
                        continue;
                    }
                }
            }

            $dto->{$property->realName} = $value;
        }

        if (empty($errors)) {
            return $dto;
        }

        throw new ValidationException('The given data was invalid.', $schema, $errors);
    }
}