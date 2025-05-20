import Header from "@components/admin/Header";
import Main from "@components/admin/Main";
import ProfileDropdown from "@components/admin/ProfileDropdown";
import Search from "@components/admin/Search";
import ThemeSwitch from "@components/admin/ThemeSwitch";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Tabs, TabsContent } from "@components/ui/tabs";
import { lazy, useEffect, useState } from "react";
import HttpClient from "@services/HttpClient";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import UploadImage from "@components/button/UploadImage";
import CommonService from "@services/CommonService";

const AppEditor = lazy(() => import("@components/admin/AppEditor"));

export default function EditExperience() {
    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const res = await HttpClient.post(`/experience/${id}`, {
                title,
                image,
                content,
            });
            if (res.status === 200) {
                toast.success("Cập nhật trải nghiệm thành công!");
                navigate("/admin/experience");
            } else {
                toast.error("Cập nhật trải nghiệm thất bại!");
            }
            return;
        }

        const res = await HttpClient.post("/experience", {
            title,
            image,
            content,
        });
        if (res.status === 201) {
            toast.success("Thêm trải nghiệm thành công!");
            navigate("/admin/experience");
        } else {
            toast.error("Thêm trải nghiệm thất bại!");
        }
    };

    const uploadImage = async (e) => {
        const image = await CommonService.uploadImage(e.target.files[0], 'experiences');
        if (image == null) {
            toast.error("Tải ảnh lên thất bại!");
        } else {
            setImage(image);
        }
    };

    useEffect(() => {
        if (id) {
            const getExperience = async () => {
                const res = await HttpClient.get(`/experience/${id}`);
                if (res.status === 200) {
                    const data = res.data.data;
                    setTitle(data.title);
                    setContent(data.content);
                    setImage(data.image);
                } else {
                    toast.error("Lấy trải nghiệm thất bại!");
                }
            };

            getExperience();
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
                        {id ? "Chỉnh sửa trải nghiệm" : "Thêm trải nghiệm"}
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
                            <div>
                                <label className="mb-1 block">Ảnh</label>
                                <UploadImage
                                    className="w-[400px]"
                                    imagePreview={image}
                                    onChange={uploadImage}
                                />
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
                            <Button type="submit">Submit</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    );
}
