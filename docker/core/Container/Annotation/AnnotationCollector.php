<?php

namespace Vietiso\Core\Annotation;

use Vietiso\Core\Collection\Arr;

class AnnotationCollector
{
    protected static array $container = [];

    public static function collectClass(string $class, string $annotation, $value): void
    {
        static::$container[$class]['c'][$annotation] = $value;
    }

    public static function collectClassConstant(string $class, string $constant, string $annotation, $value): void
    {
        static::$container[$class]['cc'][$constant][$annotation] = $value;
    }

    public static function collectProperty(string $class, string $property, string $annotation, $value): void
    {
        static::$container[$class]['p'][$property][$annotation] = $value;
    }

    public static function collectMethod(string $class, string $method, string $annotation, $value): void
    {
        static::$container[$class]['m'][$method][$annotation] = $value;
    }

    public static function clear(?string $key = null): void
    {
        if ($key) {
            unset(static::$container[$key]);
        } else {
            static::$container = [];
        }
    }

    public static function getClassConstantsByAnnotation(string $annotation): array
    {
        $result = [];
        foreach (static::$container as $class => $metadata) {
            foreach ($metadata['cc'] ?? [] as $constant => $_metadata) {
                if ($value = $_metadata[$annotation] ?? null) {
                    $result[] = ['class' => $class, 'constant' => $constant, 'annotation' => $value];
                }
            }
        }
        return $result;
    }

    public static function getClassesByAnnotation(string $annotation): array
    {
        $result = [];
        foreach (static::$container as $class => $metadata) {
            if (! isset($metadata['c'][$annotation])) {
                continue;
            }
            $result[$class] = $metadata['c'][$annotation];
        }
        return $result;
    }

    public static function getMethodsByAnnotation(string $annotation): array
    {
        $result = [];
        foreach (static::$container as $class => $metadata) {
            foreach ($metadata['m'] ?? [] as $method => $_metadata) {
                if ($value = $_metadata[$annotation] ?? null) {
                    $result[] = ['class' => $class, 'method' => $method, 'annotation' => $value];
                }
            }
        }
        return $result;
    }

    public static function getPropertiesByAnnotation(string $annotation): array
    {
        $properties = [];
        foreach (static::$container as $class => $metadata) {
            foreach ($metadata['p'] ?? [] as $property => $_metadata) {
                if ($value = $_metadata[$annotation] ?? null) {
                    $properties[] = ['class' => $class, 'property' => $property, 'annotation' => $value];
                }
            }
        }
        return $properties;
    }

    public static function getClassAnnotation(string $class, string $annotation)
    {
        return Arr::get(static::$container, "$class.c.$annotation");
    }

    public static function getClassAnnotations(string $class)
    {
        return Arr::get(static::$container, "$class.c");
    }

    public static function getClassConstantAnnotation(string $class, string $constant)
    {
        return Arr::get(static::$container, "$class.cc.$constant");
    }

    public static function getClassMethodAnnotation(string $class, string $method)
    {
        return Arr::get(static::$container, "$class.m.$method");
    }

    public static function getClassPropertyAnnotation(string $class, string $property)
    {
        return Arr::get(static::$container, "$class.p.$property");
    }
}
