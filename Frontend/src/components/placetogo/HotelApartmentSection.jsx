import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

const departmentItems = [
    {
        image: imgHotel1,
        caption: "THE ROYAL ATLANTIS RESIDENCES",
    },
    {
        image: imgHotel2,
        caption: "DUBAI MARINA VIEW",
    },
];

const HotelApartmentSection = () => {
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
            <div className="mb-8">
                <h2 className="text-[24px] md:text-[28px] font-bold text-[#1A2A44] mb-4">
                    Hotel apartments
                </h2>
                <p className="text-[16px] text-[#505050] mb-4 leading-relaxed max-w-4xl">
                    Staying a little longer or just want the convenience of an
                    apartment-style stay? Dubai has a huge range of hotel
                    apartments that offer you something extra, including
                    kitchens with cookers, clothes washing facilities, office
                    space and more. Hotel apartments are typically suited to
                    long-stay guests and families – but many visitors simply
                    prefer the best of both worlds, with room-cleaning services
                    and restaurant options.
                </p>
                <a
                    href="#"
                    className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                    Plan a budget trip to Dubai
                </a>
            </div>

            {/* Carousel */}
            <div className="relative">
                {/* Navigation buttons */}
                <div className="hidden lg:flex justify-end gap-2 mb-4">
                    <button
                        onClick={scrollPrev}
                        disabled={!emblaApi?.canScrollPrev()}
                        className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!emblaApi?.canScrollNext()}
                        className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {departmentItems.map((item, index) => {
                            const isActive = selectedIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex-none w-[80%] sm:w-1/2 rounded-xl transition-all duration-500",
                                        isActive
                                            ? "opacity-100 scale-100"
                                            : "opacity-50 scale-[0.95]"
                                    )}
                                >
                                    <div className="aspect-[16/9] bg-black rounded-xl overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.caption}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xs text-[#505050] mt-2">
                                        {item.caption}
                                    </p>
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
            </div>
        </section>
    );
};

export default HotelApartmentSection;
