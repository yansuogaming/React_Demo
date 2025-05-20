<?php

namespace Vietiso\Core\Filesystem;

interface FilesystemInterface
{
    /**
     * The public visibility setting.
     *
     * @var string
     */
    const VISIBILITY_PUBLIC = 'public';

    /**
     * The private visibility setting.
     *
     * @var string
     */
    const VISIBILITY_PRIVATE = 'private';

    /**
     * Get the full path to the file that exists at the given relative path.
     */
    public function path(string $path): string;

    /**
     * Determine if a file exists.
     */
    public function exists(string $path): bool;

    /**
     * Get the contents of a file.
     */
    public function get(string $path): ?string;

    /**
     * Get a resource to read the file.
     */
    public function readStream(string $path): mixed;

    /**
     * Write the contents of a file.
     */
    public function put(string $path, $contents, mixed $options = []): bool;

    /**
     * Store the uploaded file on the disk.
     */
    public function putFile($path, $file = null, $options = []): string|false;

    /**
     * Store the uploaded file on the disk with a given name.
     */
    public function putFileAs($path, $file, string|array|null $name = null, mixed $options = []): string|false;

    /**
     * Write a new file using a stream.
     */
    public function writeStream(string $path, $resource, array $options = []): bool;

    /**
     * Get the visibility for the given path.
     */
    public function getVisibility(string $path): string;

    /**
     * Set the visibility for the given path.
     */
    public function setVisibility(string $path, string $visibility): bool;

    /**
     * Prepend to a file.
     */
    public function prepend(string $path, string $data): bool;

    /**
     * Append to a file.
     */
    public function append(string $path, string $data): bool;

    /**
     * Delete the file at a given path.
     */
    public function delete(string|array $paths): bool;

    /**
     * Copy a file to a new location.
     */
    public function copy(string $from, string $to): bool;

    /**
     * Move a file to a new location.
     */
    public function move(string $from, string $to): bool;

    /**
     * Get the file size of a given file.
     */
    public function size(string $path): int;

    /**
     * Get the file's last modification time.
     */
    public function lastModified(string $path): int;

    /**
     * Get an array of all files in a directory.
     */
    public function files(?string $directory = null, bool $recursive = false): array;

    /**
     * Get all of the files from the given directory (recursive).
     */
    public function allFiles(?string $directory = null): array;

    /**
     * Get all of the directories within a given directory.
     */
    public function directories(?string $directory = null, $recursive = false): array;

    /**
     * Get all (recursive) of the directories within a given directory.
     */
    public function allDirectories(?string $directory = null): array;

    /**
     * Create a directory.
     */
    public function makeDirectory(string $path): bool;

    /**
     * Recursively delete a directory.
     */
    public function deleteDirectory(string $directory): bool;
}