import HotelOverview_RightBox from "./HotelOverview_RightBox";

import {
    MdWifi,
    MdCleaningServices,
    MdRestaurant,
    MdFreeBreakfast,
    MdChildCare,
    MdSpa,
} from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";

const hotelFacilities = [
    { icon: FaConciergeBell, label: "24 hour front desk" },
    { icon: MdWifi, label: "Free Internet" },
    { icon: MdSpa, label: "Spa service" },
    { icon: MdCleaningServices, label: "Daily housekeeping" },
    { icon: MdFreeBreakfast, label: "In-room breakfast" },
    { icon: MdRestaurant, label: "Restaurant" },
    { icon: MdChildCare, label: "Children’s play area" },
];

const HotelTabs_Overview = () => {
    return (
        <div className="grid md:grid-cols-12 gap-6">
            {/* Left content */}
            <div className="md:col-span-9">
                <p className="text-[#1D2D53] text-[16px] font-[400]">
                    Situated in the picturesque and ideal location along the
                    Vũng Tàu beachfront, Premier Pearl is one of Vũng Tàu’s
                    leading luxury beach hotels...
                    <br />
                    <br />
                    Additionally, Premier Pearl is equipped with modern
                    facilities and offers a variety of services...
                    <br />
                    <br />
                    Premier Pearl Hotel is a fantastic base for exploring the
                    vibrant city...
                    <span className="text-[#18BABD] cursor-pointer hover:underline">
                        {" "}
                        View more
                    </span>
                </p>

                <h3 className="text-[18px] font-[700] mt-[40px] mb-[20px]">
                    Most popular facilities
                </h3>
                <ul className="flex flex-wrap gap-x-[20px] gap-y-[16px] text-sm text-gray-900">
                    {hotelFacilities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={index}
                                className="flex items-center gap-[12px] whitespace-nowrap text-[16px] text-[#000] font-[400]"
                            >
                                <Icon className="w-5 h-5 text-gray-700" />
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right column */}
            <div className="md:col-span-3">
                <HotelOverview_RightBox />
            </div>
        </div>
    );
};

export default HotelTabs_Overview;
