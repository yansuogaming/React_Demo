import React from "react";
import {
    FaPrint,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaEllipsisH,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

const ExperienceMainContent = ({
    showMoreSocials,
    setShowMoreSocials,
    keepExploringRef,
}) => {
    return (
        <div className="lg:col-span-9">
            {/* Print & Share */}
            <div className="flex flex-wrap gap-[34px] text-gray-600 text-[15px]">
                <div className="flex items-center gap-2">
                    <span>Print</span>
                    <button
                        onClick={() => window.print()}
                        className="w-[36px] h-[36px] flex items-center justify-center border border-gray-400 rounded-full cursor-pointer hover:bg-gray-100 hover:border-gray-600 transition"
                    >
                        <FaPrint className="text-[16px] text-gray-600 hover:text-black" />
                    </button>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
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
                </div>
            </div>

            {/* Extra Socials */}
            {showMoreSocials && (
                <div className="flex items-center gap-3 mt-3 ml-[75px]">
                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-blue-700 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-800 transition">
                        <FaLinkedinIn />
                    </button>
                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-red-500 text-red-500 rounded-full cursor-pointer hover:bg-red-100 hover:border-red-600 transition">
                        <FaPinterestP />
                    </button>
                </div>
            )}

            {/* Nội dung chính có thể tách tiếp nếu cần */}
            <div className="text-[#1A2A44] text-[18px] mt-[44px]">
                <div className="text-[#1A2A44] text-[18px]">
                    <p className="mt-[44px] text-[24px] font-[500] text-[#1A2A44]">
                        The best attractions in Nha Trang are set against a
                        stunning backdrop of white sandy beaches, verdant
                        mountains, and untouched islands.
                    </p>

                    <p className="m-[26px_0_24px_0] text-gray-700">
                        Great for history buffs, Nha Trang is home to remnants
                        of the Champa Kingdom, Buddhist temples, and
                        gothic-style Catholic churches while natural hot
                        springs, salt fields, and unique waterfalls offer a
                        myriad of sightseeing and recreational activities.
                    </p>

                    {/* Section 1 */}
                    <div id="po-nagar" className="scroll-mt-[180px]">
                        <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                            1. Po Nagar Cham Towers
                        </h2>
                        <img
                            src="https://media.istockphoto.com/id/471703331/photo/po-nagar-cham-towers-nha-trang-vietnam.jpg?s=612x612&w=0&k=20&c=FmDlQjftgpmM4xRM_ovJtFvSn3QZjpQ9ROl5vFExx0U="
                            alt="Po Nagar Cham Towers"
                            className="w-full object-cover mb-4"
                        />
                        <p className="text-gray-700">
                            Po Nagar Cham temple complex was built between 8th
                            and 11th centuries by the Cham people who once ruled
                            the central plain of Vietnam...
                        </p>
                        <p className="mt-2 text-gray-700">
                            Later, historians have come to identify Po Nagar
                            with the Hindu goddesses Bhagavati, wife of Shiva,
                            and Durga, the buffalo-demon slayer.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div id="museum" className="mt-10 scroll-mt-[180px]">
                        <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                            2. National Oceanographic Museum
                        </h2>
                        <img
                            src="https://static.vinwonders.com/2022/08/National-Oceanographic-Museum-1.jpg"
                            alt="Museum"
                            className="w-full object-cover mb-4"
                        />
                        <p className="text-gray-700">
                            The museum showcases more than 20,000 marine
                            specimens...
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div id="cathedral" className="mt-10 scroll-mt-[180px]">
                        <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                            3. Nha Trang Cathedral
                        </h2>
                        <img
                            src="https://static.vinwonders.com/2022/07/Nha-Trang-Cathedral-1.jpg"
                            alt="Cathedral"
                            className="w-full object-cover mb-4"
                        />
                        <p className="text-gray-700">
                            Built in French Gothic style, this cathedral is a
                            popular wedding photo location...
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div id="vinpearl" className="mt-10 scroll-mt-[180px]">
                        <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                            4. Vinpearl Amusement Park
                        </h2>
                        <img
                            src="https://movenpickresortcamranh.com/wp-content/uploads/2024/02/Vinpearl-Park-min-min.png"
                            alt="Vinpearl Park"
                            className="w-full object-cover mb-4"
                        />
                        <p className="text-gray-700">
                            Vinpearl is Vietnam’s Disneyland with roller
                            coasters, a water park, and an aquarium...
                        </p>
                    </div>

                    <div className="flex justify-between text-[16px] text-[#000] bg-[#F5F6FA] p-[13px_20px] mt-[40px]">
                        <p className="">By Van Duong An </p>
                        <p>Published on 3 Apr, 2025</p>
                    </div>

                    {/* Read more + Rating */}
                    <div
                        ref={keepExploringRef}
                        className="flex flex-wrap justify-between items-center gap-4 mt-[20px]"
                    >
                        {/* Left: Read more tags */}
                        <div>
                            <p className="font-[500] mb-2 text-[#000] text-[16px]">
                                Read more:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["NATURE", "ADVENTURE", "DESTINATIONS"].map(
                                    (tag) => (
                                        <button
                                            key={tag}
                                            className="border border-blue-500 text-blue-500 text-xs px-4 py-1 rounded-full hover:bg-blue-50 cursor-pointer"
                                        >
                                            {tag}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Right: Rating */}
                        <div className="text-right">
                            <p className="font-[500] mb-2 text-[#000] text-[16px]">
                                Rate this article
                            </p>
                            <div className="flex items-center gap-[4px] justify-end">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09L5.52 12.09 1 7.91l6.06-.88L10 2l2.94 5.03L19 7.91l-4.52 4.18 1.398 5.998z" />
                                    </svg>
                                ))}
                                <span className="text-xs text-gray-500 ml-2">
                                    | 2 Voted
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KeepExploring anchor */}
            <div ref={keepExploringRef} className="mt-10" />
        </div>
    );
};

export default ExperienceMainContent;
