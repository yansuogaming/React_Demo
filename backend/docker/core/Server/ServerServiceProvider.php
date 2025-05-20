<?php

namespace Vietiso\Core\Server;

use Vietiso\Core\Container\ServiceProvider;

class ServerServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('server', function () {
            $driver = config('app.swoole.default');
            $server = new Server(
                config("app.swoole.server.$driver.driver"),
                config("app.swoole.server.$driver.host"),
                config("app.swoole.server.$driver.port"),
                config("app.swoole.server.$driver.mode"),
                config("app.swoole.server.$driver.socket_type"),
                config("app.swoole.server.$driver.configs")
            );

            foreach (config("app.swoole.server.$driver.events") as $event => $handle) {
                if (is_array($handle) && count($handle) === 2) {
                    $handle[0] = new $handle[0]($this->app);
                    $server->listen($event, $handle);
                }
            }

            return $server;
        });
    }
}