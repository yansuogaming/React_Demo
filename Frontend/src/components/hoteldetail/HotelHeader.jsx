import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const HotelHeader = () => {
    const [showShare, setShowShare] = useState(false);

    return (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative">
            {/* Left Section */}
            <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
                    <div className="flex text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">
                        Spa & Wellness
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">
                        Top Booked
                    </span>
                </div>

                <h1 className="text-xl md:text-2xl font-bold text-[#1a2b49]">
                    Hanoi Veris Boutique Hotel & Spa
                </h1>

                <p className="text-sm text-gray-600 mt-1">
                    📍 221 Sorrento, An Thoi, Phu Quoc Island, Vietnam, 92500.{" "}
                    <a href="#" className="text-teal-500 hover:underline">
                        View map
                    </a>
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-end gap-2">
                {/* Share Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowShare(!showShare)}
                        className="flex items-center gap-1 text-sm font-medium text-[#1a2b49] hover:underline"
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

                {/* Price & CTA */}
                <div className="flex flex-row items-center gap-4 text-right md:mt-0">
                    {/* Price block */}
                    <div className="flex flex-col items-end">
                        <p className="text-rose-600 text-lg font-bold">
                            US $916
                        </p>
                        <p className="text-sm text-gray-500">
                            per night includes taxes & fees
                        </p>
                    </div>

                    {/* CTA button */}
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded whitespace-nowrap">
                        Select Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelHeader;
