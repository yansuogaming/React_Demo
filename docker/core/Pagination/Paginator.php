<?php

namespace Vietiso\Core\Pagination;

use Vietiso\Core\App;
use Vietiso\Core\Twig\TwigEnvironment;

class Paginator implements \JsonSerializable
{
    protected ?int $totalPage = null;

    public function __construct(
        protected iterable $data,
        protected int $perPage,
        protected int $page = 1,
        protected int $from = 0,
        protected ?string $pageName = null,
        protected ?int $total = null,
        protected ?TwigEnvironment $twig = null
    )
    {
        $this->twig?->render($this->pageName);
    }

    public function getData(): iterable
    {
        return $this->data;
    }

    public function getPerPage(): int
    {
        return $this->perPage;
    }

    public function getCurrentPage(): int
    {
        return $this->page;
    }

    public function getTotal(): int
    {
        return $this->total;
    }

    public function getTotalPage(): int
    {
        if (is_null($this->totalPage)) {
            $this->totalPage = ceil($this->total/$this->perPage);
        }
        return $this->totalPage;
    }

    public function getFrom(): int
    {
        return $this->from;
    }

    public function getTo(): int
    {
        if ($this->getCurrentPage() < $this->getTotalPage()) {
            return $this->getFrom() - 1 + $this->getPerPage();
        }

        return $this->getTotal();
    }

    public function toArray(): array
    {
        $request = App::service('request');
        $page = $this->getCurrentPage();
        $totalPage = $this->getTotalPage();
        return [
            'current_page' => $page,
            'data' => $this->getData(),
            'first_page_url' => $request->fullUrlWithQuery([
                'page' => 1
            ]),
            'from' => $this->getFrom(),
            'last_page' => $totalPage,
            'last_page_url' => $request->fullUrlWithQuery([
                'page' => $totalPage
            ]),
            'next_page_url' => $page < $totalPage ? $request->fullUrlWithQuery([
                'page' => $page + 1
            ]) : null,
            'path' => $request->url(),
            'per_page' => $this->getPerPage(),
            'prev_page_url' => $page > 1 ? $request->fullUrlWithQuery([
                'page' => $page - 1
            ]) : null,
            'to' => $this->getTo(),
            'total' => $this->getTotal()
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
