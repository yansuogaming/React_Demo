<?php

namespace Vietiso\Core\Pipeline;

use Closure;
use Vietiso\Core\App;

class Pipeline
{
    protected array $params = [];

    protected array $pipes = [];

    protected Closure $next;
    
    protected $destination;

    protected int $currentStack;

    protected string $method = 'handle';

    public function __construct()
    {
        $this->next = function (mixed ...$params): mixed {
            $this->currentStack++;
            if (isset($this->pipes[$this->currentStack])) {
                $params['next'] = $this->next;
                return App::make($this->pipes[$this->currentStack])
                    ->{$this->method}(...$params);
            }

            $destination = $this->destination;
            return $destination(...$params);
        };
    }

    /**
     * Set the object being sent through the pipeline.
     */
    public function send(mixed ...$params): static
    {
        $this->params = $params;
        return $this;
    }

    /**
     * Set the array of pipes.
     */
    public function through(string|object ...$pipes): static
    {
        $this->pipes = $pipes;
        return $this;
    }

    /**
     * Push additional pipes onto the pipeline.
     */
    public function pipe(string|object ...$pipes): static
    {
        $this->pipes = [...$this->pipes, ...$pipes];
        return $this;
    }

    /**
     * Set the method to call on the pipes.
     */
    public function via(string $method): static
    {
        $this->method = $method;
        return $this;
    }

    /**
     * Run the pipeline with a final destination callback.
     */
    public function then(callable $destination): mixed
    {
        $this->currentStack = -1;
        $this->destination = $destination;
        $next = $this->next;
        return $next(...$this->params);
    }

    /**
     * Run the pipeline and return the result.
     */
    public function thenReturn(): mixed
    {
        return $this->then(fn(mixed ...$params) => $params);
    }
}