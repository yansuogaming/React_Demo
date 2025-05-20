<?php

namespace Vietiso\Core\Filesystem;

use Vietiso\Core\Support\Manager;

class FilesystemFactory extends Manager
{
    public function getDefaultDriver(): string
    {
        return config('filesystems.default', 'local');
    }

    public function createLocalDriver()
    {
        
    }   
}