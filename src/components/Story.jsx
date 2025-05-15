import image from "@images/image_10.png";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardService from "./card/CardService";
import Reveal from "./animation/Reveal";
import { LiaTagsSolid } from "react-icons/lia";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Story = ({ className = "" }) => {
    const { t } = useTranslation();

    return (
        <section className={`container ${className}`}>
            <div className="lg:flex items-center justify-between mb-[20px]">
                <h2 className="mb-[10px] lg:mb-[0] text-[30px] font-bold text-[#1A2A44]">
                    Stories from Vietnam Travelers
                </h2>
                <ViewMoreButton text={t("Read more")} />
            </div>

            <Reveal>
                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <CardService
                                        title="Cruising Ha Long Bay: A Dream Come True"
                                        widthImage="100%"
                                        heightImage="100%"
                                        image={image}
                                        href="/"
                                        padding="20px 0 0 0"
                                    >
                                        <NavLink
                                            to="/"
                                            className="flex items-center gap-[5px]"
                                        >
                                            <LiaTagsSolid />
                                            #Vietnamtravel
                                        </NavLink>
                                    </CardService>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Nav Buttons */}
                        <CarouselPrevious className="absolute top-[40%] -left-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 hidden md:flex">
                            <FaChevronLeft />
                        </CarouselPrevious>
                        <CarouselNext className="absolute top-[40%] -right-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 hidden md:flex">
                            <FaChevronRight />
                        </CarouselNext>
                    </Carousel>
                </div>
            </Reveal>
        </section>
    );
};

export default Story;
