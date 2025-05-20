<?php

namespace Vietiso\Core\Http\Exception;

use Vietiso\Core\ErrorHandler\ErrorRenderer\HtmlErrorRenderer;
use Vietiso\Core\ErrorHandler\ErrorRenderer\JsonErrorRenderer;
use Vietiso\Core\ValidatedDTO\ValidationException;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Log\Log;
use Vietiso\Core\App;
use Throwable;
use Vietiso\Core\ErrorHandler\Exception\DumperException;

class Handler
{
    public function __construct(protected App $app) {}

    public function render(Request $request, Throwable $th): Response
    {
        try {
            Log::error($th);
            if ($th instanceof HttpException) {
                if ($request->wantsJson()) {
                    return Response::json([
                        'message' => $th->getMessage(),
                    ])->setStatusCode($th->getStatusCode());
                }
    
                return Response::view(
                    '@http_exception/http_exception.twig', [
                    'status' => $th->getStatusCode(),
                    'message' => $th->getMessage(),
                ])->setStatusCode($th->getStatusCode());
            }
    
            if ($th instanceof ValidationException) {
                return $th->getDTO()::failedValidation($request, $th);
            }

            return $this->handlerServerError($request, $th);
        } catch (Throwable $th) {
            Log::error($th);
            return $this->handlerServerError($request, $th);
        }
    }

    protected function handlerServerError(Request $request, Throwable $th): Response
    {
        if (config('app.debug')) {
            if ($request->wantsJson() && !($th instanceof DumperException)) {
                return JsonErrorRenderer::render($th);
            }

            return HtmlErrorRenderer::render($th);
        }

        if ($request->wantsJson()) {
            return Response::json([
                'message' => 'Server Error',
            ])->setStatusCode(500);
        }

        return Response::view('@http_exception/http_exception.twig', [
            'status' => 500,
            'message' => 'Server Error'
        ]);
    }
}