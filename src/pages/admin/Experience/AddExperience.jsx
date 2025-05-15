
import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Button } from "@components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent } from "@components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { lazy, useEffect, useState } from 'react';

const AppLexical = lazy(() => import('@components/admin/AppLexical'));

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function AddExperience() {
    const [inClient, setInClient] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        setInClient(true);
    }, [inClient]);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <div className='flex items-center justify-between w-full'>
                    <Search />
                    <div className='flex gap-[20px]'>
                        <ThemeSwitch />
                        <ProfileDropdown />
                    </div>
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className='mb-2 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight mb-[30px]'>Thêm trải nghiệm</h1>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                >
                    <TabsContent value='overview' className='space-y-4'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tiêu đề</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => {
                                        return inClient && (
                                            <FormItem>
                                                <FormLabel>Nội dung</FormLabel>
                                                <FormControl>
                                                    <AppLexical placeholder={field.value} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}
