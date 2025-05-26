import Breadcrumb from '@components/Breadcrumb'
import FAQ from '@components/FAQ'
import PlainYourTrip from '@components/PlainYourTrip'
import Reveal from '@components/animation/Reveal'
import TextNormal from '@components/text/TextNormal'
import image from '@images/hero-image-itineraries.png'
import { useTranslation } from 'react-i18next'
import star_white from '@images/star_white.svg'
import FilterToursAttractions from '@components/FilterToursAttractions'
import { cn } from '@lib/utils'
import { useLoaderData } from 'react-router'

const Attractions = () => {
    const { t } = useTranslation();
    const { FAQs } = useLoaderData();

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: t('plan_your_trip'), href: '/' },
        { label: t('Attractions'), href: '/' },
    ]

    return (
        <main className="mb-[100px]">
            <section className="container mb-[80px]">
                <Breadcrumb
                    className="mb-[30px] mt-[15px]"
                    items={breadcrumdItems}
                />
                <Reveal className={cn(
                    'grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center',
                    'mt-[30px] bg-white rounded-tl-[60px] rounded-br-[60px]',
                    'shadow-[0px_2px_8px_0px_rgba(0,0,0,0.10)]'
                )}>
                    <div className=''>
                        <img className='w-full' src={image} alt="Vietnam – Journeys You Simply Can’t Miss" />
                    </div>
                    <div className='mx-5 mb-5 lg:mx-0 lg:mb-0'>
                        <h1 className="text-[#1A2A44] font-bold text-[30px] md:text-[40px]">
                            Hanoi Attractions
                        </h1>

                        <TextNormal className="text-[14px] md:text-[16px]">
                            Check out must-see sights and activities:
                        </TextNormal>
                        <TextNormal className="text-[14px] md:text-[16px] font-bold">
                            Old Quarter, Hoa Lo Prison, Multi-day Tours, Flea & Street Markets. For personalised
                        </TextNormal>
                        <TextNormal className="text-[14px] md:text-[16px]">
                            recommendations, try our AI trip-planning product.
                        </TextNormal>

                        <div className='w-[220px] h-[47px] bg-blue-500 rounded-4xl mt-[25px] flex justify-center items-center'>
                            <img
                                src={star_white}
                                className="w-[18px] h-[18px] mr-[5px]"
                            />
                            <TextNormal className='text-[#FFFFFF] text-[14px] md:text-[16px] text-center'>Create itinerary now!</TextNormal>
                        </div>
                    </div>
                </Reveal>
            </section>
            <FilterToursAttractions className="mt-[80px] mb-[160px]" />
            <PlainYourTrip className="mt-[120px]" />
            <FAQ data={FAQs} className="mt-[80px]"/>
        </main>
    )
}
export default Attractions;