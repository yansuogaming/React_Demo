<?php

// use League\Flysystem\Ftp\FtpAdapter;
use League\Flysystem\Local\LocalFilesystemAdapter;

return [
    'default' => 'local',

    'storage' => [
        'local' => [
            'driver' => LocalFilesystemAdapter::class,
            'root' => storage_path()
        ],

        // 'ftp' => [
        //     'driver' => FtpAdapter::class,
        //     'host' => 'ftp.example.com',
        //     'username' => 'username',
        //     'password' => 'password',
        //     // Optional FTP Settings...
        //     'port' => env('FTP_PORT', 21),
        //     'root' => env('FTP_ROOT'),
        //     'passive' => true,
        //     'ssl' => true,
        //     'timeout' => 30,
        // ]
    ],
];