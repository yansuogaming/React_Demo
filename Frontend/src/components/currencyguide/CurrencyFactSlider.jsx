import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@lib/utils";
import imgDemo from "@images/about-vietnam.png";

const slides = [
    {
        title: "The dirham was introduced in 1973",
        description:
            "Often shortened to AED, it is the official currency of the United Arab Emirates, including Dubai.",
        image: imgDemo,
    },
    {
        title: "The UAE Dirham is pegged to the US Dollar",
        description:
            "1 USD is approximately 3.67 AED, making currency conversion stable for travelers.",
        image: imgDemo,
    },
    {
        title: "Coins are called fils",
        description:
            "Common coins include 25 fils and 50 fils, used alongside 1 dirham coins.",
        image: imgDemo,
    },
];

const CurrencyFactSlider = ({ className = "" }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className={cn("container mx-auto px-4 py-8", className)}>
            <div className="relative">
                {/* Prev/Next top-right */}
                <div className="absolute top-0 right-0 gap-2 z-10 hidden md:flex">
                    <button
                        className="w-10 h-10 rounded shadow bg-white flex items-center justify-center disabled:opacity-40"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                    >
                        <FaChevronLeft className="bg-gray-100" />
                    </button>
                    <button
                        className="w-10 h-10 rounded shadow bg-white flex items-center justify-center disabled:opacity-40"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                    >
                        <FaChevronRight className="bg-gray-100" />
                    </button>
                </div>

                {/* Slider */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] md:flex-none md:basis-full px-2"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-start">
                                    {/* Image */}
                                    <div className="w-full md:w-[400px]">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="aspect-[16/9] w-full object-cover rounded-md"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center">
                                        <p className="text-sm text-gray-600 font-semibold mb-2">
                                            Did you know?
                                        </p>
                                        <h3 className="text-[20px] md:text-[32px] font-bold text-[#1A2A44] mb-2 leading-tight">
                                            {slide.title}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots as lines */}
                <div className="flex justify-center md:justify-end mt-4 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "transition-all duration-300 rounded-full h-[6px]",
                                selectedIndex === index
                                    ? "w-[24px] bg-gray-800"
                                    : "w-[6px] bg-gray-300"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrencyFactSlider;
