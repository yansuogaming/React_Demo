<?php

namespace Vietiso\Core\Server\Events;

class StartEvent extends ServerEvent
{
    public function handle($server): void
    {
        $url = config('app.url');
        \Termwind\render(<<<HTML
            <div>
                <div class="text-green">Start running on [$url]</div>
                <div class="font-bold text-yellow">Press Ctr+C to stop the server</div>
            </div>
        HTML);
    }
}