import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { NavLink } from "react-router";

import imageDemo from "@images/wp12060285.webp";

const links = [
    {
        image: imageDemo,
        title: "Make the most of summer in Dubai",
        desc: "How to enjoy a truly epic season in the city",
    },
    {
        image: imageDemo,
        title: "Dubai's top 10 summer attractions for children",
        desc: "The best spots for your kids to burn energy and learn new skills",
    },
    {
        image: imageDemo,
        title: "Cooler than cool ways to beat the heat in Dubai",
        desc: "Our pick of the top activities for summer fun in the city",
    },
    {
        image: imageDemo,
        title: "99 things to do this summer in Dubai",
        desc: "Roller discos, roller coasters, restaurant deals and more",
    },
];

const SummerLinkCard = ({ image, title, desc }) => (
    <NavLink
        to="/"
        className="group block rounded-md overflow-hidden bg-white shadow-sm border transition hover:shadow-md"
    >
        <div className="overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="bg-[#0077B6] text-white p-4 flex flex-col justify-between h-[180px]">
            <div>
                <h3 className="text-base font-semibold mb-2 group-hover:underline group-hover:text-white/80 transition">
                    {title}
                </h3>
                <p className="text-sm">{desc}</p>
            </div>
            <div className="mt-4 text-sm font-semibold border border-white px-3 py-1 rounded text-center w-max transition group-hover:bg-white group-hover:text-[#0077B6]">
                Discover more
            </div>
        </div>
    </NavLink>
);

const SummerLinkCarousel = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Header + Nav */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44]">
                    Useful links for summertime in Dubai
                </h2>
            </div>

            {/* Carousel */}
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <div className="hidden lg:flex gap-2">
                    <CarouselPrevious className="bg-white border rounded shadow w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    <CarouselNext className="bg-white border rounded shadow w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                </div>

                <CarouselContent className="gap-4">
                    {links.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="sm:basis-1/2 lg:basis-1/4"
                        >
                            <SummerLinkCard {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};

export default SummerLinkCarousel;
