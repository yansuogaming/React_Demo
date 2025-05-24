import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
    fetchCurrentWeatherByCoords,
    fetchWeatherForecastByCoords,
    fetchWeatherByDate,
} from "@components/weathertrip/weatherApi";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

function CustomCaption(props) {
    const { goToMonth, nextMonth, previousMonth, locale } = DayPicker();
    const monthStr = props.displayMonth.toLocaleString(locale, {
        month: "long",
        year: "numeric",
    });

    return (
        <div className="flex items-center justify-between px-4 mb-3">
            <button
                type="button"
                onClick={() => previousMonth && goToMonth(previousMonth)}
                className="text-gray-500 hover:text-black transition"
            >
                ◀
            </button>
            <div className="text-lg font-semibold text-[#1A2A44]">
                {monthStr}
            </div>
            <button
                type="button"
                onClick={() => nextMonth && goToMonth(nextMonth)}
                className="text-gray-500 hover:text-black transition"
            >
                ▶
            </button>
        </div>
    );
}

const WeatherSection = ({ onLocationChange }) => {
    const { t } = useTranslation();

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState("c");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedHourStartIndex, setSelectedHourStartIndex] = useState(0);
    const [locationDenied, setLocationDenied] = useState(false);
    const availableDates =
        forecast?.forecast?.forecastday?.map((d) => d.date) || [];

    const fetchAllWeather = async (lat, lon, days = 10) => {
        //Mặc định hiển thị 10 ngày tới
        const currentData = await fetchCurrentWeatherByCoords(lat, lon);
        const forecastData = await fetchWeatherForecastByCoords(lat, lon, days);
        if (currentData && forecastData) {
            setWeather(currentData);
            setForecast(forecastData);
            onLocationChange?.(currentData.location.name);
            setSelectedDate(
                new Date(forecastData.forecast.forecastday[0].date)
            );
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
                fetchAllWeather(21.028511, 105.804817);
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
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-[240px] pl-3 text-left font-normal"
                                >
                                    {selectedDate ? (
                                        format(selectedDate, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                side="bottom"
                                align="start"
                                className="z-50 p-0 bg-white border shadow-lg rounded-md w-auto"
                            >
                                <div className="w-[360px] sm:w-[400px] md:w-[440px] px-4 py-3">
                                    <DayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            if (!date) return;

                                            setSelectedDate(date);
                                            setSelectedHourStartIndex(0);

                                            const iso = date
                                                .toISOString()
                                                .split("T")[0];

                                            // Ngày hôm nay
                                            const today = new Date();

                                            // Chỉ dùng forecast nếu là trong 10 ngày (availableDates)
                                            if (availableDates.includes(iso))
                                                return;

                                            // Nếu quá khứ hơn 7 ngày: chặn
                                            const daysDiff = Math.floor(
                                                (today - date) /
                                                    (1000 * 60 * 60 * 24)
                                            );
                                            if (daysDiff > 7) {
                                                alert(
                                                    t("weather_limit_notice")
                                                );

                                                return;
                                            }

                                            fetchWeatherByDate(
                                                "Hanoi",
                                                iso
                                            ).then((data) => {
                                                if (data && data.forecast) {
                                                    setForecast(data);
                                                } else {
                                                    alert(
                                                        t("weather_not_found")
                                                    );

                                                    window.location.reload();
                                                }
                                            });
                                        }}
                                        disabled={(date) => {
                                            const today = new Date();
                                            const daysDiff = Math.floor(
                                                (today - date) /
                                                    (1000 * 60 * 60 * 24)
                                            );
                                            return daysDiff > 7;
                                        }}
                                        modifiersClassNames={{
                                            selected: "bg-blue-600 text-white",
                                            today: "text-blue-600",
                                        }}
                                        components={{ Caption: CustomCaption }}
                                        classNames={{
                                            months: "flex justify-center",
                                            month: "space-y-4",
                                            table: "w-full border-collapse",
                                            head_row: "flex",
                                            row: "flex",
                                            head_cell:
                                                "text-xs text-gray-500 w-9",
                                            cell: "w-9 h-9 text-center text-sm hover:bg-gray-100 rounded-full",
                                        }}
                                    />
                                </div>
                            </PopoverContent>
                        </Popover>

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
