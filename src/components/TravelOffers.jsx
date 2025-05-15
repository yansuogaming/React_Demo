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

const TravelOffers = ({ className = "" }) => {
    return (
        <section className={`container px-4 md:px-6 ${className}`}>
            <Carousel>
                <div className="flex justify-between mb-[24px] w-full">
                    <h2 className="text-[#1A2A44] text-[28px] sm:text-[32px] md:text-[40px] font-bold">
                        Travel Offers
                    </h2>
                    <div className="relative w-[90px]">
                        <CarouselPrevious className="absolute left-0 cursor-pointer" />
                        <CarouselNext className="absolute right-0 cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center rounded-[8px_60px_8px_8px]">
                    <div
                        className={cn(
                            "p-[15px] md:p-[0_25px_0_30px] min-w-full md:min-w-[300px] md:max-w-[300px]",
                            "border-[#D1DBE4] border-1 h-[350px] flex flex-col justify-center"
                        )}
                    >
                        <p className="text-[#1A2A44] text-[24px] font-bold mb-[25px]">
                            Thailand's Top Pattaya Tours – Unforgettable
                            Beachside Adventures!
                        </p>
                        <NavLink
                            to=""
                            className={cn(
                                "flex gap-[10px] items-center p-[15px] rounded-[90px]",
                                "bg-[#007BFF] text-white text-[18px] font-bold w-fit"
                            )}
                        >
                            Find out more
                            <FaArrowRight />
                        </NavLink>
                    </div>
                    <CarouselContent className="-ml-[30px]">
                        <CarouselItem className="basis-full md:basis-[70%] pl-[30px]">
                            <NavLink to="" className="overflow-hidden w-full">
                                <img
                                    className="w-full h-[350px] rounded-[0_60px_0_0]"
                                    src={travelOffer1}
                                />
                            </NavLink>
                        </CarouselItem>
                        <CarouselItem className="basis-full md:basis-[70%] pl-[30px]">
                            <NavLink to="" className="overflow-hidden w-full">
                                <img
                                    className="w-full h-[350px] rounded-[60px_0_0_0]"
                                    src={travelOffer1}
                                />
                            </NavLink>
                        </CarouselItem>
                    </CarouselContent>
                </div>
            </Carousel>
        </section>
    );
};

export default TravelOffers;
