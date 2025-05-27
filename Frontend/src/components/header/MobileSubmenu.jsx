import { NavLink, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ROUTES from "@routes/routes";
import { getItemByType, getMenuItemsByType, MENU_TYPES } from "@data/menuItems";
import {
    RiCloseLargeLine,
    RiArrowRightSLine,
    RiArrowLeftSLine,
    RiQuestionLine,
} from "react-icons/ri";

import { useHeaderContext } from "@contexts/HeaderContext";

const MobileSubmenu = () => {
    const {
        isVisible,
        setIsVisible,
        isVisibleSubMenu,
        setIsVisibleSubMenu,
        typeSubmenu,
    } = useHeaderContext();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const menuSubItem = getMenuItemsByType(typeSubmenu);
    const item = getItemByType(typeSubmenu);

    return (
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
                    className="w-full h-screen absolute top-0 left-0 bg-[#003F73] text-[#fff] overflow-y-scroll z-2"
                >
                    <div className="bg-[#003F73] fixed top-0 left-0 w-full h-screen overflow-y-scroll">
                        <div className="flex items-center justify-between px-[16px] py-[16px] border-b border-gray-300/53">
                            <div
                                className="flex items-center gap-[12px]"
                                onClick={() =>
                                    setIsVisibleSubMenu(!isVisibleSubMenu)
                                }
                            >
                                <RiArrowLeftSLine className="text-[24px]" />
                                <span className="text-[20px]">
                                    {t("Main menu")}
                                </span>
                            </div>
                            <button
                                className="text-[20px]"
                                onClick={() => {
                                    setIsVisible(!isVisible);
                                    setIsVisibleSubMenu(!isVisibleSubMenu);
                                }}
                            >
                                <RiCloseLargeLine />
                            </button>
                        </div>
                        <div className="pt-[50px] pb-[64px]">
                            <h2 className="px-[16px] text-[36px] font-bold mb-[16px]">
                                {t(item.title)}
                            </h2>
                            <ul>
                                {menuSubItem.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-[18px] flex-1 px-[16px] py-[11px] border-b border-[#d1dbe43b]"
                                    >
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate(item.to);
                                                setIsVisible(!isVisible);
                                                setIsVisibleSubMenu(
                                                    !isVisibleSubMenu
                                                );
                                            }}
                                            className="w-full"
                                        >
                                            {t(item.titleKey)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileSubmenu;
