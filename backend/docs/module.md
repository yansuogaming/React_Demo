# Khởi tạo module
**Module sinh ra để tách biệt các logic nghiệp vụ của một dự án tránh sự nhầm lẫn code chồng tréo lên nhau dưới đây là cách tạo một module quản lý user**

1. **Tạo folder user trong folder modules. Sau đó tạo file user.module.php tất cả các file chứa thông tin module đều có đuôi là .module.php**

2. **Cho application viết về module vừa khởi tạo**  
    Nếu module là user thì sẽ tạo một file user.module.php
    Và định nghĩa các field cơ bản cho module đó như sau
    ```php
        <?php

        use Vietiso\Modules\User\Controllers\AuthController;
        use Vietiso\Modules\User\Controllers\UserController;
        use Vietiso\Modules\User\Middlewares\UserLoginMiddleware;

        return [
            'name' => 'Module user',
            'description' => 'Quản lý user',

            // Danh sách các middleware mà khi có một request tới module này sẽ phải đi qua
            'middlewares' => [
                UserLoginMiddleware::class
            ],

            // Các provider mà module này đưa ra
            'providers' => [
                
            ],

            // Danh sách các controller mà module khai báo
            'controllers' => [
                UserController::class,
                AuthController::class
            ],

            // Tạo thêm command phục vụ cho các mục đích khác nhau như tạo command cronjob,...
            'commands' => [
                
            ],
        ];
    ```

3. **Cấu trúc đầy đủ của một module như sau**  
    /user    
    │── /assets    
    │   ├── /js    
    │   ├── /css    
    │   ├── /images    
    │   └── /fonts  
    │── /src                # Chứa logic của module  
    │   ├── /Commands  
    │   ├── /Controllers  
    │   ├── /DTOs   
    │   ├── /Enums   
    │   ├── /Mails  
    │   ├── /Middlewares  
    │   ├── /Modules  
    │   ├── /Rules  
    │   ├── /Services  
    │   └── /Repositories  
    │── /views              # Các file view  
    │   ├── /components  
    │   ├── /layouts  
    │   └── /pages  
    └── user.module.php     # Cấu hình thông tin user 