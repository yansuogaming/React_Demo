
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
import { IoIosCloseCircle } from "react-icons/io";

const AppQuill = lazy(() => import('@components/admin/AppQuill'));

export default function EditExperienceType() {
    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [intro, setIntro] = useState("");

    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const res = await HttpClient.post(`/experience-type/${id}`, {
                title,
                image,
                intro
            });
            if (res.status === 200) {
                toast.success('Cập nhật trải nghiệm thành công!')
                navigate('/admin/experience');
            } else {
                toast.error('Cập nhật trải nghiệm thất bại!')
            }
            return;
        }

        const res = await HttpClient.post('/experience-type', {
            title,
            image,
            intro
        });
        if (res.status === 201) {
            toast.success('Thêm trải nghiệm thành công!')
            navigate('/admin/experience');
        } else {
            toast.error('Thêm trải nghiệm thất bại!')
        }
    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('image', image);
        const res = await HttpClient.post('/experience/image', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.status === 200) {
            setImage(res.data.image);
        } else {
            toast.error('Tải ảnh lên thất bại!')
        }
    }

    useEffect(() => {
        if (id) {
            const getExperience = async () => {
                const res = await HttpClient.get(`/experience/${id}`);
                if (res.status === 200) {
                    const data = res.data.data;
                    setTitle(data.title);
                    setIntro(data.intro);
                    setImage(data.image);
                } else {
                    toast.error('Lấy trải nghiệm thất bại!')
                }
            };

            getExperience();
        }
    }, [id]);

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

                            <UploadImage label="Ảnh" imagePreview={image} onChange={uploadImage} />
                            {/* <div className="flex items-center gap-[100px]">
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
                                                onChange={(e) => uploadImage(e.target.files[0])}
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
                                        <a href={image} className="group relative rounded-md overflow-hidden" target="_blank">
                                            <div
                                                className={cn(
                                                    'hidden group-hover:block rounded-md text-[25px]',
                                                    'top-0 right-0 w-full h-full absolute',
                                                    'bg-[linear-gradient(180deg,_rgb(64_61_61_/_80%),_rgb(29_26_26_/_46%)_70.71%)]'
                                                )}
                                            >
                                                <IoIosCloseCircle
                                                    className="absolute top-[10px] left-[10px] text-white"
                                                    onClick={(e) => removeImage(e)}
                                                />
                                            </div>
                                            <img
                                                src={image}
                                                alt="preview"
                                                className="w-[250px] h-auto object-cover rounded-md"
                                            />
                                        </a>
                                    )}
                                </div>
                            </div> */}

                            <div>
                                <label>Nội dung</label>
                                <div>
                                    <AppQuill value={intro} onChange={(value) => setIntro(value)} />
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
