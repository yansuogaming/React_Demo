<?php

namespace Vietiso\Core\Asset;

use Vietiso\Core\Http\BinaryFileResponse;
use Vietiso\Core\Http\Exception\NotFoundHttpException;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Http\ResponseHeaderBag;
use Vietiso\Core\Module\ModuleManager;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Session\Middleware\StartSession;

class AssetController
{
    public function __construct(protected ModuleManager $moduleManager) {}

    #[Get(
        uri: 'assets/{module}/{dirFile:.*}',
        excludedMiddlewares: [
            StartSession::class
        ]
    )]
    public function register(string $module, string $dirFile): BinaryFileResponse
    {
        if (!$this->moduleManager->has($module)) {
            throw new NotFoundHttpException();
        }

        $module = $this->moduleManager->get($module);
        $file = "{$module->getPath()}/assets/$dirFile";
        if (!is_file($file) || strpos($dirFile, '/..') !== false) {
            throw new NotFoundHttpException();
        }

        return Response::download($file)
            ->setContentDisposition(ResponseHeaderBag::DISPOSITION_INLINE);
    }
}