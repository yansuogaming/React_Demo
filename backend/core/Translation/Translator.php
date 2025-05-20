<?php

namespace Vietiso\Core\Translation;

use Vietiso\Core\Translation\Loader\LoaderInterface;

class Translator
{
    public function __construct(protected LoaderInterface $loader) {}

    
}