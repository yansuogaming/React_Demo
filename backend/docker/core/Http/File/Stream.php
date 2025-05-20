<?php

namespace Vietiso\Core\Http\File;

class Stream extends File
{
    public function getSize(): int|false
    {
        return false;
    }
}