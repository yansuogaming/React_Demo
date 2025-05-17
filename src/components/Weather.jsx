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
        <section className="container mt-[60px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
                {/* Weather Card */}
                <div className="rounded-[30px_4px_4px_4px] md:rounded-[60px_4px_4px_4px] p-[20px] md:p-[30px] bg-[#F5F6FA] text-center">
                    <h3 className="mb-[30px] text-[#1A2A44] text-[16px] font-bold text-left">
                        WEATHER
                    </h3>
                    <div className="flex gap-[12px] items-center justify-center mb-[5px]">
                        <SunnyIcon fill="#FD6050" />
                        <p className="text-[36px] md:text-[48px] text-[#1A2A44] font-bold font-[Roboto]">31,9°C</p>
                    </div>
                    <p className="text-[#494951] font-normal text-[16px] mb-[30px]">Cloudy</p>
                    <table className="w-full text-[#1A2A44] text-[14px] md:text-[16px] font-medium">
                        <tbody>
                            <tr>
                                <td className="text-left pb-[5px]">Winter</td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        21°C
                                    </div>
                                </td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        31°C
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left pb-[5px]">Spring</td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        21°C
                                    </div>
                                </td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        31°C
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left pb-[5px]">Summer</td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        21°C
                                    </div>
                                </td>
                                <td width="100px" className="pb-[5px]">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        31°C
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">Fall</td>
                                <td width="100px">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        21°C
                                    </div>
                                </td>
                                <td width="100px">
                                    <div className="flex gap-[8px] justify-end">
                                        <img src={iconTemperature} alt="21°C" />
                                        31°C
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rounded-[4px] p-[20px] md:p-[30px] bg-[#F5F6FA]">
                    <h3 className="mb-[30px] text-[#1A2A44] text-[16px] font-bold text-left">
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
                <div className="rounded-[4px_4px_30px_4px] md:rounded-[4px_4px_60px_4px] p-[20px] md:p-[30px] bg-[#F5F6FA]">
                    <h3 className="mb-[30px] text-[#1A2A44] text-[16px] font-bold text-left">
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
