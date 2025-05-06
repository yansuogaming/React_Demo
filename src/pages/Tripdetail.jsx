import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style
import "react-date-range/dist/theme/default.css"; // theme
import { NavLink } from "react-router";

import { useTranslation } from "react-i18next";

const TripDetail = () => {
    const { t } = useTranslation();
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const [showCalendar, setShowCalendar] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: today,
            endDate: tomorrow,
            key: "selection",
        },
    ]);
    return (
        <main>
            <section className="tripDetail">
                <div className="container mx-auto mt-[16px]">
                    <div className="breadcrumb">
                        <nav className="text-sm text-gray-500 mb-[36px]">
                            <ol className="list-reset flex gap-[10px] text-[14px] items-center d-flex">
                                <li>{t("home")}</li>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className=""
                                />

                                <li>{t("plan_your_trip")}</li>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className=""
                                />
                                <li>{t("trip_planner_with_ai")}</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="txt_desc_trip_details mb-[40px]">
                        <h2 className="text-[60px] text-center mb-[10px] text-[#1A2A44]">
                            {t("your_trip_details")}
                        </h2>
                        <div className="bg-gradient-to-r from-blue-100 to-pink-100 text[#007BFF] text-center py-[22px] px-[30px] max-w-xl mx-auto flex flex-col items-start rounded-lg">
                            <p className="text-[#007BFF] not-italic font-normal text-[18px]">
                                ✨ {t("ai_build_tailored")}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto space-y-4">
                        <div className="flex items-center bg-white rounded-[80px] relative border border-[#D9D9D9] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] p-[16px_19px] gap-[11px]">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-[#007BFF]"
                            />
                            <div className="w-full">
                                <label className="font-bold block text[20px] text[#49495]">
                                    {t("where_to_go")}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Hanoi, Nha Trang"
                                    defaultValue=""
                                    className="w-full border-none focus:outline-none text-black-400 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex items-center bg-white rounded-[80px] relative border border-[#D9D9D9] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] p-[16px_19px] gap-[11px]">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                className="text-[#007BFF]"
                            />
                            <div className="w-full">
                                <label className="font-bold block text[20px] text[#49495]">
                                    {t("trip_long")}
                                </label>
                                <input
                                    readOnly
                                    value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
                                    onClick={() =>
                                        setShowCalendar(!showCalendar)
                                    }
                                    className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
                                />
                                {showCalendar && (
                                    <div className="absolute z-10 mt-2">
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) =>
                                                setDateRange([item.selection])
                                            }
                                            moveRangeOnFirstSelection={false}
                                            ranges={dateRange}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="max-w-xl mx-auto mt-10">
                            <p className="text-black-700 mb-[20px] font-medium leading-[150%]">
                                {t("travel_interested")}
                            </p>
                            <div className="flex flex-wrap gap-[12px]">
                                {[
                                    ["🔥", "Popular attractions", "/popular"],
                                    ["👨‍👩‍👧‍👦", "Family activities", "/family"],
                                    ["🛕", "History and culture", "/history"],
                                    ["🌿", "Nature, outdoors", "/nature"],
                                    ["🏕️", "Sports, adventure", "/adventure"],
                                    ["🛍️", "Shopping", "/shopping"],
                                    [
                                        "🎉",
                                        "Entertainment, nightlife",
                                        "/nightlife",
                                    ],
                                    ["🧘", "Relaxation", "/relax"],
                                    ["🍜", "Cuisine", "/cuisine"],
                                ].map(([icon, label, path]) => (
                                    <NavLink
                                        to={path}
                                        key={label}
                                        className="flex items-center bg-white p-[6px_15px] rounded-[80px] border border-[#D9D9D9] text-sm text-black text-[16px] gap-[8px] hover:shadow transition"
                                    >
                                        <span>{icon}</span>
                                        <span>{label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
                                ✨ Create itinerary now!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TripDetail;
