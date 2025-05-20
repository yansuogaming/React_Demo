import { Outlet } from "react-router";
import Footer from "@components/Footer";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FaShareNodes } from "react-icons/fa6";

import Breadcrumb from "@components/Breadcrumb";

import imgLogo2 from "@images/logo2.svg";

const TripDetailLayout = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("plan_your_trip"), href: "/" },
        { label: t("trip_planner_with_ai"), href: "/" },
    ];

    return (
        <>
            <header>
                <div className="sticky top-0 bg-white shadow-[] border-b">
                    <div className="flex justify-between items-center p-[0px_38px]">
                        {/* LEFT SIDE */}
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="logo_header_tripdetal">
                                <img
                                    src={imgLogo2}
                                    alt="Vietnam logo"
                                    className="w-full h-auto border-r border-[#D9D9D9] pr-[39px]"
                                />
                            </div>

                            {/* Text content */}
                            <div className="p-[24px_39px]">
                                {/* Breadcrumb */}
                                <Breadcrumb
                                    className="text-[#494951] font-normal text-[14px] items-center mb-[8px]"
                                    items={breadcrumdItems}
                                />

                                {/* Title */}
                                <h1 className="text-[28px] text-[#1A2A44] font-[500] leading-[150%] mb-[4px]">
                                    Itinerary
                                </h1>

                                {/* Location and duration */}
                                <div className="text-gray-700 flex items-center gap-6">
                                    <span className="flex items-center gap-[8px] text-[#1A2A44] text-[16px]">
                                        <CiLocationOn />
                                        Hanoi, Nha Trang
                                    </span>
                                    <span className="flex items-center gap-[8px] text-[#1A2A44] text-[16px]">
                                        <CiCalendar
                                            style={{ color: "#494951" }}
                                        />
                                        4 days 3 nights
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="rounded-[50%] border p-[13px] w-[50px]">
                                <FaShareNodes />
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                💾 Save itinerary
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    );
};

export default TripDetailLayout;
