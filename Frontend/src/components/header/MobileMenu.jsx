/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";
import {
    RiCloseLargeLine,
    RiArrowRightSLine,
    RiQuestionLine,
} from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import MapIcon from "../icons/MapIcon";
import UserIcon from "../icons/UserIcon";
import ROUTES from "@routes/routes";
import { menuItems } from "@/data/menuItems";
import { useHeaderContext } from "@contexts/HeaderContext";


const colors = ["#03A9F4", "#0288D1", "#0277BD", "#01579B", "#003F73"];

const MobileMenu = () => {
    const {
        isVisible,
        setIsVisible,
        isVisibleLang,
        setIsVisibleLang,
        isVisibleSubMenu,
        setIsVisibleSubMenu,
        typeSubmenu,
        setTypeSubmenu,
    } = useHeaderContext();
    const { t } = useTranslation();
    return (
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
                    className="overflow-auto w-full h-screen fixed top-0 left-0 bg-[#003F73] text-[#fff] overflow-y-scroll flex flex-col z-2"
                >
                    <div className="bg-[#28B8F8] px-[16px] pt-[16px] pb-[10px] flex flex-col gap-[58px]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[12px]">
                                <FiSearch className="text-[24px]" />
                                <span className="text-[20px]">
                                    {t("Search")}
                                </span>
                            </div>
                            <button
                                className="text-[20px]"
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                <RiCloseLargeLine />
                            </button>
                        </div>
                        <NavLink
                            to={ROUTES.HOME}
                            className="text-[30px] font-bold"
                        >
                            {t("Home")}
                        </NavLink>
                    </div>
                    <ul>
                        {menuItems.map((item, index) => {
                            const color = colors[index % colors.length];

                       
                            return (
                                <li key={index}>
                                    <div
                                        style={{backgroundColor: color}}
                                        className={`text-[30px] font-bold flex items-center justify-between p-[12px] px-[16px]`}
                                        onClick={() => {
                                            setIsVisibleSubMenu(
                                                !isVisibleSubMenu
                                            );
                                            setTypeSubmenu(item.type);
                                        }}
                                    >
                                        {t(item.title)}
                                        <RiArrowRightSLine />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col justify-between flex-1 pt-[50px] px-[16px] pb-[16px] gap-[82px]">
                        <ul className="flex flex-col gap-[5px]">
                            <li>
                                <NavLink
                                    to={ROUTES.HOME}
                                    className="text-[16px] font-bold flex items-center gap-[10px]"
                                >
                                    <RiQuestionLine />
                                    {t("Contact")}
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    className="text-[16px] font-bold flex items-center justify-between"
                                    onClick={() =>
                                        setIsVisibleLang(!isVisibleLang)
                                    }
                                >
                                    <div className="flex items-center gap-[10px]">
                                        <TbWorld /> {t("Language")}
                                    </div>
                                    <MdArrowDropDown
                                        className={`text-[20px] transition-transform duration-300 ${
                                            isVisibleLang ? "rotate-180" : ""
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
                                                        to={ROUTES.HOME}
                                                        className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                    >
                                                        <span className="fi fi-vn"></span>
                                                        {t("Vietnam")}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={ROUTES.HOME}
                                                        className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                    >
                                                        <span className="fi fi-gb"></span>
                                                        {t("English")}
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to={ROUTES.HOME}
                                                        className="text-[16px] font-bold flex items-center gap-[10px] pb-[5px]"
                                                    >
                                                        <span className="fi fi-cn"></span>
                                                        {t("Chinese")}
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
                                    to={ROUTES.HOME}
                                    className="text-[16px] font-bold flex flex-col items-center gap-[5px]"
                                >
                                    <MapIcon /> {t("Map")}
                                </NavLink>
                            </div>
                            <div className="flex-1 bg-[#ffffff1c] pt-[20px] pb-[14px] px-[28px] rounded-[8px]">
                                <NavLink
                                    to={ROUTES.HOME}
                                    className="text-[16px] font-bold flex flex-col items-center gap-[5px]"
                                >
                                    <UserIcon />
                                    {t("Login/Register")}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
