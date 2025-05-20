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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@components/ui/accordion";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const { t } = useTranslation();

    const footerSections = [
        {
            title: t("regions"),
            links: [
                { label: t("northern_vietnam"), href: "/" },
                { label: t("central_vietnam"), href: "/" },
                { label: t("southern_vietnam"), href: "/" },
            ],
        },
        {
            title: t("getting_to_vietnam"),
            links: [
                { label: t("passports_and_visa"), href: "/" },
                { label: t("accommodation"), href: "/" },
                { label: t("itineraries"), href: "/" },
                { label: t("tour_packages"), href: "/" },
                { label: t("travel_agency"), href: "/" },
                { label: t("app_and_tools"), href: "/" },
                { label: t("vietnam_calendar"), href: "/" },
                { label: t("traditional_festivals"), href: "/" },
            ],
        },
        {
            title: t("experiences"),
            links: [
                { label: t("cultural_heritage"), href: "/" },
                { label: t("cuisine"), href: "/" },
                { label: t("nature_and_adventure"), href: "/" },
                { label: t("sustainable_travel"), href: "/" },
                { label: t("city_vibes"), href: "/" },
                { label: t("wellness_escapes"), href: "/" },
                { label: t("romantic_getaways"), href: "/" },
                { label: t("local_life"), href: "/" },
            ],
        },
        {
            title: t("discover_and_navigate"),
            links: [
                { label: t("stories_and_inspiration"), href: "/" },
                { label: t("map"), href: "/" },
            ],
        },
    ];

    return (
        <footer className="mt-[100px]">
            <img src={bird} alt="" width="100%" />
            <div className="container mt-[60px]">
                {/* Mobile: Accordion */}
                <div className="block md:hidden">
                    <Accordion type="multiple">
                        {footerSections.map((section, idx) => (
                            <AccordionItem value={`item-${idx}`} key={idx}>
                                <AccordionTrigger className="text-[18px] font-bold">
                                    {section.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="mt-3 space-y-2 text-[16px] font-normal">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <NavLink to={link.href}>
                                                    {link.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Tablet & Desktop: Grid layout */}
                <div className="hidden md:block md:columns-2 md:gap-x-12 lg:grid lg:grid-cols-4 gap-y-8 gap-x-6">
                    {footerSections.map((section, idx) => (
                        <div key={idx} className="break-inside-avoid mb-8">
                            <p className="text-[18px] font-bold mb-[20px] text-[#1A2A44]">
                                {section.title}
                            </p>
                            <ul className="font-normal text-[16px] text-[#1A2A44] space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <NavLink to={link.href}>
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter + Apps */}
                <div className="flex flex-col gap-y-6 md:flex-row md:justify-between mt-[40px] mb-[28px] lg:mb-[60px]">
                    <div className="w-full md:w-[250px] lg:w-auto">
                        <p className="mb-2.5 hidden md:block font-[700] text-[16px]">
                            {t("do_not_miss_any_updates")}
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="w-full md:w-auto rounded-[80px] p-[15px_20px] bg-[#007BFF] text-white flex items-center justify-center gap-[9px]">
                                    <img src={iconMail} alt="" />
                                    {t("inscription_newsletter")}
                                </button>
                            </DialogTrigger>

                            <DialogContent className="w-full rounded-xl p-6">
                                <DialogHeader>
                                    <DialogTitle className="text-[20px] font-[500] text-[#1A2A44] leading-[150%]">
                                        Subscribe to the Vietnam Tourism
                                        newsletter now!
                                    </DialogTitle>
                                    <DialogDescription className="text-[#1A2A44] mt-2 text-[16px] font-[400] leading-[150%]">
                                        By entering your email address, you
                                        confirm that you have read and accept
                                        the{" "}
                                        <NavLink
                                            to="#"
                                            className="underline hover:text-blue-600"
                                        >
                                            Data Protection Policy
                                        </NavLink>
                                        .
                                    </DialogDescription>
                                </DialogHeader>

                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full mt-[16px] p-[10px] border-b border-gray-300 focus:outline-none focus:border-[#007BFF]"
                                />

                                <Button className="mt-[18px] w-full bg-[#007BFF] text-white rounded-full hover:bg-[#2f46c6] p-[11px_27px]">
                                    Submit
                                </Button>

                                <p className="text-[12px] text-gray-500 mt-4 leading-snug">
                                    This site is protected by reCAPTCHA and the
                                    Google{" "}
                                    <NavLink
                                        to="https://policies.google.com/privacy"
                                        target="_blank"
                                        className="underline"
                                    >
                                        Privacy Policy
                                    </NavLink>{" "}
                                    and{" "}
                                    <NavLink
                                        to="https://policies.google.com/terms"
                                        target="_blank"
                                        className="underline"
                                    >
                                        Terms of Service
                                    </NavLink>{" "}
                                    apply.
                                </p>
                            </DialogContent>
                        </Dialog>

                        <div className="flex md:hidden justify-center gap-[40px] mt-[32px]">
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

                        <div className="flex sm:hidden justify-start gap-[9px] lg:gap-x-4 mt-[40px] lg:mt-0">
                            <a href="">
                                <img src={iconGooglePlay} alt="Google play" />
                            </a>
                            <a href="">
                                <img src={iconAppStore} alt="App Store" />
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block lg:hidden w-1/2">
                        <p className="font-[700] text-[16px] text-[#1A2A44]">
                            Follow us
                        </p>
                        <div className="flex gap-[40px] mt-[32px]">
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

                    <div className="hidden lg:block w-full md:w-1/2 lg:w-[400px]">
                        <p className="mb-2.5 hidden md:block font-[700] text-[16px]">
                            {t("download_our_apps")}
                        </p>
                        <div className="flex justify-start gap-[9px] lg:gap-x-4 mt-[40px] lg:mt-0">
                            <a href="">
                                <img src={iconGooglePlay} alt="Google play" />
                            </a>
                            <a href="">
                                <img src={iconAppStore} alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block lg:hidden w-full md:w-1/2 lg:w-[400px] mb-[32px]">
                    <p className="mb-[10px] hidden md:block font-[700] text-[16px]">
                        {t("download_our_apps")}
                    </p>
                    <div className="flex justify-start gap-[9px] lg:gap-x-4 lg:mt-0">
                        <a href="">
                            <img src={iconGooglePlay} alt="Google play" />
                        </a>
                        <a href="">
                            <img src={iconAppStore} alt="App Store" />
                        </a>
                    </div>
                </div>

                <hr className="border-gray-300" />

                {/* Logo & Socials */}
                <div className="flex flex-col gap-y-6 lg:flex-row justify-between items-center mt-[28px] mb-[36px] lg:mt-[20px] lg:mb-[50px]">
                    <div className="flex flex-col md:flex-row items-center text-left md">
                        <NavLink to="">
                            <img
                                src={logo}
                                alt="Logo"
                                width="102px"
                                className="mb-4 lg:mb-0 md:mr-[30px] hidden md:block"
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

                    <div className="lg:flex hidden justify-start gap-[24px]">
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

            {/* Bottom bar */}
            <div className="bg-[#484C52] pt-[32px] pb-[25px]">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-y-4 text-white text-center md:text-left">
                    <p className="hidden lg:block">
                        © 2025 Lorem ipsum | All rights reserved
                    </p>

                    <div className="grid md:hidden grid-cols-1 gap-y-2 text-white text-center md:text-left">
                        <div className="flex justify-center lg:justify-start gap-x-2">
                            <NavLink to="/">{t("terms_of_use")}</NavLink>
                            <span className="px-2">|</span>
                            <NavLink to="/">{t("privacy_policy")}</NavLink>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-x-2">
                            <NavLink to="/">{t("cookie_policy")}</NavLink>
                            <span className="px-2">|</span>
                            <NavLink to="/">Sitemap</NavLink>
                        </div>
                    </div>

                    <ul className="hidden md:flex flex-wrap justify-center md:justify-end gap-[16px] md:gap-[32px]">
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

                    <p className="block lg:hidden">
                        © 2025 Lorem ipsum | All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
