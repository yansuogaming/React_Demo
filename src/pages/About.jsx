import Breadcrumb from '@components/Breadcrumb'
import FlagIcon from '@components/icons/FlagIcon'
import LocationIcon from '@components/icons/LocationIcon'
import NationalLanguageIcon from '@components/icons/NationalLanguageIcon'
import PeopleIcon from '@components/icons/PeopleIcon'
import SubHeading from '@components/text/SubHeading'
import TextNormal from '@components/text/TextNormal'
import aboutVietNam from '@images/about-vietnam.png'
import { useTranslation } from 'react-i18next'
import imageAbout from '@images/image-about.png'
import imageAbout2 from '@images/image-about2.png'
import imageAbout3 from '@images/image-about3.png'
import FAQ from '@components/FAQ'
import PlainYourTrip from '@components/PlainYourTrip'
import WhyVisit from '@components/WhyVisit'
import Reveal from '@components/animation/Reveal'

const About = () => {
    const { t } = useTranslation()

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: 'About Vietnam ' }
    ]

    return (
        <main>
            <section className="container">
                <Breadcrumb className="mb-[35px] mt-[15px]" items={breadcrumdItems} />
                <h1 className="text-[#1A2A44] text-[60px] font-medium mb-[35px] text-center">
                    About Vietnam
                </h1>
            </section>
            <section className="container">
                <Reveal className="m-[0_-30px]">
                    <img src={aboutVietNam} className="w-full" alt="About Vietnam" />
                </Reveal>
            </section>
            <section className="container mt-[80px]">
                <SubHeading className="mb-[16px]">
                    Welcome to Vietnam – where heritage meets wonder.
                </SubHeading>
                <TextNormal>
                    Once a land of ancient kingdoms and storied dynasties, Vietnam today stands as a vibrant tapestry of culture, resilience, and breathtaking beauty. Stretching from the misty mountains of the north to the sun-kissed beaches of the south, this Southeast Asian gem is home to more than 100 million people and a rich mosaic of ethnic groups and traditions. Whether you're wandering through the lantern-lit streets of Hội An, cruising the emerald waters of Hạ Long Bay, or feeling the pulse of modern life in Hồ Chí Minh City, Vietnam promises experiences that stir the soul and ignite the senses. From timeless pagodas and bustling markets to cutting-edge innovation and youthful energy, the spirit of Vietnam is one of harmony between past and future.
                </TextNormal>
                <TextNormal className="mb-[80px]">
                    Explore our guide to uncover Vietnam’s fascinating stories – learn about its heritage, its evolution, and the communities that shape its present. By the end of your journey, you’ll not only fall in love with its charm but also feel connected to a country on the move.
                </TextNormal>
                <div className="grid grid-cols-4 gap-[80px]">
                    <div className="group cursor-pointer">
                        <LocationIcon className="mb-[30px] mx-auto cursor-pointer group-hover:fill-[#007BFF]"/>
                        <TextNormal className="text-[18px] mb-[80px] text-center">
                            Vietnam is located in <b>Asia</b>, the center of Southeast Asia.
                        </TextNormal>
                    </div>
                    <div className="group cursor-pointer">
                        <FlagIcon className="mb-[30px] mx-auto group-hover:fill-[#007BFF]"/>
                        <TextNormal className="text-[18px] mb-[80px] text-center cursor-pointer">
                            <b>The red flag with a yellow star</b><br/>
                            is the national flag of the Socialist Republic of Vietnam.
                        </TextNormal>
                    </div>
                    <div className="group cursor-pointer">
                        <NationalLanguageIcon className="mb-[30px] mx-auto cursor-pointer group-hover:fill-[#007BFF]"/>
                        <TextNormal className="text-[18px] mb-[80px] text-center">
                            <b>Vietnamese</b> is the national language (and official language) of Vietnam.
                        </TextNormal>
                    </div>
                    <div className="group cursor-pointer">
                        <PeopleIcon className="mb-[30px] mx-auto cursor-pointer group-hover:fill-[#007BFF]"/>
                        <TextNormal className="text-[18px] mb-[80px] text-center">
                            By 2024 the population will reach <b>100 million people.</b>
                        </TextNormal>
                    </div>
                </div>
            </section>
            <section className="container mt-[120px]">
                <Reveal className="grid grid-cols-2 gap-[30px] items-center">
                    <div><img src={imageAbout} alt="DISCOVER VIETNAM’S NATURAL WORLD" /></div>
                    <div>
                        <SubHeading className="mb-[15px] font-bold uppercase">
                            DISCOVER VIETNAM’S NATURAL WORLD
                        </SubHeading>
                        <TextNormal className="text-[16px]">
                            Many areas in Vietnam are truly unique ecosystems, with stark contrasts and fascinating natural wonders.
                        </TextNormal>
                    </div>
                </Reveal>
                <Reveal className="grid grid-cols-2 gap-[30px] items-center mt-[80px]">
                    <div>
                        <SubHeading className="mb-[15px] font-bold uppercase">
                            Traditions that last for centuries
                        </SubHeading>
                        <TextNormal className="text-[16px]">
                            Enjoy the many traditions of Vietnam, from the charming dhows floating on the bay and the scent of agarwood, to the way communities come together to celebrate the Lunar New Year. Discover some of the unique customs of the Vietnamese people.
                        </TextNormal>
                    </div>
                    <div><img src={imageAbout2} alt="DISCOVER VIETNAM’S NATURAL WORLD" /></div>
                </Reveal>
                <Reveal className="grid grid-cols-2 gap-[30px] items-center mt-[80px]">
                    <div><img src={imageAbout3} alt="DISCOVER VIETNAM’S NATURAL WORLD" /></div>
                    <div>
                        <SubHeading className="mb-[15px] font-bold uppercase">
                            DISCOVER VIETNAM’S NATURAL WORLD
                        </SubHeading>
                        <TextNormal className="text-[16px]">
                            Many areas in Vietnam are truly unique ecosystems, with stark contrasts and fascinating natural wonders.
                        </TextNormal>
                    </div>
                </Reveal>
            </section>
            <WhyVisit />
            <FAQ className="mt-[80px]" />
            <PlainYourTrip className="mt-[120px]" />
        </main>
    )
}

export default About