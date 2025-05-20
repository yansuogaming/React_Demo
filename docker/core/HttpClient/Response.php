<?php

namespace Vietiso\Core\HttpClient;

use LogicException;
use Stringable;
use Vietiso\Core\Collection\Arr;
use Vietiso\Core\Collection\Collection;

class Response implements Stringable
{
    protected ?array $decoded = null;

    public function __construct(protected $swooleClient) {}

    public function body(): string
    {
        return $this->swooleClient->body;
    }

    public function json($key = null, $default = null): mixed
    {
        if (! $this->decoded) {
            $this->decoded = json_decode($this->body(), true);
        }

        if (is_null($key)) {
            return $this->decoded;
        }

        return Arr::get($this->decoded, $key, $default);
    }

    public function object()
    {
        return json_decode($this->body(), false);
    }

    public function collect($key = null): Collection
    {
        return new Collection($this->json($key));
    }

    public function status(): int
    {
        return $this->swooleClient->statusCode;
    }

    public function header(string $key): array
    {
        return $this->swooleClient->headers;
    }

    public function getSwooleClient()
    {
        return $this->swooleClient;
    }

    public function ok(): bool
    {
        return $this->status() === 200;
    }

    public function successful(): bool
    {
        return $this->status() >= 200 && $this->status() < 300;
    }

    public function redirect(): bool
    {
        return $this->status() >= 300 && $this->status() < 400;
    }

    public function created(): bool
    {
        return $this->status() === 201;
    }

    public function accepted(): bool
    {
        return $this->status() === 202;
    }

    public function noContent(): bool
    {
        return $this->status() === 204;
    }

    public function movedPermanently(): bool
    {
        return $this->status() === 301;
    }

    public function found(): bool
    {
        return $this->status() === 302;
    }

    public function badRequest(): bool
    {
        return $this->status() === 400;
    }

    public function unauthorized(): bool
    {
        return $this->status() === 401;
    }

    public function paymentRequired(): bool
    {
        return $this->status() === 402;
    }

    public function forbidden(): bool
    {
        return $this->status() === 403;
    }

    public function notFound(): bool
    {
        return $this->status() === 404;
    }

    public function requestTimeout(): bool
    {
        return $this->status() === 408;
    }

    public function conflict(): bool
    {
        return $this->status() === 409;
    }

    public function unprocessableEntity(): bool
    {
        return $this->status() === 422;
    }

    public function tooManyRequests(): bool
    {
        return $this->status() === 429;
    }

    public function serverError(): bool
    {
        return $this->status() >= 500;
    }

    public function clientError(): bool
    {
        $status = $this->status();
        return $status >= 400 && $status <= 499;
    }

    public function failed(): bool
    {
        return $this->serverError() || $this->clientError();
    }

    public function offsetExists($offset): bool
    {
        return isset($this->json()[$offset]);
    }

    public function offsetGet($offset): mixed
    {
        return $this->json()[$offset];
    }

    public function offsetSet(string $offset, mixed $value): void
    {
        throw new LogicException('Response data may not be mutated using array access.');
    }

    public function offsetUnset(string $offset): void
    {
        throw new LogicException('Response data may not be mutated using array access.');
    }

    public function __tostring(): string
    {
        return $this->body();
    }
}