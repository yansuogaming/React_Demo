import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";
import CardEvent from "@components/card/CardEvent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import EventHero from "@components/event/EventHero";
import EventFilterBar from "@components/event/EventFilterBar";
import EventPagination from "@components/event/EventPagination";
import EventNewsSlider from "@components/event/EventNewsSlider";

import imgevent from "@images/3-1595134332.webp";
import imgevent2 from "@images/4-1708873508769.webp";
import visaImage from "@images/visa-image.png"; // ảnh bạn cung cấp

import ticketIcon from "@images/great.svg";
import soldIcon from "@images/ticket.svg";
import freeIcon from "@images/free.svg";

import iconExp from "@images/ticket2.png";
import iconSupport from "@images/support.png";
import iconReview from "@images/telephone.png";

const mockSlides = [
    {
        id: 1,
        image: imgevent,
        date: "27 Apr to 30 Apr",
        title: "The Factors Contributing to the Success of the Quang Nam Food and Culture Festival",
        description:
            "On the evening of January 1, 2024, the 1st Quang Nam Cultural Food Festival officially concluded with a program featuring artistic performances and cultural exchanges from the region.",
    },
    {
        id: 2,
        image: imgevent2,
        date: "15 May to 18 May",
        title: "Exploring the Taste of Hue Cuisine",
        description:
            "Hue Festival celebrated culinary traditions with royal dishes and folk food attracting thousands of tourists.",
    },
];

const categories = [
    "All",
    "Online",
    "Today",
    "This weekend",
    "This Month",
    "Next 10 Days",
    "Food & Drink",
];

const mockEvents = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: i % 2 === 0 ? imgevent : imgevent2,
    title: `Event Title ${i + 1}`,
    startTime: new Date(2024, 3, 30),
    endTime: new Date(2024, 4, 2),
    href: `/events/${i + 1}`,
    location: "Ho Chi Minh City",
    description:
        "There are many variations of passages of Lorem Ipsum available...",
}));

const pageSize = 16;

const Events = () => {
    const { t } = useTranslation();
    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Events"), href: "event" },
        { label: "Vietnam Calendar" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredEvents =
        selectedCategory === "All" ? mockEvents : mockEvents.filter(() => true);
    const totalPages = Math.ceil(filteredEvents.length / pageSize);

    const paginatedEvents = filteredEvents.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const top8 = paginatedEvents.slice(0, 8);
    const bottom8 = paginatedEvents.slice(8, 16);

    const features = [
        {
            id: 1,
            title: "Unforgettable experiences",
            description:
                "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
            icon: iconExp,
            bg: "bg-gradient-to-b from-[#FED074] to-[#FE9D00]",
        },
        {
            id: 2,
            title: "24/7 Support",
            description:
                "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
            icon: iconSupport,
            bg: "bg-gradient-to-b from-[#BD81F6] to-[#9249EF]",
        },
        {
            id: 3,
            title: "Good reviews",
            description:
                "Every experience is designed to leave a lasting impression. Every event is curated with the best experiences for you to enjoy.",
            icon: iconReview,
            bg: "bg-gradient-to-b from-[#A4C2FB] to-[#759DF6]",
        },
    ];

    const FeatureSwiper = () => {
        return (
            <section className="p-[101px_0_71px_0] bg-white">
                <div className="container mx-auto">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={1.1}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {features.map((feature) => (
                            <SwiperSlide key={feature.id}>
                                <div className="flex gap-4 items-start max-w-sm">
                                    {/* Gradient icon box */}
                                    <div
                                        className={`p-[24px] rounded-md flex items-center justify-center ${feature.bg}`}
                                    >
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full"
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-black mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        );
    };

    const AdBanner = () => {
        return (
            <div className="col-span-full bg-[#1A2A44] text-white rounded-xl xl:p-[23px_40px] flex flex-col xl:flex-row md:items-center md:p-[10px] justify-between gap-4 shadow justify-self-center xl:min-w-[1121px] m-[16px_0] sm:p-[22px] sm:items-center">
                {/* Left title */}
                <div className="text-left">
                    <p className="text-lg md:text-[20px] text-[26px] font-[700]">
                        Experience <br /> it live
                    </p>
                </div>

                {/* 3 boxes */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 flex-1 justify-around">
                    {/* Box 1 */}
                    <div className="bg-white/5 rounded p-4 flex items-center gap-3 flex-1 min-w-[220px]">
                        <img
                            src={ticketIcon}
                            alt="review"
                            className="w-8 h-8"
                        />
                        <div className="text-sm text-white">
                            <p className="text-[18px] font-[700]">
                                Rated great based on <br />
                                2k+ reviews
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white/5 rounded p-4 flex items-center gap-3 flex-1 min-w-[220px]">
                        <img src={soldIcon} alt="sold" className="w-8 h-8" />
                        <div className="text-sm text-white">
                            <p className="text-[18px] font-[700]">
                                Over 1 million tickets <br />
                                sold since 2024
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-white/5 rounded p-4 flex items-center gap-3 flex-1 min-w-[220px]">
                        <img src={freeIcon} alt="free" className="w-8 h-8" />
                        <div className="text-sm text-white">
                            <p className="text-[18px] font-[700]">
                                Lots of free tickets <br />
                                for you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const VisaBanner = () => {
        return (
            <section className="bg-[#F6F6FB] p-[48px_0_35px_0]">
                <div className="flex justify-center px-4">
                    <div className="flex flex-col lg:flex-row items-stretch max-w-[1100px] w-full overflow-hidden rounded-[40px] lg:rounded-[0_0_40px_0]">
                        {/* Left image - KHÔNG có nền trắng */}
                        <div className="lg:w-[272px] lg:h-[272px] shrink-0">
                            <img
                                src={visaImage}
                                alt="Visa support"
                                className="w-full h-full object-cover rounded-t-[40px] lg:rounded-[40px_0_0_40px]"
                            />
                        </div>

                        {/* Right content - CÓ nền trắng */}
                        <div className="bg-white p-[66px_35px] flex flex-col justify-center w-full">
                            <h3 className="text-[26px] font-[500] text-[#1A2A44] mb-[12px]">
                                Vietnam offers easy entry for travelers
                            </h3>
                            <p className="text-[16px] font-[400] text-[#494951] mb-[20px]">
                                Helping visitors easily experience a seamless
                                immigration process when coming to Vietnam.
                            </p>
                            <NavLink
                                to="#"
                                className="w-fit bg-[#007BFF] text-white hover:bg-blue-700 transition p-[10px_20px] font-[500] text-[16px]"
                            >
                                Explore now
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <main className="bg-[#F5F6FA] pb-[80px]">
                <div className="container mx-auto">
                    <section>
                        <Breadcrumb
                            className="m-[16px_40px_28px] text-[14px]"
                            items={breadcrumdItems}
                        />
                    </section>
                    <EventHero
                        slides={mockSlides}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />

                    <section className="mt-[43px]">
                        <EventFilterBar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={(cat) => {
                                setSelectedCategory(cat);
                                setCurrentPage(1);
                            }}
                        />

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {top8.map((event) => (
                                <CardEvent
                                    key={event.id}
                                    title={event.title}
                                    image={event.image}
                                    startTime={event.startTime}
                                    endTime={event.endTime}
                                    href={event.href}
                                    widthImage="100%"
                                    heightImage="180px"
                                >
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        📍 {event.location}
                                    </p>
                                </CardEvent>
                            ))}

                            {/* Quảng cáo */}
                            <AdBanner />

                            {bottom8.map((event) => (
                                <CardEvent
                                    key={event.id}
                                    title={event.title}
                                    image={event.image}
                                    startTime={event.startTime}
                                    endTime={event.endTime}
                                    href={event.href}
                                    widthImage="100%"
                                    heightImage="180px"
                                >
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        📍 {event.location}
                                    </p>
                                </CardEvent>
                            ))}
                        </div>

                        <EventPagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </section>
                </div>
            </main>
            <EventNewsSlider />

            <FeatureSwiper />

            <VisaBanner />
        </>
    );
};

export default Events;
