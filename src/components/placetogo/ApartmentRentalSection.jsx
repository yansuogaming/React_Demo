import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
                <Carousel opts={{ align: "start" }}>
                    {/* Nav buttons */}
                    <div className="sm:hidden absolute top-0 right-[50px] lg:right-4 z-10 flex gap-2">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>

                    {/* Images */}
                    <CarouselContent className="gap-4 mt-12">
                        {apartmentItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="sm:basis-full md:basis-1/2 overflow-hidden rounded-xl relative transition-opacity duration-300"
                            >
                                <div className="rounded-xl overflow-hidden aspect-[16/9] bg-black relative">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-xs text-[#505050] mt-2">
                                    {item.caption}
                                </p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

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
