import React from "react";
import { Star, ChevronRight, Edit3, ChevronLeft } from "lucide-react";

const Rating = () => {
    return (
        <div className="flex items-center space-x-2 mb-[20px] ml-[30px] mr-[10px] sm:ml-[15px] sm:mr-[5px]">
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.844 1.417 8.277L12 18.75l-7.416 3.54 1.417-8.277-6.001-5.844 8.332-1.151z" />
                    </svg>
                ))}
            </div>
        </div>
    );
};

const SelectTab = () => {
    return (
        <div className="flex flex-wrap gap-2 ml-[20px] mb-[10px] sm:ml-[10px]">
            <div className="w-auto min-w-[79px] border border-[#2F8DFA] rounded-2xl p-[10px] px-[17px] bg-blue-100">
                <text className="text-[14px] sm:text-[16px] text-[#2F8DFA]">{'All (8)'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white">
                <text className="text-[14px] sm:text-[16px]">{'5 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white">
                <text className="text-[14px] sm:text-[16px]">{'4 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white">
                <text className="text-[14px] sm:text-[16px]">{'3 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white">
                <text className="text-[14px] sm:text-[16px]">{'2 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white">
                <text className="text-[14px] sm:text-[16px]">{'1 star'}</text>
            </div>
        </div>
    )
}

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: "Duong Hoang Long",
            initials: "HL",
            date: "23 September 2024",
            rating: 5,
            bgColor: "bg-blue-500",
            content: "A visit to the old quarter is a must. However, I was here last about 20 years ago and it's changed for the worse. I remember having a cup of tea and listening to the blacksmiths working. Now it's all cars and motorbikes and horns. Guess it's called progress."
        },
        {
            id: 2,
            name: "Marius",
            initials: "M",
            date: "23 September 2024",
            rating: 5,
            bgColor: "bg-red-500",
            content: "The vibrant streets came alive with life, from bustling cafes to friendly locals offering delicious street food. We were captivated by the area's rich history and charm, evident in its ancient temples, traditional shops, and the energy of daily life unfolding around us."
        },
        {
            id: 3,
            name: "Tran Duong Anh",
            initials: "DA",
            date: "19 September 2024",
            rating: 5,
            bgColor: "bg-green-500",
            content: "The busy part of Hanoi with lots of great local restaurants and hidden gems. Hanoi in September is much cooler so it's easier to get around without worrying about the heat."
        },
        {
            id: 4,
            name: "Michelle Drexler",
            initials: "MD",
            date: "18 September 2024",
            rating: 5,
            bgColor: "bg-blue-500",
            content: "We dove head-first into the chaotic charm of Old Quarter Hanoi and emerged with huge smiles. This historic neighborhood is a treasure trove of hidden gems, from quirky shops to mouth-watering street food. We geeked out on the rich history and traditional architecture, and even got lost in the narrow alleys (in the best way possible)."
        },
        {
            id: 5,
            name: "Kelly T",
            initials: "KT",
            date: "12 September 2024",
            rating: 5,
            bgColor: "bg-purple-500",
            content: "Old quarter is must to stay in we stayed on Hang Bong right in the middle of it all! So much fun so busy! You would not stay anywhere else"
        }
    ];

    const StarRating = ({ rating, size = "w-4 h-4" }) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`${size} ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="mt-[60px] px-4 sm:px-6 lg:px-8">
            <div className="text-[24px] sm:text-[28px] text-[#10154C] font-bold font-[SVN_Gotham]">Reviews</div>
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-col mb-4 md:mb-0">
                    <div className="flex-row">
                        <div className="text-[32px] sm:text-[38px] font-bold text-[#10154C]">
                            4.9
                            <text className="text-[16px] sm:text-[18px] text-[#454545]">/5</text>
                        </div>
                    </div>
                    <div className="text-[14px] sm:text-[16px] text-[#454545]">
                        8 reviews
                    </div>
                </div>
                <Rating />
                <div className="w-full md:w-auto">
                    <SelectTab />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-4 gap-6">
                {/* Total review */}
                <div className="w-full lg:w-1/4 h-auto lg:h-[490px] mt-6 rounded-xl">
                    {/* Rating Distribution */}
                    <div className="mb-6">
                        <div className="space-y-2">
                            <span className="text-[14px] sm:text-[16px] text-[#000000] font-bold text-sm">Excellent</span>
                            <div className="flex items-center justify-between w-full max-w-[300px] mt-2">
                                <div className="flex-1">
                                    <div className="w-full max-w-[264px] bg-gray-200 rounded-full h-3">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <span className="text-[12px] sm:text-[14px] text-sm text-black w-4 ml-2">8</span>
                            </div>
                            <span className="text-[14px] sm:text-[16px] text-[#000000] font-bold text-sm">Very good</span>
                            <div className="flex items-center justify-between w-full max-w-[300px] mt-2">
                                <div className="flex-1">
                                    <div className="w-full max-w-[264px] bg-gray-200 rounded-full h-3">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '12.5%' }}></div>
                                    </div>
                                </div>
                                <span className="text-[12px] sm:text-[14px] text-sm text-black w-4 ml-2">1</span>
                            </div>
                            <span className="text-[14px] sm:text-[16px] text-[#000000] font-bold text-sm">Average</span>
                            <div className="flex items-center justify-between w-full max-w-[300px] mt-2">
                                <div className="flex-1">
                                    <div className="w-full max-w-[264px] bg-gray-200 rounded-full h-3">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '12.5%' }}></div>
                                    </div>
                                </div>
                                <span className="text-[12px] sm:text-[14px] text-sm text-black w-4 ml-2">0</span>
                            </div>
                            <span className="text-[14px] sm:text-[16px] text-[#000000] font-bold text-sm">Poor</span>
                            <div className="flex items-center justify-between w-full max-w-[300px] mt-2">
                                <div className="flex-1">
                                    <div className="w-full max-w-[264px] bg-gray-200 rounded-full h-3">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '12.5%' }}></div>
                                    </div>
                                </div>
                                <span className="text-[12px] sm:text-[14px] text-sm text-black w-4 ml-2">0</span>
                            </div>
                            <span className="text-[14px] sm:text-[16px] text-[#000000] font-bold text-sm">Terrible</span>
                            <div className="flex items-center justify-between w-full max-w-[300px] mt-2">
                                <div className="flex-1">
                                    <div className="w-full max-w-[264px] bg-gray-200 rounded-full h-3">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '12.5%' }}></div>
                                    </div>
                                </div>
                                <span className="text-[12px] sm:text-[14px] text-sm text-black w-4 ml-2">0</span>
                            </div>
                        </div>
                    </div>

                    {/* Write Review Button */}
                    <button className="w-full max-w-[293px] h-[48px] flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 transition-colors">
                        <Edit3 className="w-4 h-4" />
                        <span>Write a review</span>
                    </button>
                </div>

                {/* Reviews List */}
                <div className="w-full lg:w-2/3 lg:ml-14">
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                <div className="flex gap-4">
                                    <div className={`w-10 h-10 ${review.bgColor} rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0`}>
                                        {review.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">{review.name}</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-500 mb-2">{review.date}</p>
                                        <div className="flex items-center gap-2 mb-3">
                                            <StarRating rating={review.rating} />
                                            <span className="text-xs sm:text-sm text-gray-600">Excellent</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded flex items-center justify-center">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-sm font-medium">
                            1
                        </button>
                        <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded flex items-center justify-center text-sm">
                            2
                        </button>
                        <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded flex items-center justify-center">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;