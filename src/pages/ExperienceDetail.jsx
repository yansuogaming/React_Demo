import Breadcrumb from "@components/Breadcrumb"
import { useTranslation } from "react-i18next"
import imageCity from '@images/hanoi.png'
import HeroSection from "@components/HeroSection"
import TextNormal from "@components/text/TextNormal"
import { Form } from "react-router"
import { Input } from "@ui/input"

const ExperienceDetail = () => {
    const { t } = useTranslation()

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: 'Experiences', href: '/' },
        { label: 'Cultural Hertage' }
    ]

    return (
        <main>
            <HeroSection title="Cultural Heritage" image={imageCity} />
            <section className="container mx-auto mb-[40px]">
                <Breadcrumb className="mb-[60px] mt-[15px]" items={breadcrumdItems} />
                <TextNormal className="text-[18px] mb-[40px]">
                    Vietnam is the cradle of long-standing cultural values, from architectural heritage, traditional festivals to unique folk art. This journey of discovery will bring you closer to the stories, people and beauty that make up the identity of Vietnam through each period.
                </TextNormal>
            </section>
            <section className="container mx-auto">
                <Form className="grid grid-cols-3">
                    <div>
                        <label htmlFor=""></label>
                        <div>
                            <Input type="email" placeholder="Keyword" />
                        </div>
                    </div>
                </Form>
            </section>
        </main>
    )
}

export default ExperienceDetail