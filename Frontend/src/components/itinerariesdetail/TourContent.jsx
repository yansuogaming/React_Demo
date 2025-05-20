import React from "react";

import { FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const TourContent = () => {
    return (
        <div className="mt-6">
            <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-2">
                Hoi An/ Da Nang - Ba Na Hills - Golden Bridge Deluxe
            </h1>
            <div className="flex flex-wrap items-center gap-[6px] text-sm">
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-600">4.5 (879)</span>
                <span className="text-gray-400 hidden sm:inline m-[0_13px]">
                    |
                </span>
                <span className="text-orange-500">
                    Recommended by 96% travelers
                </span>
            </div>

            <div className="mt-4 sm:mt-6 border-t border-b border-[#D9D9D9] py-3 text-sm text-[#1A2A44]">
                {/* Row 1: Free cancellation + Duration */}
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div className="flex items-center gap-2 text-green-600">
                        <FaCheckCircle />
                        <span>Free cancellation</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A2A44]">
                        <FaClock />
                        <strong>Duration:</strong>
                        <span>3 days 2 nights</span>
                    </div>
                </div>

                {/* Row 2: Places to visit */}
                <div className="mt-3 flex items-start gap-2">
                    <FaMapMarkerAlt className="mt-1" />
                    <div>
                        <strong>Places to visit:</strong> Hanoi, Da Nang, Hoi An
                    </div>
                </div>
            </div>

            {/* Tags */}
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

            {/* Description */}
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
