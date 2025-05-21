import React from "react";
import { FaStar } from "react-icons/fa";
// import { Check } from "lucide-react";
import { cn } from "@lib/utils"; // optional if using shadcn's `cn` utility

const ratings = [
    { label: "Excellent", count: 565, color: "bg-yellow-400" },
    { label: "Great", count: 238, color: "bg-yellow-300" },
    { label: "Average", count: 76, color: "bg-yellow-200" },
    { label: "Poor", count: 0, color: "bg-gray-200" },
    { label: "Bad", count: 0, color: "bg-gray-200" },
];

const reviews = new Array(4).fill({
    name: "Anonymous",
    country: "United States of Italy",
    date: "12 May 2025",
    rating: "Excellent",
    stars: 5,
    content:
        "We had a wonderful day with Ruby in Ha Long Bay. She organized everything perfectly according to our wishes. Along the way, we were able to visit a pearl farm before taking a boat trip through Ha Long Bay and visiting a cave.",
});

export default function ReviewSection() {
    const total = ratings.reduce((sum, r) => sum + r.count, 0);

    return (
        <section className="my-10">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1A2A44] mb-6">
                What people say about this experience
            </h2>

            {/* Rating breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="text-lg font-semibold text-gray-800">
                        Excellent
                    </div>
                    <div className="flex items-center text-[#1A2A44] text-[20px] font-semibold">
                        <FaStar className="text-yellow-400 mr-2" />
                        4.5
                        <span className="text-sm text-gray-500 ml-1">/5</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                        Based on {total} reviews from verified customers
                    </p>
                </div>
                <div className="flex-1 space-y-2">
                    {ratings.map((r) => (
                        <div key={r.label} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                defaultChecked={r.label === "All ratings"}
                                className="accent-blue-600"
                            />
                            <span className="text-sm w-[90px]">{r.label}</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className={cn("h-full", r.color)}
                                    style={{
                                        width: `${
                                            (r.count / total) * 100 || 0
                                        }%`,
                                    }}
                                />
                            </div>
                            <span className="text-sm text-gray-500 min-w-[32px] text-right">
                                {r.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-4 bg-[#F5F6FA]"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 rounded-full bg-gray-300" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    {review.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {review.country} • {review.date}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-[#1A2A44]">
                            {review.rating}{" "}
                            <span className="text-gray-500 ml-1 text-xs font-normal">
                                Overall rated {review.stars}/5
                            </span>
                        </p>
                        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
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
