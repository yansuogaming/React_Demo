<?php

namespace Vietiso\Core\Process;

use Symfony\Component\Process\Process as SymfonyProcess;

class ProcessResult
{
    /**
     * Create a new process result instance.
     */
    public function __construct(protected SymfonyProcess $process) {}

    /**
     * Get the original command executed by the process.
     *
     * @return string
     */
    public function command(): string
    {
        return $this->process->getCommandLine();
    }

    /**
     * Determine if the process was successful.
     */
    public function successful(): bool
    {
        return $this->process->isSuccessful();
    }

    /**
     * Determine if the process failed.
     */
    public function failed(): bool
    {
        return !$this->successful();
    }

    /**
     * Get the exit code of the process.
     */
    public function exitCode(): ?int
    {
        return $this->process->getExitCode();
    }

    /**
     * Get the standard output of the process.
     */
    public function output()
    {
        return $this->process->getOutput();
    }

    /**
     * Determine if the output contains the given string.
     */
    public function seeInOutput(string $output): bool
    {
        return str_contains($this->output(), $output);
    }

    /**
     * Get the error output of the process.
     */
    public function errorOutput(): string
    {
        return $this->process->getErrorOutput();
    }

    /**
     * Determine if the error output contains the given string.
     */
    public function seeInErrorOutput(string $output): bool
    {
        return str_contains($this->errorOutput(), $output);
    }

    /**
     * Throw an exception if the process failed.
     *
     * @throws \Illuminate\Process\Exceptions\ProcessFailedException
     */
    public function throw(?callable $callback = null): static
    {
        if ($this->successful()) {
            return $this;
        }

        $exception = new ProcessFailedException($this);

        if ($callback) {
            $callback($this, $exception);
        }

        throw $exception;
    }

    /**
     * Throw an exception if the process failed and the given condition is true.
     *
     * @throws \Throwable
     */
    public function throwIf(bool $condition, ?callable $callback = null): static
    {
        if ($condition) {
            return $this->throw($callback);
        }

        return $this;
    }
}