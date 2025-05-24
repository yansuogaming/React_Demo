import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@ui/carousel";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import travelOffer1 from "@images/travel-offer1.png";
import { cn } from "@lib/utils";
import { useTranslation } from "react-i18next";

const offers = [
    {
        title: "Thailand's Top Pattaya Tours – Unforgettable Beachside Adventures!",
        image: travelOffer1,
        link: "/",
    },
    {
        title: "Explore Bali with Up to 10% Off This Summer",
        image: travelOffer1,
        link: "/",
    },
    {
        title: "Experience Japan’s Cherry Blossom Season",
        image: travelOffer1,
        link: "/",
    },
];

const TravelOffers = ({ className = "" }) => {
    const { t } = useTranslation();
    return (
        <section className={`container px-4 md:px-6 ${className}`}>
            {/* Heading */}
            <div className="flex justify-between mb-[24px] w-full">
                <h2 className="text-[#1A2A44] text-[28px] sm:text-[32px] md:text-[40px] font-bold">
                    {t("Travel Offers")}
                </h2>
            </div>

            {/* ✅ Mobile & Tablet Carousel */}
            <div className="md:hidden">
                <Carousel>
                    <div className="relative">
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden" />

                        <CarouselContent className="gap-4">
                            {offers.map((offer, idx) => (
                                <CarouselItem
                                    key={idx}
                                    className="basis-[83.33%]"
                                >
                                    <div className="border border-[#D1DBE4] rounded-[8px_60px_8px_8px] overflow-hidden min-h-[377px]">
                                        <NavLink to={offer.link}>
                                            <img
                                                className="w-full h-[200px] object-cover"
                                                src={offer.image}
                                                alt={offer.title}
                                            />
                                        </NavLink>
                                        <div className="p-4">
                                            <p className="text-[#1A2A44] text-[20px] font-bold mb-3">
                                                {offer.title}
                                            </p>
                                            <NavLink
                                                to={offer.link}
                                                className={cn(
                                                    "flex gap-[10px] items-center p-[10px] rounded-[90px]",
                                                    "bg-[#007BFF] text-white text-[16px] font-bold w-fit"
                                                )}
                                            >
                                                {t("Find out more")}
                                                <FaArrowRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>

            {/* ✅ Desktop layout (split text + image carousel) */}
            <div className="hidden md:flex items-center rounded-[8px_60px_8px_8px]">
                <div
                    className={cn(
                        "p-[15px] md:p-[0_25px_0_30px] min-w-full md:min-w-[300px] md:max-w-[300px]",
                        "border-[#D1DBE4] border-1 h-[350px] flex flex-col justify-center"
                    )}
                >
                    <p className="text-[#1A2A44] text-[24px] font-bold mb-[25px]">
                        {offers[0].title}
                    </p>
                    <NavLink
                        to={offers[0].link}
                        className={cn(
                            "flex gap-[10px] items-center p-[15px] rounded-[90px]",
                            "bg-[#007BFF] text-white text-[18px] font-bold w-fit"
                        )}
                    >
                        {t("Find out more")}
                        <FaArrowRight />
                    </NavLink>
                </div>

                <Carousel>
                    <CarouselContent className="-ml-[30px]">
                        {offers.map((offer, idx) => (
                            <CarouselItem
                                key={idx}
                                className="basis-full md:basis-[70%] pl-[30px]"
                            >
                                <NavLink
                                    to={offer.link}
                                    className="overflow-hidden w-full"
                                >
                                    <img
                                        className="w-full h-[350px] rounded-[0_60px_0_0]"
                                        src={offer.image}
                                        alt={offer.title}
                                    />
                                </NavLink>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </section>
    );
};

export default TravelOffers;
