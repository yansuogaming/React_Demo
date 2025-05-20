import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@ui/carousel";
import image from "@images/image_16.png";
import { NavLink } from "react-router";
import Reveal from "./animation/Reveal";

const ExperienceActivities = ({ className = "" }) => {
    return (
        <section className={`container px-4 md:px-6 ${className}`}>
            <h3 className="text-[#1A2A44] text-[28px] sm:text-[32px] md:text-[40px] font-bold mb-[10px] sm:mb-[15px]">
                Experiences and Activities
            </h3>
            <div className="flex gap-[10px] overflow-x-auto no-scrollbar whitespace-nowrap py-2">
                <button className="p-[8px_16px] text-[#007BFF] rounded-[80px] border-[#007BFF] border-1">
                    Itineraries
                </button>
                <button className="p-[8px_16px] text-[#64646D] rounded-[80px] bg-[#ECECF1]">
                    Accommodations
                </button>
                <button className="p-[8px_16px] text-[#64646D] rounded-[80px] bg-[#ECECF1]">
                    Experiences
                </button>
                <button className="p-[8px_16px] text-[#64646D] rounded-[80px] bg-[#ECECF1]">
                    Cuisine
                </button>
                <button className="p-[8px_16px] text-[#64646D] rounded-[80px] bg-[#ECECF1]">
                    Cuisine
                </button>
            </div>
            <Reveal>
                <Carousel
                    className="w-full mt-[40px]"
                    opts={{
                        align: "start",
                        skipSnaps: false,
                        containScroll: "trimSnaps",
                        loop: false,
                        dragFree: false,
                    }}
                >
                    <CarouselContent className="-ml-[20px]">
                        <CarouselItem className="basis-[83.3333%] sm:basis-[45.45%] lg:basis-1/3 pl-[20px] relative group">
                            <NavLink className="overflow-hidden ">
                                <img
                                    src={image}
                                    alt="Enjoy Hanoi street food"
                                    className="w-full"
                                />
                            </NavLink>
                            <NavLink
                                to=""
                                className="block text-[#1A2A44] text-[24px] font-bold mt-[15px] mb-[2px]"
                            >
                                <h3>Enjoy Hanoi street food</h3>
                            </NavLink>
                            <p className="flex gap-[5px] items-center mb-[15px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                                        stroke="#494951"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10 5V10.625H13.75"
                                        stroke="#494951"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                3 days 2 nights
                            </p>
                            <p>
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour
                            </p>
                        </CarouselItem>
                        <CarouselItem className="basis-[83.3333%] sm:basis-[45.45%] lg:basis-1/3 pl-[20px] relative group">
                            <NavLink className="overflow-hidden ">
                                <img
                                    src={image}
                                    alt="Enjoy Hanoi street food"
                                    className="w-full"
                                />
                            </NavLink>
                            <NavLink
                                to=""
                                className="block text-[#1A2A44] text-[24px] font-bold mt-[15px] mb-[2px]"
                            >
                                <h3>Enjoy Hanoi street food</h3>
                            </NavLink>
                            <p className="flex gap-[5px] items-center mb-[15px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                                        stroke="#494951"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10 5V10.625H13.75"
                                        stroke="#494951"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                3 days 2 nights
                            </p>
                            <p>
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour
                            </p>
                        </CarouselItem>
                        <CarouselItem className="basis-[83.3333%] sm:basis-[45.45%] lg:basis-1/3 pl-[20px] relative group">
                            <NavLink className="overflow-hidden ">
                                <img
                                    src={image}
                                    alt="Enjoy Hanoi street food"
                                    className="w-full"
                                />
                            </NavLink>
                            <NavLink
                                to=""
                                className="block text-[#1A2A44] text-[24px] font-bold mt-[15px] mb-[2px]"
                            >
                                <h3>Enjoy Hanoi street food</h3>
                            </NavLink>
                            <p className="flex gap-[5px] items-center mb-[15px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                                        stroke="#494951"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10 5V10.625H13.75"
                                        stroke="#494951"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                3 days 2 nights
                            </p>
                            <p>
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour
                            </p>
                        </CarouselItem>
                        <CarouselItem className="basis-[83.3333%] sm:basis-[45.45%] lg:basis-1/3 pl-[20px] relative group">
                            <NavLink className="overflow-hidden ">
                                <img
                                    src={image}
                                    alt="Enjoy Hanoi street food"
                                    className="w-full"
                                />
                            </NavLink>
                            <NavLink
                                to=""
                                className="block text-[#1A2A44] text-[24px] font-bold mt-[15px] mb-[2px]"
                            >
                                <h3>Enjoy Hanoi street food</h3>
                            </NavLink>
                            <p className="flex gap-[5px] items-center mb-[15px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z"
                                        stroke="#494951"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M10 5V10.625H13.75"
                                        stroke="#494951"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                3 days 2 nights
                            </p>
                            <p>
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:flex items-center justify-center absolute top-[40%] -translate-y-1/2 left-0 z-10 rounded-full bg-white shadow-md" />
                    <CarouselNext className="hidden lg:flex items-center justify-center absolute top-[40%] -translate-y-1/2 right-0 z-10 rounded-full bg-white shadow-md" />
                </Carousel>
            </Reveal>
        </section>
    );
};

export default ExperienceActivities;
