import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Breadcrumb from "@components/Breadcrumb";
import CardEvent from "@components/card/CardEvent";
import EventHero from "@components/event/EventHero";
import EventFilterBar from "@components/event/EventFilterBar";
import ticketIcon from "@images/great.svg";
import soldIcon from "@images/ticket.svg";
import freeIcon from "@images/free.svg";
import { cn, debounce } from "@lib/utils";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

const categories = [
    "All",
    "Online",
    "Today",
    "This weekend",
    "This Month",
    "Next 10 Days",
];

const Events = () => {
    const { ongoingAndUpcomingEvents, events, totalPage, currentPage, typeSearch, keyword } = useLoaderData();
    const { t } = useTranslation();
    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Events") },
    ];
    const eventListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [keysearch, setKeysearch] = useState(keyword);

    useEffect(() => {
        if (eventListRef.current) {
            eventListRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [currentPage]);

    const filteredEvents = typeSearch === 'all' ? events : events.filter(() => true);
    const top8 = filteredEvents.slice(0, 8);
    const bottom8 = filteredEvents.slice(8);

    const AdBanner = () => {
        return (
            <div className={cn(
                'p-[22px] items-center col-span-full bg-[#1A2A44]',
                'text-white rounded-xl xl:p-[23px_40px] flex flex-col',
                'xl:flex-row md:items-center md:p-[10px] justify-between',
                'gap-4 shadow justify-self-center xl:min-w-[1121px] m-[16px_0]'
            )}>
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

    const navigate = useNavigate();
    const changeKeyword = (keyword) => {
        setKeysearch(keyword);
        debounce(() => {
            navigate(`/events?page=1&keyword=${keyword}`);
        }, 500)();
    }

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
                        selectedCategory={typeSearch}
                        keyword={keysearch}
                        setSelectedCategory={() => {

                        }}
                        changeKeyword={changeKeyword}
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {top8.map((event, index) => (
                            <CardEvent
                                key={index}
                                title={event.title}
                                image={event.image}
                                startTime={new Date(event.start_date * 1000)}
                                endTime={new Date(event.due_date * 1000)}
                                href="/"
                                widthImage="100%"
                                heightImage="180px"
                            >
                                <div className="flex gap-[8px] items-center text-[#1A2A44]">
                                    <CiLocationOn className="text-[20px]" />
                                    <span>{event.city}</span>
                                    <IoTicketOutline className="text-[20px]" />
                                </div>
                                <div
                                    className="text-[16px] font-normal mt-[16px] truncate_3"
                                    dangerouslySetInnerHTML={{ __html: event.intro }}
                                >
                                </div>
                            </CardEvent>
                        ))}
                        <AdBanner />
                       {bottom8.map((event, index) => (
                            <CardEvent
                                key={index}
                                title={event.title}
                                image={event.image}
                                startTime={new Date(event.start_date * 1000)}
                                endTime={new Date(event.due_date * 1000)}
                                href="/"
                                widthImage="100%"
                                heightImage="180px"
                            >
                                <div className="flex gap-[8px] items-center text-[#1A2A44]">
                                    <CiLocationOn className="text-[20px]" />
                                    <span>{event.city}</span>
                                    <IoTicketOutline className="text-[20px]" />
                                </div>
                                <div
                                    className="text-[16px] font-normal mt-[16px] truncate_3"
                                    dangerouslySetInnerHTML={{ __html: event.intro }}
                                >
                                </div>
                            </CardEvent>
                        ))}
                    </div>


                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-[12px] mt-8">
                        {/* Prev */}
                        <Link
                            disabled={currentPage == 1}
                            to={`/events?page=1&keyword=`}
                            className={cn(
                                'w-8 h-8 flex items-center',
                                'justify-center rounded transition',
                                currentPage == 1 ? 'text-gray-300 cursor-default' : 'text-[#0E284E] hover:text-black'
                            )}
                        >
                            <FaChevronLeft className="text-[14px]" />
                        </Link>

                        {/* Page numbers */}
                        {Array.from({ length: totalPage }, (_, i) => {
                            const page = i + 1;
                            const isActive = page == currentPage;
                            return (
                                <Link
                                    key={page}
                                    to={`/events?page=${page}&keyword=`}
                                    className={cn(
                                        'w-[50px] h-[50px] rounded-[4px]',
                                        'text-[16px] font-[500] transition',
                                        'flex-col items-center justify-center flex',
                                        isActive ? 'bg-[#007BFF] text-white' : 'bg-[#EEF0F5] text-[#1A2A44] hover:bg-gray-200'
                                    )}
                                >
                                    {page}
                                </Link>
                            );
                        })}

                        {/* Next */}
                        <Link
                            disabled={currentPage == totalPage}
                            to={`/events?page=${currentPage + 1}&keyword=`}
                            className={cn(
                                'w-[12px] h-[24px] flex items-center',
                                'justify-center rounded transition',
                                currentPage == totalPage ? "text-[#D9D9D9] cursor-default" : "text-[#1A2A44] hover:text-[#1A2A44]"
                            )}
                        >
                            <FaChevronRight className="text-[14px]" />
                        </Link>
                    </div>
                    {/* Pagination */}
                </section>
            </div>
        </main>
    );
};

export default Events;
