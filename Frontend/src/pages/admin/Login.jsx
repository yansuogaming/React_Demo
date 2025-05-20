import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import GuestLayout from "@layouts/GuestLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { PasswordInput } from "@components/ui/password-input";
import { Link, useNavigate } from "react-router";
import AuthService from "@services/AuthService";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Vui lòng nhập email.' })
        .email({ message: 'Email không hợp lệ.' }),
    password: z
        .string()
        .min(1, {
            message: 'Vui lòng nhập password.',
        })
        .min(8, {
            message: 'Mật khẩu phải lớn hơn 8 ký tự.',
        }),
})

export default function Login() {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values) {
        const success = await AuthService.login(values.email, values.password);
        if (success) navigate('/admin');
    }

    return (
        <GuestLayout>
            <Card className='gap-4'>
                <CardHeader>
                    <CardTitle className='text-lg tracking-tight'>Login</CardTitle>
                    <CardDescription>
                        Enter your email and password below to <br />
                        log into your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={cn('grid gap-3')}
                        >
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder='name@example.com' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem className='relative'>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput placeholder='********' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        <Link
                                            to='/admin/forgot-password'
                                            className={cn(
                                                'text-muted-foreground absolute',
                                                '-top-0.5 right-0 text-sm',
                                                'font-medium hover:opacity-75'
                                            )}
                                        >
                                            Forgot password?
                                        </Link>
                                    </FormItem>
                                )}
                            />
                            <Button className='mt-2'>
                                Login
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <p className='text-muted-foreground px-8 text-center text-sm'>
                        By clicking login, you agree to our{' '}
                        <a
                            href='/terms'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a
                            href='/privacy'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </CardFooter>
            </Card>
        </GuestLayout>
    )
}