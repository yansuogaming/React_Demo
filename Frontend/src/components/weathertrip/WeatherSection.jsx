import { useEffect, useState } from "react";
import {
    fetchCurrentWeatherByCoords,
    fetchWeatherForecastByCoords,
} from "@components/weathertrip/weatherApi";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const WeatherSection = ({ onLocationChange }) => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState("c");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHourStartIndex, setSelectedHourStartIndex] = useState(0);
    const [locationDenied, setLocationDenied] = useState(false);

    const fetchAllWeather = async (lat, lon, days = 3) => {
        const currentData = await fetchCurrentWeatherByCoords(lat, lon);
        const forecastData = await fetchWeatherForecastByCoords(lat, lon, days);
        if (currentData && forecastData) {
            setWeather(currentData);
            setForecast(forecastData);
            onLocationChange?.(currentData.location.name);
            if (!selectedDate) {
                setSelectedDate(
                    new Date(forecastData.forecast.forecastday[0].date)
                );
            }
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchAllWeather(latitude, longitude);
            },
            () => {
                setLocationDenied(true);
                fetchAllWeather(25.276987, 55.296249);
            }
        );
    }, []);

    const formattedDate = selectedDate
        ? selectedDate.toISOString().split("T")[0]
        : null;

    const hourly =
        forecast?.forecast?.forecastday?.find((d) => d.date === formattedDate)
            ?.hour || [];

    useEffect(() => {
        if (hourly.length > 0 && selectedHourStartIndex === 0) {
            const now = new Date();
            const currentHourIndex = hourly.findIndex(
                (h) => new Date(h.time).getHours() >= now.getHours()
            );

            if (currentHourIndex !== -1) {
                setSelectedHourStartIndex(
                    Math.min(currentHourIndex, hourly.length - 2)
                );
            }
        }
    }, [hourly]);

    const selectedHour = hourly[selectedHourStartIndex];
    const forecastDay = forecast?.forecast?.forecastday?.find(
        (d) => d.date === formattedDate
    );

    return (
        <section className="mb-10">
            <div className="mb-6">
                <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#1A2A44]">
                    Weather in {weather?.location?.name},{" "}
                    {weather?.location?.country}
                </h1>
                <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
                    Learn about this location’s climate now and throughout the
                    year with our weather guide.
                </p>
            </div>
            {locationDenied && (
                <p className="text-sm text-yellow-600 mb-4">
                    Location access denied. Showing default location instead.
                </p>
            )}

            {weather && selectedHour && (
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div>
                            <p className="text-base sm:text-lg font-medium text-gray-800">
                                {selectedHour.condition.text}
                            </p>
                            <h2 className="text-[48px] sm:text-[56px] md:text-[64px] font-bold text-[#1A2A44] leading-none">
                                {unit === "c"
                                    ? selectedHour.temp_c
                                    : selectedHour.temp_f}
                                &#176;
                            </h2>
                            <div className="text-sm mt-1 space-x-2">
                                <button
                                    onClick={() => setUnit("c")}
                                    className={`font-semibold ${
                                        unit === "c"
                                            ? "text-black"
                                            : "text-gray-500"
                                    }`}
                                >
                                    Celsius
                                </button>
                                <button
                                    onClick={() => setUnit("f")}
                                    className={`font-semibold ${
                                        unit === "f"
                                            ? "text-black"
                                            : "text-blue-600"
                                    }`}
                                >
                                    Fahrenheit
                                </button>
                            </div>
                        </div>
                        <div className="text-[48px]">
                            <img
                                src={selectedHour.condition.icon}
                                alt={selectedHour.condition.text}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        {/* Calendar trigger in Popover */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="border rounded-md px-4 py-2 shadow-sm flex items-center gap-2 text-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>
                                        {selectedDate
                                            ? format(
                                                  selectedDate,
                                                  "eeee, dd MMMM"
                                              )
                                            : "Select date"}
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-2"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={(date) => {
                                        setSelectedDate(date);
                                        setSelectedHourStartIndex(0);
                                    }}
                                    disabled={(date) =>
                                        !forecast?.forecast?.forecastday?.some(
                                            (d) =>
                                                d.date ===
                                                date.toISOString().split("T")[0]
                                        )
                                    }
                                />
                            </PopoverContent>
                        </Popover>

                        {/* 2-hour time slider */}
                        {hourly.length > 0 && (
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={() =>
                                        setSelectedHourStartIndex((prev) =>
                                            Math.max(prev - 1, 0)
                                        )
                                    }
                                    className="w-10 h-10 flex items-center justify-center bg-white rounded shadow"
                                >
                                    ◀
                                </button>

                                {[0, 1].map((offset) => {
                                    const hour =
                                        hourly[selectedHourStartIndex + offset];
                                    if (!hour) return null;
                                    return (
                                        <div
                                            key={hour.time_epoch}
                                            className="text-center w-16"
                                        >
                                            <p className="text-xs text-gray-500">
                                                {hour.time.split(" ")[1]}
                                            </p>
                                            <p className="text-[16px] font-bold">
                                                {unit === "c"
                                                    ? hour.temp_c
                                                    : hour.temp_f}
                                                &#176;
                                            </p>
                                        </div>
                                    );
                                })}

                                <button
                                    onClick={() =>
                                        setSelectedHourStartIndex((prev) =>
                                            Math.min(
                                                prev + 1,
                                                hourly.length - 2
                                            )
                                        )
                                    }
                                    className="w-10 h-10 flex items-center justify-center bg-white rounded shadow"
                                >
                                    ▶
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Updated Highlights Style */}
            {forecastDay && (
                <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-[#1A2A44] mt-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🌅</span>
                        <div className="flex flex-col">
                            <span className="text-sm">Sunrise</span>
                            <strong className="text-pink-700">
                                {forecastDay.astro.sunrise}
                            </strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🌇</span>
                        <div className="flex flex-col">
                            <span className="text-sm">Sunset</span>
                            <strong className="text-pink-700">
                                {forecastDay.astro.sunset}
                            </strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🌡️</span>
                        <div className="flex flex-col">
                            <span className="text-sm">Low</span>
                            <strong className="text-pink-700">
                                {forecastDay.day.mintemp_c}&#176;
                            </strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🌡️</span>
                        <div className="flex flex-col">
                            <span className="text-sm">High</span>
                            <strong className="text-pink-700">
                                {forecastDay.day.maxtemp_c}&#176;
                            </strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">💧</span>
                        <div className="flex flex-col">
                            <span className="text-sm">Avg. Humidity</span>
                            <strong className="text-pink-700">
                                {forecastDay.day.avghumidity}%
                            </strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🌬️</span>
                        <div className="flex flex-col">
                            <span className="text-sm">Max. Wind</span>
                            <strong className="text-pink-700">
                                {forecastDay.day.maxwind_kph} km/h
                            </strong>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default WeatherSection;
