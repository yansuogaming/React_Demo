import React, { useState, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";
import imgHotel3 from "@images/photo-hotel2.jpeg";

const hotelItems = [
    {
        src: imgHotel1,
        alt: "Affordable hotels in Dubai",
        videoUrl: "https://www.youtube.com/embed/NSnkb1IAjbE",
    },
    {
        src: imgHotel2,
        alt: "Top-rated hotels in Dubai",
        videoUrl: "",
    },
    {
        src: imgHotel3,
        alt: "Luxury stay near downtown",
        videoUrl: "",
    },
];

const HotelCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setActiveVideoIndex(null);
        });
    }, [emblaApi]);

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Nút prev/next nằm trên cùng */}
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

            {/* Carousel content */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {hotelItems.map((item, index) => {
                        const isActive = selectedIndex === index;
                        const isVideo = !!item.videoUrl;
                        const isVideoPlaying = activeVideoIndex === index;

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
                                <div className="aspect-[16/9] bg-black relative rounded-xl overflow-hidden">
                                    {isVideoPlaying && isVideo ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={`${item.videoUrl}?autoplay=1&rel=0`}
                                            title={`video-${index}`}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            {isVideo && (
                                                <button
                                                    onClick={() =>
                                                        setActiveVideoIndex(
                                                            index
                                                        )
                                                    }
                                                    className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition"
                                                >
                                                    <FaPlay className="text-sm" />
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                                <p className="text-xs text-[#505050] mt-2">
                                    {item.alt}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dot indicator */}
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

export default HotelCarousel;
