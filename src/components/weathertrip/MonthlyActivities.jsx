import { useState, useRef } from "react";
import { NavLink } from "react-router";
import dubaiImage from "@images/about-vietnam.png";
import imgDemo from "@images/3-1595134332.webp";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const contentData = {
    January: {
        temp: "21°C",
        content: (
            <>
                January is typically the coolest month of the year in Dubai,
                with an average temperature of 21°C, making it the perfect time
                to explore the great outdoors. Check out{" "}
                <NavLink
                    to="#"
                    className="text-[#0077B6] underline hover:text-[#005f8c]"
                >
                    Palm West Beach
                </NavLink>{" "}
                on Palm Jumeirah, see flamingoes at{" "}
                <NavLink
                    to="#"
                    className="text-[#0077B6] underline hover:text-[#005f8c]"
                >
                    Ras Al Khor Wildlife Sanctuary
                </NavLink>
                , or zipline at{" "}
                <NavLink
                    to="#"
                    className="text-[#0077B6] underline hover:text-[#005f8c]"
                >
                    Aventura Parks
                </NavLink>
                . Don’t miss Dubai Shopping Festival too.
            </>
        ),
        image: dubaiImage,
    },
    February: {
        temp: "23°C",
        content: <>February content coming soon...</>,
        image: imgDemo,
    },
    March: {
        temp: "26°C",
        content: <>March content coming soon...</>,
        image: dubaiImage,
    },
    April: {
        temp: "29°C",
        content: <>April content coming soon...</>,
        image: dubaiImage,
    },
    May: {
        temp: "33°C",
        content: <>May content coming soon...</>,
        image: dubaiImage,
    },
    June: {
        temp: "38°C",
        content: <>June content coming soon...</>,
        image: dubaiImage,
    },
    July: {
        temp: "41°C",
        content: <>July content coming soon...</>,
        image: dubaiImage,
    },
    August: {
        temp: "40°C",
        content: <>August content coming soon...</>,
        image: dubaiImage,
    },
    September: {
        temp: "38°C",
        content: <>September content coming soon...</>,
        image: dubaiImage,
    },
    October: {
        temp: "34°C",
        content: <>October content coming soon...</>,
        image: dubaiImage,
    },
    November: {
        temp: "29°C",
        content: <>November content coming soon...</>,
        image: dubaiImage,
    },
    December: {
        temp: "24°C",
        content: <>December content coming soon...</>,
        image: dubaiImage,
    },
};

const MonthlyActivities = () => {
    const [activeMonth, setActiveMonth] = useState("January");
    const scrollRef = useRef(null);

    const handleScroll = () => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const { temp, content, image } = contentData[activeMonth];
    const buttonRefs = useRef({});

    return (
        <section className="container mx-auto px-4 py-12">
            <div ref={scrollRef} className="mt-24" id="things-to-do">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A2A44]">
                    Things to do in Dubai each month
                </h2>
                <p className="text-xl text-gray-500 mb-8">
                    Find something to do whenever you visit
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Tabs */}
                    <div className="flex lg:flex-col overflow-x-auto overflow-y-hidden whitespace-nowrap gap-3 text-left border-b border-gray-200 w-full lg:w-[120px] lg:col-span-2 shrink-0 no-scrollbar">
                        {months.map((month) => (
                            <button
                                key={month}
                                ref={(el) => (buttonRefs.current[month] = el)}
                                onClick={() => {
                                    setActiveMonth(month);
                                    buttonRefs.current[month]?.scrollIntoView({
                                        behavior: "smooth",
                                        inline: "center",
                                        block: "nearest",
                                    });
                                }}
                                className={`relative flex-shrink-0 text-sm font-semibold px-3 py-2 transition
            ${
                activeMonth === month
                    ? "text-[#0077B6] lg:border-l-2 lg:pl-2 lg:border-[#0077B6] after:absolute after:left-3 after:right-3 after:-bottom-[1px] after:h-[2px] after:bg-[#0077B6] lg:after:content-none"
                    : "text-gray-600 hover:text-[#0077B6]"
            }
        `}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <p className="text-[#1A2A44] font-semibold">
                            Average temperature: {temp}
                        </p>
                        <p className="text-[16px] text-[#505050] leading-relaxed">
                            {content}
                        </p>

                        <button
                            onClick={handleScroll}
                            className="mt-6 bg-[#0077B6] hover:bg-[#005f8c] text-white text-sm font-semibold px-6 py-3 rounded transition w-fit"
                        >
                            Discover your ultimate weather and activity guide
                            for {activeMonth}
                        </button>
                    </div>

                    {/* Image */}
                    <div className="hidden lg:block lg:col-span-4">
                        <img
                            src={image}
                            alt={activeMonth}
                            className="rounded-md w-full object-cover max-h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonthlyActivities;
