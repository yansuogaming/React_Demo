import { Outlet } from "react-router";
import Footer from "@components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import imgLogo2 from "@images/logo2.svg";
import { Link } from "react-router-dom";

const TripDetailLayout = () => {
    return (
        <>
            <header>
                <div className="sticky top-0 bg-white shadow-[] border-b">
                    <div className="flex justify-between items-center p-[0px_38px]">
                        {/* LEFT SIDE */}
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="logo_header_tripdetal">
                                <img
                                    src={imgLogo2}
                                    alt="Vietnam logo"
                                    className="w-full h-auto border-r border-[#D9D9D9] pr-[39px]"
                                />
                            </div>

                            {/* Text content */}
                            <div className="p-[24px_39px]">
                                {/* Breadcrumb */}
                                <nav className="text-[#494951] font-normal text-[14px] flex gap-[10px] items-center mb-[8px]">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className=""
                                    />
                                    <Link
                                        to="/plan"
                                        className="hover:underline"
                                    >
                                        Plan your trip
                                    </Link>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className=""
                                        style={{ color: "#494951" }}
                                    />
                                    <span>Trip Planner with AI</span>
                                </nav>

                                {/* Title */}
                                <h1 className="text-[28px] text-[#1A2A44] font-[500] leading-[150%] mb-[4px]">
                                    Itinerary
                                </h1>

                                {/* Location and duration */}
                                <div className="text-gray-700 flex items-center gap-6">
                                    <span className="flex items-center gap-[8px] text-[#1A2A44] text-[16px]">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        Hanoi, Nha Trang
                                    </span>
                                    <span className="flex items-center gap-[8px] text-[#1A2A44] text-[16px]">
                                        <FontAwesomeIcon
                                            icon={faCalendar}
                                            className=""
                                            style={{ color: "#494951" }}
                                        />
                                        4 days 3 nights
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE (giữ nguyên nếu bạn đã có) */}
                        <div className="flex items-center gap-2">
                            <button className="rounded-full border p-2">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 12v.01M4 6v.01M4 18v.01M8 6h12M8 12h12M8 18h12"
                                    />
                                </svg>
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                💾 Save itinerary
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    );
};

export default TripDetailLayout;
