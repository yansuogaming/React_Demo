<?php

namespace Vietiso\Core\Server\Events;

use Vietiso\Core\App;

class ServerEvent
{
    public function __construct(protected App $app) {}
}