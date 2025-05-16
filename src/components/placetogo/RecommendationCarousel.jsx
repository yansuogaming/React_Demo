import React from "react";
import { NavLink } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

const recommendations = [
    {
        image: imgHotel1,
        title: "Hotels with amazing waterparks in Dubai",
        time: "20 MIN READ",
    },
    {
        image: imgHotel2,
        title: "Your go-to Dubai stopover guide",
        time: "1 MIN READ",
    },
    {
        image: imgHotel1,
        title: "Indulge in Dubai’s best hammam spas",
        time: "3 MIN READ",
    },
];

const RecommendationCarousel = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-[32px] font-bold text-[#1A2A44] mb-6">
                See more recommendations
            </h2>

            <div className="relative">
                <Carousel opts={{ align: "start" }}>
                    {/* Navigation buttons */}
                    <div className="sm:hidden absolute -left-6 top-[40%] z-10 flex">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>
                    <div className="sm:hidden absolute -right-6 top-[40%] z-10 flex">
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>

                    <CarouselContent className="gap-4">
                        {recommendations.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 sm:basis-1/2 basis-full"
                            >
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                                    <div className="relative overflow-hidden">
                                        <NavLink to="">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </NavLink>
                                        {/* Heart button */}
                                        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-blue-700">
                                            <CiHeart />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <NavLink
                                            to=""
                                            className="text-[15px] font-semibold text-[#1A2A44] hover:text-blue-700"
                                        >
                                            {item.title}
                                        </NavLink>
                                        <p className="text-xs text-gray-500 mt-2">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="mt-6">
                <a
                    href="#"
                    className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                    See more articles
                    <span className="text-blue-600">
                        <FaArrowUp />
                    </span>
                </a>
            </div>
        </section>
    );
};

export default RecommendationCarousel;
