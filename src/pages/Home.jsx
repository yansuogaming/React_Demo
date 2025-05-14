import heroImage from "@images/hero-image.webp";
import { useTranslation } from "react-i18next";
import Story from "@components/Story";
import PlainYourTrip from "@components/PlainYourTrip";
import TrendingItinerary from "@components/TrendingItinerary";
import TopVietnamExperiences from "@components/TopVietnamExperiences";
import VietNamEvent from "@components/VietNamEvent";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@ui/skeleton";
import { NavLink } from "react-router";
import RegionList from "@components/RegionList";
import TravelOffers from "@components/TravelOffers";
import { cn } from "@lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
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
            <section className="relative text-white h-screen max-w-screen overflow-hidden">
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
                    style={{ display: isLoaded ? "inline" : "none" }}
                    ref={imgRef}
                    onLoad={() => setIsLoaded(true)}
                    className="h-screen min-w-screen absolute top-0 left-1/2 -translate-x-1/2"
                />
                {isLoaded && (
                    <>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className={cn(
                                "text-center text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]",
                                "text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)]",
                                "absolute bottom-[220px] w-full font-bold"
                            )}
                        >
                            {t("home.hero_heading")}
                        </motion.h1>
                        <motion.p
                            layout
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className={cn(
                                "text-center text-[20px] font-normal",
                                "absolute bottom-[188px] w-full"
                            )}
                        >
                            {t("home.description")}
                        </motion.p>
                        <motion.div
                            className={cn(
                                "flex gap-[15px] absolute bottom-[85px]",
                                "translate-t-[-50%] w-full justify-center"
                            )}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <NavLink
                                to="/"
                                className={cn(
                                    "transition-all duration-500",
                                    "p-[15px] border-white border-1 rounded-[80px]",
                                    "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                    "focus:outline-none focus:ring-blue-300"
                                )}
                            >
                                Plan Your Trip
                            </NavLink>
                            <NavLink
                                to="/"
                                className={cn(
                                    "transition-all duration-500",
                                    "p-[15px] border-white border-1 rounded-[80px]",
                                    "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                    "focus:outline-none focus:ring-blue-300"
                                )}
                            >
                                Explore Destinations
                            </NavLink>
                            <NavLink
                                to="/"
                                className={cn(
                                    "transition-all duration-500",
                                    "p-[15px] border-white border-1 rounded-[80px]",
                                    "hover:bg-[#153b33] hover:border-[#153b33] focus:ring-4",
                                    "focus:outline-none focus:ring-blue-300"
                                )}
                            >
                                Find Experiences
                            </NavLink>
                        </motion.div>
                    </>
                )}
                <FaArrowDown
                    onClick={scrollDown}
                    className={cn(
                        "cursor-pointer absolute bottom-[15px]",
                        "left-1/2 translate-[-50%] text-[24px]"
                    )}
                />
            </section>
            <RegionList id="region" className="mt-[135px] mb-[145px]" />
            <VietNamEvent className="bg-[#F5F6FA] py-[80px]" />
            <TopVietnamExperiences className="mb-[120px] pt-[80px]" />
            <TrendingItinerary className="mb-[120px]" />
            <TravelOffers className="mb-[120px]" />
            <PlainYourTrip className="mb-[120px]" />
            <Story />
        </main>
    );
}
