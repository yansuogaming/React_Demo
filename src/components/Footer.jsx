import bird from "@images/bird.webp";
import iconMail from "@images/icon-mail.svg";
import iconAppStore from "@images/icon-appstore.webp";
import iconGooglePlay from "@images/icon-googleplay.webp";
import logo from "@images/logo2.webp";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="mt-[100px]">
            <img src={bird} alt="" width="100%" />
            <div className="container mt-[60px]">
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-y-10">
                    <div className="w-full md:w-1/2 lg:w-[28%]">
                        <p className="text-[18px] font-bold mb-[30px]">
                            {t("regions")}
                        </p>
                        <ul className="font-normal text-[16px]">
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("northern_vietnam")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("central_vietnam")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("southern_vietnam")}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[25%]">
                        <p className="text-[18px] font-bold mb-[30px]">
                            {t("getting_to_vietnam")}
                        </p>
                        <ul className="font-normal text-[16px]">
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("passports_and_visa")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("accommodation")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("itineraries")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("tour_packages")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("travel_agency")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("app_and_tools")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("vietnam_calendar")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("traditional_festivals")}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[25%]">
                        <p className="text-[18px] font-bold mb-[30px]">
                            {t("experiences")}
                        </p>
                        <ul className="font-normal text-[16px]">
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("cultural_heritage")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("cuisine")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("nature_and_adventure")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("sustainable_travel")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("city_vibes")}</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("wellness_escapes")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("romantic_getaways")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("local_life")}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[22%]">
                        <p className="text-[18px] font-bold mb-[30px]">
                            {t("discover_and_navigate")}
                        </p>
                        <ul className="font-normal text-[16px]">
                            <li className="mb-2">
                                <NavLink to="/">
                                    {t("stories_and_inspiration")}
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/">{t("map")}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-y-6 md:flex-row md:justify-between mt-[40px] mb-[60px]">
                    <div className="w-full md:w-1/2 lg:w-auto">
                        <p className="mb-2.5">{t("do_not_miss_any_updates")}</p>
                        <button className="rounded-[80px] py-[15px] px-[20px] bg-[#007BFF] text-white flex items-center">
                            <img className="pr-[10px]" src={iconMail} alt="" />
                            {t("inscription_newsletter")}
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-[400px]">
                        <p className="mb-2.5">{t("download_our_apps")}</p>
                        <div className="flex justify-start gap-x-4">
                            <a href="">
                                <img src={iconGooglePlay} alt="Google play" />
                            </a>
                            <a href="">
                                <img src={iconAppStore} alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300" />

                <div className="flex flex-col gap-y-6 lg:flex-row justify-between items-center mt-[20px] mb-[50px]">
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
                        <NavLink to="">
                            <img
                                src={logo}
                                alt="Logo"
                                width="102px"
                                className="mb-4 lg:mb-0 lg:mr-[30px]"
                            />
                        </NavLink>
                        <div>
                            <p className="font-bold text-[18px] mb-[5px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>
                            <p className="font-normal text-[18px]">
                                There are many variations of passages of Lorem
                                Ipsum available
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-[24px]">
                        <a href="">
                            <TwitterIcon />
                        </a>
                        <a href="">
                            <InstagramIcon />
                        </a>
                        <a href="">
                            <YoutubeIcon />
                        </a>
                        <a href="">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-[#484C52] pt-[32px] pb-[25px]">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-y-4 text-white text-center md:text-left">
                    <p>© 2025 Lorem ipsum | All rights reserved</p>
                    <ul className="flex flex-wrap justify-center md:justify-end gap-[16px] md:gap-[32px]">
                        <li>
                            <NavLink to="/">{t("terms_of_use")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">{t("privacy_policy")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">{t("cookie_policy")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Sitemap</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
