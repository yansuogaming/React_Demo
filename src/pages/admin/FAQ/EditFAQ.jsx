
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

const AppEditor = lazy(() => import('@components/admin/AppEditor'));

export default function EditFAQ() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [question, setQuestion] = useState("");
    const [langId, setLangId] = useState("");
    const [answers, setAnswers] = useState("");
    const [translationOf, setTranslationOf] = useState(0);
    const [currentId, setCurrentId] = useState(id);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const res = await HttpClient.post(`/faq/${currentId}`, {
                question,
                answers,
                lang_id: langId,
                translation_of: translationOf
            });
            if (res.status === 200) {
                toast.success('Cập nhật looại hình trải nghiệm thành công!')
                navigate('/admin/faqs');
            } else {
                toast.error('Cập nhật loại hình trải nghiệm thất bại!')
            }
            return;
        }

        const res = await HttpClient.post('/faq', {
            question,
            answers,
            lang_id: langId,
            translation_of: translationOf
        });
        if (res.status === 201) {
            toast.success('Thêm faq thành công!')
            navigate('/admin/faqs');
        } else {
            toast.error('Thêm faq thất bại!')
        }
    }

    const changeLanguage = (langId) => {
        // Thêm mới thì khi change language k cần phải call api lang
        setLangId(langId);
        if (currentId) {
            getFAQ({
                params: {
                    lang_id: langId
                }
            });
        }
    };

    const getFAQ = async (config = {}) => {
        const res = await HttpClient.get(`/faq/${currentId}`, config);
        if (res.status === 200) {
            const data = res.data.data;
            setCurrentId(data.id == data.translation_of ? data.id : currentId);
            setQuestion(data.question);
            setAnswers(data.answers);
            setLangId(data.lang_id);
            setTranslationOf(data.translation_of);
        } else {
            toast.error('Lấy faq thất bại!')
        }
    };

    useEffect(() => {
        if (id) {
            getFAQ();
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
                        {id ? "Chỉnh sửa FAQ" : "Thêm FAQ"}
                    </h1>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                >
                    <TabsContent value='overview' className='space-y-4'>
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div>
                                <label className="mb-1 block">Câu hỏi</label>
                                <div>
                                    <Input placeholder="shadcn" value={question} onChange={(e) => setQuestion(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1 block">Ngôn ngữ</label>
                                <div>
                                    <InputLanguage langId={langId} onChange={changeLanguage} />
                                </div>
                            </div>
                            <div>
                                <label className="mb-1 block">Nội dung</label>
                                <div>
                                    <AppEditor value={answers} onChange={(value) => setAnswers(value)} />
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
