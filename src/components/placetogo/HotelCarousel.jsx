import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

const hotelItems = [
    {
        src: imgHotel1,
        alt: "Hotel 1",
        videoUrl: "https://www.youtube.com/embed/NSnkb1IAjbE",
    },
    {
        src: imgHotel2,
        alt: "Hotel 2",
        videoUrl: "",
    },
];

const HotelCarousel = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="relative">
                <Carousel
                    opts={{ align: "start" }}
                    setApi={(api) => {
                        if (!api) return;
                        api.on("select", () => {
                            setActiveVideoIndex(null); // Reset video khi chuyển slide
                        });
                    }}
                >
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>

                    <CarouselContent className="gap-4 mt-[60px]">
                        {hotelItems.map((item, index) => {
                            const hasVideo = !!item.videoUrl;
                            const isVideoActive = activeVideoIndex === index;

                            return (
                                <CarouselItem
                                    key={index}
                                    className="sm:basis-full md:basis-1/2 overflow-hidden rounded-xl relative transition duration-300"
                                >
                                    <div className="rounded-xl overflow-hidden aspect-[16/9] bg-black relative">
                                        {isVideoActive && hasVideo ? (
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
                                                {hasVideo && (
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
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default HotelCarousel;
