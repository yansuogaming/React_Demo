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

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className={cn("max-w-6xl mx-auto px-4 py-8", className)}>
            <div className="relative">
                {/* Prev/Next top-right */}
                <div className="absolute top-0 right-0 flex gap-2 z-10">
                    <button
                        className="w-8 h-8 rounded shadow bg-white flex items-center justify-center"
                        onClick={scrollPrev}
                    >
                        <FaChevronLeft className="text-blue-500" />
                    </button>
                    <button
                        className="w-8 h-8 rounded shadow bg-white flex items-center justify-center"
                        onClick={scrollNext}
                    >
                        <FaChevronRight className="text-blue-500" />
                    </button>
                </div>

                {/* Slider */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-none w-full flex gap-8 items-center"
                            >
                                {/* Left Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-[200px] h-[200px] object-cover rounded-md"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 font-semibold mb-2">
                                        Did you know?
                                    </p>
                                    <h3 className="text-[32px] font-bold text-[#1A2A44] mb-2 leading-tight">
                                        {slide.title}
                                    </h3>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots bottom-right */}
                <div className="flex justify-end mt-4 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={cn(
                                "w-[10px] h-[10px] rounded-full transition",
                                selectedIndex === index
                                    ? "bg-gray-800"
                                    : "bg-gray-300"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrencyFactSlider;
