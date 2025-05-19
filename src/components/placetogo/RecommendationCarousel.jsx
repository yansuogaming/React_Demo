import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FaArrowUp, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

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
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-[32px] font-bold text-[#1A2A44] mb-6">
                See more recommendations
            </h2>

            <div className="relative">
                <button
                    onClick={scrollPrev}
                    disabled={!emblaApi?.canScrollPrev()}
                    className="hidden lg:flex absolute left-[-24px] top-[40%] -translate-y-1/2 z-10 bg-white text-black border shadow-sm rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={scrollNext}
                    disabled={!emblaApi?.canScrollNext()}
                    className="hidden lg:flex absolute right-[-24px] top-[40%] -translate-y-1/2 z-10 bg-white text-black border shadow-sm rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                >
                    <FaChevronRight />
                </button>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {recommendations.map((item, index) => (
                            <div
                                key={index}
                                className="flex-none w-[80%] sm:w-1/2 lg:w-1/3 transition-all duration-300"
                            >
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                                    <div className="relative overflow-hidden">
                                        <div className="aspect-square">
                                            <NavLink to="">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </NavLink>
                                        </div>
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
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end mt-4 gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "h-[10px] transition rounded-full",
                                selectedIndex === index
                                    ? "w-[30px] bg-gray-800"
                                    : "w-[10px] bg-gray-300"
                            )}
                        />
                    ))}
                </div>
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
