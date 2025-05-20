import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

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

const WinterLinkCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        containScroll: "trimSnaps",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <section className="container mx-auto px-4 py-10">
            {/* Header & Nav */}
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44]">
                    Useful links for wintertime in Dubai
                </h2>

                <div className="hidden lg:flex gap-2">
                    <button
                        onClick={scrollPrev}
                        disabled={!emblaApi?.canScrollPrev()}
                        className="bg-white border shadow rounded w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!emblaApi?.canScrollNext()}
                        className="bg-white border shadow rounded w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {links.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none w-[80%] sm:w-[45%] lg:w-1/4"
                        >
                            <SummerLinkCard {...item} />
                        </div>
                    ))}
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
        </section>
    );
};

export default WinterLinkCarousel;
