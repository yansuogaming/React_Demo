import React from "react";
import { FaStar } from "react-icons/fa";
// import { Check } from "lucide-react";
import { cn } from "@lib/utils"; // optional if using shadcn's `cn` utility

const ratings = [
    { label: "Excellent", count: 565, color: "bg-[#FED141]" },
    { label: "Great", count: 238, color: "bg-[#FED141]" },
    { label: "Average", count: 76, color: "bg-[#FED141]" },
    { label: "Poor", count: 0, color: "bg-[#FED141]" },
    { label: "Bad", count: 0, color: "bg-[#FED141]" },
];

const reviews = new Array(4).fill({
    name: "Anonymous",
    country: "United States of Italy",
    date: "12 May 2025",
    rating: "Excellent",
    stars: 5,
    img: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",

    content:
        "We had a wonderful day with Ruby in Ha Long Bay. She organized everything perfectly according to our wishes. Along the way, we were able to visit a pearl farm before taking a boat trip through Ha Long Bay and visiting a cave.",
});

export default function ReviewSection() {
    const total = ratings.reduce((sum, r) => sum + r.count, 0);

    return (
        <section className="my-10">
            <h2 className="text-[28px] font-[700] text-[#1A2A44] mb-[24px]">
                What people say about this experience
            </h2>

            {/* Rating breakdown */}
            <div className="bg-[#F5F6FA] rounded-md p-6 md:p-[28px_77px_20px_0px] grid grid-cols-1 sm:grid-cols-12 gap-[32px] mb-[16px]">
                {/* Left column – 5/12 */}
                <div className="col-span-12 sm:col-span-5 md:border-r md:border-[#DCE4E6] flex flex-col items-center justify-center text-center px-2 sm:px-6">
                    <h3 className="text-[24px] font-[700] text-[#1A2A44]">
                        Excellent
                    </h3>
                    <div className="flex items-center justify-center text-[32px] font-[700] text-[#1A2A44] mt-2">
                        <FaStar className="text-[#FED141] mr-[9px] text-[24px]" />
                        4.5
                        <span className="text-[16px] text-[#64646D] ml-[3px] font-[400]">
                            /5
                        </span>
                    </div>
                    <p className="text-[16px] text-[#494951] mt-[9px]">
                        Based on {total} reviews from verified customers
                    </p>
                </div>

                {/* Right column – 7/12 */}
                <div className="col-span-12 sm:col-span-7 flex flex-col gap-[11px]">
                    {/* All ratings - no bar */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="accent-blue-600 mt-[1px]"
                        />
                        <span className="text-[#1A2A44] text-[16px] font-[400] whitespace-nowrap">
                            All ratings ({total})
                        </span>
                    </div>

                    {/* Ratings with bars */}
                    {ratings.map((r) => (
                        <div key={r.label} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-blue-600 mt-[1px]"
                            />
                            <span className="text-[#1A2A44] text-[16px] font-[400] whitespace-nowrap w-[130px]">
                                {r.label} ({r.count})
                            </span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-[6px] overflow-hidden">
                                <div
                                    className={cn(
                                        "h-full rounded-[6px]",
                                        r.color
                                    )}
                                    style={{
                                        width: `${
                                            total > 0
                                                ? (r.count / total) * 100
                                                : 0
                                        }%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="rounded-[8px] bg-[#F5F6FA] p-[20px] border border-[#E5EAF1]"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-3 mb-3">
                            {/* Avatar placeholder */}
                            <div className="w-[40px] h-[40px] bg-[#E3E9EF] rounded-full flex items-center justify-center text-gray-400 text-sm">
                                <img
                                    src={review.img}
                                    alt="avatar"
                                    className="w-full h-full object-cover rounded-[40px]"
                                />
                            </div>
                            <div>
                                <p className="text-[17px] font-[700] text-[#1A2A44]">
                                    {review.name}
                                </p>
                                <p className="text-[14px] text-[#494951]">
                                    🇮🇹 {review.country} – {review.date}
                                </p>
                            </div>
                        </div>

                        {/* Rating Line */}
                        <p className="text-[14px] font-[700] text-[#1A2A44] flex items-center gap-1">
                            {review.rating}
                            <FaStar className="text-[#FED141] text-[16px] -mt-[1px]" />
                            <span className="text-[14px] font-[400] text-[#1A2A44] ml-1">
                                Overall rated {review.stars}/5
                            </span>
                        </p>

                        {/* Content */}
                        <p className="text-[16px] text-[#1A2A44] font-[400] mt-2 leading-[160%]">
                            {review.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* See all reviews button */}
            <div className="flex justify-center mt-6">
                <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full text-sm hover:bg-blue-50 transition">
                    See all reviews →
                </button>
            </div>
        </section>
    );
}
