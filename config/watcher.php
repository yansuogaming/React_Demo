<?php

return [
    'use_polling' => true,

    // Thời gian lặp khi dùng polling
    'interval' => 1000,

    'watches' => [
        // Chỉ theo dõi các file .php, .twig, .env, vietiso
        "^.+\.php$",
        "^.+\.twig$",
        "^.+\.env$",
        // "^.+vietiso$",
    ],

    "ignores" => [
        // Không theo rõi các file trong vendor, storage hay node_modules
        "^(?!.*(\/vendor\/|\/storage\/|\/node_modules\/)).*"
    ]
];