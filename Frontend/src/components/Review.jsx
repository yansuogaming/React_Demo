import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Rating = () => {
    return (
        <div className="flex items-center space-x-2 mb-[20px] ml-[20px]">
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className="w-5 h-5 text-yellow-400 fill-current"
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
        <div className="flex flex-row  ml-[20px] mb-[10px]">
            <div className="border border-[#2F8DFA] rounded-2xl p-[8px] px-[10px] bg-blue-100">
                <text>{'All (8)'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white ml-[10px]">
                <text>{'5 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white ml-[10px]">
                <text>{'4 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white ml-[10px]">
                <text>{'3 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white ml-[10px]">
                <text>{'2 star'}</text>
            </div>
            <div className="border-2 border-[##DFDFDF] rounded-2xl p-[8px] bg-white ml-[10px]">
                <text>{'1 star'}</text>
            </div>
        </div>
    )
}

const Review = () => {

    return (
        <div className=" mt-[60px]">
            <div className="text-[28px] text-[#10154C] font-bold font-[SVN_Gotham]">Reviews</div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-col">
                    <div className="flex-row">
                        <div className="text-[38px] font-bold text-[#10154C] ">
                            4.9
                            <text className="text-[18px] text-[#454545]">/5</text>
                        </div>

                    </div>
                    <div className="text-[16px] text-[#454545]">
                        8 reviews
                    </div>
                </div>
                <Rating />
                <SelectTab />



            </div>
            <div className="w-full md:w-1/3 pl-2 ml-4 h-[490px] mt-6 rounded-xl">
            </div>
            <div className="w-full md:w-2/3 pr-4">
            </div>
        </div>
    );
};

export default Review;