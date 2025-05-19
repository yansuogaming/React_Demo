import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import GuestLayout from "@layouts/GuestLayout";
import { cn } from "@lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Please enter your email" })
        .email({ message: "Invalid email address" }),
});

export default function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        },
    });

    function onSubmit(data) {
        setIsLoading(true);
        // eslint-disable-next-line no-console
        console.log(data);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <GuestLayout>
            <Card className="gap-4">
                <CardHeader>
                    <CardTitle className="text-lg tracking-tight">
                        Forgot Password
                    </CardTitle>
                    <CardDescription>
                        Enter your registered email and <br /> we will send you
                        a link to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={cn("grid gap-2")}
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="name@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="mt-2" disabled={isLoading}>
                                Continue
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}
