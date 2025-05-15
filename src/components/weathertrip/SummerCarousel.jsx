import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
];

const SummerCarousel = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44] mb-4">
                Great days out during summer in Dubai
            </h2>

            {/* ✅ Carousel wrapper */}
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                {/* ✅ Controls placed here INSIDE Carousel */}
                <div className="flex justify-end mb-4 gap-2">
                    <CarouselPrevious className="hidden lg:flex bg-white border rounded shadow w-10 h-10 items-center justify-center hover:bg-gray-100" />
                    <CarouselNext className="hidden lg:flex bg-white border rounded shadow w-10 h-10 items-center justify-center hover:bg-gray-100" />
                </div>

                <CarouselContent className="gap-4">
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[80%] sm:basis-1/2 lg:basis-1/3"
                        >
                            <div className="relative overflow-hidden rounded-md group">
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-auto object-cover group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <p className="mt-2 text-[12px] text-[#1A2A44] uppercase tracking-wide">
                                    {item.caption}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default SummerCarousel;
