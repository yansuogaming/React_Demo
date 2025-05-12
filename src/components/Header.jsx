import imgLogo from "@images/logo.svg";
import imgLogo2 from "@images/logo2.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Ellipsis } from "lucide-react";
import ChangeLangButton from "./button/ChangeLangButton";
import SearchHeader from "./button/SearchHeader";
import MapIcon from "./icons/MapIcon";
import UserIcon from "./icons/UserIcon";
import { cn } from "@lib/utils";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ noBackgroundOnScroll = true }) => {
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

    let position = "sticky";
    if (noBackgroundOnScroll) {
        position = "fixed";
    }

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
            chanegStyleHeader(false)
            setRotateEllipsis(90)
            setShowNavServices(true)
        } else {
            setShowNavServices(false)
            setRotateEllipsis(0)
            if (noBackgroundOnScroll && window.scrollY <= 10) {
                chanegStyleHeader(true)
            }
        }
    };

    useEffect(() => {
        if (noBackgroundOnScroll) {
            if (!isShowNavServices && window.scrollY <= 10) {
                chanegStyleHeader(true);
            }
            const handleScroll = () => {
                if (!isShowNavServices) {
                    // Nếu scroll xuống thì đổi style header
                    if (window.scrollY > 10) {
                        chanegStyleHeader(false);
                    } else {
                        chanegStyleHeader(true);
                    }
                }
            };
            window.addEventListener("scroll", handleScroll);
            // Cleanup khi component unmount
            return () => window.removeEventListener("scroll", handleScroll);
        }

        chanegStyleHeader(false);
    }, [noBackgroundOnScroll, isShowNavServices]);

    return (
        <header
            className={cn(
                'relative flex justify-between',
                'py-[15px] px-[40px] w-full z-50 top-0',
                'transition-all duration-500'
            )}
            style={{ background, position, color, boxShadow }}
        >
            <div className="flex items-center w-full relative xl-md:w-fit">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mr-[50px]"
                >
                    <NavLink to="/">
                        <img src={logo} width="123px" alt="" />
                    </NavLink>
                </motion.div>
                {/* Nav bar */}
                <ul
                    className={cn(
                        'hidden h-fit font-bold absolute top-1/2 left-1/2 lg:flex',
                        '-translate-1/2 w-max xl-md:static xl-md:translate-0 xl-md:w-fit'
                    )}
                >
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="p-[15px] h-fit"
                    >
                        <NavLink to="/itineraries">{t("destinations")}</NavLink>
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
                        <NavLink to="/events">{t("events")}</NavLink>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="p-[15px] h-fit"
                    >
                        <NavLink to="/">{t("plan_your_trip")}</NavLink>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="p-[15px] h-fit"
                    >
                        <NavLink to="/">{t("travel_offers")}</NavLink>
                    </motion.li>
                </ul>
            </div>
            <ul className="items-center font-bold hidden xl-md:flex">
                <motion.li
                    className="p-[15px]"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <SearchHeader color={color} className="flex cursor-pointer" />
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
                    'block xl-md:hidden -my-[15px] -mx-[40px] px-[30px]',
                    'border-l-1 border-[#ffffff1a] cursor-pointer z-1'
                )}
                onClick={showNavServices}
            >
                <Ellipsis
                    className="transition-all duration-500"
                    style={{ transform: `rotate(${rotateEllipsis}deg)` }}
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
                            'absolute flex top-full w-full justify-between',
                            'left-0 px-[55px] bg-[#062f1f] h-[90px] items-center',
                            'transition-all duration-500 xl-md:hidden'
                        )}
                    >
                        <SearchHeader className="flex cursor-pointer" color="white" />
                        <div className="flex gap-[30px]">
                            <ChangeLangButton color="white" />
                            <MapIcon />
                            <UserIcon />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
