import useLanguage from "@hooks/useLanguage";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

const isSmallScreen = () =>
    typeof window !== "undefined" && window.innerWidth < 1024;

const EventHero = ({ slides, currentIndex, setCurrentIndex }) => {
    const [mobile, setMobile] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const { language } = useLanguage();
    const locale = language === "vi" ? vi : enUS;
    const currentSlide = slides[currentIndex];

    // Resize listener
    useEffect(() => {
        const handleResize = () => setMobile(isSmallScreen());
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    // Sync embla slide change with state
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi, setCurrentIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    const handleNext = () => {
        if (mobile && emblaApi) emblaApi.scrollNext();
        else setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        if (mobile && emblaApi) emblaApi.scrollPrev();
        else
            setCurrentIndex(
                (prev) => (prev - 1 + slides.length) % slides.length
            );
    };

    const txtStartTime = format(
        new Date(currentSlide.start_date * 1000),
        "d MMM",
        { locale }
    );
    const txtEndTime = format(new Date(currentSlide.due_date * 1000), "d MMM", {
        locale,
    });

    return (
        <section>
            {/* Tablet & Desktop */}
            {!mobile ? (
                <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg md:h-[500px] lg:h-[673px]">
                    {/* Left */}
                    <div className="bg-[#0E284E] text-white p-6 flex flex-col justify-center">
                        <div>
                            <span className="inline-block bg-white text-[#0E284E] text-[18px] rounded mb-[32px] font-[700] p-[8px]">
                                {txtStartTime}
                                <span className="text-[14px] text-[#1A2A44] font-[400] mx-[6px]">
                                    to
                                </span>
                                {txtEndTime}
                            </span>

                            <h2 className="text-2xl font-bold mb-4 leading-snug">
                                {currentSlide.title}
                            </h2>
                            <div
                                className="text-sm leading-relaxed truncate_3"
                                dangerouslySetInnerHTML={{
                                    __html: currentSlide.intro,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full h-full">
                        <img
                            src={currentSlide.image}
                            alt="Event visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-[10px] px-3 py-2 rounded-full  max-w-full overflow-x-auto">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:shadow-md"
                        >
                            <FaChevronLeft className="text-[#64646D] text-[12px]" />
                        </button>

                        <div className="flex items-center gap-[6px] overflow-x-auto">
                            {slides.map((slide, i) => (
                                <img
                                    key={i}
                                    src={slide.image}
                                    alt=""
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-[70px] h-[46px] object-cover rounded cursor-pointer transition-all duration-300 ${
                                        i === currentIndex ? "" : "opacity-60"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:shadow-md"
                        >
                            <FaChevronRight className="text-[#64646D] text-[12px]" />
                        </button>
                    </div>
                </div>
            ) : (
                // Mobile: Embla carousel
                <div className="relative">
                    <div
                        ref={emblaRef}
                        className="overflow-hidden rounded-2xl shadow-lg"
                    >
                        <div className="flex">
                            {slides.map((slide, i) => (
                                <div className="min-w-full relative" key={i}>
                                    <img
                                        src={slide.image}
                                        alt="Event visual"
                                        className="w-full h-[300px] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4">
                                        <span className="text-sm font-semibold">
                                            {format(
                                                new Date(
                                                    slide.start_date * 1000
                                                ),
                                                "d MMM",
                                                { locale }
                                            )}{" "}
                                            -{" "}
                                            {format(
                                                new Date(slide.due_date * 1000),
                                                "d MMM",
                                                { locale }
                                            )}
                                        </span>
                                        <h2 className="text-lg font-bold mt-1">
                                            {slide.title}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                        <button
                            onClick={handlePrev}
                            className="bg-white p-2 rounded-full shadow disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={!canScrollPrev}
                        >
                            <FaChevronLeft className="text-[#64646D]" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                        <button
                            onClick={handleNext}
                            className="bg-white p-2 rounded-full shadow disabled:opacity-40 disabled:cursor-not-allowed"
                            disabled={!canScrollNext}
                        >
                            <FaChevronRight className="text-[#64646D]" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EventHero;
