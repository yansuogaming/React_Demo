const WeatherSection = () => {
    return (
        <section className="mb-10">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#1A2A44]">
                    Weather in Hanoi
                </h1>
                <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
                    Learn about Hanoi's climate now and throughout the year, and
                    discover the best times to visit with our weather guide.
                </p>
            </div>

            {/* Current Weather */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
                {/* Nhiệt độ hiện tại */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <div>
                        <p className="text-base sm:text-lg font-medium text-gray-800">
                            Sunny
                        </p>
                        <h2 className="text-[48px] sm:text-[56px] md:text-[64px] font-bold text-[#1A2A44] leading-none">
                            40.2°
                        </h2>
                        <div className="text-sm mt-1 space-x-1">
                            <span className="font-semibold">Celcius</span>
                            <span className="text-blue-600 cursor-pointer">
                                Farenheit
                            </span>
                        </div>
                    </div>
                    <div className="text-[36px] sm:text-[44px] md:text-[48px] text-pink-700">
                        ☀️
                    </div>
                </div>

                {/* Date Picker + Time Scroll */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4 w-full lg:w-auto">
                    {/* Date picker */}
                    <div className="border rounded-md px-4 py-2 flex items-center gap-2 shadow-sm w-full sm:w-auto">
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
                        <span className="text-sm text-gray-700">
                            Today, 15 May
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-auto text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    {/* Time range control */}
                    <div className="flex items-center justify-between sm:justify-start gap-4">
                        <button className="w-10 h-10 border rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-xl">◀</span>
                        </button>
                        <div className="text-center">
                            <p className="text-xs font-semibold text-pink-700">
                                NOW
                            </p>
                            <p className="font-bold text-[16px] sm:text-[18px]">
                                32.1°
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-gray-500">15:00</p>
                            <p className="font-bold text-[16px] sm:text-[18px]">
                                32.1°
                            </p>
                        </div>
                        <button className="w-10 h-10 border rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-xl">▶</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-[#1A2A44]">
                <div className="flex items-center gap-2">
                    <span>🌅 Sunrise</span>
                    <strong className="text-pink-700">05:34</strong>
                </div>
                <div className="flex items-center gap-2">
                    <span>🌇 Sunset</span>
                    <strong className="text-pink-700">18:57</strong>
                </div>
                <div className="flex items-center gap-2">
                    <span>🌡️ Low</span>
                    <strong className="text-pink-700">28.9°</strong>
                </div>
                <div className="flex items-center gap-2">
                    <span>🌡️ High</span>
                    <strong className="text-pink-700">33.9°</strong>
                </div>
                <div className="flex items-center gap-2">
                    <span>💧 Humidity</span>
                    <strong className="text-pink-700">49%</strong>
                </div>
                <div className="flex items-center gap-2">
                    <span>🌬️ Wind</span>
                    <strong className="text-pink-700">27 km/h</strong>
                </div>
            </div>
        </section>
    );
};

export default WeatherSection;
