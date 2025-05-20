<?php

namespace Vietiso\Core\Http\Exception;

class UnauthorizedHttpException extends HttpException
{
    /**
     * @param string $challenge WWW-Authenticate challenge string
     */
    public function __construct(string $challenge, string $message = '', ?\Throwable $previous = null, int $code = 0, array $headers = [])
    {
        $headers['WWW-Authenticate'] = $challenge;

        parent::__construct(401, $message, $previous, $headers, $code);
    }
}
