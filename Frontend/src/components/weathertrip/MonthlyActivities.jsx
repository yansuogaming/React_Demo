import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import {
    getMockMonthlyWeatherData,
    fetchCurrentWeatherByCoords,
} from "@components/weathertrip/weatherApi";
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

const contentImages = {
    January: dubaiImage,
    February: imgDemo,
    March: dubaiImage,
    April: dubaiImage,
    May: dubaiImage,
    June: dubaiImage,
    July: dubaiImage,
    August: dubaiImage,
    September: dubaiImage,
    October: dubaiImage,
    November: dubaiImage,
    December: dubaiImage,
};

const MonthlyActivities = () => {
    const [activeMonth, setActiveMonth] = useState("January");
    const [monthlyData, setMonthlyData] = useState({});
    const [locationError, setLocationError] = useState(null);
    const scrollRef = useRef(null);
    const buttonRefs = useRef({});
    const [city, setCity] = useState("your city");

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            setMonthlyData(getMockMonthlyWeatherData());
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                try {
                    const data = await fetchCurrentWeatherByCoords(
                        coords.latitude,
                        coords.longitude
                    );
                    if (data?.location?.name) {
                        setCity(data.location.name);
                    }
                } catch {
                    setLocationError("Could not fetch weather data.");
                } finally {
                    setMonthlyData(getMockMonthlyWeatherData()); // always use mock
                }
            },
            () => {
                setLocationError("Unable to retrieve your location.");
                setMonthlyData(getMockMonthlyWeatherData());
            }
        );
    }, []);

    const handleScroll = () => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const weather = monthlyData[activeMonth];
    const description =
        weather?.description ||
        "Discover seasonal experiences throughout the city.";
    const temp = weather?.avg || "--";
    const icon = weather?.icon ? `https:${weather.icon}` : null;
    const image = contentImages[activeMonth];

    return (
        <section className="container mx-auto px-4 py-12">
            <div ref={scrollRef} className="mt-24" id="things-to-do">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A2A44]">
                    Things to do in {city} each month
                </h2>
                <p className="text-xl text-gray-500 mb-2">
                    Find something to do whenever you visit
                </p>
                {locationError && (
                    <p className="text-sm text-red-500 mb-4">{locationError}</p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Tabs */}
                    <div className="flex lg:flex-col overflow-x-auto gap-3 text-left border-b border-gray-200 w-full lg:w-[120px] lg:col-span-2 no-scrollbar">
                        {months.map((month) => (
                            <button
                                key={month}
                                ref={(el) => (buttonRefs.current[month] = el)}
                                onClick={() => setActiveMonth(month)}
                                className={`text-sm font-semibold px-3 py-2 transition ${
                                    activeMonth === month
                                        ? "text-[#0077B6] lg:border-l-2 lg:pl-2 lg:border-[#0077B6]"
                                        : "text-gray-600 hover:text-[#0077B6]"
                                }`}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <p className="text-[#1A2A44] font-semibold flex items-center">
                            Forecasted temperature: {temp}
                            {icon && (
                                <img
                                    src={icon}
                                    alt="Weather icon"
                                    className="w-10 h-10 ml-2"
                                />
                            )}
                        </p>

                        <p className="text-[16px] text-[#505050] leading-relaxed">
                            {description}
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
