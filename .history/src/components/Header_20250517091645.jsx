import imgLogo from "@images/logo.webp";
import imgLogo2 from "@images/logo2.webp";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { createContext, useContext, useEffect, useState } from "react";
import { ChevronRight, Ellipsis } from "lucide-react";
import { LuTextSearch } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import {
    RiCloseLargeLine,
    RiArrowRightSLine,
    RiArrowLeftSLine,
    RiQuestionLine,
} from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

import { TbWorld } from "react-icons/tb";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import ChangeLangButton from "./button/ChangeLangButton";
import SearchHeader from "./button/SearchHeader";
import MapIcon from "./icons/MapIcon";
import UserIcon from "./icons/UserIcon";
import { cn } from "@lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const HeaderContext = createContext();
const Header = ({ noBackgroundOnScroll = false }) => {
    const { t } = useTranslation();
    const [background, setBackground] = useState("none");
    const [logo, setLogo] = useState(null);
    const [color, setColor] = useState(null);
    const [colorIcon, setColorIcon] = useState(null);
    const [isShowNavServices, setShowNavServices] = useState(false);
    const [rotateEllipsis, setRotateEllipsis] = useState(0);
    const [boxShadow, setBoxShadow] = useState(
        noBackgroundOnScroll ? "none" : "1px 1px 20px #d1d1d1"
    );
    const [hoverPlanYourTrip, setHoverPlanYourTrip] = useState(false);
    const [hoverPlanYourTripContent, setHoverPlanYourTripContent] =
        useState(false);
    let position = "sticky";

    // Thay đổi style của header
    const chanegStyleHeader = (noBackground) => {
        if (noBackground) {
            setLogo(imgLogo);
            setColor("white");
            setColorIcon("white");
            setBackground("none");
            setBoxShadow("none");
            return;
        }

        setBackground("white");
        setLogo(imgLogo2);
        setColor("black");
        setColorIcon("#007BFF");
        setBoxShadow("1px 1px 20px #d1d1d1");
    };

    const showNavServices = () => {
        if (!isShowNavServices) {
            chanegStyleHeader(false);
            setRotateEllipsis(90);
            setShowNavServices(true);
        } else {
            setShowNavServices(false);
            setRotateEllipsis(0);
            if (noBackgroundOnScroll) {
                chanegStyleHeader(true);
            }
        }
    };

    useEffect(() => {
        if (noBackgroundOnScroll) {
            if (!isShowNavServices) {
                chanegStyleHeader(true);
            }
        } else {
            chanegStyleHeader(false);
        }
    }, [noBackgroundOnScroll, isShowNavServices]);

    const hanleHoverPlanYourTrip = (value) => {
        if (value) {
            setHoverPlanYourTrip(true);
        } else {
            setHoverPlanYourTrip(false);
        }
    };

    const contextValue = {
        hoverPlanYourTrip,
        setHoverPlanYourTrip,
        hoverPlanYourTripContent,
        setHoverPlanYourTripContent,
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLang, setIsVisibleLang] = useState(false);
    const [isVisibleSubMenu, setIsVisibleSubMenu] = useState(false);
    return (
        <HeaderContext.Provider value={contextValue}>
            <header>
                <div
                    style={{ background, position, color, boxShadow }}
                    className={cn(
                        "relative flex flex-col",
                        "py-[15px] px-[20px] w-full z-50 top-0",
                        "transition-all duration-500 lg:px-[40px] hidden lg:block"
                    )}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center w-full relative xl-md:w-fit h-full ">
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="mr-[50px]"
                            >
                                <NavLink to="/">
                                    <img
                                        src={logo}
                                        className="w-[80px]"
                                        width={123}
                                        height={80}
                                        alt=""
                                    />
                                </NavLink>
                            </motion.div>
                            {/* Nav bar */}
                            <ul
                                className={cn(
                                    "hidden h-fit font-bold absolute top-1/2 left-1/2 lg:flex",
                                    "-translate-1/2 w-max xl-md:static xl-md:translate-0 xl-md:w-fit"
                                )}
                            >
                                <motion.li
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                    className="p-[15px] h-fit"
                                >
                                    <NavLink to="/itineraries">
                                        {t("destinations")}
                                    </NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="p-[15px] h-fit"
                                >
                                    <NavLink to="/">{t("experiences")}</NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="p-[15px] h-fit"
                                >
                                    <NavLink to="/events">
                                        {t("events")}
                                    </NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                    className="p-[15px] h-fit "
                                    onMouseEnter={() =>
                                        hanleHoverPlanYourTrip(true)
                                    }
                                    onMouseLeave={() =>
                                        hanleHoverPlanYourTrip(false)
                                    }
                                >
                                    <NavLink to="/">
                                        {t("plan_your_trip")}
                                    </NavLink>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.7 }}
                                    className="p-[15px] h-fit"
                                >
                                    <NavLink to="/">
                                        {t("travel_offers")}
                                    </NavLink>
                                </motion.li>
                            </ul>
                        </div>
                        <ul className="items-center font-bold hidden xl-md:flex ">
                            <motion.li
                                className="p-[15px]"
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                <SearchHeader
                                    color={color}
                                    className="flex cursor-pointer"
                                />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.9 }}
                            >
                                <ChangeLangButton color={color} />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 1 }}
                            >
                                <MapIcon color={colorIcon} />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 1.1 }}
                            >
                                <UserIcon color={colorIcon} />
                            </motion.li>
                        </ul>
                        <button
                            className={cn(
                                "block xl-md:hidden -my-[15px] pl-[30px]",
                                "border-l-1 border-[#ffffff1a] cursor-pointer z-1"
                            )}
                            onClick={showNavServices}
                        >
                            <Ellipsis
                                className="transition-all duration-500"
                                style={{
                                    transform: `rotate(${rotateEllipsis}deg)`,
                                }}
                                size={35}
                            />
                        </button>
                        <AnimatePresence>
                            {isShowNavServices && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className={cn(
                                        "absolute flex top-full w-full justify-between",
                                        "left-0 px-[55px] bg-[#062f1f] h-[90px] items-center",
                                        "transition-all duration-500 xl-md:hidden"
                                    )}
                                >
                                    <SearchHeader
                                        className="flex cursor-pointer"
                                        color="white"
                                    />
                                    <div className="flex gap-[30px]">
                                        <ChangeLangButton color="white" />
                                        <MapIcon />
                                        <UserIcon />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <PlanYourTripContent
                        onMouseLeave={() => setHoverPlanYourTripContent(false)}
                        onMouseEnter={() => setHoverPlanYourTripContent(true)}
                        className={
                            hoverPlanYourTrip || hoverPlanYourTripContent
                                ? "flex"
                                : "hidden"
                        }
                    />
                </div>

                {/* Mobile header */}
                <div className="lg:hidden flex items-center justify-between px-[14px] py-[12px] relative z-1">
                    <div className="absolute w-full h-[100px] top-0 left-0 z-[-1] bg-gradient-to-b from-[rgba(4,18,58,0.40)] via-[rgba(4,18,58,0.25)] to-[rgba(4,18,58,0.00)]"></div>
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className=""
                    >
                        <NavLink to="/">
                            <img
                                src={logo}
                                className="w-[80px]"
                                width={74}
                                height={47}
                                alt=""
                            />
                        </NavLink>
                    </motion.div>
                    {/* Hamburger */}
                    <button
                        className="text-[30px] text-[#fff]"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <LuTextSearch />
                    </button>
                    {/* Mobile menu */}
                    <AnimatePresence initial={false}>
                        {isVisible && (
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="w-full h-screen fixed top-0 left-0 bg-[#003F73] text-[#fff] overflow-y-scroll"
                            >
                                <div className="bg-[#28B8F8] px-[16px] pt-[16px] pb-[10px] flex flex-col gap-[58px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[12px]">
                                            <FiSearch className="text-[24px]" />
                                            <span className="text-[20px]">
                                                Search
                                            </span>
                                        </div>
                                        <button
                                            className="text-[20px]"
                                            onClick={() =>
                                                setIsVisible(!isVisible)
                                            }
                                        >
                                            <RiCloseLargeLine />
                                        </button>
                                    </div>
                                    <NavLink
                                        to="/"
                                        className="text-[30px] font-bold"
                                    >
                                        Home
                                    </NavLink>
                                </div>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px] bg-[#03A9F4]"
                                        >
                                            Destinations <RiArrowRightSLine />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px] bg-[#0288D1]"
                                        >
                                            Experiences <RiArrowRightSLine />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px] bg-[#0277BD]"
                                        >
                                            Events <RiArrowRightSLine />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px] bg-[#01579B]"
                                        >
                                            Travel Offers <RiArrowRightSLine />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px] bg-[#003F73]"
                                            onClick={() =>
                                                setIsVisibleSubMenu(
                                                    !isVisibleSubMenu
                                                )
                                            }
                                        >
                                            Plan Your Trip <RiArrowRightSLine />
                                        </NavLink>
                                        {/* Submenu */}
                                        <AnimatePresence initial={false}>
                                            {isVisibleSubMenu && (
                                                <motion.div
                                                    initial={{
                                                        x: "100%",
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        x: 0,
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        x: "100%",
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    <div className="bg-[#003F73] fixed top-0 left-0 w-full h-screen">
                                                        <div className="flex items-center justify-between px-[16px] py-[16px] border-b border-gray-300/53">
                                                            <div
                                                                className="flex items-center gap-[12px]"
                                                                // onClick={() =>
                                                                //     setIsVisibleSubMenu(
                                                                //         !isVisibleSubMenu
                                                                //     )
                                                                // }
                                                            >
                                                                <RiArrowLeftSLine className="text-[24px]" />
                                                                <span className="text-[20px]">
                                                                    Main menu
                                                                </span>
                                                            </div>
                                                            <button
                                                                className="text-[20px]"
                                                                onClick={() =>
                                                                    setIsVisible(
                                                                        !isVisible
                                                                    )
                                                                }
                                                            >
                                                                <RiCloseLargeLine />
                                                            </button>
                                                        </div>
                                                        <div className="pt-[50px] pb-[64px]">
                                                            <h2 className="px-[16px] text-[36px] font-bold mb-[16px]">
                                                                Plan Your Trip
                                                            </h2>
                                                            <ul>
                                                                <li className="text-[18px] px-[16px] py-[11px] border-b border-[#d1dbe43b]">
                                                                    <NavLink to="/">
                                                                        Visa
                                                                        guide
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li className="text-[18px] px-[16px] py-[11px] border-b border-[#d1dbe43b]">
                                                                    <NavLink to="/">
                                                                        Essentials
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li className="text-[18px] px-[16px] py-[11px] border-b border-[#d1dbe43b]">
                                                                    <NavLink to="/">
                                                                        Flights
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li className="text-[18px] px-[16px] py-[11px] border-b border-[#d1dbe43b]">
                                                                    <NavLink to="/">
                                                                        Accommodation
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li className="text-[18px] px-[16px] py-[11px] border-b border-[#d1dbe43b]">
                                                                    <NavLink to="/">
                                                                        Getting
                                                                        to &
                                                                        around
                                                                        Vietnam
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                </ul>
                                <div className="flex flex-col justify-between pt-[50px] px-[16px] pb-[16px] gap-[82px]">
                                    <ul className="flex flex-col gap-[5px]">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="text-[16px] font-bold flex items-center gap-[10px]"
                                            >
                                                <RiQuestionLine /> Contact
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button
                                                className="text-[16px] font-bold flex items-center justify-between"
                                                onClick={() =>
                                                    setIsVisibleLang(
                                                        !isVisibleLang
                                                    )
                                                }
                                            >
                                                <div className="flex items-center gap-[10px]">
                                                    <TbWorld /> Language
                                                </div>
                                                <MdArrowDropDown
                                                    className={`text-[20px] transition-transform duration-300 ${
                                                        isVisibleLang
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {isVisibleLang && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: "easeInOut",
                                                        }}
                                                    >
                                                        <ul className="pl-[30px] mt-[10px]">
                                                            <li>
                                                                <NavLink
                                                                    to="/"
                                                                    className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                                >
                                                                    <span className="fi fi-vn"></span>
                                                                    Vietnam
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/"
                                                                    className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                                >
                                                                    <span className="fi fi-gb"></span>
                                                                    English
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/"
                                                                    className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                                >
                                                                    <span className="fi fi-cn"></span>
                                                                    Chinese
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    </ul>
                                    <div className="flex items-center gap-[8px] justify-between">
                                        <div className="flex-1 bg-[#ffffff1c] pt-[20px] pb-[14px] px-[28px] rounded-[8px]">
                                            <NavLink
                                                to="/"
                                                className="text-[16px] font-bold flex flex-col items-center gap-[5px]"
                                            >
                                                <MapIcon /> Map
                                            </NavLink>
                                        </div>
                                        <div className="flex-1 bg-[#ffffff1c] pt-[20px] pb-[14px] px-[28px] rounded-[8px]">
                                            <NavLink
                                                to="/"
                                                className="text-[16px] font-bold flex flex-col items-center gap-[5px]"
                                            >
                                                <UserIcon /> Login/Register
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </HeaderContext.Provider>
    );
};

export default Header;

const PlanYourTripContent = ({ className, onMouseLeave, onMouseEnter }) => {
    const { t } = useTranslation();
    const { setHoverPlanYourTripContent, setHoverPlanYourTrip } =
        useContext(HeaderContext);
    // Hàm xử lý khi click vào item info card
    const onClickItem = () => {
        setHoverPlanYourTripContent(false);
        setHoverPlanYourTrip(false);
    };

    // Component info card
    function InfoCard({ title, description, icon, to }) {
        return (
            <NavLink
                to={to}
                onClick={onClickItem}
                className="block transition-all duration-300 hover:translate-x-1"
            >
                <div className="border-b pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-800 mt-[2px]">
                            {title}
                        </h3>
                        {icon}
                    </div>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </NavLink>
        );
    }
    return (
        <div
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            className={`container absolute left-1/2 -translate-x-1/2 top-full w-full mt-[-30px] pt-[15px] z-50 ${className}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  bg-white py-8  border-t border-gray-100 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Visa Guide */}
                    <InfoCard
                        title={t("visa_guide")}
                        description={t("plan_ahead_for_travel")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/visa-guide"
                    />

                    {/* Essentials */}
                    <InfoCard
                        title={t("essentials")}
                        description={t("from_etiquette_to_currency")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/essentials"
                    />

                    {/* Flights */}
                    <InfoCard
                        title={t("flights")}
                        description={t("book_flight_tickets")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />

                    {/* Accommodation */}
                    <InfoCard
                        title={t("accommodation")}
                        description={t("incredible_range_of_stay_options")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />

                    {/* Getting around Vietnam */}
                    <InfoCard
                        title={t("getting_around_vietnam")}
                        description={t("navigating_vietnam_is_a_breeze")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/getting-to-and-around"
                    />

                    {/* Safety */}
                    <InfoCard
                        title={t("safety")}
                        description={t("guide_to_enjoying_safely")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/safety"
                    />

                    {/* Weather */}
                    <InfoCard
                        title={t("weather")}
                        description={t("vietnam_climate_guide")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />

                    {/* Currency */}
                    <InfoCard
                        title={t("currency")}
                        description={t("all_about_vietnam_currency")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />

                    {/* Accessibility */}
                    <InfoCard
                        title={t("accessibility")}
                        description={t("for_travelers_with_special_needs")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/accessibility"
                    />

                    {/* Vietnam attractions passes */}
                    <InfoCard
                        title={t("vietnam_attractions_passes")}
                        description={t("unlock_savings_with_passes")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/vietnam-pass"
                    />

                    {/* Download apps */}
                    <InfoCard
                        title={t("download_apps")}
                        description={t("get_apps_for_attractions")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />

                    {/* Download apps */}
                    <InfoCard
                        title={t("download_apps")}
                        description={t("get_apps_for_attractions")}
                        icon={
                            <ChevronRight color="black" className="h-5 w-5" />
                        }
                        to="/"
                    />
                </div>
            </div>
        </div>
    );
};
