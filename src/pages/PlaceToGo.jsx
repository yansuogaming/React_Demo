import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { NavLink } from "react-router";

import Breadcrumb from "@components/Breadcrumb";
import EmiratesBookingBox from "@components/EmiratesBookingBox";
import StartPlanningSection from "@components/StartPlanningSection";
import WeatherSubscribe from "@components/WeatherSubscribe";

import { CiHeart } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";

import accommodationImage from "@images/wp12060285.webp";
import { FaPlay } from "react-icons/fa";
import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

//Txt Accomodation & Image
const AccommodationImage = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // 👉 Gán videoUrl hoặc để "" nếu không có
    const videoUrl = "https://www.youtube.com/embed/NSnkb1IAjbE"; // hoặc "" nếu không có video

    const hasVideo = videoUrl.trim() !== "";

    return (
        <section className="mb-[20px]">
            <h2 className="text-[40px] font-bold text-[#1A2A44] mb-4">
                Accommodation
            </h2>

            <div className="relative overflow-hidden rounded-ee-[60px] aspect-[16/9] w-full mb-6 bg-black">
                {isPlaying && hasVideo ? (
                    <iframe
                        className="w-full h-full"
                        src={`${videoUrl}?autoplay=1&rel=0`}
                        title="Accommodation Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <img
                            src={accommodationImage}
                            alt="Accommodation"
                            className="w-full h-full object-cover"
                        />
                        {hasVideo && (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer"
                            >
                                <FaPlay className="text-sm" />
                            </button>
                        )}
                    </>
                )}
            </div>

            <p className="text-[20px] text-[#505050]">
                Five-star resort or chic boutique hotel? Pick from an incredible
                range of options.
            </p>
        </section>
    );
};

// Txt Information
const InformationHotel = () => {
    return (
        <section className="space-y-[60px]">
            {/* Luxury hotels */}
            <div>
                <h2 className="font-bold text-[28px] text-[#1A2A44] mb-3">
                    Luxury hotels
                </h2>
                <p className="text-[16px] text-[#57585c] mb-6 leading-relaxed">
                    Dubai is famous around the world for its staggering range of
                    luxury resorts and chic five-star hotels. The city is home
                    to{" "}
                    <a href="#" className="text-blue-600 underline">
                        the world’s tallest hotel
                    </a>
                    , as well as other record-breaking hospitality feats, such
                    as the{" "}
                    <a href="#" className="text-blue-600 underline">
                        Burj Al Arab Jumeirah
                    </a>
                    , which is popularly known as the world’s only 'seven-star
                    hotel'. Whether you are looking for family fun at{" "}
                    <a href="#" className="text-blue-600 underline">
                        Atlantis, The Palm
                    </a>
                    , beachside chic at{" "}
                    <a href="#" className="text-blue-600 underline">
                        Bvlgari
                    </a>
                    , or Bedouin-style luxury at{" "}
                    <a href="#" className="text-blue-600 underline">
                        Bab Al Shams, Dubai
                    </a>
                    , it is known to offer its guests the very best in
                    hospitality. You can check out our recommendations of hotels
                    for conference and events delegates{" "}
                    <a href="#" className="text-blue-600 underline">
                        here
                    </a>
                    .
                </p>
                <a
                    href="#"
                    className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                    New hotels in Dubai
                </a>
            </div>

            {/* Budget hotels */}
            <div>
                <h2 className="font-bold text-[28px] text-[#1A2A44] mb-3">
                    Budget hotels
                </h2>
                <p className="text-[16px] text-[#57585c] mb-6 leading-relaxed">
                    Your stay in Dubai doesn't have to break the bank. If you're
                    seeking budget hotel options, this city has an impressive
                    range of affordable accommodation. For a central location
                    and convenient facilities, try{" "}
                    <a href="#" className="text-blue-600 underline">
                        Rove Hotels
                    </a>{" "}
                    – a homegrown hotel chain. With renowned brands including
                    Hampton by Hilton, Aloft, TRYP and Citymax, you'll be spoilt
                    for choice with travel funds to spare.
                </p>
                <a
                    href="#"
                    className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                    Guide to budget hotels
                </a>
            </div>
        </section>
    );
};

// Image & Carousel Hotel
const hotelItems = [
    {
        src: imgHotel1,
        alt: "Hotel 1",
        videoUrl: "https://www.youtube.com/embed/NSnkb1IAjbE", // 👉 dạng embed
    },
    {
        src: imgHotel2,
        alt: "Hotel 2",
        videoUrl: "", // không có video
    },
];

const HotelCarousel = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="relative">
                <Carousel
                    opts={{ align: "start" }}
                    onSlideChange={(index) => {
                        setCurrentIndex(index);
                        setActiveVideoIndex(null); // reset video khi chuyển slide
                    }}
                >
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>

                    <CarouselContent className="gap-4 mt-[60px]">
                        {hotelItems.map((item, index) => {
                            const hasVideo = !!item.videoUrl;
                            const isVideoActive = activeVideoIndex === index;

                            return (
                                <CarouselItem
                                    key={index}
                                    className={`sm:basis-full md:basis-1/2 overflow-hidden rounded-xl relative transition duration-300 ${
                                        currentIndex !== index
                                            ? "opacity-100"
                                            : "opacity-100"
                                    }`}
                                >
                                    <div className="rounded-xl overflow-hidden aspect-[16/9] bg-black relative">
                                        {isVideoActive && hasVideo ? (
                                            <iframe
                                                className="w-full h-full"
                                                src={`${item.videoUrl}?autoplay=1&rel=0`}
                                                title={`video-${index}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <>
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                                {hasVideo && (
                                                    <button
                                                        onClick={() =>
                                                            setActiveVideoIndex(
                                                                index
                                                            )
                                                        }
                                                        className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition"
                                                    >
                                                        <FaPlay className="text-sm" />
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <p className="text-xs text-[#505050] mt-2">
                                        {item.alt}
                                    </p>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

// Txt & Carousel apartment
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
    const [currentIndex, setCurrentIndex] = useState(0);

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

            {/* Carousel hình ảnh */}
            <div className="relative">
                <Carousel
                    opts={{ align: "start" }}
                    onSlideChange={(index) => setCurrentIndex(index)}
                >
                    {/* Nút điều hướng ở góc phải */}
                    <div className="absolute top-0 right-0 z-10 flex gap-2">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>
                    <CarouselContent className="gap-4 mt-10">
                        {departmentItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className={`sm:basis-full md:basis-1/2 overflow-hidden rounded-xl relative transition duration-300 ${
                                    currentIndex !== index
                                        ? "opacity-100"
                                        : "opacity-100"
                                }`}
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

// Txt & Carousel Home apartment

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
                    <div className="absolute top-0 right-0 z-10 flex gap-2">
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

// See more recommend

const recommendations = [
    {
        image: imgHotel1,
        title: "Hotels with amazing waterparks in Dubai",
        time: "20 MIN READ",
    },
    {
        image: imgHotel2,
        title: "Your go-to Dubai stopover guide",
        time: "1 MIN READ",
    },
    {
        image: imgHotel1,
        title: "Indulge in Dubai’s best hammam spas",
        time: "3 MIN READ",
    },
];

const RecommendationCarousel = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-[32px] font-bold text-[#1A2A44] mb-6">
                See more recommendations
            </h2>

            <div className="relative">
                <Carousel opts={{ align: "start" }}>
                    {/* Navigation buttons */}
                    <div className="absolute -left-6 top-[40%] z-10 hidden sm:flex">
                        <CarouselPrevious className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>
                    <div className="absolute -right-6 top-[40%] z-10 hidden sm:flex">
                        <CarouselNext className="bg-white text-black border shadow-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100" />
                    </div>

                    <CarouselContent className="gap-4">
                        {recommendations.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 sm:basis-1/2 basis-full"
                            >
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                                    <div className="relative overflow-hidden">
                                        <NavLink to="">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </NavLink>
                                        {/* Heart button */}
                                        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center text-blue-700">
                                            <CiHeart />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <NavLink
                                            to=""
                                            className="text-[15px] font-semibold text-[#1A2A44] hover:text-blue-700"
                                        >
                                            {item.title}
                                        </NavLink>
                                        <p className="text-xs text-gray-500 mt-2">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="mt-6">
                <a
                    href="#"
                    className="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                    See more articles
                    <span className="text-blue-600">
                        <FaArrowUp />
                    </span>
                </a>
            </div>
        </section>
    );
};

// Import Show
const PlaceToGo = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: "Hotels and places to stay in Dubai" },
    ];
    return (
        <main>
            <div className="container mx-auto">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <AccommodationImage />
                <InformationHotel />
                <HotelCarousel />
                <HotelApartmentSection />
                <ApartmentRentalSection />
                <RecommendationCarousel />
                <EmiratesBookingBox />
            </div>
            <StartPlanningSection />
            <WeatherSubscribe />
        </main>
    );
};

export default PlaceToGo;
