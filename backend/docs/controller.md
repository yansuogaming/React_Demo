# Http Controllers

## Giới thiệu
**Trong các hệ thống thời ông cha trước đây cái mà bây giờ chúng ta gọi là controller thì logic dự án đều được viết chung với giao diện và nhiều thứ khác như gọi đến một hệ thống thứ 3 để lấy dữ liệu.**  
**Nhưng hiện tại thì các dự án càng ngày càng phức tạp nên mô hình đó không còn được sử dụng nữa thay vào đó những người đi trước tạo ra mô hình View-Model-Controller-Service-Repository làm nền móng.**  
1. **View đảm nhiệm việc hiển thị dữ liệu**  
2. **Model đảm nhiệm việc đại diện cho thực thể của ứng dụng, định nghĩa các mối quan hệ giữa các thực thể đó. VD như user và product thì vai trò của model phải đảm nhiệm làm nổi bật lên được mối quan hệ giữa 2 đối tượng này để lập trình viên mới vào có thể hiểu được logic chung của dự án**  
3. **Controller đảm nhiệm điều phối các yêu cầu giữa View, Service và Model. Nó không đảm nhiệm việc viết logic vào trong đấy vì khi chúng ta viết lodic vào controller thì khả năng lặp lại logic là rất cao. Mà một khi lặp lại logic thì maintain sẽ khó khăn hơn rất nhiều**  
4. **Service là nơi xử lý các nghiệp vụ của dự án nó sẽ tách biệt với database hay giao diện người dùng. Việc để logic ở tầng service này sẽ cho phép chúng ta tái sử dụng code. Không bị phụ thuộc vào database vì đôi khi một dự án có thể đổi database nếu nó không còn phù hợp thì những xử lý ở service vẫn hoạt động bình thường nếu chúng ta đổi database. Thực tế đã có rất nhiều dự án migrate từ mysql sang mongodb, postgresql sang mysql vì những lý do như kiến trúc của database không phù hợp với dự án của họ mà trước đó họ không lường trước được...**  
5. **Repository là nơi để lập trình viên thao tác với dữ liệu là tầng model. Việc tách biệt Repository ra riêng như vậy để khi logic sửa dự liệu có thay đổi hay công nghệ database có thay đổi thì cũng không làm hỏng đi logic ban đầu của dự án**

## Cách tạo controller trong một module.
Ví dụ như tôi đang muốn tạo một controller liên quan đến việc xác thực người dùng.  
Thì tạo file AuthController.php trong folder modules/user/src/Controllers như sau.  
Phần namespace của mỗi một module bắt đầu Vietiso\Modules.  
Nếu module là user thì viết hoa chữ cái đầu là Vietiso\Modules\User.  
Còn sau đó là Controllers sẽ là tên folder ở trong src.  
```php
<?php

namespace Vietiso\Modules\User\Controllers;

use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Modules\User\DTOs\UserDTO;
use Vietiso\Modules\User\Models\User;

class AuthController
{
    // Khỏi tạo route với url là register và có name của route là register
    #[Get('register', name: 'register')]
    public function register(Request $request)
    {
        return Response::view('@user/pages/register.twig');
    }

    #[Post('handle-register', name: 'handle_register')]
    public function handleRegister(UserDTO $userDTO)
    {
        User::create($userDTO);
        return Response::redirect('/thuan');
    }
}
```

## Cách tạo route.
**Ở trên đã có ví dụ về cách tạo route Get và Post rồi nhưng hiện tại framework hỗ trợ những method nữa như là Delete, Head, Patch, Put. Và cò một cách khai báo một route với nhiều method như attribute Route được viết như sau**
```php

use Vietiso\Core\Route\Attributes\Route;
use Vietiso\Core\Http\Response;

#[Route(['GET', 'POST'], 'register', name: 'register')]
public function register(Request $request)
{
    if ($request->isMethod('GET')) {
        // xử lý thêm user
        return Response::redirect('/dashboard');
    }
    return Response::view('@user/pages/register.twig');
}
```



## Tham số trong route.
**Trong trường hợp bạn muốn vào chi tiết của một user thì thông thường url sẽ là http://localhost/user/1**  
**Khi đó framework có 2 cách viết như sau**
```php
<?php

namespace Vietiso\Modules\User\Controllers;

use Vietiso\Core\Database\DB;
use Vietiso\Core\Http\Exception\NotFoundHttpException;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Modules\User\Models\User;

#[Group('', name: 'user.')]
class UserController
{
    // Cách viết 1 người lập trình sẽ tự phải check user đó có tồn tại hay không và trả về response theo mình muốn
    #[Get('/user/{user:\d+}')]
    public function detail(int $userId)
    {
        $user = DB::query()->table('users')->find(id: $userId);
        if (is_null($user)) {
            throw new NotFoundHttpException();
        }

        return Response::json([
            'data' => $user
        ]);
    }

    // Cách viết 2 framework sẽ tự động check user này có tồn tại trong database không và tự động trả ra lỗi 404 nếu không tìm thấy.
    #[Get('/user/{user:\d+}', name: 'detail')]
    public function detail(User $user)
    {
        return Response::json([
            'data' => $user
        ]);
    }


    // Cách viết 3 trong trường hợp muốn tìm user theo email, hay bài viết theo slug thì sẽ làm ntn framework cũng tự trả ra lỗi 404 nếu không tìm thấy.
    #[Get('/user/{email}', name: 'detail')]
    public function detail(#[FindBy('email')] User $user)
    {
        return Response::json([
            'data' => $user
        ]);
    }
}
```


## Name trong route.
**Trong route có khái niệm name được thêm vào để người lập trình có thể lấy được url thông qua name**
```php
// Ví dụ tôi muốn lấy url của màn register thì khai báo như sau
route('register'); // Output http://localhost/register
// Nếu một route có tham số như ví dụ chi tiết user thì khai báo như sau.
route('user.detail', ['user' => 1]); // Output http://localhost/user/1
```

