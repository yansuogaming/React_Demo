import image from "@images/image_10.png";
import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardEvent from "./card/CardEvent";
import { NavLink } from "react-router";
import { addDays } from "date-fns";
import { IoTicketOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const VietNamEvent = ({ className = "" }) => {
    const { t } = useTranslation();
    const startTime = new Date();
    const endTime = addDays(new Date(), 1);

    const events = Array.from({ length: 4 }).map((_, idx) => (
        <CardEvent
            key={idx}
            title="Enjoy Hanoi street food"
            widthImage="100%"
            heightImage="245px"
            image={image}
            href="/"
            startTime={startTime}
            endTime={endTime}
        >
            <NavLink className="bg-white rounded-[0_0_12px_12px] block">
                <p className="flex gap-[8px] items-center text-[#1A2A44]">
                    <CiLocationOn className="text-[20px]" />
                    <span>Nha Trang</span>
                    <IoTicketOutline className="text-[20px]" />
                </p>
                <p className="hidden sm:block text-[16px] font-normal mt-[16px]">
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour)
                </p>
            </NavLink>
        </CardEvent>
    ));

    return (
        <section className={className}>
            <div className="container">
                <div className="lg:flex items-center justify-between mb-[20px]">
                    <h2 className="mb-[10px] lg:mb-[0] lg:text-[40px] text-[34px] font-[700] text-[#1A2A44]">
                        Celebrate Vietnam's Vibrant Events
                    </h2>
                    <ViewMoreButton
                        className="font-[700] text-[18px]"
                        text={t("See All Events")}
                    />
                </div>

                {/* Carousel for mobile only */}
                <div className="relative md:hidden">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="-ml-4">
                            {events.map((event, idx) => (
                                <CarouselItem
                                    key={idx}
                                    className="basis-[70%] sm:basis-1/2 pl-4"
                                >
                                    {event}
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="absolute left-[-16px] top-[120px] -translate-y-1/2 z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow" />
                        <CarouselNext className="absolute right-[-16px] top-[120px] -translate-y-1/2 z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow" />
                    </Carousel>
                </div>

                {/* Grid layout for tablet and desktop */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {events}
                </div>
            </div>
        </section>
    );
};

export default VietNamEvent;
