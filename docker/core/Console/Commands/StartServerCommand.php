<?php

declare(ticks = 1);

namespace Vietiso\Core\Console\Commands;

use Vietiso\Core\App;
use Vietiso\Core\Console\BaseCommand;
use Vietiso\Core\Process\Facade\Process;

class StartServerCommand extends BaseCommand
{
    protected string $signature = 'start:serve {--W|watch :
        Theo dõi sự thay đổi của file và reload lại application}';

    protected string $description = 'Khởi tạo server application';

    public function handle(): void
    {
        if ($this->input->getOption('watch')) {
            $this->createServerAndWatchFile();
            return;
        }
        $this->app->get('server')->start();
    }

    public function createServerAndWatchFile(): void
    {
        $watcher = Process::path(join_paths(App::root(), 'core'))
            ->forever()
            ->start('php watcher.php');

        $app = $this->buildApp();
        while ($watcher->running() || $app->running()) {
            $buffer = $watcher->latestOutput();
            if ($buffer == 'Reload') {
                $app->stop();
                $app = $this->buildApp();
                \Termwind\render(<<<HTML
                    <div class="mb-1">Server has been restarted</div>
                HTML);
            }

            if ($outApp = $app->latestOutput()) {
                fwrite(STDOUT, $outApp);
            }

            if ($errorApp = $app->latestErrorOutput()) {
                fwrite(STDOUT, $errorApp);
            }
            usleep(100);
        }
    }

    protected function buildApp()
    {
        App::service('env')->load();
        $app = Process::tty()
            ->path(App::root())
            ->forever()
            ->start('php vietiso start:serve');
        return $app;
    }
}