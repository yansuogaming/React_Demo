import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import img1 from "@images/4-1708873508769.webp";

const slides = [
    {
        image: img1,
        caption: "Coins ranging from 25 fils to AED 1",
    },
    {
        image: img1,
        caption: "Colorful UAE banknotes from 5 to 1000",
    },
    {
        image: img1,
        caption: "Dirham coins used daily in Dubai",
    },
];

const CurrencyImageSlider = () => {
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
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44] mb-2">
                        What do dirhams look like?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base max-w-3xl">
                        The AED1 coin is silver and has a traditional Arabic
                        coffee pot (<em>dallah</em>) on one side. Otherwise,
                        dirhams come in colourful banknotes ranging from AED5 to
                        AED1,000. Check out the intricate artwork on each note.
                    </p>
                </div>

                {/* Navigation */}
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
                    {slides.map((item, index) => {
                        const isActive = index === selectedIndex;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none w-[80%] sm:w-1/2 lg:w-[55%] transition-all duration-500",
                                    isActive ? "opacity-100" : "opacity-40"
                                )}
                            >
                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-[350px] object-cover"
                                    />
                                    <p className="mt-2 text-xs text-[#1A2A44] uppercase tracking-wide">
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
                            "h-[6px] transition-all rounded-full",
                            selectedIndex === index
                                ? "w-[24px] bg-gray-800"
                                : "w-[6px] bg-gray-300"
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default CurrencyImageSlider;
