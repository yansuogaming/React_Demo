import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-day-picker";

import imageCity from "@images/hanoi.png";

import { Camera } from "lucide-react";

import {
    FaPrint,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaEllipsisH,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

const ExperiencesDetail = () => {
    const { t } = useTranslation();
    const [showSidebar, setShowSidebar] = useState(true);

    const keepExploringRef = useRef(null);

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: t("Nature & Adventure"), href: "/" },
        { label: "Unmissable attractions in Nha Trang" },
    ];

    const [sidebarStuck, setSidebarStuck] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setSidebarStuck(!isVisible);
                setShowToggleButton(!isVisible);
            },
            {
                rootMargin: "0px 0px -170px 0px", // hoặc -100px tùy bạn sticky top mấy
                threshold: 0,
            }
        );

        const current = keepExploringRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    const [showToggleButton, setShowToggleButton] = useState(true);

    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const headings = document.querySelectorAll("[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -40% 0px",
            }
        );

        headings.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    const asideRightRef = useRef(null);
    const [stuckRight, setStuckRight] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setStuckRight(!isVisible);
            },
            {
                rootMargin: "0px 0px -170px 0px",
                threshold: 0,
            }
        );

        const current = keepExploringRef.current;
        if (current) observer.observe(current);
        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    const relatedPosts = [
        {
            title: "First look: The St. Regis Aruba is home to the...",
            image: "https://www.travelandleisure.com/thmb/EVx5B9ofYTKDLxQzT3VegvyMEu4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-lead-image-ANTIGUAGUIDE0425-3771969164664eccbd3bd8d2104e87c9.jpg",
        },
        {
            title: "When to transfer Chase points instead of...",
            image: "https://www.travelandleisure.com/thmb/fMSRA1FKVH4knzQ01WH8YS5D6Nc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-best-time-to-visit-ANTIGUAGUIDE0425-9870b086df744a3ab57a77d871d571a4.jpg",
        },
        {
            title: "First look: The St. Regis Aruba is home to the...",
            image: "https://www.travelandleisure.com/thmb/S5fK5JUsGmOw7y67YkJGgPw35HE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-things-to-do-ANTIGUAGUIDE0425-6b10d77b8c1a417a8c3579879001d10b.jpg",
        },
        {
            title: "When to transfer Chase points instead of...",
            image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
        },
        {
            title: "First look: The St. Regis Aruba is home to the...",
            image: "https://s.yimg.com/ny/api/res/1.2/jwPFmuN6FGN4YDBCmlugzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/21527a53743c5aa41d91ef3c1d97323e",
        },
    ];

    const explorePosts = {
        hero: {
            title: "This Tropical Island Has 365 Beaches - One for Every Day of the Year",
            date: "20 Apr, 2025",
            excerpt:
                "Plenty of Caribbean islands are known for their beaches, but blissfully beautiful Antigua beats them all...",
            image: "https://s.yimg.com/ny/api/res/1.2/jwPFmuN6FGN4YDBCmlugzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/21527a53743c5aa41d91ef3c1d97323e",
        },
        list: [
            {
                title: "Travel advisors are appreciated, and so is air safety",
                date: "24 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Explore cultural villages in northern Vietnam",
                date: "18 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Discover the lost temples in the jungle of Laos",
                date: "12 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
            {
                title: "Top 5 local dishes to try in Hue",
                date: "08 Mar, 2025",
                image: "https://s.yimg.com/ny/api/res/1.2/RzqlDu4esWjSL0GxwLb.ww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/travel.travelleisure.com/19044a0d7dfb8855c1e280e18049f43d",
            },
        ],
    };

    const [showMoreSocials, setShowMoreSocials] = useState(false);

    return (
        <div>
            {/* Banner */}
            <section className="relative text-white">
                <img
                    src={imageCity}
                    alt="Hà Nội"
                    className="w-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.4)_100%)]"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 flex-col">
                    <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-center drop-shadow-lg">
                        Unmissable attractions in Nha Trang
                    </h2>
                    <p className="text-[18px] text-w mt-2">
                        By Van Duong An | Published on 3 Apr, 2025
                    </p>
                </div>
            </section>

            <div className="container mx-auto py-[16px] relative">
                {/* Breadcrumb */}
                <Breadcrumb
                    className="m-[0px_40px_28px] text-[14px]"
                    items={breadcrumdItems}
                />
            </div>

            <div>
                {/* Sidebar toggle button */}
                {!showSidebar && showToggleButton && (
                    <button
                        onClick={() => setShowSidebar(true)}
                        className="fixed left-4 top-[140px] z-50 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
                    >
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            className="text-[#1A2A44]"
                        />
                    </button>
                )}

                {showSidebar && (
                    <div
                        className={`
            sticky w-full px-4 mb-6
            lg:w-[230px] lg:px-0 lg:mr-[32px]
            2xl:ml-[calc((100%-1366px)/2)]
            lg:float-left lg:min-h-[1200px]
            lg:ml-[calc((100%-1280px)/2)]
            top-[0]
            
        `}
                    >
                        <div
                            className={`${
                                sidebarStuck
                                    ? "w-full bg-white p-4 text-sm lg:sticky lg:top-[170px] z-10"
                                    : "w-full bg-white p-4 text-sm lg:sticky lg:top-[170px] z-10"
                            }`}
                        >
                            <div className="flex items-center gap-[6px] mb-[16px]">
                                <h3 className="font-[700] text-[#1A2A44] text-[16px]">
                                    Content
                                </h3>
                                <button
                                    onClick={() => setShowSidebar(false)}
                                    className="text-[14px] p-[1px_12px] bg-[#F5F6FA] text-gray-500 rounded-[4px] hover:underline"
                                >
                                    hide
                                </button>
                            </div>

                            <ol className="border-l-[2px] border-[#D9D9D9] pl-[17px] space-y-3 text-[#1A2A44] text-sm flex flex-col gap-[4px]">
                                {[
                                    {
                                        id: "po-nagar",
                                        label: "Po Nagar Cham Towers",
                                    },
                                    {
                                        id: "museum",
                                        label: "National Oceanographic Museum of Vietnam",
                                    },
                                    {
                                        id: "cathedral",
                                        label: "Nha Trang Cathedral",
                                    },
                                    {
                                        id: "vinpearl",
                                        label: "Vinpearl Amusement Park",
                                    },
                                    {
                                        id: "pagoda",
                                        label: "Long Son Pagoda & White Buddha",
                                    },
                                    {
                                        id: "hot-spring",
                                        label: "Thap Ba Hot Springs Centre",
                                    },
                                    {
                                        id: "waterfall",
                                        label: "Ba Ho Waterfalls",
                                    },
                                    {
                                        id: "museum-yersin",
                                        label: "Alexandre Yersin Museum",
                                    },
                                ].map((item, idx) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className={`block transition text-[15px] ${
                                                activeId === item.id
                                                    ? "text-[#007BFF]"
                                                    : "text-[#1A2A44]"
                                            }`}
                                        >
                                            {`${idx + 1}. ${item.label}`}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                )}

                <main className="container mx-auto">
                    {/* Grid layout: TOC + Content + Ads */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[29px]">
                        {/* Main content (Middle) */}
                        <div className="lg:col-span-9">
                            <div className="flex flex-wrap gap-[34px] text-gray-600 text-[15px]">
                                <div className="flex items-center gap-2">
                                    <span>Print</span>
                                    <button
                                        onClick={() => window.print()}
                                        className="w-[36px] h-[36px] flex items-center justify-center border border-gray-400 rounded-full cursor-pointer hover:bg-gray-100 hover:border-gray-600 transition"
                                    >
                                        <FaPrint className="text-[16px] text-gray-600 hover:text-black" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="mr-2">Share to</span>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-blue-500 text-blue-500 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-600 transition">
                                        <FaFacebookF />
                                    </button>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-black text-black rounded-full cursor-pointer hover:bg-gray-200 hover:border-gray-700 transition">
                                        <FaTwitter />
                                    </button>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-pink-500 text-pink-500 rounded-full cursor-pointer hover:bg-pink-100 hover:border-pink-600 transition">
                                        <FaInstagram />
                                    </button>
                                    <button
                                        onClick={() =>
                                            setShowMoreSocials(!showMoreSocials)
                                        }
                                        className="w-[36px] h-[36px] flex items-center justify-center border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-gray-100 hover:border-gray-500 transition"
                                    >
                                        <FaEllipsisH />
                                    </button>
                                </div>
                            </div>

                            {showMoreSocials && (
                                <div className="flex items-center gap-3 mt-3 ml-[75px]">
                                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-blue-700 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-800 transition">
                                        <FaLinkedinIn />
                                    </button>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center border border-red-500 text-red-500 rounded-full cursor-pointer hover:bg-red-100 hover:border-red-600 transition">
                                        <FaPinterestP />
                                    </button>
                                </div>
                            )}

                            <div className="text-[#1A2A44] text-[18px]">
                                <p className="mt-[44px] text-[24px] font-[500] text-[#1A2A44]">
                                    The best attractions in Nha Trang are set
                                    against a stunning backdrop of white sandy
                                    beaches, verdant mountains, and untouched
                                    islands.
                                </p>

                                <p className="m-[26px_0_24px_0] text-gray-700">
                                    Great for history buffs, Nha Trang is home
                                    to remnants of the Champa Kingdom, Buddhist
                                    temples, and gothic-style Catholic churches
                                    while natural hot springs, salt fields, and
                                    unique waterfalls offer a myriad of
                                    sightseeing and recreational activities.
                                </p>

                                {/* Section 1 */}
                                <div
                                    id="po-nagar"
                                    className="scroll-mt-[180px]"
                                >
                                    <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                                        1. Po Nagar Cham Towers
                                    </h2>
                                    <img
                                        src="https://media.istockphoto.com/id/471703331/photo/po-nagar-cham-towers-nha-trang-vietnam.jpg?s=612x612&w=0&k=20&c=FmDlQjftgpmM4xRM_ovJtFvSn3QZjpQ9ROl5vFExx0U="
                                        alt="Po Nagar Cham Towers"
                                        className="w-full object-cover mb-4"
                                    />
                                    <p className="text-gray-700">
                                        Po Nagar Cham temple complex was built
                                        between 8th and 11th centuries by the
                                        Cham people who once ruled the central
                                        plain of Vietnam...
                                    </p>
                                    <p className="mt-2 text-gray-700">
                                        Later, historians have come to identify
                                        Po Nagar with the Hindu goddesses
                                        Bhagavati, wife of Shiva, and Durga, the
                                        buffalo-demon slayer.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div
                                    id="museum"
                                    className="mt-10 scroll-mt-[180px]"
                                >
                                    <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                                        2. National Oceanographic Museum
                                    </h2>
                                    <img
                                        src="https://static.vinwonders.com/2022/08/National-Oceanographic-Museum-1.jpg"
                                        alt="Museum"
                                        className="w-full object-cover mb-4"
                                    />
                                    <p className="text-gray-700">
                                        The museum showcases more than 20,000
                                        marine specimens...
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div
                                    id="cathedral"
                                    className="mt-10 scroll-mt-[180px]"
                                >
                                    <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                                        3. Nha Trang Cathedral
                                    </h2>
                                    <img
                                        src="https://static.vinwonders.com/2022/07/Nha-Trang-Cathedral-1.jpg"
                                        alt="Cathedral"
                                        className="w-full object-cover mb-4"
                                    />
                                    <p className="text-gray-700">
                                        Built in French Gothic style, this
                                        cathedral is a popular wedding photo
                                        location...
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div
                                    id="vinpearl"
                                    className="mt-10 scroll-mt-[180px]"
                                >
                                    <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                                        4. Vinpearl Amusement Park
                                    </h2>
                                    <img
                                        src="https://movenpickresortcamranh.com/wp-content/uploads/2024/02/Vinpearl-Park-min-min.png"
                                        alt="Vinpearl Park"
                                        className="w-full object-cover mb-4"
                                    />
                                    <p className="text-gray-700">
                                        Vinpearl is Vietnam’s Disneyland with
                                        roller coasters, a water park, and an
                                        aquarium...
                                    </p>
                                </div>

                                <div className="flex justify-between text-[16px] text-[#000] bg-[#F5F6FA] p-[13px_20px] mt-[40px]">
                                    <p className="">By Van Duong An </p>
                                    <p>Published on 3 Apr, 2025</p>
                                </div>
                            </div>

                            {/* Read more + Rating */}
                            <div
                                ref={keepExploringRef}
                                className="flex flex-wrap justify-between items-center gap-4 mt-[20px]"
                            >
                                {/* Left: Read more tags */}
                                <div>
                                    <p className="font-[500] mb-2 text-[#000] text-[16px]">
                                        Read more:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "NATURE",
                                            "ADVENTURE",
                                            "DESTINATIONS",
                                        ].map((tag) => (
                                            <button
                                                key={tag}
                                                className="border border-blue-500 text-blue-500 text-xs px-4 py-1 rounded-full hover:bg-blue-50 cursor-pointer"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Rating */}
                                <div className="text-right">
                                    <p className="font-[500] mb-2 text-[#000] text-[16px]">
                                        Rate this article
                                    </p>
                                    <div className="flex items-center gap-[4px] justify-end">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09L5.52 12.09 1 7.91l6.06-.88L10 2l2.94 5.03L19 7.91l-4.52 4.18 1.398 5.998z" />
                                            </svg>
                                        ))}
                                        <span className="text-xs text-gray-500 ml-2">
                                            | 2 Voted
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column - Ads & Related */}
                        <div
                            ref={asideRightRef}
                            className={`hidden lg:block lg:col-span-3 ${
                                stuckRight ? "sticky top-[170px]" : ""
                            }`}
                        >
                            <div className="">
                                <h3 className="text-[16px] font-[700] text-[#1A2A44] mb-[16px]">
                                    Explore more
                                </h3>

                                {relatedPosts.map((post, i) => (
                                    <div
                                        key={i}
                                        className={`
                                    flex flex-col gap-[10px] pb-[25px]
                                    ${
                                        i === relatedPosts.length - 1
                                            ? "border-b border-[#D9D9D9]"
                                            : ""
                                    }
                                `}
                                    >
                                        <img
                                            src={post.image}
                                            alt="Related"
                                            className="w-full h-[120px] object-cover rounded-md"
                                        />
                                        <p className="text-[16px] font-[700] text-[#000] leading-snug">
                                            {post.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Quảng cáo giữ nguyên */}
                            <NavLink to="/">
                                <img
                                    src="https://mochibooks.vn/wp-content/uploads/2023/11/z4903684139997_18e5be009706c977675ecfd148748cbd-510x727.jpg"
                                    alt="Ad banner"
                                    className="w-full rounded shadow"
                                />
                            </NavLink>
                        </div>
                    </div>
                </main>
            </div>
            {/* Keep Exploring Section */}
            <section className="mt-20 container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] sm:text-[28px] font-bold text-[#1A2A44]">
                        Keep Exploring Cultural Heritage
                    </h2>
                    <NavLink
                        to="#"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Show all →
                    </NavLink>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Big post on the left */}
                    <div className="lg:col-span-7 relative rounded-xl overflow-hidden">
                        <NavLink to="/">
                            <img
                                src={explorePosts.hero.image}
                                alt="Hero post"
                                className="w-full h-full object-cover rounded-tl-[60px]"
                            />
                        </NavLink>
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0)_100%)] p-[53px_27px_53px_27px] flex flex-col justify-end text-white">
                            <h3 className="text-[32px] font-[700] mb-[3px]">
                                <NavLink to="/" className="hover:underline">
                                    {explorePosts.hero.title}
                                </NavLink>
                            </h3>

                            <p className="text-[16px] text-white font-[400] mb-[9px]">
                                {explorePosts.hero.date}
                            </p>
                            <p className="text-[16px] text-white font-[400]">
                                {explorePosts.hero.excerpt}
                            </p>
                        </div>
                    </div>

                    {/* List posts on the right */}
                    <div className="lg:col-span-5 space-y-4">
                        {explorePosts.list.map((post, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-[25px_13px] bg-[#F5F6FA] rounded-[8px]"
                            >
                                <NavLink to="/">
                                    <img
                                        src={post.image}
                                        alt="Related"
                                        className="w-[80px] h-[80px] object-cover rounded-tl-[20px]"
                                    />
                                </NavLink>
                                <div className="flex-1">
                                    <h3 className="text-[18px] font-[700] text-[#1A2A44] ">
                                        <NavLink
                                            to="/"
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </NavLink>
                                    </h3>
                                    <p className="text-[14px] text-[#494951] mt-1">
                                        {post.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperiencesDetail;
