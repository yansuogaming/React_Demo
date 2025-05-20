# Yêu cầu cần thiết để chạy server.
1. PHP 8.3+
2. Ext-swoole
3. Ext-bcmath
4. Ext-json
5. Ext-ctype
6. Ext-fileinfo
7. Ext-mbstring
8. Ext-openssl
9. Ext-curl
10. Ext-zip
11. Ext-intl
12. Ext-ffi
13. Ext-pcntl
14. Composer version 2+

**Lưu ý server chỉ chạy trên hệ điều hành linux hoặc macos, nếu dùng window thì phải cài docker:**


# Khởi tạo server với câu lệnh
```bash
php vietiso start:serve
```
**Nếu trong môi trường phát triển hãy thêm option --watch**
```bash
php vietiso start:serve --watch
```

# Một số lưu ý trước khi code
1. Không sử dụng các hàm để thoát khỏi hệ thống như hàm die, exit thay vào đó hay dùng dd('dump').
2. Trên môi trường web browser không thể echo hay var_dump, print_r

# Mục lục
1. [Cách tạo một module trong application](module.md)
2. [Khai báo routing và controller](controller.md)
3. [Làm việc mới middleware](middleware.md)
4. [Cách sử dụng http request](request.md)
5. [Cách trả về response cho client](response.md)
6. [View render dữ liệu](view.md)
7. [Session](session.md)
