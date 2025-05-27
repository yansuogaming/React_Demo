import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const filters = [
    "All Categories",
    "Live Music",
    "Fan Meeting",
    "Merchandise",
    "Stage & Art",
    "Sports",
    "Daily",
    "Free",
    "Traditional",
];

const events = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: "The Dirty Immigrant • Hanoi • Stand up Comedy in English",
    price: "US$129",
    date: "31 May, 2025 - 8:00 PM",
    ticketsSold: "204 tickets sold",
    image: "https://i.imgur.com/Di5w4Vz.png",
}));

const topPicks = Array.from({ length: 20 }, (_, i) => ({
    id: i + 101,
    title: "The Dirty Immigrant • Hanoi • Stand up Comedy in English",
    price: "US$129",
    date: "31 May, 2025 - 8:00 PM",
    ticketsSold: "204 tickets sold",
    image: "https://i.imgur.com/Di5w4Vz.png",
}));

const UpcomingEventsCarousel = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [topPage, setTopPage] = useState(1);

    const formatDateRange = () => {
        const { startDate, endDate } = dateRange[0];
        return `${format(startDate, "dd/MM/yyyy")} - ${format(
            endDate,
            "dd/MM/yyyy"
        )}`;
    };

    const topItemsPerPage = 16;
    const topTotalPages = Math.ceil(topPicks.length / topItemsPerPage);
    const topPaginatedEvents = topPicks.slice(
        (topPage - 1) * topItemsPerPage,
        topPage * topItemsPerPage
    );

    return (
        <>
            <section className="mt-10">
                {/* Search bar */}
                <div className="flex flex-col md:flex-row items-center gap-4 relative mb-[40px]">
                    <div className="flex items-center border p-[13px_20px] rounded-[8px] w-full md:w-1/2 bg-white">
                        <MapPin className="w-[24px] h-[24px] text-blue-500 mr-2" />
                        <Input
                            placeholder="All locations"
                            className="border-0 p-0 focus-visible:ring-0 text-sm"
                        />
                    </div>

                    <div className="relative w-full md:w-1/2">
                        <div
                            className="flex items-center border p-[13px_20px] rounded-[8px] bg-white cursor-pointer"
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            <CalendarDays className="w-[24px] h-[24px] text-blue-500 mr-2" />
                            <Input
                                value={formatDateRange()}
                                readOnly
                                className="border-0 p-0 focus-visible:ring-0 text-sm cursor-pointer"
                            />
                        </div>

                        {showCalendar && (
                            <div className="absolute z-20 mt-2 shadow border rounded bg-white">
                                <DateRange
                                    onChange={(item) =>
                                        setDateRange([item.selection])
                                    }
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    direction="horizontal"
                                    ranges={dateRange}
                                />
                            </div>
                        )}
                    </div>

                    <Button className="bg-[#007BFF] text-white p-[24px_31px] h-[64px]">
                        Find Events
                    </Button>
                </div>

                {/* Filter tabs */}
                <div className="flex gap-[30px] text-[#898EA1] font-[400] pb-[40px] overflow-x-auto whitespace-nowrap scrollbar-none">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`pb-1 border-b-2 transition duration-200 ${
                                activeFilter === filter
                                    ? "text-[#007BFF] border-[#007BFF]"
                                    : "border-transparent hover:text-blue-600 cursor-pointer"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div>
                    <h2 className="text-[#1A2A44] text-[32px] font-[600] mb-[32px]">
                        Upcoming Events
                    </h2>

                    <Carousel>
                        <CarouselContent>
                            {events.map((event) => (
                                <CarouselItem
                                    key={event.id}
                                    className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                                >
                                    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-[200px] object-cover rounded-[60px_0_0_0]"
                                        />
                                        <div className="p-4 space-y-2">
                                            <h3 className="text-[#1A2A44] text-[16px] font-[600] line-clamp-2">
                                                {event.title}
                                            </h3>
                                            <div className="text-[#F50100] text-[16px] font-[400] flex gap-[6px]">
                                                From{" "}
                                                <p className="font-[600]">
                                                    {event.price}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                                <CalendarDays className="w-4 h-4" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                                <Ticket className="w-4 h-4" />
                                                {event.ticketsSold}
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex absolute -left-6 top-[40%] -translate-y-1/2 z-10 bg-white text-black rounded-full w-[40px] h-[40px] shadow" />
                        <CarouselNext className="hidden md:flex absolute -right-6 top-[40%] -translate-y-1/2 z-10 bg-white text-black rounded-full w-[40px] h-[40px] shadow" />
                    </Carousel>
                </div>
            </section>

            <section>
                {/* Top picks for you */}
                <div className="mt-[64px]">
                    <h2 className="text-[#1A2A44] text-[32px] font-[600] mb-[32px]">
                        Top picks for you
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
                        {topPaginatedEvents.map((event) => (
                            <div
                                key={`top-${event.id}`}
                                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-[200px] object-cover rounded-[60px_0_0_0]"
                                />
                                <div className="p-4 space-y-2">
                                    <h3 className="text-[#1A2A44] text-[16px] font-[600] line-clamp-2">
                                        {event.title}
                                    </h3>
                                    <div className="text-[#F50100] text-[16px] font-[400] flex gap-[6px]">
                                        From{" "}
                                        <p className="font-[600]">
                                            {event.price}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <CalendarDays className="w-4 h-4" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">
                                        <Ticket className="w-4 h-4" />
                                        {event.ticketsSold}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-8 gap-2 text-[#1A2A44]">
                        {/* Prev */}
                        <button
                            onClick={() =>
                                setTopPage((prev) => Math.max(prev - 1, 1))
                            }
                            className={`w-8 h-8 rounded ${
                                topPage === 1
                                    ? "text-gray-300"
                                    : "hover:bg-gray-100"
                            }`}
                            disabled={topPage === 1}
                        >
                            &lt;
                        </button>

                        {/* Page numbers */}
                        {Array.from(
                            { length: topTotalPages },
                            (_, i) => i + 1
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setTopPage(page)}
                                className={`w-8 h-8 rounded ${
                                    topPage === page
                                        ? "bg-[#007BFF] text-white"
                                        : "bg-gray-100 text-[#1A2A44] hover:bg-gray-200"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            onClick={() =>
                                setTopPage((prev) =>
                                    Math.min(prev + 1, topTotalPages)
                                )
                            }
                            className={`w-8 h-8 rounded ${
                                topPage === topTotalPages
                                    ? "text-gray-300"
                                    : "hover:bg-gray-100"
                            }`}
                            disabled={topPage === topTotalPages}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UpcomingEventsCarousel;
