<?php

namespace Vietiso\Core\Console;

use Symfony\Component\Console\Application as ConsoleApplication;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Command\Command;
use Vietiso\Core\Console\Commands\StartServerCommand;
use Vietiso\Core\App;

class Application extends ConsoleApplication
{
    public function __construct(
        protected App $app,
        protected InputInterface $input,
        protected OutputInterface $output
    ) {
        parent::__construct($app->getCoreVersion(), $app->getCoreName());
    }

    /**
     * Chạy application hiện tại.
     * 
     * @return int Nếu không có lỗi sẽ return 0 và ngược lại sẽ return 1 error code.
     */
    public function run(?InputInterface $input = null, ?OutputInterface $output = null): int
    {
        $this->registerCoreCommands();
        return parent::run(
            $this->input,
            $this->output
        );
    }

    protected function doRunCommand(Command $command, InputInterface $input, OutputInterface $output): int
    {
        $defaultCommands = [
            'list', 
            'help', 
            'about'
        ];
        if (in_array($command->getName(), $defaultCommands)) {
$logo = '
 _    ___________________________ ____ 
| |  / /  _/ ____/_  __/  _/ ___// __ \
| | / // // __/   / /  / / \__ \/ / / /
| |/ // // /___  / / _/ / ___/ / /_/ / 
|___/___/_____/ /_/ /___//____/\____/ 
';

            $output->writeln($logo);
        }
        return parent::doRunCommand($command, $input, $output);
    }

    /**
     * Đăng ký core commands.
     */
    protected function registerCoreCommands(): void
    {
        $coreCommands = [
            StartServerCommand::class
        ];

        foreach ($coreCommands as $command) {
            $this->add(new $command($this->app, $this->input, $this->output));
        }
    }
}