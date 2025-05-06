import heroImage from '@images/hero-image.svg'
import { useTranslation } from 'react-i18next'
import Story from '@components/Story'
import PlainYourTrip from '@components/PlainYourTrip'
import TrendingItinerary from '@components/TrendingItinerary'
import TopVietnamExperiences from '@components/TopVietnamExperiences'
import VietNamEvent from '@components/VietNamEvent'
import { useState } from 'react'
import { Skeleton } from '@ui/skeleton'

const Home = () => {
    const { t } = useTranslation()
    const [isLoaded, setIsLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true)
    }
    return (
        <main>
            <section className="relative text-white">
                {!isLoaded && (
                    <Skeleton className="h-[750px] w-full rounded-xl bg-[#989797]" />
                )}
                <img
                    src={heroImage}
                    alt={t('home.hero_heading')}
                    style={{display: isLoaded ? 'inline' : 'none' }}
                    onLoad={handleImageLoad}
                />
                <h2 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] absolute bottom-[220px] w-full">
                    {t('home.hero_heading')}
                </h2>
                <p className="text-center text-[20px] font-normal absolute bottom-[188px] w-full">
                    {t('home.description')}
                </p>
                <div className="flex gap-[8px]"></div>
            </section>
            <div className="bg-[#F5F6FA] py-[80px]">
                <VietNamEvent className="mb-[120px]" />
            </div>
            <TopVietnamExperiences className="mb-[120px] pt-[80px]" />
            <TrendingItinerary className="mb-[120px]" />
            <PlainYourTrip className="mb-[120px]" />
            <Story />
        </main>
    )
}

export default Home
