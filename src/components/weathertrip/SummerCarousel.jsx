import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

import imgDemo from "@images/3-1595134332.webp";

const items = [
    {
        image: imgDemo,
        caption: "Explore an indoor rainforest at The Green Planet",
    },
    {
        image: imgDemo,
        caption: "Let your kids play & learn at OliOli® Interactive Museum",
    },
    {
        image: imgDemo,
        caption: "Go skiing indoors at Ski Dubai",
    },
    {
        image: imgDemo,
        caption: "Marvel at the magic of Dubai Creek",
    },
];

const SummerCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        containScroll: "trimSnaps",
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
        <section className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44]">
                    Great days out during summer in Dubai
                </h2>

                <div className="hidden lg:flex gap-2">
                    <button
                        onClick={scrollPrev}
                        disabled={!emblaApi?.canScrollPrev()}
                        className="bg-white border shadow rounded w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!emblaApi?.canScrollNext()}
                        className="bg-white border shadow rounded w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {items.map((item, index) => {
                        const isActive = index === selectedIndex;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none w-[80%] sm:w-1/2 lg:w-[55%] transition-all duration-500",
                                    isActive ? "opacity-100" : "opacity-40"
                                )}
                            >
                                <div className="relative overflow-hidden rounded-md group">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transition-opacity duration-300"
                                    />
                                    <p className="mt-2 text-[12px] text-[#1A2A44] uppercase tracking-wide">
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dot Indicator */}
            <div className="flex justify-center mt-4 gap-2">
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
        </section>
    );
};

export default SummerCarousel;
