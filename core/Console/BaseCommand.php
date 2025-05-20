<?php

namespace Vietiso\Core\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Vietiso\Core\App;

abstract class BaseCommand extends Command
{
    protected string $signature;

    protected string $description = '';

    public function __construct(protected App $app, protected InputInterface $input, protected OutputInterface $output)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $segments = explode(' {', $this->signature);
            
        $command = array_shift($segments);
        $this->setName($command);
        if ($this->description) {
            $this->setDescription($this->description);
        }

        foreach ($segments as $segment) {
            $segment = rtrim($segment, '}');
            if (strpos($segment, '--') === 0) {
                $segment = ltrim($segment, '--');
                $this->addOptionCommand($segment);
            } else {
                $this->addArgumentCommand($segment);
            }
        }
    }

    private function addOptionCommand(string $optionCommand): void
    {
        $segments = explode(':', $optionCommand);
        $description = '';
        if (!empty($segments[1])) {
            $description = trim($segments[1]);
        }

        $segments = explode('|', $segments[0]);
        $shortcut = null;
        $optionCommand = $segments[0];
        if (!empty($segments[1])) {
            $shortcut = $segments[0];
            $optionCommand = $segments[1];
        }

        $defaultValue = null;
        if (str_contains($optionCommand, '=')) {
            $defaultValue = trim(explode('=', $optionCommand)[1]);
        }

        preg_match('/\w+/', $optionCommand, $match);
        if (!empty($match[0])) {
            $mode = str_contains($optionCommand, '?') || !str_contains($optionCommand, '=')
                ? InputOption::VALUE_NONE : InputOption::VALUE_REQUIRED;
            if (str_contains($optionCommand, '*')) {
                $mode |= InputOption::VALUE_IS_ARRAY;
            }
            $this->addOption(
                $match[0],
                $shortcut,
                $mode,
                $description,
                $defaultValue
            );
        }
    }

    private function addArgumentCommand(string $argumentCommand): void
    {
        $segments = explode(':', $argumentCommand);
        $argument = $segments[0];
        preg_match('/\w+/', $argument, $match);

        if (!empty($match[0])) {
            $mode = str_contains($argument, '?') ? InputArgument::OPTIONAL : InputArgument::REQUIRED;
            if (str_contains($argument, '*')) {
                $mode |= InputArgument::IS_ARRAY;
            }
            $this->addArgument(
                $match[0],
                null,
                $mode,
                !empty($segments[1]) ? $segments[1] : '',
            );
        }
    }

    abstract public function handle(): void;

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->handle();
        return Command::SUCCESS;
    }
}