import imageCity from '@images/hanoi.png'
import imageCity2 from '@images/image.png'
import Breadcrumb from '@components/Breadcrumb'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import imageMapCountry from '@images/map-country.png'
import iconFullscreen from '@images/icon-fullscreen.svg'
import VietNamEvent from '@components/VietNamEvent'
import Weather from '@components/Weather'
import TopThingsToDo from '@components/TopThingsToDo'
import PlainYourTrip from '@components/PlainYourTrip'
import ExperienceActivities from '@components/ExperienceActivities'
import Impressions from '@components/Impressions'
import FAQ from '@components/FAQ'
import OtherRegion from '@components/OtherRegion'
import Share from '@components/Share'
import HeroSection from '@components/HeroSection'

const City = () => {
    const { t } = useTranslation()

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: t('Destinations'), href: '/' },
        { label: 'Hanoi' }
    ]

    return (
        <main>
            <HeroSection title="Hà Nội" image={imageCity} showArrowDown={true}>
                <p className="text-center text-[20px] font-normal w-full">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
                    the industry's standard dummy text ever since the 1500s
                </p>
            </HeroSection>
            {/* Overview city */}
            <section className="container mx-auto">
                <Breadcrumb className="mb-[60px] mt-[30px]" items={breadcrumdItems} />
                <div className="grid grid-cols-3 gap-[32px]">
                    <div className="col-span-2">
                        <div className="flex gap-[10px] mb-[35px]">
                            <NavLink className="p-[8px_16px] border-[#007BFF] border-[1px] rounded-[80px] text-[#007BFF]" href="/">
                                Welcome
                            </NavLink>
                            <NavLink className="p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]" href="/">
                                Getting to Hanoi
                            </NavLink>
                            <NavLink className="p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]" href="/">
                                When to visit
                            </NavLink>
                            <NavLink className="p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]" href="/">
                                Accessibility
                            </NavLink>
                        </div>
                        <p className="text-[#1A2A44] text-[18px]">
                            Hanoi, the capital of Vietnam, is a vibrant city blending rich history with modern life. Known for its centuries-old architecture, bustling streets, and serene lakes, it offers a unique cultural experience. Highlights include the Old Quarter with its narrow alleys, Hoan Kiem Lake, the Temple of Literature, and delicious street food like pho and bun cha. Hanoi's charm lies in its mix of tradition and progress, making it a must-visit destination in Southeast Asia.
                        </p>
                    </div>
                    <div className="pt-[10px]">
                        <div className="relative h-[296px] w-fit">
                            <div className="h-[296px] overflow-hidden rounded-[60px_12px_12px_12px]">
                                <img src={imageMapCountry} alt="Hà Nội" />
                                <button className="cursor-pointer absolute bottom-[12px] p-[10px_16px] flex gap-[10px] bg-white rounded-[20px] left-[50%] translate-x-[-50%]">
                                    View full map
                                    <img src={iconFullscreen} alt="Full map" />
                                </button>
                            </div>
                            <div className="absolute translate-x-[-50%] top-[-75px] left-1/2 w-[300px] h-[200px]">
                                <img src={imageCity2} alt="Temple of Literature" />
                                <div className="p-[14px_16px] bg-white rounded-[0_0_12px_12px]">
                                    <p className="text-[#007BFF] text-[16px] font-bold">Temple of Literature</p>
                                    <p>Attractions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Weather />
            <TopThingsToDo className="mt-[120px]" />
            <VietNamEvent className="mt-[80px] bg-[#F5F6FA] py-[80px]" />
            <ExperienceActivities className="mt-[120px]" />
            <Impressions className="mt-[120px]" />
            <PlainYourTrip className="mt-[120px]" />
            <FAQ className="mt-[120px]" />
            <OtherRegion className="mt-[120px]" />
            <Share color="#007BFF" className="mt-[120px]" />
        </main>
    )
}

export default City
