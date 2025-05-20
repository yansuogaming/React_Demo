<?php

namespace Vietiso\Core\Watcher\Driver;

use Swoole\Timer;
use Vietiso\Core\Watcher\Event;
use Swoole\Coroutine\WaitGroup;
use function \Swoole\Coroutine\run;

class Polling implements DriverInterface
{
    protected array $resource = [];

    protected array $events = [];

    protected array $paths = [];

    protected float $interval = 300;

    protected bool $booted = false;

    protected bool $running = false;

    public function on(Event|array $events, callable $callback): static
    {
        if ($events instanceof Event) {
            $events = [$events];
        }
        foreach ($events as $event) {
            if (isset($this->events[$event->value])) {
                $this->events[$event->value][] = $callback;
                continue;
            }
            $this->events[$event->value] = [$callback];
        }
        return $this;
    }

    public function add(string $path, ?string $regex = null): static
    {
        $path = realpath($path);
        $this->paths[$path] = $regex;
        return $this;
    }

    public function setTimeInterval(float $interval): static
    {
        $this->interval = $interval;
        return $this;
    }

    protected function iterateFiles(callable $callback)
    {
        foreach ($this->paths as $path => $regex) {
            if (file_exists($path)) {
                $iterator = new \RecursiveIteratorIterator(
                    new \RecursiveDirectoryIterator($path, \FilesystemIterator::SKIP_DOTS),
                    \RecursiveIteratorIterator::SELF_FIRST
                );
                foreach ($iterator as $file) {
                    if (empty($regex) || ($regex && preg_match("/$regex/", $file))) {
                        $callback($file);
                    }
                }
            }
        }
    }


    protected function detectEvent(string $filePath): ?Event
    {
        $mTime = $this->getMTime($filePath);
        if (!isset($this->resource[$filePath])) {
            $this->resource[$filePath] = [$mTime, is_dir($filePath)];
            if ($this->resource[$filePath][1]) {
                return Event::ADD_DIR;
            }
            return Event::ADD;
        }

        if ($this->resource[$filePath][0] == $mTime) {
            return null;
        }

        if ($this->resource[$filePath][0] < $mTime) {
            $this->resource[$filePath][0] = $mTime;
            return Event::CHANGE;
        }

        return Event::ERROR;
    }

    protected function fireEvent(Event $event, ?string $filePath = null): void
    {
        if (!empty($listCallback = &$this->events[$event->value])) {
            foreach ($listCallback as $callback) {
                $callback($event, $filePath);
            }
            unset($listCallback);
        }

        if (!empty($listCallback = &$this->events[Event::ALL->value])) {
            foreach ($listCallback as $callback) {
                $callback($event, $filePath);
            }
            unset($listCallback);
        }
    }

    protected function handleCheck()
    {
        $wg = new WaitGroup();
        go(function () use ($wg) {
            $wg->add();
            $this->iterateFiles(function (string &$filePath) {
                $event = $this->detectEvent($filePath);
                if ($event) {
                    $this->fireEvent($event, $filePath);
                }
            });
            $wg->done();
        });

        go(function () use ($wg) {
            $wg->add();
            foreach ($this->resource as $filePath => $file) {
                if (!file_exists($filePath)) {
                    if ($file[1]) {
                        $event = Event::UNLINK_DIR;
                    } else {
                        $event = Event::UNLINK;
                    }
                    $this->fireEvent($event, $filePath);
                    unset($this->resource[$filePath]);
                }
            }
            $wg->done();
        });
        $wg->wait();
    }

    public function run(): void
    {
        run(function () {
            // Thu thập các file và folder ban đầu
            $this->iterateFiles(function (string &$filePath) {
                $this->resource[$filePath] = [
                    $this->getMTime($filePath),
                    is_dir($filePath)
                ];
            });
            $this->booted = true;
            $this->fireEvent(Event::READY);
    
            Timer::tick($this->interval, function () {
                if ($this->running) {
                    return;
                }

                $this->running = true;
                $this->handleCheck();
                $this->running = false;
            });
        });
    }

    protected function getMTime(string $path): int
    {
        clearstatcache(true, $path);
        return filemtime($path);
    }
}