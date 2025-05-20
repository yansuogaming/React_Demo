<?php

namespace Vietiso\Modules\Event\Controllers;

use Vietiso\Core\Container\ServiceProvider;
use Vietiso\Core\HttpClient\Facade\Http;

class EventServiceProvider extends ServiceProvider
{
    public function register()
    {
    }

    public function boot()
    {
        Http::macro('eventdb', function (string $langId) {
            return Http::withHeaders([
                'Content-Type' => 'application/json',
                'Accept-Language' => $langId
            ])
            ->withToken(env('EVENTDB_TOKEN'));
        });
    }
}