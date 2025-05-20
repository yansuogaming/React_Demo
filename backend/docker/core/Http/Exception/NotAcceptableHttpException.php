<?php

namespace Vietiso\Core\Http\Exception;

class NotAcceptableHttpException extends HttpException
{
    public function __construct(string $message = '', ?\Throwable $previous = null, int $code = 0, array $headers = [])
    {
        parent::__construct(406, $message, $previous, $headers, $code);
    }
}
