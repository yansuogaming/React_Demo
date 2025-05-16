
import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent } from "@components/ui/tabs";
import { lazy, useEffect, useState } from 'react';
import { cn } from "@lib/utils";
import HttpClient from "@services/HttpClient";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const AppQuill = lazy(() => import('@components/admin/AppQuill'));

export default function EditExperience() {
    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('content', content);
        const res = await HttpClient.post('/experience', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        if (res.status === 201) {
            toast.success('Thêm trải nghiệm thành công!')
            navigate('/admin/experience');
        } else {
            toast.error('Thêm trải nghiệm thất bại!')
        }
    }

    const getExperience = async () => {
        const res = await HttpClient.get(`/experience/${id}`);
        if (res.status === 200) {
            const data = res.data.data;
            setTitle(data.title);
            setContent(data.content);
            setImage(data.image);
        } else {
            toast.error('Lấy trải nghiệm thất bại!')
        }
    };

    useEffect(() => {
        if (id) {
            getExperience();
        }
    }, []);

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
                    <h1 className='text-2xl font-bold tracking-tight mb-[30px]'>
                        {id ? "Chỉnh sửa trải nghiệm" : "Thêm trải nghiệm"}
                    </h1>
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

                            <div className="flex items-center gap-[100px]">
                                <div>
                                    <label>Ảnh</label>
                                    <div className="max-w-md flex w-full">
                                        <div className="w-[400px]">
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
                                    </div>
                                </div>
                                <div className="shadow-lg">
                                    {image && (
                                        <a href={image} target="_blank">
                                            <img
                                                src={image}
                                                alt="preview"
                                                className="w-[250px] h-auto object-cover rounded-md"
                                            />
                                        </a>
                                    )}
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
