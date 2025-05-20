<?php

namespace Vietiso\Core\Table;

use Swoole\Table as SwooleTable;

class Table extends SwooleTable
{
    public static function create(int $size, array $fields)
    {
        return new static($size, $fields);
    }
}