import { FaRegHeart, FaCheck, FaCreditCard, FaTags } from "react-icons/fa";
import { NavLink } from "react-router";

import { MdOutlineTouchApp } from "react-icons/md";

const TourSidebar = () => {
    return (
        <aside className="space-y-6">
            <div className="block md:flex items-start gap-[30px]">
                <div className="relative w-[92px] h-[79px] flex-shrink-0 mb-[20px] md:mb-[0]">
                    <img
                        src="https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-4-1.jpg"
                        alt="user1"
                        className="absolute left-0 top-0 w-[61px] h-[79px] rounded-[8px] border border-[#007BFF] object-cover z-10"
                    />
                    <img
                        src="https://cdn2.fptshop.com.vn/unsafe/800x0/avatar_anime_nam_cute_14_60037b48e5.jpg"
                        alt="user2"
                        className="absolute left-[46px] top-[-4px] w-[61px] h-[79px] rounded-[8px] border border-[#9DCDFF] object-cover z-0 rotate-[4.003deg] shrink-0"
                    />
                </div>

                <div>
                    <p className="font-[700] mb-[4px] text-[#1A2A44] text-[18px]">
                        Loved by over{" "}
                        <span className="text-[#007BFF] font-[700]">
                            100+ travelers
                        </span>
                    </p>
                    <div className="flex items-center gap-[6px] flex-wrap">
                        <button className="flex items-center px-[6px] py-[5px] rounded-[4px] text-sm text-[#1A2A44] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] font-[400] text-[16px] gap-[6px] hover:bg-gray-100">
                            <FaRegHeart className="text-gray-500" />
                            Save
                        </button>

                        <span className="text-[#1A2A44] text-[16px] font-[400]">
                            - Plan your trip later
                        </span>
                    </div>
                </div>
            </div>

            <div className="rounded-[8px] bg-white shadow-[0px_1px_2px_0px_rgba(3,54,63,0.40)] p-[20px]">
                <div className="flex justify-between items-start text-[14px] text-[#6B7280] mb-[5px]">
                    <span className="text-[#666] text-[16px] font-[400]">
                        From
                    </span>
                    <span className="text-[#666] text-[16px] font-[400]">
                        Trip Code: SEGF
                    </span>
                </div>

                <div className="text-[#1A2A44] text-[24px] font-[500] mb-[4px]">
                    US <span className="text-[36px]">$710</span>
                </div>

                <p className="text-[16px] text-[#494951] font-[500] mb-[17px]">
                    Valid on <span className="text-[#007BFF]">5 Jul 2025</span>
                </p>

                <button className="w-full bg-[#007BFF] hover:bg-[#0065d1] text-white py-[14px] rounded-[90px] font-[700] text-[20px] hover:cursor-pointer mb-[24px]">
                    Check Availability
                </button>

                <div className="flex items-start gap-[12px] text-[16px] text-[#494951] mb-[10px]">
                    <FaCreditCard className="text-[20px]" />
                    <p>
                        <span className="font-[700]">Payment plan</span> $149
                        now to reserve your trip
                    </p>
                </div>

                <div className="flex items-start gap-[12px] text-[16px] text-[#494951] mb-[7px]">
                    <FaTags className="text-[20px]" />
                    <p>Best price guarantee</p>
                </div>
            </div>

            {/* Benefits */}
            <div className="rounded-[8px] border border-[#439EFF] bg-[#F5F6FA] p-[21px_20px]">
                <h3 className="flex gap-[13px] items-center text-[#007BFF] font-[700] text-[20px] mb-[12px]">
                    <MdOutlineTouchApp className="text-[32px]" /> The perfect
                    choice for you:
                </h3>
                <ul className="text-sm text-[#1A2A44]">
                    <li className="flex items-start gap-[10px]">
                        <FaCheck className="text-[#007BFF] text-[16px]" />
                        <div className="mb-[12px]">
                            <p className="text-[16px] font-[500] text-[#007BFF]">
                                Absolute safety
                            </p>
                            <span className="text-[14px] font-[400] text-[#1A2A44]">
                                Planned and supervised by a team of travel
                                experts
                            </span>
                        </div>
                    </li>

                    <li className="flex items-start gap-[10px]">
                        <FaCheck className="text-[#007BFF] text-[16px]" />
                        <div className="mb-[12px]">
                            <p className="text-[16px] font-[500] text-[#007BFF]">
                                Verified quality
                            </p>
                            <span className="text-[14px] font-[400] text-[#1A2A44]">
                                Hotels, transportation, and restaurants are
                                carefully selected
                            </span>
                        </div>
                    </li>

                    <li className="flex items-start gap-[10px]">
                        <FaCheck className="text-[#007BFF] text-[16px]" />
                        <div className="mb-[12px]">
                            <p className="text-[16px] font-[500] text-[#007BFF]">
                                24/7 support
                            </p>
                            <span className="text-[14px] font-[400] text-[#1A2A44]">
                                Always ready to assist you throughout the
                                journey
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default TourSidebar;
