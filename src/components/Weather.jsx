import SunnyIcon from "@components/icons/SunnyIcon";
import CloudIcon from "@components/icons/CloudIcon";
import CarIcon from "@components/icons/CarIcon";
import BusIcon from "@components/icons/BusIcon";
import MotobikeIcon from "@components/icons/MotobikeIcon";
import iconTemperature from "@images/icon-temperature.svg";

const Weather = () => {
    const formatTemperature = (temp) => {
        const num = parseFloat(temp);
        return Number.isInteger(num) ? `${num}°C` : `${num.toFixed(1)}°C`;
    };

    return (
        <section className="container mx-auto mt-8 sm:mt-16 px-4 sm:px-0">
            {/* Desktop layout: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
                {/* WEATHER */}
                <div className="rounded-[20px_4px_4px_4px] sm:rounded-[60px_4px_4px_4px] p-[30px_20px] lg:p-4 sm:p-8 bg-[#F5F6FA] text-center rounded-br-3xl">
                    <h3 className="mb-4 sm:mb-8 text-[#1A2A44] text-base sm:text-lg font-bold text-left">
                        WEATHER
                    </h3>
                    <div className="flex gap-2 sm:gap-3 items-center justify-center mb-2 sm:mb-4">
                        <SunnyIcon
                            fill="#FD6050"
                            className="w-8 h-8 sm:w-12 sm:h-12"
                            width={64}
                            height={64}
                        />
                        <p className="text-4xl sm:text-5xl text-[#1A2A44] font-bold font-[Roboto]">
                            {formatTemperature(31.9)}
                        </p>
                    </div>
                    <p className="text-[#494951] font-normal text-sm sm:text-base mb-4 sm:mb-8">
                        Cloudy
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-[#1A2A44] text-xs sm:text-base font-medium">
                            <tbody>
                                {["Winter", "Spring", "Summer", "Fall"].map(
                                    (season, index) => (
                                        <tr key={index}>
                                            <td className="text-left py-1 sm:py-2">
                                                {season}
                                            </td>
                                            <td className="py-1 sm:py-2 min-w-[80px]">
                                                <div className="flex gap-1 sm:gap-2 justify-end">
                                                    <img
                                                        src={iconTemperature}
                                                        alt="21°C"
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                    />
                                                    {formatTemperature(21)}
                                                </div>
                                            </td>
                                            <td className="py-1 sm:py-2 min-w-[80px]">
                                                <div className="flex gap-1 sm:gap-2 justify-end">
                                                    <img
                                                        src={iconTemperature}
                                                        alt="31°C"
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                    />
                                                    {formatTemperature(31)}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* BEST TIME TO VISIT (only visible on desktop) */}
                <div className="hidden lg:block rounded-[4px] p-4 sm:p-8 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 sm:mb-8 text-[#1A2A44] text-base sm:text-lg font-bold text-left">
                        BEST TIME TO VISIT
                    </h3>
                    <div className="flex gap-3 sm:gap-6 mb-4 sm:mb-6">
                        <SunnyIcon
                            fill="#007BFF"
                            className="w-6 h-6 sm:w-9 sm:h-0.5"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Summer
                            </p>
                            <p className="text-[#494951] text-xs sm:text-sm">
                                February to August
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6">
                        <CloudIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Spring
                            </p>
                            <p className="text-[#494951] text-xs sm:text-sm">
                                December to March
                            </p>
                        </div>
                    </div>
                </div>

                {/* TRANSPORTATION (only visible on desktop) */}
                <div className="hidden lg:block rounded-[4px_4px_20px_4px] sm:rounded-[4px_4px_60px_4px] p-4 sm:p-8 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 sm:mb-8 text-[#1A2A44] text-base sm:text-lg font-bold text-left">
                        TRANSPORTATION
                    </h3>
                    <div className="flex gap-3 sm:gap-6 items-center mb-4 sm:mb-6">
                        <CarIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Private car
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6 items-center mb-4 sm:mb-6">
                        <BusIcon className="w-6 h-6 sm:w-9 sm:h-9" />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Public Transportation
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6 items-center">
                        <MotobikeIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Rental
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet layout (only visible on sm: 640px–1023px) */}
            <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-4 mt-4">
                {/* BEST TIME TO VISIT */}
                <div className="rounded-[4px] p-4 sm:p-8 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 sm:mb-8 text-[#1A2A44] text-base sm:text-lg font-bold text-left">
                        BEST TIME TO VISIT
                    </h3>
                    <div className="flex gap-3 sm:gap-6 mb-4 sm:mb-6">
                        <SunnyIcon
                            fill="#007BFF"
                            className="w-6 h-6 sm:w-9 sm:h-0.5"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Summer
                            </p>
                            <p className="text-[#494951] text-xs sm:text-sm">
                                February to August
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6">
                        <CloudIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Spring
                            </p>
                            <p className="text-[#494951] text-xs sm:text-sm">
                                December to March
                            </p>
                        </div>
                    </div>
                </div>

                {/* TRANSPORTATION */}
                <div className="rounded-[4px_4px_20px_4px] sm:rounded-[4px_4px_60px_4px] p-4 sm:p-8 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 sm:mb-8 text-[#1A2A44] text-base sm:text-lg font-bold text-left">
                        TRANSPORTATION
                    </h3>
                    <div className="flex gap-3 sm:gap-6 items-center mb-4 sm:mb-6">
                        <CarIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Private car
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6 items-center mb-4 sm:mb-6">
                        <BusIcon className="w-6 h-6 sm:w-9 sm:h-9" />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Public Transportation
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 sm:gap-6 items-center">
                        <MotobikeIcon
                            className="w-6 h-6 sm:w-9 sm:h-9"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base sm:text-lg font-medium">
                                Rental
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile layout (only visible <640px) */}
            <div className="sm:hidden flex flex-col gap-4 mt-4">
                {/* BEST TIME TO VISIT */}
                <div className="rounded-[4px] p-4 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 text-[#1A2A44] text-base font-bold text-left">
                        BEST TIME TO VISIT
                    </h3>
                    <div className="flex gap-3 mb-4">
                        <SunnyIcon
                            fill="#007BFF"
                            className="w-6 h-6"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base font-medium">
                                Summer
                            </p>
                            <p className="text-[#494951] text-xs">
                                February to August
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <CloudIcon className="w-6 h-6" width={36} height={36} />
                        <div>
                            <p className="text-[#1A2A44] text-base font-medium">
                                Spring
                            </p>
                            <p className="text-[#494951] text-xs">
                                December to March
                            </p>
                        </div>
                    </div>
                </div>

                {/* TRANSPORTATION */}
                <div className="rounded-[4px_4px_20px_4px] p-4 bg-[#F5F6FA] rounded-tl-3xl rounded-br-3xl">
                    <h3 className="mb-4 text-[#1A2A44] text-base font-bold text-left">
                        TRANSPORTATION
                    </h3>
                    <div className="flex gap-3 items-center mb-4">
                        <CarIcon className="w-6 h-6" width={36} height={36} />
                        <div>
                            <p className="text-[#1A2A44] text-base font-medium">
                                Private car
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center mb-4">
                        <BusIcon className="w-6 h-6" />
                        <div>
                            <p className="text-[#1A2A44] text-base font-medium">
                                Public Transportation
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <MotobikeIcon
                            className="w-6 h-6"
                            width={36}
                            height={36}
                        />
                        <div>
                            <p className="text-[#1A2A44] text-base font-medium">
                                Rental
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weather;
