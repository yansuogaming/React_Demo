import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

const apartmentItems = [
    {
        image: imgHotel1,
        caption: "DUBAI MARINA APARTMENT",
    },
    {
        image: imgHotel2,
        caption: "DUBAI SKYLINE NIGHT",
    },
];

const ApartmentRentalSection = () => {
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
        <section className="px-4 py-12">
            {/* Heading & Text */}
            <div className="max-w-4xl mb-6">
                <h2 className="text-[24px] md:text-[30px] font-bold text-[#1A2A44] mb-2">
                    Home and apartment rentals
                </h2>
                <p className="text-[#505050] text-[15px] md:text-[16px] leading-relaxed">
                    Dubai’s hotels have made waves around the world – and we
                    have some amazing home rentals too. You can find your
                    perfect rental via Airbnb and other licensed websites, which
                    have countless homes to choose from, all vetted and approved
                    to ensure your stay is safe, comfortable and clean. Rest
                    assured, you can enjoy your private villa or apartment
                    experience with every convenience of being at home, and
                    more.
                </p>
                <a
                    href="#"
                    className="inline-block mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                    Discover Dubai&apos;s neighbourhoods
                </a>
            </div>

            {/* Carousel */}
            <div className="relative mt-8">
                {/* Prev / Next buttons */}
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

                {/* Embla carousel content */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {apartmentItems.map((item, index) => {
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

                {/* Dots */}
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

            {/* Bottom Text */}
            <div className="font-[700] text-[20px] mt-[40px]">
                <h3>
                    On the hunt for amazing offers? Sweeten your stay in Dubai
                    with the latest and greatest hotel deals in the city.
                </h3>
            </div>
        </section>
    );
};

export default ApartmentRentalSection;
