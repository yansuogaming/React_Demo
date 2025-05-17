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
                <Carousel opts={{ align: "start" }}>
                    <div className="sm:hidden absolute top-0 right-[50px] lg:right-4 z-10 flex gap-2">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>
                    <CarouselContent className="gap-4 mt-10">
                        {departmentItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="sm:basis-full md:basis-1/2 overflow-hidden rounded-xl relative transition duration-300"
                            >
                                <div className="rounded-xl overflow-hidden aspect-[16/9] bg-black">
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
        </section>
    );
};

export default HotelApartmentSection;
