import iconFilter from "@images/icon-filter.svg";
import { Checkbox } from "@ui/checkbox";
// import toutItemImage from "@images/tourItem.png";
// import providerImage from "@images/providerImage.png";
import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import ExploreTopTravelService from "@images/ExploreTopTravelService.png";
import { useEffect, useState } from "react";
import Pagination from "./pagination/pagination";
import advertising from "@images/advertising.png";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { IoChevronDown } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { cn } from "@lib/utils";

const FilterTours = ({ className = "", data = [] }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const listTour = data[0];
    const currentPage = data[1];
    const totalPage = data[2];
    const listDeparture = data[3];
    const listTravelstyle = data[4];
    // const { t } = useTranslation();
    // console.log(listDeparture);

    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isFilterOpen]);

    // const navigate = useNavigate();
    // const changeKeyword = (keyword) => {
    //     setKeysearch(keyword);
    //     debounce(() => {
    //         navigate(`/events?page=1&keyword=${keyword}`);
    //     }, 500)();
    // };
    return (
        <section
            className={`container ${className} flex flex-col gap-[30px] items-center lg:items-end`}
        >
            <div className="flex flex-col lg:flex-row gap-[30px] relative w-full">
                {/* Mobile filter button */}

                {/* Filter sidebar */}
                <div
                    className={`
                    fixed xl:relative top-0 left-0 h-full w-[80%] max-w-[300px] xl:w-auto
                    bg-white xl:bg-transparent ${
                        isFilterOpen ? "z-50" : "z-20"
                    } transform transition-transform duration-300 ease-in-out
                    ${
                        isFilterOpen
                            ? "translate-x-0"
                            : "-translate-x-full xl:translate-x-0"
                    }
                    p-4 xl:p-0 overflow-y-auto
                    `}
                >
                    <Filter
                        //  categories={categories}
                        //     selectedCategory={typeSearch}
                        //     keyword={keysearch}
                        //     setSelectedCategory={() => {}}
                        //     changeKeyword={changeKeyword}
                        onClose={() => setIsFilterOpen(false)}
                        data={[listDeparture, listTravelstyle]}
                    />
                </div>

                {/* Overlay */}
                {isFilterOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-80 z-10 xl:hidden"
                        onClick={() => setIsFilterOpen(false)}
                    />
                )}

                <ListTourResult
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    listTour={listTour}
                />
            </div>
            {/* <Pagination /> */}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-[12px] mt-8">
                {/* Prev */}
                <Link
                    disabled={currentPage == 1}
                    to={`/events?page=1&keyword=`}
                    className={cn(
                        "w-8 h-8 flex items-center",
                        "justify-center rounded transition",
                        currentPage == 1
                            ? "text-gray-300 cursor-default"
                            : "text-[#0E284E] hover:text-black"
                    )}
                >
                    <FaChevronLeft className="text-[14px]" />
                </Link>

                {/* Page numbers */}
                {Array.from({ length: totalPage }, (_, i) => {
                    const page = i + 1;
                    const isActive = page == currentPage;
                    return (
                        <Link
                            key={page}
                            to={`/events?page=${page}&keyword=`}
                            className={cn(
                                "w-[50px] h-[50px] rounded-[4px]",
                                "text-[16px] font-[500] transition",
                                "flex-col items-center justify-center flex",
                                isActive
                                    ? "bg-[#007BFF] text-white"
                                    : "bg-[#EEF0F5] text-[#1A2A44] hover:bg-gray-200"
                            )}
                        >
                            {page}
                        </Link>
                    );
                })}

                {/* Next */}
                <Link
                    disabled={currentPage == totalPage}
                    to={`/events?page=${currentPage + 1}&keyword=`}
                    className={cn(
                        "w-[12px] h-[24px] flex items-center",
                        "justify-center rounded transition",
                        currentPage == totalPage
                            ? "text-[#D9D9D9] cursor-default"
                            : "text-[#1A2A44] hover:text-[#1A2A44]"
                    )}
                >
                    <FaChevronRight className="text-[14px]" />
                </Link>
            </div>
            {/* Pagination */}
        </section>
    );
};

export default FilterTours;

const Filter = ({ onClose, data = [] }) => {
    const listDeparture = data[0] || [];
    const listTravelstyle = data[1] || [];
    const { t } = useTranslation();

    const MAX_VISIBLE = 4;

    const [showAllDepartures, setShowAllDepartures] = useState(false);
    const [showAllTravelstyles, setShowAllTravelstyles] = useState(false);

    const visibleDepartureItems = showAllDepartures
        ? listDeparture
        : listDeparture.slice(0, MAX_VISIBLE);
    const visibleTravelstyleItems = showAllTravelstyles
        ? listTravelstyle
        : listTravelstyle.slice(0, MAX_VISIBLE);

    const hasMoreDepartures = listDeparture.length > MAX_VISIBLE;
    const hasMoreTravelstyles = listTravelstyle.length > MAX_VISIBLE;

    return (
        <div className="w-full lg:w-auto">
            {/* Filter Header */}
            <div className="w-full lg:min-w-[297px] mb-[24px] flex items-center justify-between font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[10px_15px]">
                <div className="flex gap-[12px] items-center">
                    <img src={iconFilter} alt="Applied filters" />
                    <h3>{t("Applied filters")}</h3>
                </div>
                <button
                    onClick={onClose}
                    className="xl:hidden lg:pr-5 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Duration */}
            <div>
                <p className="text-[18px] font-bold mb-[16px]">
                    {t("Duration")}
                </p>
                <ul className="flex flex-col gap-[15px]">
                    {[
                        { label: t("Full day"), value: 1 },
                        { label: t("1 to 3 days"), value: 2 },
                        { label: t("4 to 7 days"), value: 3 },
                        { label: t("> 7 days"), value: 4 },
                    ].map(({ label, value }) => (
                        <li key={value}>
                            <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                                <Checkbox value={value} />
                                {label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="my-[24px]" />

            {/* Departure Point */}
            <div>
                <p className="text-[18px] font-bold mb-[16px]">
                    {t("Departure point")}
                </p>
                <ul className="flex flex-col gap-[15px]">
                    {visibleDepartureItems.map((item) => (
                        <li key={item.departure_point_id}>
                            <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44] font-visitqatar font-medium leading-[24px]">
                                <Checkbox value={item.departure_point_id} />
                                {item.title}
                            </label>
                        </li>
                    ))}
                    {hasMoreDepartures && (
                        <li
                            className="text-[#1A2A44] font-visitqatar text-[16px] font-medium leading-[24px] flex items-center gap-[8px] cursor-pointer select-none"
                            onClick={() =>
                                setShowAllDepartures(!showAllDepartures)
                            }
                        >
                            {showAllDepartures
                                ? t("Show less")
                                : t("Show more")}
                            <IoChevronDown
                                className={`transition-transform duration-300 ${
                                    showAllDepartures ? "rotate-180" : ""
                                }`}
                            />
                        </li>
                    )}
                </ul>
            </div>

            <hr className="my-[24px]" />

            {/* Travel Styles */}
            <div>
                <p className="text-[18px] font-bold mb-[16px]">
                    {t("Travel styles")}
                </p>
                <ul className="flex flex-col gap-[15px]">
                    {visibleTravelstyleItems.map((item) => (
                        <li key={item.tourcat_id}>
                            <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44] font-visitqatar font-medium leading-[24px]">
                                <Checkbox value={item.tourcat_id} />
                                {item.title}
                            </label>
                        </li>
                    ))}
                    {hasMoreTravelstyles && (
                        <li
                            className="text-[#1A2A44] font-visitqatar text-[16px] font-medium leading-[24px] flex items-center gap-[8px] cursor-pointer select-none"
                            onClick={() =>
                                setShowAllTravelstyles(!showAllTravelstyles)
                            }
                        >
                            {showAllTravelstyles
                                ? t("Show less")
                                : t("Show more")}
                            <IoChevronDown
                                className={`transition-transform duration-300 ${
                                    showAllTravelstyles ? "rotate-180" : ""
                                }`}
                            />
                        </li>
                    )}
                </ul>
            </div>

            <hr className="my-[24px]" />

            {/* Travel Agency Search */}
            <div>
                <p className="text-[18px] font-bold mb-[16px]">
                    {t("Travel agency")}
                </p>
                <input
                    type="text"
                    className="w-full rounded-[8px] border border-solid border-[#C8CBD0] p-[10px_15px] text-[16px] text-[#1A2A44]"
                    placeholder={t("Search")}
                />
            </div>

            {/* Advertising Image */}
            <img
                src={advertising}
                alt="Advertising"
                className="w-full mt-[32px] rounded-[8px]"
            />
        </div>
    );
};

const ListTourResult = ({ listTour, setIsFilterOpen, isFilterOpen }) => {
    const { t } = useTranslation();
    return (
        <div className="flex-1">
            <div className="flex items-center mb-[24px]  py-[10px] gap-4">
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="xl:hidden flex gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[10px_15px] "
                >
                    <img src={iconFilter} alt="Applied filters" />
                </button>
                <div className="flex gap-[12px] font-bold  ">
                    <p className="font-medium text-lg leading-[21px] tracking-normal font-[Visit_Qatar] text-[#1A2A44]">
                        {listTour?.length} {t("results")}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-[30px]">
                {(listTour ?? []).map((item, index) => (
                    <TourItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const icon = {
    detail: <Navigation className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
    location: <MapPin className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
    time: <Clock className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
};

const TourItem = ({ item, index }) => {
    const { t } = useTranslation();
    const TourDetailItem = ({ icon, label, content, extraButton }) => {
        return (
            <div className="flex items-start gap-2">
                {icon}
                <div>
                    <span className="text-[14px] font-bold text-[#1A2A44]">
                        {label}:
                    </span>
                    <span> {content}</span>
                    {extraButton && (
                        <button className="text-[14px] font-normal text-blue-500">
                            {extraButton}
                        </button>
                    )}
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="border border-solid rounded-[8px] rounded-tl-[60px] flex flex-col md:flex-row relative p-[16px] pb-[21px] group hover:cursor-pointer">
                <div className="w-full md:w-[292px] h-[194px] object-cover  relative overflow-hidden rounded-tl-[60px]">
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-tl-[60px] group-hover:scale-[1.1] transition-all duration-500"
                    />

                    <img
                        src={item.profile_image}
                        alt={item.profile_name}
                        className="w-[85px] h-[48px] absolute left-[12px] bottom-[12px] object-cover rounded-br-[4px] px-[12px] py-[10px] bg-white"
                    />
                </div>

                {/* Right side - Package details */}
                <div className="mt-4 md:mt-0 md:ml-[19px] flex-1 flex flex-col justify-between">
                    <div className="">
                        {/* Title */}
                        <h2 className="text-[18px] md:text-[20px] font-bold text-[#1D2D53] group-hover:text-blue-500">
                            {item.title}
                        </h2>
                        {/* Rating */}
                        <div className="flex items-center mt-[8px] mb-[16px]">
                            <div className="flex ">
                                {[...Array(Number(item.rate_avg))].map(
                                    (_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    )
                                )}
                            </div>
                            <span className="ml-2 text-[14px] font-normal mt-[2px]">
                                {item.rate_avg} ({item.total_reviews})
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {/* Place to visit */}
                            <TourDetailItem
                                icon={icon.detail}
                                label={"Place to visit"}
                                content={
                                    item.arr_tour_destination
                                        ?.map((dest) => dest.city_name)
                                        .join(", ") || ""
                                }
                                extraButton={""}
                            />
                            {/* Start */}
                            <TourDetailItem
                                icon={icon.location}
                                label={"Start"}
                                content={item.city_name}
                                extraButton={""}
                            />
                            {/* Duration */}
                            <TourDetailItem
                                icon={icon.time}
                                label={"Duration"}
                                content={item.duration}
                                extraButton={""}
                            />
                        </div>
                    </div>

                    {/* Price and button */}
                    <div className="flex flex-col items-center lg:items-end justify-between mt-6 md:items-start lg:absolute lg:right-5 lg:bottom-5">
                        <div className="text-center md:text-left lg:text-right mb-2">
                            <div className="text-[14px] text-[#494951] font-normal">
                                {t("from")}
                            </div>
                            <div className="text-[20px] text-[#C81E3A] font-bold">
                                US ${item.retail_price}
                            </div>
                            <div className="text-[14px] text-[#494951] font-normal">
                                {t("includes taxes & fees")}
                            </div>
                        </div>
                        <Link
                            to={"/"}
                            className="w-full lg:w-auto bg-[#007BFF] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg"
                        >
                            {t("Detail tour")}
                        </Link>
                    </div>
                </div>
            </div>
            {index === 4 && (
                <img className="hidden md:flex" src={ExploreTopTravelService} />
            )}
        </>
    );
};
