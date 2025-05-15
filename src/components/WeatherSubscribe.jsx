import React from "react";
import { FaSun } from "react-icons/fa";

const WeatherSubscribe = () => {
    return (
        <section className="bg-white text-[#1a1a1a] py-8 px-4">
            {/* Weather Info */}
            <div className="container mx-auto max-w-screen-xl">
                <h2 className="text-xl font-semibold mb-4">Weather in Dubai</h2>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Temp + Icon */}
                    <div className="flex items-center gap-4 text-4xl font-bold">
                        <span>41.2°</span>
                        <FaSun className="text-pink-600 text-4xl" />
                        <span className="text-xl font-medium">Sunny</span>
                    </div>

                    {/* Unit Switch */}
                    <div className="flex gap-4 text-sm">
                        <span className="font-semibold">Celcius</span>
                        <span className="text-blue-600 underline cursor-pointer">
                            Farenheit
                        </span>
                    </div>

                    {/* Sunrise / Sunset / etc */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm">
                        <div>
                            <p className="text-gray-600">Sunrise</p>
                            <p className="text-pink-600 font-semibold">05:35</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Sunset</p>
                            <p className="text-pink-600 font-semibold">18:56</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Low</p>
                            <p className="text-pink-600 font-semibold">29.4°</p>
                        </div>
                        <div>
                            <p className="text-gray-600">High</p>
                            <p className="text-pink-600 font-semibold">34.1°</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Humidity</p>
                            <p className="text-pink-600 font-semibold">25%</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Wind</p>
                            <p className="text-pink-600 font-semibold">
                                22.7 km/h
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="text-sm border rounded px-4 py-1 shadow-sm hover:bg-gray-100">
                        Get Dubai Calendar | Opens in a new window
                    </button>
                </div>

                <div className="mt-2">
                    <a href="#" className="text-blue-700 text-sm font-medium">
                        Learn more →
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-pink-600 my-8" />

            {/* Bottom Section */}
            <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between gap-[50px]">
                {/* Stay Updated */}
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

                {/* App Download */}
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
            </div>
        </section>
    );
};

export default WeatherSubscribe;
