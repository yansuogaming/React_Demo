<?php

namespace Vietiso\Modules\User\Controllers;

use DateTimeImmutable;
use donatj\UserAgent\UserAgentParser;
use Lcobucci\JWT\JwtFacade;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Builder;
use Vietiso\Core\Http\Cookie;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;
use Vietiso\Core\HttpClient\Facade\Http;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Support\Str;
use Vietiso\Modules\User\DTOs\LoginDTO;

#[Group('api/user')]
class UserController
{
    #[Post('checklogin')]
    public function checklogin(Request $request)
    {
        $email = $request->input('email');
        if (empty($email)) {
            return Response::json([
                'message' => 'Email không được để trống.'
            ], 422);
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return Response::json([
                'message' => 'Email không hợp lệ.'
            ], 422);
        }

        $res = Http::iloocacus()->post('/member/check_exists_email', [
            'email' => $email
        ]);
        if ($res->isJson() && $json = $res->json()) {
            if ($json['result'] === 'success_1') {
                return Response::json([
                    'message' => 'Đã có tài khoản login'
                ]);
            }
        }

        return Response::json([
            'message' => 'Chưa có tài khoản'
        ], 404);
    }

    #[Post('/login')]
    public function login(Request $request, LoginDTO $loginDTO)
    {
        $parser = new UserAgentParser();
        $result = $parser->parse($request->headers->get('user-agent'));

        $res = Http::iloocacus()->post('/member/login', [
            'email' => $loginDTO->email,
            'user_password' => $loginDTO->password,
            'ip_login' => $request->ip(),
            'use_browser' => $result->browser()
        ]);

        if ($res->isJson()) {
            $data = $res->json();
            if ($data['result'] === 'success') {
                $user = $data['user'];
                return Response::json([
                    'message' => 'Đăng nhập thành công.',
                    'user' => $user
                ])
                ->withCookie(
                    name: 'user_token',
                    value: $this->createJwtToken($user),
                    secure: true,
                    sameSite: Cookie::SAMESITE_NONE
                )
                ->withCookie(
                    name: 'user_refresh_token',
                    value: $this->createJwtToken($user, true),
                    secure: true,
                    sameSite: Cookie::SAMESITE_NONE
                );
            }

            if ($data['result'] === 'error') {
                return Response::json([
                    'message' => 'Email hoặc mật khẩu không đúng.'
                ], 401);
            }

            if ($data['result'] === 'error_active') {
                return Response::json([
                    'message' => 'Tài khoản này chưa được xác minh.'
                ], 403);
            }
        }

        return Response::json([
            'message' => 'Đăng nhập thất bại.'
        ], 500);
    }

    #[Get('/logout')]
    public function logout()
    {
        return Response::json([
            'message' => 'Đăng xuất thành công',
        ])
        ->withCookie(
            name: 'user_token',
            value: '',
            expire: time() - 3600,
            secure: true,
            sameSite: Cookie::SAMESITE_NONE
        )
        ->withCookie(
            name: 'user_refresh_token',
            value: '',
            expire: time() - 3600,
            secure: true,
            sameSite: Cookie::SAMESITE_NONE
        );
    }

    #[Get('forgot-password')]
    public function forgotPassword(Request $request)
    {
        $email = $request->input('email');
        if (empty($email)) {
            return Response::json([
                'message' => 'Bạn chưa nhập email.'
            ], 422);
        }

        $res = Http::iloocacus()->post('/member/forgot_pass', [
            'email' => $email
        ]);

        if ($res->isJson()) {
            $res = $res->json();
            if ($res['result'] === 'success') {
                return Response::json([
                    'message' => 'Quên mật khẩu thành công.'
                ]);
            }

            return Response::json([
                'message' => 'Email không tồn tại.'
            ], 404);
        }

        return Response::json([
            'message' => 'Quên mật khẩu thất bại.'
        ], 500);
    }

    protected function createJwtToken(array $user, bool $isRefreshToken = false): string
    {
        $key = InMemory::base64Encoded(env('JWT_SECRET'));

        $token = (new JwtFacade())->issue(
            new Sha256(),
            $key,
            static fn (Builder $builder, DateTimeImmutable $issuedAt): Builder => $builder
                ->issuedBy(config('app.url'))
                ->permittedFor(config('app.url'))
                ->expiresAt($isRefreshToken ? $issuedAt->modify('+30 days') : $issuedAt->modify('+30 minutes'))
                ->identifiedBy(Str::uuid())
                ->withClaim('potential_id', $user['potential_id'])
                ->withClaim('email', $user['email'])
                ->withClaim('name', $user['name'])
                ->withClaim('title', $user['title'])
        );

        return $token->toString();
    }
}