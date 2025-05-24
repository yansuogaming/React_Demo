import React, { useState, useEffect } from "react";
import {
    fetchCurrentWeatherByCoords,
    fetchWeatherForecastByCoords,
} from "@components/weathertrip/weatherApi";
import { NavLink } from "react-router";

const WeatherSubscribe = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [astro, setAstro] = useState(null);
    const [location, setLocation] = useState("your city");
    const [unit, setUnit] = useState("c"); // "c" for Celsius, "f" for Fahrenheit

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                const [currentData, forecastData] = await Promise.all([
                    fetchCurrentWeatherByCoords(
                        coords.latitude,
                        coords.longitude
                    ),
                    fetchWeatherForecastByCoords(
                        coords.latitude,
                        coords.longitude
                    ),
                ]);

                if (currentData) {
                    setWeather(currentData);
                    setLocation(currentData.location.name);
                }

                if (forecastData?.forecast?.forecastday?.[0]) {
                    setForecast(forecastData.forecast.forecastday[0].day);
                    setAstro(forecastData.forecast.forecastday[0].astro);
                }
            },
            (err) => {
                console.error("Geolocation error:", err);
            }
        );
    }, []);

    const current = weather?.current;

    return (
        <section className="bg-[#f5f5f5] text-[#000] py-8 px-4">
            <div className="container mx-auto">
                <h2 className="text-[26px] font-[700] mb-4">
                    Weather in {location}
                </h2>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Temp + Icon */}
                    <div className="flex items-center gap-4 text-4xl font-bold">
                        <span className="text-[60px] font-[700] ">
                            {unit === "c"
                                ? `${current?.temp_c ?? "--"}°`
                                : `${current?.temp_f ?? "--"}°`}
                        </span>
                        <img
                            src={`https:${current?.condition?.icon}`}
                            alt={current?.condition?.text}
                            className="w-[60px] h-[60px]"
                        />{" "}
                        <span className="text-[28px] font-[500]">
                            {current?.condition?.text || "Loading..."}
                        </span>
                    </div>

                    {/* Sunrise / Sunset / etc */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px] text-sm">
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">
                                Sunrise
                            </p>
                            <p className="text-[#007BFF] font-[700] text-[16px]">
                                {astro?.sunrise || "--"}
                            </p>
                        </div>
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">Sunset</p>
                            <p className="text-[#007BFF] font-[700] text-[16px]">
                                {astro?.sunset || "--"}
                            </p>
                        </div>
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">Low</p>
                            <p className="text-[#007BFF] font-[700] text-[16px]">
                                {unit === "c"
                                    ? `${forecast?.mintemp_c ?? "--"}°`
                                    : `${forecast?.mintemp_f ?? "--"}°`}
                            </p>
                        </div>
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">High</p>
                            <p className="text-[#007BFF] font-[700] text-[16px]">
                                {unit === "c"
                                    ? `${forecast?.maxtemp_c ?? "--"}°`
                                    : `${forecast?.maxtemp_f ?? "--"}°`}
                            </p>
                        </div>
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">
                                Humidity
                            </p>
                            <p className="text-[#007BFF] font-[700]">
                                {current?.humidity
                                    ? `${current.humidity}%`
                                    : "--"}
                            </p>
                        </div>
                        <div>
                            <p className="text-[#1A2A44] text-[14px]">Wind</p>
                            <p className="text-[#007BFF] font-[700] text-[16px]">
                                {current?.wind_kph
                                    ? `${current.wind_kph} km/h`
                                    : "--"}
                            </p>
                        </div>

                        {/* Learn more placed here */}
                        <div className="col-span-2 sm:col-span-3 md:col-span-6 mt-1">
                            <NavLink
                                to="/weathertrip"
                                className="text-[#035E88] text-[16px] font-[500] hover:text-black "
                            >
                                Learn more →
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Unit Switch */}
                <div className="flex gap-4 text-sm mt-[10px]">
                    <span
                        className={`font-[500] cursor-pointer text-[16px] ${
                            unit === "c"
                                ? "text-black "
                                : "text-[#035E88] hover:underline"
                        }`}
                        onClick={() => setUnit("c")}
                    >
                        Celsius
                    </span>
                    <span
                        className={`font-[500] cursor-pointer text-[16px] ${
                            unit === "f"
                                ? "text-black"
                                : "text-[#035E88] hover:underline"
                        }`}
                        onClick={() => setUnit("f")}
                    >
                        Fahrenheit
                    </span>
                </div>
            </div>
        </section>
    );
};

export default WeatherSubscribe;

{
    /* <hr className="border-t-2 border-pink-600 my-8" /> */
}

{
    /* <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between gap-[50px]">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
                    <p className="text-sm mb-4">
                        Get the latest updates on things to do in Dubai
                    </p>
                    <form className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="border px-4 py-2 rounded w-full sm:flex-1"
                        />
                        <button
                            type="submit"
                            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-600 mt-2">
                        All information provided will be handled in accordance
                        with our{" "}
                        <a
                            href="#"
                            className="text-blue-700 underline font-medium"
                        >
                            Privacy Notice
                        </a>
                    </p>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">
                        Download our apps
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div>
                            <img
                                src="https://dubaicalendar.com/assets/images/visit-dubai-app.png"
                                alt="Visit Dubai App"
                                className="w-24 h-auto mx-auto sm:mx-0"
                            />
                            <p className="text-sm underline mt-2 text-center sm:text-left">
                                Get Visit Dubai
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://dubaicalendar.com/assets/images/dubai-calendar-app.png"
                                alt="Dubai Calendar App"
                                className="w-24 h-auto mx-auto sm:mx-0"
                            />
                            <p className="text-sm underline mt-2 text-center sm:text-left">
                                Get Dubai Calendar
                            </p>
                        </div>
                    </div>
                </div>
            </div> */
}
