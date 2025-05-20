<?php

namespace Vietiso\Core\Http\Exception;

class LengthRequiredHttpException extends HttpException
{
    public function __construct(string $message = '', ?\Throwable $previous = null, int $code = 0, array $headers = [])
    {
        parent::__construct(411, $message, $previous, $headers, $code);
    }
}
