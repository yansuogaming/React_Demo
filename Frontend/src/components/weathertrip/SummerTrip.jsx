import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

const winterItems = [
    {
        icon: "🌊",
        title: "Beach life",
        description:
            "Enjoy a relaxing day soaking up the sun at Kite Beach or The Beach at JBR",
        cta: "Explore beaches",
    },
    {
        icon: "🐪",
        title: "Desert adventures",
        description: "Discover Dubai's stunning natural environment",
        cta: "Explore the desert",
    },
    {
        icon: "🏊",
        title: "Take a dip",
        description: "Relax and enjoy at Dubai's best pools",
        cta: "Explore pools",
    },
    {
        icon: "🚴",
        title: "On your bike",
        description: "Go mountain biking in Hatta or at Mushrif National Park",
        cta: "Explore cycling",
    },
];

const WinterCard = ({ icon, title, description, cta }) => (
    <div className="flex flex-col items-start gap-2 p-4 bg-white rounded shadow-md h-full">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-[18px] font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <NavLink
            to="/"
            className="text-sm font-semibold mt-2 text-blue-600 hover:text-blue-800 hover:underline transition"
        >
            {cta}
        </NavLink>
    </div>
);

const SummerTrip = () => {
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
        <section className="container mx-auto px-4 py-10">
            {/* Header + navigation buttons */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#1A2A44] mb-2">
                        Summer in Dubai
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        From October until April, beautiful weather and a packed
                        calendar of events combine to create a truly special
                        season in Dubai...
                    </p>
                </div>

                <div className="hidden lg:flex gap-2">
                    <button
                        onClick={scrollPrev}
                        disabled={!emblaApi?.canScrollPrev()}
                        className="bg-white border rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!emblaApi?.canScrollNext()}
                        className="bg-white border rounded-full shadow w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {winterItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none w-[80%] sm:w-1/2 lg:w-1/3"
                        >
                            <WinterCard {...item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
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

export default SummerTrip;
