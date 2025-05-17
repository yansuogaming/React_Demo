import { FaArrowRight } from "react-icons/fa6";
import imgOtherRegion1 from "@images/other-region.png";
import imgOtherRegion2 from "@images/other-region2.png";
import { NavLink } from "react-router";

const OtherRegion = ({ className = "" }) => {
    return (
        <section
            className={`container grid grid-cols-1 lg:grid-cols-2 gap-[8px] ${className}`}
        >
            {/* --- Item 1 --- */}
            <NavLink to="" className="relative group block">
                <div className="rounded-[60px_0_0_0] overflow-hidden relative">
                    <img
                        src={imgOtherRegion1}
                        alt="Sapa"
                        className="w-full h-auto object-cover"
                    />
                    {/* Gradient background: always show on mobile/tablet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 block lg:hidden z-0" />
                    {/* Gradient background: show on hover desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                </div>

                {/* Overlay content */}
                <div
                    className="
                        absolute
                        bottom-[20px] left-[20px] right-[20px] md:left-[40px] md:right-[40px]
                        top-auto
                        lg:top-[calc(100%-70px)] lg:bottom-auto
                        transition-all duration-500
                        lg:group-hover:top-[calc(100%-110px)]
                        z-10
                    "
                >
                    <h3 className="text-white text-[40px] font-bold mb-[10px]">
                        Sapa
                    </h3>
                    <div
                        className="
                            flex items-center gap-[8px] text-white text-[18px]
                            opacity-100
                            lg:opacity-0 lg:group-hover:opacity-100
                            transition-opacity duration-500
                        "
                    >
                        Explore Now
                        <FaArrowRight />
                    </div>
                </div>
            </NavLink>

            {/* --- Item 2 --- */}
            <NavLink to="" className="relative group block">
                <div className="rounded-[0_0_60px_0] overflow-hidden relative">
                    <img
                        src={imgOtherRegion2}
                        alt="Ha Long Bay"
                        className="w-full h-auto object-cover"
                    />
                    {/* Gradient background: always show on mobile/tablet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 block lg:hidden z-0" />
                    {/* Gradient background: show on hover desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                </div>

                {/* Overlay content */}
                <div
                    className="
                        absolute
                        bottom-[20px] left-[20px] right-[20px] md:left-[40px] md:right-[40px]
                        top-auto
                        lg:top-[calc(100%-70px)] lg:bottom-auto
                        transition-all duration-500
                        lg:group-hover:top-[calc(100%-110px)]
                        z-10
                    "
                >
                    <h3 className="text-white text-[40px] font-bold mb-[10px]">
                        Ha Long Bay
                    </h3>
                    <div
                        className="
                            flex items-center gap-[8px] text-white text-[18px]
                            opacity-100
                            lg:opacity-0 lg:group-hover:opacity-100
                            transition-opacity duration-500
                        "
                    >
                        Explore Now
                        <FaArrowRight />
                    </div>
                </div>
            </NavLink>
        </section>
    );
};

export default OtherRegion;
