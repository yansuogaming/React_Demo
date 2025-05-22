import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent } from "@components/ui/tabs";
import { lazy, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import UploadImage from "@components/button/UploadImage";
import CommonService from "@services/CommonService";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import RegionService from "@services/RegionService";
import CityService from "@services/CityService";
import InputLanguage from "@components/input/InputLanguage";

const AppEditor = lazy(() => import("@components/admin/AppEditor"));

export default function Edit() {
    let navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [banner, setBanner] = useState('');
    const [intro, setIntro] = useState('');
    const [content, setContent] = useState('');
    const [regions, setRegions] = useState([]);
    const [contentGettingTo, setContentGettingTo] = useState('');
    const [contentWhenToVisit, setContentWhenToVisit] = useState('');
    const [contentAccessibility, setContentAccessibility] = useState('');
    const [langId, setLangId] = useState('');
    const [regionId, setRegionId] = useState('');

    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const updated = await CityService.update(id, {
                title,
                image,
                banner,
                intro,
                content,
                region_id: regionId,
                lang_id: langId,
                content_getting_to: contentGettingTo,
                content_when_to_visit: contentWhenToVisit,
                content_accessibility: contentAccessibility,
            });

            if (updated) {
                navigate("/admin/cities");
            }
            return;
        }

        const created = await CityService.create({
            title,
            image,
            banner,
            intro,
            content,
            region_id: regionId,
            lang_id: langId,
            content_getting_to: contentGettingTo,
            content_when_to_visit: contentWhenToVisit,
            content_accessibility: contentAccessibility,
        });

        if (created) {
            navigate("/admin/cities");
        }
    };

    const uploadImage = async (e) => {
        const image = await CommonService.uploadImage(e.target.files[0], 'cities');
        if (image !== null) {
            setImage(image);
        }
    };

    const uploadBanner = async (e) => {
        const banner = await CommonService.uploadImage(e.target.files[0], 'cities');
        if (banner !== null) {
            setBanner(banner);
        }
    };

    const changeLanguage = (langId) => {
        setLangId(langId);
    };

    useEffect(() => {
        if (id) {
            const getCity = async () => {
                const res = await Promise.all([
                    RegionService.getListRegion(),
                    CityService.getCity(id),
                ]);

                if (res[0] && res[1]) {
                    setRegions(res[0]);
                    setTitle(res[1].title);
                    setLangId(res[1].lang_id);
                    setRegionId(res[1]?.region_id.toString());
                    setImage(res[1].image);
                    setBanner(res[1].banner ?? '');
                    setIntro(res[1].intro ?? '');
                    setContent(res[1].content ?? '');
                    setContentGettingTo(res[1].content_getting_to);
                    setContentWhenToVisit(res[1].content_when_to_visit);
                } else {
                    toast.error("Lấy trải nghiệm thất bại!");
                }
            };

            getCity();
        }
    }, [id]);

    return (
        <>
            {/* ===== Top Heading ===== */}
            <Header>
                <div className="flex items-center justify-between w-full">
                    <Search />
                    <div className="flex gap-[20px]">
                        <ThemeSwitch />
                        <ProfileDropdown />
                    </div>
                </div>
            </Header>

            {/* ===== Main ===== */}
            <Main>
                <div className="mb-2 flex items-center justify-between space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight mb-[30px]">
                        {id ? "Chỉnh sửa thành phố" : "Thêm thành phố"}
                    </h1>
                </div>
                <Tabs orientation="vertical" defaultValue="overview">
                    <TabsContent value="overview" className="space-y-4">
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div>
                                <label className="mb-1 block">Tiêu đề</label>
                                <div>
                                    <Input
                                        placeholder="shadcn"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[40px]">
                                <div>
                                    <label className="mb-1 block">
                                        Ngôn ngữ
                                    </label>
                                    <div>
                                        <InputLanguage
                                            langId={langId}
                                            onChange={changeLanguage}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1 block">
                                        Vùng miền
                                    </label>
                                    <div>
                                        <Select onValueChange={(regionId) => setRegionId(regionId)} value={regionId}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Chọn vùng miền" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Chọn vùng miền</SelectLabel>
                                                    {regions.map(
                                                        (region, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={region.id.toString()}
                                                            >
                                                                {region.title}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[100px]">
                                <div>
                                    <label className="mb-1 block">Ảnh</label>
                                    <UploadImage
                                        className="w-[400px]"
                                        imagePreview={image}
                                        onChange={uploadImage}
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block">Banner</label>
                                    <UploadImage
                                        className="w-[400px]"
                                        imagePreview={banner}
                                        onChange={uploadBanner}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Giới thiệu</label>
                                <div>
                                    <AppEditor
                                        value={intro}
                                        onChange={(value) => setIntro(value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Nội dung</label>
                                <div>
                                    <AppEditor
                                        value={content}
                                        onChange={(value) => setContent(value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Getting to</label>
                                <div>
                                    <AppEditor
                                        value={contentGettingTo}
                                        onChange={(value) =>
                                            setContentGettingTo(value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label>When to visit</label>
                                <div>
                                    <AppEditor
                                        value={contentWhenToVisit}
                                        onChange={(value) =>
                                            setContentWhenToVisit(value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Accessibility</label>
                                <div>
                                    <AppEditor
                                        value={contentAccessibility}
                                        onChange={(value) => setContentAccessibility(value)}
                                    />
                                </div>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    );
}
