import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardEvent from "./card/CardEvent";
import { NavLink } from "react-router";
import { IoTicketOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ROUTES from "@routes/routes";

const VietNamEvent = ({ className = "", data = [] }) => {
    const { t } = useTranslation();
    const events = data.map((item, idx) => (
        <CardEvent
            key={idx}
            title={item.title}
            widthImage="100%"
            heightImage="245px"
            image={item.image}
            // href="/"
            startTime={new Date(item.start_date * 1000)}
            endTime={new Date(item.due_date * 1000)}
        >
            <NavLink className="bg-white rounded-[0_0_12px_12px] block">
                <p className="flex gap-[8px] items-center text-[#1A2A44]">
                    <CiLocationOn className="text-[20px]" />
                    <span>{item.city}</span>
                    <IoTicketOutline className="text-[20px]" />
                </p>
                <div
                    className="hidden sm:block text-[16px] font-normal mt-[16px] truncate_3"
                    dangerouslySetInnerHTML={{ __html: item.intro }}
                ></div>
            </NavLink>
        </CardEvent>
    ));

    return (
        <section className={className}>
            <div className="container">
                <div className="lg:flex items-center justify-between mb-[20px]">
                    <h2 className="mb-[10px] lg:mb-[0] lg:text-[40px] text-[34px] font-[700] text-[#1A2A44]">
                        {t("Celebrate Vietnam's Vibrant Events & Festivals")}
                    </h2>
                    <ViewMoreButton
                        className="font-[700] text-[18px]"
                        text={t("See All Events")}
                        to={ROUTES.EVENTS}
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

                        <CarouselPrevious className="hidden absolute left-[-16px] top-[120px] -translate-y-1/2 z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow" />
                        <CarouselNext className="hidden absolute right-[-16px] top-[120px] -translate-y-1/2 z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow" />
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
