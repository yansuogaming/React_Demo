import React from "react";
import { MapPin, Globe, Phone, Award } from "lucide-react";
import maps from '@images/maps.svg';
import direction from '@images/direction.svg';
import time_att from '@images/time_att.svg';
import website from '@images/website.svg';
import arrowDown from '@images/arrowDown.svg';
import phoneGray from '@images/phone_gray.svg';
import checkmark from '@images/checkmark.svg';

const Overview = () => {
    return (
        <div className="flex flex-col gap-4 mt-6 sm:mt-10 md:flex-row md:mt-[60px]">
            {/* Left Column: Tabs and Content */}
            <div className="w-full md:w-2/3 md:pr-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 border-b border-gray-200 overflow-x-auto">
                    <a href="#" className="text-blue-900 font-medium pb-2 border-b-2 border-blue-900 whitespace-nowrap">
                        Highlights
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 pb-2 whitespace-nowrap">
                        Overview
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 pb-2 whitespace-nowrap">
                        Inspiration
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 pb-2 whitespace-nowrap">
                        Nearby
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 pb-2 whitespace-nowrap">
                        Review
                    </a>
                </div>

                {/* Highlights Section */}
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                    <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-sm sm:text-[16px]"><img src={checkmark} className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> The site is certified by UNESCO</p>
                    <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-sm sm:text-[16px]"><img src={checkmark} className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Diverse ecosystem</p>
                    <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-sm sm:text-[16px]"><img src={checkmark} className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Species are in danger of extinction</p>
                    <p className="text-[#000000] flex items-center mb-2 font-bold py-0.5 font-[SVN-Gotham] text-sm sm:text-[16px]"><img src={checkmark} className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Marine and terrestrial biodiversity</p>
                    <p className="text-[#000000] flex items-center font-bold py-0.5 font-[SVN-Gotham] text-sm sm:text-[16px]"><img src={checkmark} className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Cultural and economic importance</p>
                </div>

                {/* Overview Section */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Overview</h2>
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        Cat Ba World Biosphere Reserve is located on Cat Ba Island, Cat Ba Town, Cat Hai District, Hai Phong City. On December 2, 2004, Cat Ba Biosphere Reserve was honored to be recognized by as a world biosphere reserve.
                    </p>
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        With a total area of over 26,000 hectares, Cat Ba Biosphere Reserve includes 2 core zones that are strictly preserved and have no human impact, 2 buffer zones that allow limited economic development but combined with conservation) and 2 transition zones for economic development.
                    </p>
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        Cat Ba Biosphere Reserve is mainly distributed on Cat Ba limestone island and about 400 small surrounding islands, where more than 70 archeological sites belonging to So Vi and Soi Nhun cultures dating back 4,000-25,000 years are preserved. Typical of these is Cai Beo relic site, where primitive people lived 4,000-7,000 years ago.
                    </p>
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        Cat Ba Biosphere Reserve is a major biodiversity center of Vietnam. According to initial surveys, there are 820 species of higher plants distributed in 438 genera, 123 families, including species that are currently only found in Cat Ba such as Kim Giao, Lat Khoi, Soi Mat, Lat Hoa, Re Huong, Tho Phuc Linh...
                    </p>
                    <p className="text-blue-600 hover:underline text-sm sm:text-base">
                        [..] View more
                    </p>
                </div>
            </div>

            {/* Right Column: Map and Details */}
            <div className="w-full md:w-1/3 md:pl-2 md:ml-4 h-auto sm:h-[450px] md:h-[490px] mt-4 sm:mt-6 shadow-md rounded-xl">
                <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <img
                        src={maps}
                        alt="Cat Ba Map"
                        className="w-full h-40 sm:h-48 object-cover rounded-lg"
                    />
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">Cat Ba town, Cat Hai, Hai Phong</p>
                    <button className="mt-2 border border-gray-200 flex flex-row items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-red-600">
                        <img src={direction} className="w-5 h-5 sm:w-[24px] sm:h-[24px]" alt="Direction icon" />
                        <span className="text-black text-sm sm:text-base">Direction</span>
                    </button>

                    <div className="border-b border-b-[#DFDFDF] my-3 sm:my-[15px]"></div>
                    <div className="mt-2 sm:mt-[10px]">
                        <p className="text-green-600 font-bold flex items-center mb-2 text-sm sm:text-base"><span className="mr-2"><img src={time_att} className="w-4 h-4 sm:w-[20px] sm:h-[20px]" /></span> Active • <text className="text-[#454545] ml-1"> Open 24 hours</text> <img src={arrowDown} className="w-3 h-3 sm:w-4 sm:h-4" /></p>
                        <div className="flex flex-row items-center gap-x-4 sm:gap-x-6">
                            <p className="text-blue-700 font-bold flex items-center text-sm sm:text-base">
                                <img src={website} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Website
                            </p>
                            <p className="text-gray-700 flex items-center text-sm sm:text-base">
                                <img src={phoneGray} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                02253888232
                            </p>
                        </div>
                        <div className="border-b border-b-[#DFDFDF] my-3 sm:my-[15px]"></div>
                        <p className="text-gray-700 flex items-center mb-2 text-sm sm:text-[16px]"><text className="font-bold mr-1">Certification:</text> World Cultural Heritage</p>
                        <p className="text-gray-700 flex items-center text-sm sm:text-[16px]"><text className="font-bold mr-1">Resource group:</text> Biosphere reserve</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;