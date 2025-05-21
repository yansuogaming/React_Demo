import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import Breadcrumb from "@components/Breadcrumb";
import FlagIcon from "@components/icons/FlagIcon";
import LocationIcon from "@components/icons/LocationIcon";
import NationalLanguageIcon from "@components/icons/NationalLanguageIcon";
import PeopleIcon from "@components/icons/PeopleIcon";
import SubHeading from "@components/text/SubHeading";
import TextNormal from "@components/text/TextNormal";
import aboutVietNam from "@images/about-vietnam.png";
import { useTranslation } from "react-i18next";
import imageAbout from "@images/image-about.png";
import imageAbout2 from "@images/image-about2.png";
import imageAbout3 from "@images/image-about3.png";
import FAQ from "@components/FAQ";
import PlainYourTrip from "@components/PlainYourTrip";
import WhyVisit from "@components/WhyVisit";
import Reveal from "@components/animation/Reveal";

const About = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: "About Vietnam" },
    ];

    return (
        <main>
            {/* Breadcrumb Section */}
            <section className="container px-4 sm:px-6 md:px-8">
                <Breadcrumb
                    className="mb-4 sm:mb-6 md:mb-[35px] mt-2 sm:mt-3 md:mt-[15px]"
                    items={breadcrumdItems}
                />
                <h1 className="text-[#1A2A44] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium mb-6 sm:mb-8 md:mb-[35px] text-center">
                    About Vietnam
                </h1>
            </section>

            {/* Hero Image Section */}
            <section className="container px-4 sm:px-6 md:px-8">
                <Reveal className="m-0 sm:m-[0_-15px] md:m-[0_-30px]">
                    <img
                        src={aboutVietNam}
                        className="w-full h-auto object-cover"
                        alt="About Vietnam"
                    />
                </Reveal>
            </section>

            {/* Description and Carousel Section */}
            <section className="container px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-[80px]">
                <SubHeading className="mb-3 sm:mb-4 md:mb-[16px] text-xl sm:text-2xl md:text-3xl">
                    Welcome to Vietnam - where heritage meets wonder.
                </SubHeading>
                <TextNormal className="text-sm sm:text-base md:text-lg">
                    Once a land of ancient kingdoms and storied dynasties,
                    Vietnam today stands as a vibrant tapestry of culture,
                    resilience, and breathtaking beauty. Stretching from the
                    misty mountains of the north to the sun-kissed beaches of
                    the south, this Southeast Asian gem is home to more than 100
                    million people and a rich mosaic of ethnic groups and
                    traditions. Whether you're wandering through the lantern-lit
                    streets of Hội An, cruising the emerald waters of Hạ Long
                    Bay, or feeling the pulse of modern life in Hồ Chí Minh
                    City, Vietnam promises experiences that stir the soul and
                    ignite the senses. From timeless pagodas and bustling
                    markets to cutting-edge innovation and youthful energy, the
                    spirit of Vietnam is one of harmony between past and future.
                </TextNormal>
                <TextNormal className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-[80px]">
                    Explore our guide to uncover Vietnam’s fascinating stories –
                    learn about its heritage, its evolution, and the communities
                    that shape its present. By the end of your journey, you’ll
                    not only fall in love with its charm but also feel connected
                    to a country on the move.
                </TextNormal>
                <Carousel opts={{ align: "start" }} className="mt-6 sm:mt-8 md:mt-[40px]">
                    <CarouselContent>
                        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 px-2">
                            <div className="group cursor-pointer">
                                <LocationIcon className="mb-4 sm:mb-6 md:mb-[30px] mx-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 group-hover:fill-[#007BFF]" />
                                <TextNormal className="text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8 md:mb-[40px] text-center">
                                    Vietnam is located in <b>Asia</b>, the
                                    center of Southeast Asia.
                                </TextNormal>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 px-2">
                            <div className="group cursor-pointer">
                                <FlagIcon className="mb-4 sm:mb-6 md:mb-[30px] mx-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 group-hover:fill-[#007BFF]" />
                                <TextNormal className="text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8 md:mb-[40px] text-center">
                                    <b>The red flag with a yellow star</b>
                                    <br />
                                    is the national flag of the Socialist
                                    Republic of Vietnam.
                                </TextNormal>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 px-2">
                            <div className="group cursor-pointer">
                                <NationalLanguageIcon className="mb-4 sm:mb-6 md:mb-[30px] mx-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 group-hover:fill-[#007BFF]" />
                                <TextNormal className="text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8 md:mb-[40px] text-center">
                                    <b>Vietnamese</b> is the national language
                                    (and official language) of Vietnam.
                                </TextNormal>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 px-2">
                            <div className="group cursor-pointer">
                                <PeopleIcon className="mb-4 sm:mb-6 md:mb-[30px] mx-auto w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 group-hover:fill-[#007BFF]" />
                                <TextNormal className="text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8 md:mb-[40px] text-center">
                                    By 2024 the population will reach{" "}
                                    <b>100 million people.</b>
                                </TextNormal>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </section>

            {/* Grid Sections */}
            <section className="container px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-[120px]">
                {/* Item 1 */}
                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[30px] items-center">
                    <div className="order-2 md:order-none">
                        <img
                            src={imageAbout}
                            className="w-full h-auto object-cover"
                            alt="DISCOVER VIETNAM’S NATURAL WORLD"
                        />
                    </div>
                    <div className="order-1 md:order-none">
                        <SubHeading className="mb-3 sm:mb-4 md:mb-[15px] font-bold uppercase text-lg sm:text-xl md:text-2xl">
                            DISCOVER VIETNAM’S NATURAL WORLD
                        </SubHeading>
                        <TextNormal className="text-sm sm:text-base md:text-[16px]">
                            Many areas in Vietnam are truly unique ecosystems,
                            with stark contrasts and fascinating natural
                            wonders.
                        </TextNormal>
                    </div>
                </Reveal>

                {/* Item 2 */}
                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[30px] items-center mt-8 sm:mt-12 md:mt-[80px]">
                    <div>
                        <SubHeading className="mb-3 sm:mb-4 md:mb-[15px] font-bold uppercase text-lg sm:text-xl md:text-2xl">
                            Traditions that last for centuries
                        </SubHeading>
                        <TextNormal className="text-sm sm:text-base md:text-[16px]">
                            Enjoy the many traditions of Vietnam, from the
                            charming dhows floating on the bay and the scent of
                            agarwood, to the way communities come together to
                            celebrate the Lunar New Year. Discover some of the
                            unique customs of the Vietnamese people.
                        </TextNormal>
                    </div>
                    <div>
                        <img
                            src={imageAbout2}
                            className="w-full h-auto object-cover"
                            alt="DISCOVER VIETNAM’S NATURAL WORLD"
                        />
                    </div>
                </Reveal>

                {/* Item 3 */}
                <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[30px] items-center mt-8 sm:mt-12 md:mt-[80px]">
                    <div className="order-2 md:order-none">
                        <img
                            src={imageAbout3}
                            className="w-full h-auto object-cover"
                            alt="DISCOVER VIETNAM’S NATURAL WORLD"
                        />
                    </div>
                    <div className="order-1 md:order-none">
                        <SubHeading className="mb-3 sm:mb-4 md:mb-[15px] font-bold uppercase text-lg sm:text-xl md:text-2xl">
                            DISCOVER VIETNAM’S NATURAL WORLD
                        </SubHeading>
                        <TextNormal className="text-sm sm:text-base md:text-[16px]">
                            Many areas in Vietnam are truly unique ecosystems,
                            with stark contrasts and fascinating natural
                            wonders.
                        </TextNormal>
                    </div>
                </Reveal>
            </section>

            <WhyVisit />
            <FAQ className="mt-8 sm:mt-12 md:mt-[80px]" />
            <PlainYourTrip className="mt-8 sm:mt-12 md:mt-[120px]" />
        </main>
    );
};

export default About;