<?php

namespace Vietiso\Core\ValidatedDTO;

use Vietiso\Core\ValidatedDTO\ValidationException;
use Vietiso\Core\Support\Arrayable;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Http\Request;
use IteratorAggregate;
use ArrayIterator;
use Traversable;
use Vietiso\Core\Support\Str;

class ValidatedDTO implements IteratorAggregate, Arrayable
{
    public function all(): array
    {
        return $this->toArray();
    }

    public function toArray(): array
    {
        $array = get_object_vars($this);
        foreach ($array as $key => $value) {
            unset($array[$key]);
            $array[Str::snake($key)] = $value;
        }
        return $array;
    }

    public function toJson(): string
    {
        return json_encode($this->toArray());
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator($this);
    }

    public static function failedValidation(Request $request, ValidationException $th): Response
    {
        if ($request->wantsJson()) {
            return Response::json([
                'message' => $th->getMessage(),
                'errors' => $th->getErrors()
            ])->setStatusCode($th->getStatusCode());
        }

        return Response::redirect()->back()
            ->withErrors($th->getErrors())
            ->withInput();
    }
}