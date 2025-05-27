import Breadcrumb from '@components/Breadcrumb'
import FAQ from '@components/FAQ'
import FilterTours from '@components/FilterTours'
import MostPopularTours from '@components/MostPopularTours'
import PlainYourTrip from '@components/PlainYourTrip'
import WhyVisit from '@components/WhyVisit'
import Reveal from '@components/animation/Reveal'
import TextNormal from '@components/text/TextNormal'
import { Button } from '@components/ui/button'
// import star_white from '@images/star_white.svg'
import FilterToursAttractions from '@components/FilterToursAttractions';
import calendar from '@images/calendar.png';
import ic_room from '@images/ic_room.png';
import search from '@images/search.png';
import img_banner from '@images/img_banner.png';
import { useTranslation } from 'react-i18next'
import FilterHotel from '@components/FilterHotel'
import RecentlyViewed from '@components/RecentlyViewed'
import IsoCMSTestimonials from '@components/IsoCMSTestimonials'

const Hotel = () => {
    const { t } = useTranslation();
    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: t('plan_your_trip'), href: '/' },
        { label: t('attractions'), href: '/' },
    ]

    return (
        <main>
            <section className="">
                <div className='relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]'>
                    <img className='w-full h-full object-cover' src={img_banner} alt="Banner" />
                    <div className='absolute inset-0 flex justify-center items-center px-4'>
                        <h1 className='text-white font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-center'>Vietnam Hotels</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center px-4'>
                    <div className='w-full h-[30px] sm:h-[40px] lg:h-[50px] bg-white rounded-tl-[20px] rounded-tr-[20px] mt-[-15px] sm:mt-[-20px] lg:mt-[-25px] absolute items-center justify-center' />

                    <div className='w-full max-w-[1282px] min-h-[120px] sm:min-h-[100px] lg:min-h-[111px] bg-white shadow-2xl absolute justify-center items-center mt-[-60px] sm:mt-[-50px] lg:mt-[-70px] rounded-2xl px-4 sm:px-6 lg:px-[20px] py-4 flex flex-col lg:flex-row gap-4 lg:gap-x-4'>
                        
                        {/* Search Input */}
                        <div className='w-full lg:w-[426px] h-[60px] sm:h-[70px] lg:h-[80px] border border-[#DADFE6] rounded-[8px] flex flex-col pt-2 pl-4'>
                            <text className='font-[Helvetica_Neue] text-sm lg:text-base'>Search for accommodation</text>
                            <input
                                type="text"
                                value={''}
                                onChange={() => { }}
                                placeholder="Find a hotel"
                                className="mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg font-[Helvetica_Neue]"
                            />
                        </div>

                        {/* Check-in/Check-out */}
                        <div className='w-full lg:w-[333px] h-[60px] sm:h-[70px] lg:h-[80px] border border-[#DADFE6] rounded-[8px] flex flex-row pt-2 pl-4 justify-between'>
                            <div className='flex flex-col'>
                                <text className='font-[Helvetica_Neue] text-sm lg:text-base'>Check-in & Check-out Dates</text>
                                <text className='font-[Helvetica_Neue] mt-2 text-xs sm:text-sm lg:text-base'>July 25, 2024 - July 27, 2024</text>
                            </div>
                            <img src={calendar} className='w-5 h-5 sm:w-6 sm:h-6 justify-center items-center mr-3 mt-3 sm:mt-4 lg:mt-5' />
                        </div>

                        {/* Guests & Rooms */}
                        <div className='w-full lg:w-[333px] h-[60px] sm:h-[70px] lg:h-[80px] border border-[#DADFE6] rounded-[8px] flex flex-row pt-2 pl-4 justify-between'>
                            <div className='flex flex-col'>
                                <text className='font-[Helvetica_Neue] text-sm lg:text-base'>Guests & Rooms</text>
                                <text className='font-[Helvetica_Neue] mt-2 text-xs sm:text-sm lg:text-base'>1 Adult(s), 0 Child, 1 Room</text>
                            </div>
                            <img src={ic_room} className='w-5 h-5 sm:w-6 sm:h-6 justify-center items-center mr-3 mt-3 sm:mt-4 lg:mt-5' />
                        </div>

                        {/* Search Button */}
                        <div className='w-full lg:w-[118px] h-[60px] sm:h-[70px] lg:h-[80px] border border-[#18BABD] rounded-[8px] flex flex-row justify-center items-center cursor-pointer hover:bg-[#18BABD] hover:bg-opacity-10 transition-colors'>
                            <img src={search} className='w-5 h-5 sm:w-6 sm:h-6' />
                            <text className='font-[Helvetica_Neue] text-[#18BABD] text-[14px] sm:text-[16px] ml-2'>Search</text>
                        </div>
                    </div>
                </div>
                <div className='px-4'>
                    <Breadcrumb
                        className="container mt-16 sm:mt-12 lg:mt-9"
                        items={breadcrumdItems}
                    />
                </div>
            </section>

            <FilterHotel className="mt-[40px] mb-[80px] sm:mb-[120px] lg:mb-[160px]" />
            <RecentlyViewed />
            <IsoCMSTestimonials />
        </main>
    )
}

export default Hotel;