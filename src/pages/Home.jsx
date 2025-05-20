import heroImage from "@images/hero-image.webp";
import { useTranslation } from "react-i18next";
import Story from "@components/Story";
import PlainYourTrip from "@components/PlainYourTrip";
import TrendingItinerary from "@components/TrendingItinerary";
import TopVietnamExperiences from "@components/TopVietnamExperiences";
import VietNamEvent from "@components/VietNamEvent";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@ui/skeleton";
import { NavLink, useLoaderData } from "react-router";
import RegionList from "@components/RegionList";
import TravelOffers from "@components/TravelOffers";
import { cn } from "@lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
    const { experienceTypes, events } = useLoaderData();
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    const scrollDown = () => {
        const regionElement = document.getElementById("region");
        const heightHeader = document.querySelector("header").clientHeight;
        window.scrollTo({
            top: regionElement.offsetTop - heightHeader,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, []);

    return (
        <main>
            <section className="relative text-white h-screen max-w-screen overflow-hidden -mt-[75.45px] lg:-mt-[96px]">
                {!isLoaded && (
                    <Skeleton
                        className={cn(
                            "h-screen w-full rounded-0",
                            "bg-[#989797] rounded-none"
                        )}
                    />
                )}
                <img
                    rel="preload"
                    loading="eager"
                    decoding="async"
                    src={heroImage}
                    alt={t("home.hero_heading")}
                    style={{ opacity: isLoaded ? 1 : 0 }}
                    ref={imgRef}
                    onLoad={() => setIsLoaded(true)}
                    className="h-screen w-full absolute top-0 left-1/2 -translate-x-1/2 object-cover"
                />
                <div className="absolute bottom-[80px] lg:bottom-[120px] text-center w-full px-[20px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={
                            isLoaded
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 100 }
                        }
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={cn(
                            "text-center text-[25px] md:text-[40px] lg:text-[50px] xl:text-[60px]",
                            "text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)]",
                            "w-full font-bold px-[20px] mb-[5px]"
                        )}
                    >
                        {t("home.hero_heading")}
                    </motion.h1>
                    <motion.p
                        layout
                        initial={{ opacity: 0, y: 100 }}
                        animate={
                            isLoaded
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 100 }
                        }
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className={cn(
                            "text-center text-[16px] lg:text-[20px] font-normal px-[20px]",
                            "w-full container mx-auto mb-[20px] lg:mb-[50px]"
                        )}
                    >
                        {t("home.description")}
                    </motion.p>
                    <motion.div
                        className={cn(
                            "flex gap-[15px] flex-wrap",
                            "translate-t-[-50%] w-full justify-center"
                        )}
                        initial={{ opacity: 0, y: 100 }}
                        animate={
                            isLoaded
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 100 }
                        }
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <NavLink
                            to="/"
                            className={cn(
                                "transition-all duration-500 text-[14px] lg:text-[16px]",
                                "p-[10px] lg:p-[15px] border-white border-2 rounded-[80px]",
                                "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                "focus:outline-none focus:ring-blue-300"
                            )}
                        >
                            Plan Your Trip
                        </NavLink>
                        <NavLink
                            to="/"
                            className={cn(
                                "transition-all duration-500 text-[14px] lg:text-[16px]",
                                "p-[10px] lg:p-[15px] border-white border-2 rounded-[80px]",
                                "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                "focus:outline-none focus:ring-blue-300"
                            )}
                        >
                            Explore Destinations
                        </NavLink>
                        <NavLink
                            to="/"
                            className={cn(
                                "transition-all duration-500 text-[14px] lg:text-[16px]",
                                "p-[10px] lg:p-[15px] border-white border-2 rounded-[80px]",
                                "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                "focus:outline-none focus:ring-blue-300"
                            )}
                        >
                            Find Experiences
                        </NavLink>
                    </motion.div>
                </div>
                <FaArrowDown
                    onClick={scrollDown}
                    className={cn(
                        "cursor-pointer absolute bottom-[15px]",
                        "left-1/2 translate-[-50%] text-[24px]"
                    )}
                />
            </section>
            <RegionList
                id="region"
                className="lg:mt-[60px] lg:mb-[145px] mt-[80px] mb-[60px]"
            />
            <VietNamEvent
                className="bg-[#F5F6FA] py-[48px] lg:py-[80px] pt-[48px] lg:pt-[80px]"
                events={events}
            />
            <TopVietnamExperiences
                className="mb-[80px] lg:mb-[120px] pt-[60px] lg:pt-[80px]"
                data={experienceTypes}
            />
            <TrendingItinerary className="mb-[80px] lg:mb-[120px]" />
            <TravelOffers className="mb-[60px] lg:mb-[120px]" />
            <PlainYourTrip className="mb-[80px] lg:mb-[120px]" />
            <Story />
        </main>
    );
}
