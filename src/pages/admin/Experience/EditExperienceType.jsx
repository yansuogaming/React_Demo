
import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent } from "@components/ui/tabs";
import { lazy, useEffect, useState } from 'react';
import HttpClient from "@services/HttpClient";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import UploadImage from "@components/button/UploadImage";

const AppEditor = lazy(() => import('@components/admin/AppEditor'));

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
                toast.success('Cập nhật looại hình trải nghiệm thành công!')
                navigate('/admin/experience-types');
            } else {
                toast.error('Cập nhật loại hình trải nghiệm thất bại!')
            }
            return;
        }

        const res = await HttpClient.post('/experience-type', {
            title,
            image,
            intro
        });
        if (res.status === 201) {
            toast.success('Thêm loại hình trải nghiệm thành công!')
            navigate('/admin/experience-types');
        } else {
            toast.error('Thêm loại hình trải nghiệm thất bại!')
        }
    }

    const uploadImage = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
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
                const res = await HttpClient.get(`/experience-type/${id}`);
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
                        {id ? "Chỉnh sửa loại hình trải nghiệm" : "Thêm loại hình trải nghiệm"}
                    </h1>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                >
                    <TabsContent value='overview' className='space-y-4'>
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div>
                                <label className="mb-1 block">Tiêu đề</label>
                                <div>
                                    <Input placeholder="shadcn" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1 block">Ảnh</label>
                                <UploadImage className="w-[400px]" imagePreview={image} onChange={uploadImage} />
                            </div>
                            <div>
                                <label className="mb-1 block">Nội dung</label>
                                <div>
                                    <AppEditor value={intro} onChange={(value) => setIntro(value)} />
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
