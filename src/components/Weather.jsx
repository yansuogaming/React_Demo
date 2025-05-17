import SunnyIcon from '@components/icons/SunnyIcon'
import CloudIcon from '@components/icons/CloudIcon'
import CarIcon from '@components/icons/CarIcon'
import BusIcon from '@components/icons/BusIcon'
import MotobikeIcon from '@components/icons/MotobikeIcon'
import iconTemperature from '@images/icon-temperature.svg'

const Weather = () => {
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
                    <div className="flex gap-[25px] mb-[25px]">
                        <SunnyIcon fill="#007BFF" width='36' height='36' />
                        <div>
                            <p className="text-[#1A2A44] text-[16px] font-medium">Summer</p>
                            <p className="text-[#494951] text-[14px]">February to August</p>
                        </div>
                    </div>
                    <div className="flex gap-[25px]">
                        <CloudIcon />
                        <div>
                            <p className="text-[#1A2A44] text-[16px] font-medium">Spring</p>
                            <p className="text-[#494951] text-[14px]">December to March</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[4px_4px_30px_4px] md:rounded-[4px_4px_60px_4px] p-[20px] md:p-[30px] bg-[#F5F6FA]">
                    <h3 className="mb-[30px] text-[#1A2A44] text-[16px] font-bold text-left">
                        TRANSPORTATION
                    </h3>
                    <div className="flex gap-[25px] items-center mb-[25px]">
                        <CarIcon />
                        <div>
                            <p className="text-[#1A2A44] text-[16px] font-medium">Private car</p>
                        </div>
                    </div>
                    <div className="flex gap-[25px] items-center mb-[25px]">
                        <BusIcon />
                        <div>
                            <p className="text-[#1A2A44] text-[16px] font-medium">Public Transportation</p>
                        </div>
                    </div>
                    <div className="flex gap-[25px] items-center">
                        <MotobikeIcon />
                        <div>
                            <p className="text-[#1A2A44] text-[16px] font-medium">Rental</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather