import React from "react";

const reasons = [
    "Pay your experience with longest cable car in Asia",
    "Golden Bridge on Huge Hand of Budda",
    "Legend view from mountain to Hai Van Pass - Da Nang city",
    "90 activities in Fantasy Park",
    "Take in breathtaking sceneries & panoramas",
    "Can be 100% personalized to your wishes",
];

const BookTour = () => {
    return (
        <div className="mt-[60px] mb-[60px]">
            <h2 className="text-[20px] md:text-[28px] font-[700] text-[#1A2A44] mb-[16px]">
                6 reasons to book this tour
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-[31px] text-[#1A2A44]">
                {reasons.map((desc, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-[8px] text-[16px]"
                    >
                        <span className="text-[#1A2A44] leading-[24px]">-</span>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookTour;
