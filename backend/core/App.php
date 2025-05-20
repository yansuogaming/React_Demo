<?php

namespace Vietiso\Core;

use Vietiso\Core\Container\ContainerInterface;
use Vietiso\Core\Container\Container;
use Closure;

class App extends Container
{
    const NAME = 'Vietiso framework';

    const VERSION = '0.1';

    protected Closure $withMiddleware;

    protected Closure $withProviders;

    public readonly Closure $terminateRequest;

    protected static ?App $instance = null;

    protected ?string $basePath;

    public static function getInstance(): static
    {
        if (is_null(static::$instance)) {
            \Swoole\Coroutine::set(['hook_flags' => SWOOLE_HOOK_ALL]);

            static::$instance = new static;
            static::$instance->singleton('container', function () {
                return static::$instance;
            });
            static::$instance->alias('container', ContainerInterface::class);
            static::$instance->alias('container', static::class);
        }

        return static::$instance;
    }

    public static function service(string $id): mixed
    {
        return static::getInstance()->get($id);
    }

    public static function hasService(string $id): bool
    {
        return static::getInstance()->has($id);
    }

    public function getCoreVersion(): string
    {
        return static::VERSION;
    }

    public function getCoreName(): string
    {
        return static::NAME;
    }

    /**
     * Lưu đường dẫn chạy application.
     */
    public function setBasePath(string $path): static
    {
        if (chdir($path)) {
            $this->basePath = $path;
        }
        return $this;
    }

    /**
     * Lấy đường dẫn chạy application.
     */
    public function getBasePath(): string
    {
        return $this->basePath;
    }

    /**
     * Lấy đường dẫn thư mục làm việc hiện tại.
     */
    public static function root(): string
    {
        return static::getInstance()->getBasePath();
    }

    public static function setLocale(string $locale): void
    {
        
    }

    /**
     * Lấy đường dẫn của config.
     */
    public function getConfigPath(): string
    {
        return join_paths($this->basePath, 'config');
    }

    /**
     * Lấy đường dẫn của storage bạn đang sử dụng.
     */
    public function storagePath(?string $path = null): string
    {
        if (is_null($path)) {
            return join_paths($this->basePath, 'storage');
        }

        return join_paths($this->basePath, 'storage', ltrim($path, DS));
    }
    
    /**
     * Đăng ký global middleware
     */
    public function withMiddleware(Closure $callback): static
    {
        $this->withMiddleware = $callback;
        return $this;
    }

    /**
     * Đăng ký các provider mặc định
     */
    public function withProviders(Closure $callback): static
    {
        $this->withProviders = $callback;
        return $this;
    }

    /**
     * Khởi tạo console application.
     */
    public function start(): int
    {
        $this->bootServiceProviders();
        $this->registerGlobalMiddlewares();
        return $this->get('console')->run();
    }

    public function terminateRequest(Closure $callback): static
    {
        $this->terminateRequest = $callback;
        return $this;
    }

    protected function registerGlobalMiddlewares(): void
    {
        $callback = $this->withMiddleware;
        $callback($this->get('middleware.collection'));
    }

    /**
     * Đăng ký các service provider và khỏi động nó.
     */
    public function bootServiceProviders(): void
    {
        $providers = require 'providers.php';
        $providerManager = $this->get('service_provider_manager');
        $callback = $this->withProviders;
        $callback($providerManager);
        foreach ($providers as $provider) {
            $providerManager->register($provider);
        }
        $providerManager->boot();
    }
}