
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
import { lazy, useState } from 'react';
import { cn } from "@lib/utils";

const AppQuill = lazy(() => import('@components/admin/AppQuill'));

export default function AddExperience() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = () => {
        console.log(image);
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
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div>
                                <label>Tiêu đề</label>
                                <div>
                                    <Input placeholder="shadcn" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label>Ảnh</label>
                                <div className="max-w-md flex w-[400px]">
                                    <div className="w-full">
                                        <input
                                            type="file"
                                            className={cn(
                                                'w-full text-slate-500 font-medium text-sm',
                                                'bg-white border file:cursor-pointer cursor-pointer',
                                                'file:border-0 file:py-3 file:px-4 file:mr-4',
                                                'file:bg-gray-100 file:hover:bg-gray-200',
                                                'file:text-slate-500 rounded'
                                            )}
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                        <p
                                            className="text-xs text-slate-500 mt-2"
                                        >
                                            PNG, JPG SVG, WEBP are Allowed.
                                        </p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                            <div>
                                <label>Nội dung</label>
                                <div>
                                    <AppQuill value={content} onChange={(value) => setContent(value)} />
                                </div>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}
