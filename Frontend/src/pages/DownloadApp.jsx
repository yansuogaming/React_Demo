import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import WeatherSubscribe from "@components/WeatherSubscribe";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

import imgBanner from "@images/img2.png";
import imgApp1 from "@images/img1.png";
import imgApp2 from "@images/img3.png";
// import imgApp3 from "@images/img_app_3.png";
// import imgCalendar1 from "@images/img_app_1.jpg";
// import imgCalendar2 from "@images/img_app_2.webp";
// import imgCalendar3 from "@images/img_app_3.png";

const DownloadApp = () => {
    const { t } = useTranslation();

    // Visit Dubai carousel state
    const [emblaRef1, emblaApi1] = useEmblaCarousel({
        align: "start",
        loop: false,
        containScroll: "trimSnaps",
    });
    const [selected1, setSelected1] = useState(0);
    const [snaps1, setSnaps1] = useState([]);

    useEffect(() => {
        if (!emblaApi1) return;
        setSnaps1(emblaApi1.scrollSnapList());
        emblaApi1.on("select", () => {
            setSelected1(emblaApi1.selectedScrollSnap());
        });
    }, [emblaApi1]);

    // Dubai Calendar carousel state

    // const [emblaRef2, emblaApi2] = useEmblaCarousel({
    //     align: "start",
    //     loop: false,
    //     containScroll: "trimSnaps",
    // });
    // const [selected2, setSelected2] = useState(0);
    // const [snaps2, setSnaps2] = useState([]);

    // useEffect(() => {
    //     if (!emblaApi2) return;
    //     setSnaps2(emblaApi2.scrollSnapList());
    //     emblaApi2.on("select", () => {
    //         setSelected2(emblaApi2.selectedScrollSnap());
    //     });
    // }, [emblaApi2]);

    const visitSlides = [
        {
            image: imgApp1,
            caption:
                "Travel app interface showing top attractions and trip suggestions",
        },
        {
            image: imgApp2,
            caption:
                "The app displays tourist spot details and latest travel news updates",
        },
        // {
        //     image: imgApp3,
        //     caption: "Personalise your trip and browse offline content",
        // },
    ];

    // const calendarSlides = [
    //     {
    //         image: imgCalendar1,
    //         caption: "Be in the know with events at your fingertips",
    //     },
    //     {
    //         image: imgCalendar2,
    //         caption: "Manage tickets, schedules and QR codes",
    //     },
    //     {
    //         image: imgCalendar3,
    //         caption: "Get curated events for your interests",
    //     },
    // ];

    const renderCarouselBlock = (
        title,
        description,
        slides,
        emblaRef,
        emblaApi,
        selectedIndex,
        scrollSnaps
    ) => (
        <div className="mt-16">
            <h2 className="text-[40px] font-semibold text-[#1A2A44] mb-2">
                {title}
            </h2>
            <div className="flex justify-between">
                <p className="text-[16px] font-light text-[#505050] max-w-3xl mb-4">
                    {description}
                </p>
                {/* Navigation */}
                <div className="hidden lg:flex justify-end mb-6 gap-2">
                    <button
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!emblaApi?.canScrollPrev()}
                        className="bg-white border shadow rounded w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => emblaApi?.scrollNext()}
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
                    {slides.map((item, index) => {
                        const isActive = index === selectedIndex;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none transition-all duration-500",
                                    "basis-[83.333%] sm:basis-[70%]",
                                    isActive ? "opacity-100" : "opacity-40"
                                )}
                            >
                                <div className="overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="md:w-[920px] md:h-[620px] object-cover w-full h-[400px] sm:h-[460px]"
                                    />
                                    <p className="mt-2 text-xs text-center text-[#1A2A44] uppercase tracking-wide">
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-5 gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                            "h-[6px] transition-all rounded-full",
                            selectedIndex === index
                                ? "w-[24px] bg-[#1A2A44]"
                                : "w-[6px] bg-gray-300"
                        )}
                    />
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-bold text-[#000] mb-3">
                    Get the app
                </h3>
                <button className="bg-[#006c90] text-white font-semibold px-6 py-2 rounded hover:bg-[#007fa8] hover:cursor-pointer transition-colors duration-300">
                    Download now
                </button>
            </div>
        </div>
    );

    return (
        <main>
            <section className="container mx-auto">
                <Breadcrumb
                    className="p-[16px_40px_28px_0] text-[14px]"
                    items={[
                        { label: t("home"), href: "/" },
                        { label: t("Plan your trip"), href: "planyourtrip" },
                        { label: "Download App" },
                    ]}
                />

                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-[#1A2A44] mb-6 lg:ml-[47px]">
                    Download Apps
                </h1>
                <div className="2xl:-mx-[200px]">
                    <img
                        src={imgBanner}
                        className="w-full h-auto rounded-br-[60px] rounded-ss-[60px]"
                        alt="Vietnam apps"
                    />
                </div>
                <p className="text-[20px] font-[300] text-[#505050] mt-[20px]">
                    A tourist wearing a conical hat uses a smartphone to check
                    the map on a busy street in Vietnam.
                </p>

                {/* Visit Dubai Block */}
                {renderCarouselBlock(
                    "Explore Vietnam Smartly",
                    "Use the Visit Vietnam app – available on iOS and Android – to discover top attractions, plan trips, and access the latest travel news and destination info.",
                    visitSlides,
                    emblaRef1,
                    emblaApi1,
                    selected1,
                    snaps1
                )}

                {/* Dubai Calendar Block
                {renderCarouselBlock(
                    "Dubai Calendar",
                    "Discover all the events happening in Dubai with the Dubai Calendar app - available on iOS or Android...",
                    calendarSlides,
                    emblaRef2,
                    emblaApi2,
                    selected2,
                    snaps2
                )} */}
                <div className="mt-[60px]">
                    <WeatherSubscribe />
                </div>
            </section>
        </main>
    );
};

export default DownloadApp;
