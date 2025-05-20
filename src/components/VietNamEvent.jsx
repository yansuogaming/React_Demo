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
import { cn } from "@lib/utils";

const VietNamEvent = ({ className = "", events = [] }) => {
    const { t } = useTranslation();

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
                        href="/events"
                    />
                </div>

                <div className="relative">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="-ml-4">
                            {events.map((event, idx) => (
                                <CarouselItem
                                    key={idx}
                                    className="basis-[70%] sm:basis-1/4 pl-4"
                                >
                                    <CardEvent
                                        key={idx}
                                        title={event.title}
                                        widthImage="100%"
                                        heightImage="245px"
                                        image={event.image}
                                        href="/"
                                        startTime={new Date(event.start_date * 1000)}
                                        endTime={new Date(event.due_date * 1000)}
                                    >
                                        <NavLink className="bg-white rounded-[0_0_12px_12px] block">
                                            <p className="flex gap-[8px] items-center text-[#1A2A44]">
                                                <CiLocationOn className="text-[20px]" />
                                                <span>{event.city}</span>
                                                <IoTicketOutline className="text-[20px]" />
                                            </p>
                                            <div
                                                className="sm:block text-[16px] font-normal mt-[16px] truncate_3"
                                                dangerouslySetInnerHTML={{__html: event.intro}}
                                            />
                                        </NavLink>
                                    </CardEvent>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className={cn(
                                'absolute left-[-16px] top-[120px] -translate-y-1/2',
                                'z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow'
                            )}
                        />
                        <CarouselNext
                            className={cn(
                                'absolute right-[-16px] top-[120px] -translate-y-1/2',
                                'z-10 bg-white text-[#1A2A44] rounded-full p-2 shadow'
                            )}
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default VietNamEvent;
