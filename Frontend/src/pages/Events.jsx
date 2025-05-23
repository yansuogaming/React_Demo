import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRef, useEffect } from "react";

import { useLoaderData } from "react-router";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Breadcrumb from "@components/Breadcrumb";
import CardEvent from "@components/card/CardEvent";
import EventHero from "@components/event/EventHero";
import EventFilterBar from "@components/event/EventFilterBar";
import EventNewsSlider from "@components/event/EventNewsSlider";
import FeatureCarousel from "@components/event/FeatureCarousel";
import VisaBanner from "@components/event/VisaBanner";
import ticketIcon from "@images/great.svg";
import soldIcon from "@images/ticket.svg";
import freeIcon from "@images/free.svg";

import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

const categories = [
    "All",
    "Online",
    "Today",
    "This weekend",
    "This Month",
    "Next 10 Days",
    "Food & Drink",
];

const pageSize = 16;

const Events = () => {
    const { ongoingAndUpcomingEvents, events } = useLoaderData();
    const { t } = useTranslation();
    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Events"), href: "event" },
        { label: "Vietnam Calendar" },
    ];

    const eventListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (eventListRef.current) {
            eventListRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [currentPage]);

    const filteredEvents = events.filter((event) => {
        const matchesCategory =
            selectedCategory === "All" || event.category === selectedCategory;

        const matchesSearch =
            event.title.toLowerCase().includes(searchText.toLowerCase()) ||
            event.intro.toLowerCase().includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredEvents.length / pageSize);

    const paginatedEvents = filteredEvents.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const top8 = paginatedEvents.slice(0, 8);
    const bottom8 = paginatedEvents.slice(8);

    const AdBanner = () => {
        return (
            <div className="p-[22px] items-center col-span-full bg-[#1A2A44] text-white rounded-xl xl:p-[23px_40px] flex flex-col xl:flex-row md:items-center md:p-[10px] justify-between gap-4 shadow justify-self-center xl:min-w-[1121px] m-[16px_0]">
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

    const EventPagination = ({ totalPages, currentPage, setCurrentPage }) => (
        <div className="flex justify-center items-center gap-[12px] mt-8">
            {/* Prev */}
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`w-8 h-8 flex items-center justify-center rounded transition 
                ${
                    currentPage === 1
                        ? "text-gray-300 cursor-default"
                        : "text-[#0E284E] hover:text-black"
                }`}
            >
                <FaChevronLeft className="text-[14px]" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-[50px] h-[50px] rounded-[4px] text-[16px] font-[500] transition ${
                            isActive
                                ? "bg-[#007BFF] text-white"
                                : "bg-[#EEF0F5] text-[#1A2A44] hover:bg-gray-200"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`w-[12px] h-[24px] flex items-center justify-center rounded transition 
                ${
                    currentPage === totalPages
                        ? "text-[#D9D9D9] cursor-default"
                        : "text-[#1A2A44] hover:text-[#1A2A44]"
                }`}
            >
                <FaChevronRight className="text-[14px]" />
            </button>
        </div>
    );

    return (
        <main className="bg-[#F5F6FA]">
            <div className="container mx-auto pb-[80px]">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <EventHero
                    slides={ongoingAndUpcomingEvents}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />

                <section className="mt-[43px]" ref={eventListRef}>
                    <EventFilterBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={(cat) => {
                            setSelectedCategory(cat);
                            setCurrentPage(1);
                        }}
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {top8.map((event, index) => (
                            <CardEvent
                                key={index}
                                className="h-full"
                                title={event.title}
                                image={event.image}
                                startTime={new Date(event.start_date * 1000)}
                                endTime={new Date(event.due_date * 1000)}
                                href="/"
                                widthImage="100%"
                                heightImage="180px"
                            >
                                {event.city && (
                                    <p className="text-[16px] text-[#494951] font-[400] mb-[16px] flex items-center gap-[6px]">
                                        <CiLocationOn />
                                        {event.city}
                                        <IoTicketOutline className="ml-[4px]" />
                                    </p>
                                )}

                                <div
                                    className="text-[16px] text-[#494951] font-[400] line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: event.intro,
                                    }}
                                ></div>
                            </CardEvent>
                        ))}

                        <AdBanner />

                        {bottom8.map((event, index) => (
                            <CardEvent
                                key={index}
                                className="h-full"
                                title={event.title}
                                image={event.image}
                                startTime={new Date(event.start_date * 1000)}
                                endTime={new Date(event.due_date * 1000)}
                                href="/"
                                widthImage="100%"
                                heightImage="180px"
                            >
                                {event.city && (
                                    <p className="text-[16px] text-[#494951] font-[400] mb-[16px] flex items-center gap-[6px]">
                                        <CiLocationOn />
                                        {event.city}
                                        <IoTicketOutline className="ml-[4px]" />
                                    </p>
                                )}
                                <div
                                    className="text-sm text-gray-600 line-clamp-2"
                                    dangerouslySetInnerHTML={{
                                        __html: event.intro,
                                    }}
                                ></div>
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
            <EventNewsSlider />

            <FeatureCarousel />

            <VisaBanner />
        </main>
    );
};

export default Events;
