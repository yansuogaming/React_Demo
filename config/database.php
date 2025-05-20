<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Tên kết nối cơ sở dữ liệu mặc định
    |--------------------------------------------------------------------------
    |
    | Tại đây bạn có thể chỉ định kết nối cơ sở dữ liệu nào bên dưới mà bạn muốn
    | để sử dụng làm kết nối mặc định cho các hoạt động cơ sở dữ liệu.
    | Đây là kết nối sẽ được sử dụng trừ khi không có kết nối khác
    | được chỉ định rõ ràng khi bạn thực hiện một truy vấn hoặc một câu lệnh.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | Kết nối cơ sở dữ liệu
    |--------------------------------------------------------------------------
    |
    | Dưới đây là danh sách các driver đang hỗ trợ.
    |
    */

    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', 3306),
            'database' => env('DB_DATABASE', 'vietiso'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'prefix' => 'default_',
            'options' => [
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
            ],
            'max_idle' => 10,
            'heartbeat' => 6000
        ],

        'mongodb' => [
            'driver' => 'mongodb',
        ],
    ],
];