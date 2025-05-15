import { useState, useRef } from "react";
import { NavLink } from "react-router";
import dubaiImage from "@images/about-vietnam.png";

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
    },
    // 👉 Add other months similarly if needed
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

    const { temp, content } = contentData[activeMonth];

    return (
        <section className="container mx-auto px-4 py-12">
            <div ref={scrollRef} className="mt-24" id="things-to-do">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A2A44]">
                    Things to do in Dubai each month
                </h2>
                <p className="text-xl text-gray-500 mb-8">
                    Find something to do whenever you visit
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Tabs */}
                    <div className="flex lg:flex-col flex-wrap gap-3 text-left border-r pr-4">
                        {months.map((month) => (
                            <button
                                key={month}
                                onClick={() => setActiveMonth(month)}
                                className={`text-sm font-semibold ${
                                    activeMonth === month
                                        ? "text-[#0077B6] border-l-2 border-[#0077B6] pl-2"
                                        : "text-gray-600 hover:text-[#0077B6]"
                                } transition`}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
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
                    <div className="hidden lg:block">
                        <img
                            src={dubaiImage}
                            alt="Dubai"
                            className="rounded-md w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonthlyActivities;
