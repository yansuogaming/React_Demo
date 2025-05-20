<?php

namespace Vietiso\Core\Http\Exception;

class ControllerDoesNotReturnResponseException extends \LogicException
{
    public function __construct(string $message, callable $controller, string $file, int $line)
    {
        parent::__construct($message);

        if (!$controllerDefinition = $this->parseControllerDefinition($controller)) {
            return;
        }

        $this->file = $controllerDefinition['file'];
        $this->line = $controllerDefinition['line'];
        $r = new \ReflectionProperty(\Exception::class, 'trace');
        $r->setValue($this, array_merge([
            [
                'line' => $line,
                'file' => $file,
            ],
        ], $this->getTrace()));
    }

    private function parseControllerDefinition(callable $controller): ?array
    {
        if (\is_string($controller) && str_contains($controller, '::')) {
            $controller = explode('::', $controller);
        }

        if (\is_array($controller)) {
            try {
                $r = new \ReflectionMethod($controller[0], $controller[1]);

                return [
                    'file' => $r->getFileName(),
                    'line' => $r->getEndLine(),
                ];
            } catch (\ReflectionException) {
                return null;
            }
        }

        if ($controller instanceof \Closure) {
            $r = new \ReflectionFunction($controller);

            return [
                'file' => $r->getFileName(),
                'line' => $r->getEndLine(),
            ];
        }

        if (\is_object($controller)) {
            $r = new \ReflectionClass($controller);

            try {
                $line = $r->getMethod('__invoke')->getEndLine();
            } catch (\ReflectionException) {
                $line = $r->getEndLine();
            }

            return [
                'file' => $r->getFileName(),
                'line' => $line,
            ];
        }

        return null;
    }
}
