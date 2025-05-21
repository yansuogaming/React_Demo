import React from "react";

import { FaClock, FaMapMarkerAlt, FaCheck, FaStar } from "react-icons/fa";

import { TbCalendarTime } from "react-icons/tb";

import TickDecagram from "@components/icons/TickDecagram";

const TourContent = () => {
    return (
        <div className="mt-6">
            <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-2">
                Hoi An/ Da Nang - Ba Na Hills - Golden Bridge Deluxe
            </h1>
            <div className="flex flex-wrap items-center gap-[6px]">
                <div className="flex text-[#FED141]">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-[16px] h-[16px]" />
                    ))}
                </div>

                <span className="text-[#1D2D53] text-[14px] font-[400]">
                    4.5 (879)
                </span>
                <span className="text-[64646D] hidden sm:inline m-[0_13px]">
                    |
                </span>

                <div className="flex items-center rounded-md gap-[7px]">
                    {/* <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                        <FaCheck className="text-white text-sm" />
                    </div> */}
                    <TickDecagram fill="#007BFF" width={19} height={19} />
                    <span className="text-gray-700 font-medium text-sm">
                        Recommended by 96% travelers
                    </span>
                </div>
            </div>

            <div className="mt-4 sm:mt-6 border-t border-b border-[#D9D9D9] py-3 text-sm text-[#1A2A44]">
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div className="flex items-center gap-2 text-[#09A66D] font-[500]">
                        <TbCalendarTime />
                        <span>Free cancellation</span>
                    </div>
                    <div className="flex items-center text-[#1A2A44]">
                        <FaClock className="mr-[12px]" />
                        <p className="text-[16px] font-[700] mr-[6px]">
                            Duration:
                        </p>
                        <span className="text-[16px] font-[400]">
                            3 days 2 nights
                        </span>
                    </div>
                </div>

                <div className="mt-3 flex items-center">
                    <FaMapMarkerAlt className="mr-[12px]" />
                    <div className="text-[16px] font-[400] flex gap-[6px]">
                        <span className="text-[16px] font-[700]">
                            Places to visit:
                        </span>{" "}
                        <p> Hanoi, Da Nang, Hoi An</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                    "Family Travel",
                    "Cultural Travel",
                    "Religious / Pilgrimage Travel",
                ].map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md border"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                Imagine this: a scenic road trip from Hanoi to explore Halong
                Bay with stops along the way to discover viewpoints, villages,
                incredible nature, and cultural gems. Sounds like a dream? No,
                it’s possible on a Withlocals day trip with a local host leading
                the way!
            </div>
        </div>
    );
};

export default TourContent;
