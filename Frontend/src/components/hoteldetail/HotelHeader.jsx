import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router";

const HotelHeader = () => {
    const [showShare, setShowShare] = useState(false);

    return (
        <div className="flex flex-col gap-4 mb-4">
            {/* Row 1: Tags + Share */}
            <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <div className="flex text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <span className="bg-[#EDF0F3] rounded-[4px] px-[11px] py-[2px] text-[14px] text-[#26456E] font-[500]">
                        Spa & Wellness
                    </span>
                    <span className="bg-[#FEF2E7] rounded-[4px] px-[11px] py-[2px] text-[14px] text-[#C26023] font-[500]">
                        Top Booked
                    </span>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowShare(!showShare)}
                        className="flex items-center text-[16px] text-[#1D2D53] font-[500] cursor-pointer hover:underline gap-[8px]"
                    >
                        Share <FiShare2 className="w-4 h-4" />
                    </button>

                    {showShare && (
                        <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10 flex flex-col p-2 gap-2 w-40">
                            <a
                                href="#"
                                className="flex items-center gap-2 hover:text-blue-600 text-sm"
                            >
                                <FaFacebookF /> Facebook
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 hover:text-sky-500 text-sm"
                            >
                                <FaTwitter /> Twitter
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 hover:text-green-500 text-sm"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 hover:text-red-500 text-sm"
                            >
                                <FaEnvelope /> Email
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Row 2: Title + Price (centered vertically) */}
            <div className="flex justify-between items-center flex-wrap gap-4">
                {/* Left side: Title + Address */}
                <div className="flex flex-col">
                    <h1 className="text-[#1D2D53] text-[28px] font-[700] mb-[8px]">
                        Hanoi Veris Boutique Hotel & Spa
                    </h1>
                    <div className="flex text-center items-center text-[#1D2D53] text-[16px] font-[400] gap-[6px]">
                        <GoLocation />
                        221 Sorrento, An Thoi, Phu Quoc Island, Vietnam, 92500.{" "}
                        <NavLink
                            to="#"
                            className="text-[#18BABD] font-[500] hover:underline"
                        >
                            View map
                        </NavLink>
                    </div>
                </div>

                {/* Right side: Price + Button (centered vertically) */}
                <div className="flex items-center gap-4 text-right self-center">
                    <div className="flex flex-col items-end">
                        <div className="flex text-[14px] font-[400] text-[#C81E3A] items-end gap-[6px]">
                            US <p className="text-[20px] font-[700]">$916</p>
                        </div>
                        <p className="text-[#717171] text-[12px] font-[400]">
                            per night includes taxes & fees
                        </p>
                    </div>
                    <button className="bg-[#18BABD] hover:bg-teal-600 text-white text-[16px] font-[500] px-5 py-[10px] rounded-[4px] whitespace-nowrap cursor-pointer">
                        Select Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelHeader;
