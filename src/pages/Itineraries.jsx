import Breadcrumb from '@components/Breadcrumb'
import MostPopularTours from '@components/MostPopularTours'
import Reveal from '@components/animation/Reveal'
import TextNormal from '@components/text/TextNormal'
import image from '@images/hero-image-itineraries.png'
import { useTranslation } from 'react-i18next'

const Itineraries = () => {
    const { t } = useTranslation()

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: t('plan_your_trip'), href: '/' },
        { label: t('itineraries'), href: '/' },
    ]

    return (
        <main>
            <section className="container mb-[80px]">
                <Breadcrumb
                    className="mb-[30px] mt-[15px]"
                    items={breadcrumdItems}
                />
                <Reveal className="grid grid-cols-2 gap-[30px] items-center mt-[80px] bg-white rounded-tl-[60px] rounded-br-[60px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.10)]">
                    <div>
                        <img src={image} alt="Vietnam – Journeys You Simply Can’t Miss" />
                    </div>
                    <div>
                        <h1 className="text-[#1A2A44] font-bold text-[40px]">
                            Vietnam – Journeys You Simply Can’t Miss
                        </h1>
                        <TextNormal className="text-[16px]">
                            From the emerald waters of Phu Quoc to the misty mountains of Sa Pa, Vietnam offers a captivating blend of cultural richness, stunning landscapes, and unforgettable cuisine. Each tour reveals a unique slice of the S-shaped country — and maybe it’s time you experienced the magic for yourself.
                        </TextNormal>
                    </div>
                </Reveal>
            </section>
            <MostPopularTours />
            
        </main>
    )
}

export default Itineraries