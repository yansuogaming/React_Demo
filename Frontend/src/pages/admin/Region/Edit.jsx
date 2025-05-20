
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
import InputLanguage from "@components/input/InputLanguage";
import UploadImage from "@components/button/UploadImage";
import RegionService from "@services/RegionService";
import CommonService from "@services/CommonService";

const AppEditor = lazy(() => import('@components/admin/AppEditor'));

export default function Edit() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [langId, setLangId] = useState("");
    const [intro, setIntro] = useState("");
    const [image, setImage] = useState("");
    const [translationOf, setTranslationOf] = useState(0);
    const [currentId, setCurrentId] = useState(id);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const result = await RegionService.update(currentId, {
                title,
                intro,
                image,
                lang_id: langId,
                translation_of: translationOf
            });
            if (result) navigate('/admin/regions');
            return;
        }

        const result = await RegionService.create({
            title,
            intro,
            image,
            lang_id: langId,
            translation_of: translationOf
        });
        if (result) {
            navigate('/admin/regions');
        }
    }

    const changeLanguage = (langId) => {
        // Thêm mới thì khi change language k cần phải call api lang
        setLangId(langId);
        if (currentId) {
            getRegions({
                params: {
                    lang_id: langId
                }
            });
        }
    };

    const getRegions = async (config = {}) => {
        const res = await HttpClient.get(`/region/${currentId}`, config);
        if (res.status === 200) {
            const data = res.data.data;
            setCurrentId(data.id == data.translation_of ? data.id : currentId);
            setTitle(data.title);
            setIntro(data.intro);
            setImage(data.image);
            setLangId(data.lang_id);
            setTranslationOf(data.translation_of);
        } else if (res.status !== 401) {
            toast.error('Lấy vùng miền thất bại!')
        }
    };

    const uploadImage = async (e) => {
        const image = await CommonService.uploadImage(e.target.files[0], 'regions');
        if (image) {
            setImage(image);
        }
    };

    useEffect(() => {
        if (id) {
            getRegions();
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
                        {id ? "Chỉnh sửa vùng miền" : "Thêm vùng miền"}
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
                                    <Input
                                        placeholder="shadcn"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1 block">Ngôn ngữ</label>
                                <div>
                                    <InputLanguage langId={langId} onChange={changeLanguage} />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1 block">Ảnh</label>
                                <UploadImage
                                    className="w-[400px]"
                                    imagePreview={image}
                                    onChange={uploadImage}
                                />
                            </div>
                            <div>
                                <label className="mb-1 block">Giới thiệu</label>
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
