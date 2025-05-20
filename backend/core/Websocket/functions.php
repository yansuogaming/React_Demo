<?php

namespace Vietiso\Core\WebSocket;

use Vietiso\Core\WebSocket\Frame;

function swoole_get_flags_from_frame(Frame $frame): int
{
    $flags = 0;
    if ($frame->getFin()) {
        $flags |= SWOOLE_WEBSOCKET_FLAG_FIN;
    }
    if ($frame->getRSV1()) {
        $flags |= SWOOLE_WEBSOCKET_FLAG_RSV1;
    }
    if ($frame->getRSV2()) {
        $flags |= SWOOLE_WEBSOCKET_FLAG_RSV2;
    }
    if ($frame->getRSV3()) {
        $flags |= SWOOLE_WEBSOCKET_FLAG_RSV3;
    }
    if ($frame->getMask()) {
        $flags |= SWOOLE_WEBSOCKET_FLAG_MASK;
    }

    return $flags;
}