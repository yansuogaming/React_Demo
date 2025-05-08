import heroImage from '@images/hero-image.svg'
import { useTranslation } from 'react-i18next'
import Story from '@components/Story'
import PlainYourTrip from '@components/PlainYourTrip'
import TrendingItinerary from '@components/TrendingItinerary'
import TopVietnamExperiences from '@components/TopVietnamExperiences'
import VietNamEvent from '@components/VietNamEvent'
import { useState } from 'react'
import { Skeleton } from '@ui/skeleton'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import RegionList from '@components/RegionList'
import TravelOffers from '@components/TravelOffers'

const Home = () => {
    const { t } = useTranslation()
    const [isLoaded, setIsLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsLoaded(true)
    }

    const scrollDown = () => {
        const regionElement = document.getElementById('region')
        const heightHeader = document.querySelector('header').clientHeight
        window.scrollTo({
            top: regionElement.offsetTop - heightHeader,
            behavior: 'smooth'
        });
    }

    return (
        <main>
            <section className="relative text-white">
                {!isLoaded && (
                    <Skeleton className="h-[750px] w-full rounded-0 bg-[#989797] rounded-none" />
                )}
                <img
                    src={heroImage}
                    alt={t('home.hero_heading')}
                    style={{ display: isLoaded ? 'inline' : 'none' }}
                    onLoad={handleImageLoad}
                />
                <h2 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] absolute bottom-[220px] w-full">
                    {t('home.hero_heading')}
                </h2>
                <p className="text-center text-[20px] font-normal absolute bottom-[188px] w-full">
                    {t('home.description')}
                </p>
                <div className="flex gap-[15px] absolute bottom-[85px] left-1/2 translate-[-50%]">
                    <NavLink to="/" className="transform transition-all duration-500 p-[15px] border-white border-1 rounded-[80px] hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Plan Your Trip
                    </NavLink>
                    <NavLink to="/" className="transform transition-all duration-500 p-[15px] border-white border-1 rounded-[80px] hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Explore Destinations
                    </NavLink>
                    <NavLink to="/" className="transform transition-all duration-500 p-[15px] border-white border-1 rounded-[80px] hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Find Experiences
                    </NavLink>
                </div>
                <FontAwesomeIcon onClick={scrollDown} className="cursor-pointer absolute bottom-[15px] left-1/2 translate-[-50%] text-[24px]" icon={faArrowDown} />
            </section>
            <RegionList id="region" className="mt-[135px] mb-[145px]" />
            <VietNamEvent className="bg-[#F5F6FA] py-[80px]" />
            <TopVietnamExperiences className="mb-[120px] pt-[80px]" />
            <TrendingItinerary className="mb-[120px]" />
            <TravelOffers className="mb-[120px]" />
            <PlainYourTrip className="mb-[120px]" />
            <Story />
        </main>
    )
}

export default Home
