<?php

namespace Vietiso\Modules\Admin\Controllers;

use DateTimeImmutable;
use Lcobucci\JWT\JwtFacade;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Builder;
use Vietiso\Core\Context\Context;
use Vietiso\Core\Hashing\Facade\Hash;
use Vietiso\Core\Http\Cookie;
use Vietiso\Core\Http\Exception\NotFoundHttpException;
use Vietiso\Core\Http\Response;
use Vietiso\Core\Route\Attributes\Get;
use Vietiso\Core\Route\Attributes\Group;
use Vietiso\Core\Route\Attributes\Post;
use Vietiso\Core\Support\Str;
use Vietiso\Modules\Admin\Middlewares\Authenticate;
use Vietiso\Modules\Admin\DTOs\ForgotPasswordDTO;
use Vietiso\Modules\Admin\DTOs\LoginDTO;
use Vietiso\Modules\Admin\Models\Admin;

#[Group('api')]
class AuthController
{
    #[Post(
        uri: 'login',
        excludedMiddlewares: [Authenticate::class]
    )]
    public function handleLogin(LoginDTO $loginDTO)
    {
        $admin = Admin::whereEmail($loginDTO->email)
            ->select('email', 'full_name', 'id', 'avatar', 'phone', 'address', 'password')
            ->first();
        if (!empty($admin) && Hash::check($loginDTO->password, $admin->password)) {
            return Response::json([
                'message' => 'Đăng nhập thành công',
                'data' => $admin
            ])
            ->withCookie(
                name: 'token',
                value: $this->createJwtToken($admin),
                secure: true,
                sameSite: Cookie::SAMESITE_NONE
            )
            ->withCookie(
                name: 'refresh_token',
                value: $this->createJwtToken($admin, true),
                secure: true,
                sameSite: Cookie::SAMESITE_NONE
            );
        }

        return Response::json([
            'message' => 'Emai hoặc mật khẩu không hợp lệ',
        ], 401);
    }

    #[Get('check-login')]
    public function checkLogin()
    {
        $admin = Context::get('admin');
        return Response::json([
            'message' => 'Bạn đã login',
            'data' => $admin
        ]);
    }

    #[Post(
        uri: 'forgot-password',
        excludedMiddlewares: [Authenticate::class]
    )]
    public function forgotPassword(ForgotPasswordDTO $dto)
    {
        $admin = Admin::whereEmail($dto->email)->first();
        if (empty($admin)) {
            throw new NotFoundHttpException();
        }
    }

    #[Get('logout')]
    public function createUser()
    {
        return Response::json([
            'message' => 'Đăng xuất thành công',
        ])
        ->withCookie(
            name: 'token',
            value: '',
            expire: time() - 3600,
            secure: true,
            sameSite: Cookie::SAMESITE_NONE
        )
        ->withCookie(
            name: 'refresh_token',
            value: '',
            expire: time() - 3600,
            secure: true,
            sameSite: Cookie::SAMESITE_NONE
        );
    }

    protected function createJwtToken(Admin $admin, bool $isRefreshToken = false): string
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
                ->withClaim('id', $admin->id)
                ->withClaim('email', $admin->email)
                ->withClaim('full_name', $admin->full_name)
                ->withClaim('phone', $admin->phone)
                ->withClaim('address', $admin->address)
        );

        return $token->toString();
    }
}