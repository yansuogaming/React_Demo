<?php

namespace Vietiso\Modules\Admin\Middlewares;

use Lcobucci\Clock\SystemClock;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Validation\Constraint\SignedWith;
use Lcobucci\JWT\Validation\Constraint\StrictValidAt;
use Lcobucci\JWT\Validation\Validator;
use Vietiso\Core\Context\Context;
use Vietiso\Core\Http\Request;
use Vietiso\Core\Http\Response;

class Authenticate
{
    public function handle(Request $request, \Closure $next): Response
    {
        if ($request->cookie->has('token')) {
            $token = $request->cookie->get('token');
            $parser = new Parser(new JoseEncoder());

            $token = $parser->parse($token);
            $claims = $token->claims();
            $validator = new Validator();
            $config = Configuration::forSymmetricSigner(
                new Sha256(),
                InMemory::base64Encoded(env('JWT_SECRET'))
            );

            $signedWith = new SignedWith($config->signer(), $config->verificationKey());
            if (!$validator->validate($token, $signedWith)) {
                return Response::json([
                    'message' => 'Token không hợp lệ'
                ], 401);
            }

            $clock = SystemClock::fromUTC();
            $strictValidAt = new StrictValidAt($clock);
            if (!$validator->validate($token, $strictValidAt)) {
                $now = new \DateTimeImmutable();
                $exp = $claims->get('exp', null);
                $nbf = $claims->get('nbf', null);

                if ($exp !== null && $now > $exp) {
                    return Response::json([
                        'message' => 'Token đã hết hạn'
                    ], 401);
                }
                
                if ($nbf !== null && $now < $nbf) {
                    return Response::json([
                        'message' => 'Token chưa đến thời điểm có hiệu lực.'
                    ], 401);
                }

                return Response::json([
                    'message' => 'Thời gian trong token không đúng định dạng hoặc không hợp lệ'
                ], 401);
            }

            Context::put('admin', [
                'id' => $claims->get('id', 0),
                'full_name' => $claims->get('full_name', ''),
                'phone' => $claims->get('phone', ''),
                'address' => $claims->get('address', ''),
                'email' => $claims->get('email', ''),
            ]);
            return $next($request);
        }

        return Response::json([
            'message' => 'Chưa xác thực'
        ], 401);
    }
}