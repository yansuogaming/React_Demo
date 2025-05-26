import imgLogo from "@images/logo.webp";
import imgLogo2 from "@images/logo2.webp";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router";
import { createContext, useEffect, useState } from "react";
import { ChevronRight, Ellipsis } from "lucide-react";
import { LuTextSearch } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

import { MdArrowDropDown } from "react-icons/md";

import { TbWorld } from "react-icons/tb";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import ChangeLangButton from "../button/ChangeLangButton";
import SearchHeader from "../button/SearchHeader";
import MapIcon from "../icons/MapIcon";
import UserIcon from "../icons/UserIcon";
import { cn } from "@lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ModalSearch from "../modal/ModalSearch";
import ROUTES from "@routes/routes";
import DropdownContent from "./DropdownContent";
import { MENU_TYPES, getMenuItemsByType, menuItems } from "@data/menuItems";
import MobileMenu from "./MobileMenu";
import MobileSubmenu from "./MobileSubmenu";

export const HeaderContext = createContext();

const Header = ({ noBackgroundOnScroll = false }) => {
    const location = useLocation();
    const { t } = useTranslation();
    const [background, setBackground] = useState("none");
    const [showSearch, setShowSearch] = useState(false);
    const [logo, setLogo] = useState(null);
    const [color, setColor] = useState(null);
    const [colorIcon, setColorIcon] = useState(null);
    const [isShowNavServices, setShowNavServices] = useState(false);
    const [typeSubmenu, setTypeSubmenu] = useState(null);
    const [rotateEllipsis, setRotateEllipsis] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLang, setIsVisibleLang] = useState(false);
    const [isVisibleSubMenu, setIsVisibleSubMenu] = useState(false);
    const [boxShadow, setBoxShadow] = useState(
        noBackgroundOnScroll ? "none" : "1px 1px 20px #d1d1d1"
    );

    const [hoverState, setHoverState] = useState(
        Object.keys(MENU_TYPES).reduce((acc, key) => {
            acc[key] = false;
            acc[`${key}Content`] = false;
            return acc;
        }, {})
    );

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

    // Hàm cập nhật trạng thái hover cho menu hoặc content
    const updateHoverState = (menuType, isContent, value) => {
        const key = isContent ? `${menuType}Content` : menuType;
        setHoverState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    // Hàm xử lý hover menu
    const handleHoverMenu = (key, value) => {
        if (key) {
            updateHoverState(key, false, value);
        }
    };

    const contextValue = {
        hoverState,
        typeSubmenu,
        isVisibleSubMenu,
        isVisibleLang,
        isVisible,
        updateHoverState,
        setTypeSubmenu,
        setIsVisibleSubMenu,
        setIsVisibleLang,
        setIsVisible,
    };

    useEffect(() => {
        if (isVisible) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    }, [isVisible]);

    useEffect(() => {
        setIsVisible(false);
        setIsVisibleSubMenu(false);
    }, [location]);

    return (
        <HeaderContext.Provider value={contextValue}>
            <header>
                {/* Header Desktop */}
                <div
                    style={{ background, position, color, boxShadow }}
                    className={cn(
                        "relative flex flex-col",
                        "py-[15px] px-[20px] w-full z-999 top-0",
                        "transition-all duration-500 lg:px-[40px] hidden lg:block"
                    )}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center w-full relative xl-md:w-fit h-full ">
                            {/* Logo */}
                            <motion.div
                                initial={
                                    noBackgroundOnScroll
                                        ? { opacity: 0, y: -100 }
                                        : false
                                }
                                animate={
                                    noBackgroundOnScroll
                                        ? { opacity: 1, y: 0 }
                                        : false
                                }
                                transition={
                                    noBackgroundOnScroll
                                        ? { duration: 0.7, delay: 0.2 }
                                        : false
                                }
                                className="mr-[50px]"
                            >
                                <NavLink to={ROUTES.HOME}>
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
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={
                                            noBackgroundOnScroll
                                                ? { opacity: 0, y: -100 }
                                                : false
                                        }
                                        animate={
                                            noBackgroundOnScroll
                                                ? { opacity: 1, y: 0 }
                                                : false
                                        }
                                        transition={
                                            noBackgroundOnScroll
                                                ? {
                                                      duration: 0.7,
                                                      delay: 0.2 + index * 0.1,
                                                  }
                                                : false
                                        }
                                        className="p-[15px] h-fit "
                                        onMouseEnter={() =>
                                            handleHoverMenu(item.type, true)
                                        }
                                        onMouseLeave={() =>
                                            handleHoverMenu(item.type, false)
                                        }
                                    >
                                        <NavLink to={item.to}>
                                            {t(item.title)}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <ul className="items-center font-bold hidden xl-md:flex ">
                            <motion.li
                                className="p-[15px]"
                                initial={
                                    noBackgroundOnScroll
                                        ? { opacity: 0, y: -100 }
                                        : false
                                }
                                animate={
                                    noBackgroundOnScroll
                                        ? { opacity: 1, y: 0 }
                                        : false
                                }
                                transition={
                                    noBackgroundOnScroll
                                        ? { duration: 0.7, delay: 0.8 }
                                        : false
                                }
                            >
                                <SearchHeader
                                    color={color}
                                    className="flex cursor-pointer"
                                    onClick={() => setShowSearch(true)}
                                />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={
                                    noBackgroundOnScroll
                                        ? { opacity: 0, y: -100 }
                                        : false
                                }
                                animate={
                                    noBackgroundOnScroll
                                        ? { opacity: 1, y: 0 }
                                        : false
                                }
                                transition={
                                    noBackgroundOnScroll
                                        ? { duration: 0.7, delay: 0.9 }
                                        : false
                                }
                            >
                                <ChangeLangButton color={color} />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={
                                    noBackgroundOnScroll
                                        ? { opacity: 0, y: -100 }
                                        : false
                                }
                                animate={
                                    noBackgroundOnScroll
                                        ? { opacity: 1, y: 0 }
                                        : false
                                }
                                transition={
                                    noBackgroundOnScroll
                                        ? { duration: 0.7, delay: 1 }
                                        : false
                                }
                            >
                                <MapIcon color={colorIcon} />
                            </motion.li>
                            <motion.li
                                className="p-[15px]"
                                initial={
                                    noBackgroundOnScroll
                                        ? { opacity: 0, y: -100 }
                                        : false
                                }
                                animate={
                                    noBackgroundOnScroll
                                        ? { opacity: 1, y: 0 }
                                        : false
                                }
                                transition={
                                    noBackgroundOnScroll
                                        ? { duration: 0.7, delay: 1.1 }
                                        : false
                                }
                            >
                                <NavLink to={ROUTES.SIGNIN}>
                                    <UserIcon color={colorIcon} />
                                </NavLink>
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
                    {menuItems.map((item, index) => (
                        <DropdownContent
                            key={index}
                            onMouseLeave={() =>
                                updateHoverState(item.type, true, false)
                            }
                            onMouseEnter={() =>
                                updateHoverState(item.type, true, true)
                            }
                            className={
                                hoverState[item.type] ||
                                hoverState[`${item.type}Content`]
                                    ? "flex"
                                    : "hidden"
                            }
                            contentType={item.type}
                            setHoverContent={(value) =>
                                updateHoverState(item.type, true, value)
                            }
                            setHoverMenu={(value) =>
                                updateHoverState(item.type, false, value)
                            }
                            menuItems={getMenuItemsByType(item.type)}
                        />
                    ))}
                </div>

                {/* Header Mobile */}
                <div className="lg:hidden flex items-center justify-between px-[14px] py-[12px] relative z-999">
                    <div
                        className={cn(
                            "absolute w-full h-[100px] top-0 left-0 z-[-1] bg-none",
                            "lg:bg-gradient-to-b from-[rgba(4,18,58,0.40)]",
                            "via-[rgba(4,18,58,0.25)] to-[rgba(4,18,58,0.00)]"
                        )}
                    ></div>
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className=""
                    >
                        <NavLink to={ROUTES.HOME}>
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
                        className={cn(
                            "text-[30px] flex",
                            "items-center gap-[10px]",
                            noBackgroundOnScroll ? "text-white" : "text-black"
                        )}
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <span className="text-[18px]">{t("Menu")}</span>
                        <LuTextSearch />
                    </button>
                    {/* Mobile menu */}
                    <MobileMenu />

                    {/* Submenu */}
                    <MobileSubmenu />
                </div>
                <ModalSearch
                    isOpen={showSearch}
                    onClose={() => setShowSearch(false)}
                />
            </header>
        </HeaderContext.Provider>
    );
};

export default Header;
