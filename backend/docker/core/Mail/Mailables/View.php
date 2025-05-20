<?php

namespace Vietiso\Core\Mail\Mailables;

use Vietiso\Core\App;

class View extends Html
{
    public function __construct(protected string $path, protected array $variables) {}

    public function __tostring(): string
    {
        return App::service('twig.environment')->render($this->path, $this->variables);
    }
}