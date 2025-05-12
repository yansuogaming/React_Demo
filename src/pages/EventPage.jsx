import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";
import CardEvent from "@components/card/CardEvent";

import EventHero from "@components/event/EventHero";
import EventFilterBar from "@components/event/EventFilterBar";
import EventPagination from "@components/event/EventPagination";

import imgevent from "@images/3-1595134332.webp";
import imgevent2 from "@images/4-1708873508769.webp";
const mockSlides = [
    {
        id: 1,
        image: imgevent,
        date: "27 Apr → 30 Apr",
        title: "The Factors Contributing to the Success of the Quang Nam Food and Culture Festival",
        description:
            "On the evening of January 1, 2024, the 1st Quang Nam Cultural Food Festival officially concluded with a program featuring artistic performances and cultural exchanges from the region.",
    },
    {
        id: 2,
        image: imgevent2,
        date: "15 May → 18 May",
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

const mockEvents = Array.from({ length: 12 }, (_, i) => ({
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

const pageSize = 8;

const EventPage = () => {
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

    return (
        <main className="container mx-auto">
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
                    {paginatedEvents.map((event) => (
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
        </main>
    );
};

export default EventPage;
