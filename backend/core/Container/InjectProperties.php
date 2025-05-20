<?php

namespace Vietiso\Core\Container;

use Vietiso\Core\App;

class InjectProperties
{
    /**
     * Automatically inject services into object properties.
     */
    public static function handle(object $object): void
    {
        $properties = (new \ReflectionObject($object))->getProperties();
        if (!empty($properties)) {
            foreach ($properties as $property) {
                if (
                    (!$property->isInitialized($object)
                        || empty($property->getValue($object)))
                    && !empty($attributes = $property->getAttributes(Inject::class))
                ) {
                    $instance = (string) end($attributes)->newInstance();
                    $property->setValue($object, App::service($instance));
                }
            }
        }
    }
}