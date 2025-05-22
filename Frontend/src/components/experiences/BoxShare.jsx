import React, { useState } from "react";
import {
    FaPrint,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaEllipsisH,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

const BoxShare = () => {
    const [showMoreSocials, setShowMoreSocials] = useState(false);

    return (
        <>
            {/* Wrapper div */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[34px] text-gray-600 text-[15px]">
                {/* Print */}
                <div className="flex items-center gap-2 mb-3 sm:mb-0">
                    <span>Print</span>
                    <button
                        onClick={() => window.print()}
                        className="w-[36px] h-[36px] flex items-center justify-center border border-gray-400 rounded-full cursor-pointer hover:bg-gray-100 hover:border-gray-600 transition"
                    >
                        <FaPrint className="text-[16px] text-gray-600 hover:text-black" />
                    </button>
                </div>

                {/* Share */}
                <div className="flex items-center flex-wrap gap-3">
                    <span className="mr-2">Share to</span>
                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-blue-500 text-blue-500 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-600 transition">
                        <FaFacebookF />
                    </button>
                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-black text-black rounded-full cursor-pointer hover:bg-gray-200 hover:border-gray-700 transition">
                        <FaTwitter />
                    </button>
                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-pink-500 text-pink-500 rounded-full cursor-pointer hover:bg-pink-100 hover:border-pink-600 transition">
                        <FaInstagram />
                    </button>
                    <button
                        onClick={() => setShowMoreSocials(!showMoreSocials)}
                        className="w-[36px] h-[36px] flex items-center justify-center border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100 hover:border-gray-500 transition"
                    >
                        <FaEllipsisH />
                    </button>

                    {/* Extra Socials inline always if visible */}
                    {showMoreSocials && (
                        <>
                            <button className="w-[36px] h-[36px] flex items-center justify-center border border-blue-700 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-800 transition">
                                <FaLinkedinIn />
                            </button>
                            <button className="w-[36px] h-[36px] flex items-center justify-center border border-red-500 text-red-500 rounded-full cursor-pointer hover:bg-red-100 hover:border-red-600 transition">
                                <FaPinterestP />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default BoxShare;
