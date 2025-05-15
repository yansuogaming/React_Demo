import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { NavLink } from "react-router";

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

const WinterTrip = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#1A2A44] mb-2">
                        Winter in Dubai
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        From October until April, beautiful weather and a packed
                        calendar of events combine to create a truly special
                        season in Dubai...
                    </p>
                </div>
            </div>

            {/* Carousel including nav buttons INSIDE */}
            <Carousel opts={{ align: "start" }} className="w-full">
                <div className="flex justify-end mb-4 gap-2">
                    <CarouselPrevious className="hidden lg:flex bg-white border rounded-full shadow w-10 h-10 items-center justify-center hover:bg-gray-100" />
                    <CarouselNext className="hidden lg:flex bg-white border rounded-full shadow w-10 h-10 items-center justify-center hover:bg-gray-100" />
                </div>

                <CarouselContent className="gap-4">
                    {winterItems.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="sm:basis-1/2 lg:basis-1/3"
                        >
                            <WinterCard {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default WinterTrip;
