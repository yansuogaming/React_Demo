import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import nhaTrangImage from "@images/image_43.png";

const ExperiencesDetail = () => {
    const { t } = useTranslation();
    const [showSidebar, setShowSidebar] = useState(true);

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: t("Nature & Adventure"), href: "/" },
        { label: "Unmissable attractions in Nha Trang" },
    ];

    return (
        <main>
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8" items={breadcrumdItems} />

            {/* Sidebar toggle button */}
            {!showSidebar && (
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

            <div className="">
                {/* TOC Sidebar (Left) */}
                {showSidebar && (
                    <aside className="hidden lg:block lg:col-span-2 sticky top-[120px] border rounded-md p-3 bg-[#FAFAFA] text-sm max-h-[80vh] overflow-auto w-full">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">Content</h3>
                            <button
                                onClick={() => setShowSidebar(false)}
                                className="text-xs text-blue-600 hover:underline"
                            >
                                [ hide ]
                            </button>
                        </div>
                        <ul className="space-y-2 list-decimal list-inside text-[#1A2A44]">
                            <li>
                                <a href="#po-nagar">Po Nagar Cham Towers</a>
                            </li>
                            <li>
                                <a href="#museum">
                                    National Oceanographic Museum
                                </a>
                            </li>
                            <li>
                                <a href="#cathedral">Nha Trang Cathedral</a>
                            </li>
                            <li>
                                <a href="#vinpearl">Vinpearl Amusement Park</a>
                            </li>
                        </ul>
                    </aside>
                )}
            </div>

            {/* Grid layout: TOC + Content + Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main content (Middle) */}
                <article className="lg:col-span-6 xl:col-span-7">
                    <h1 className="text-[28px] sm:text-[32px] font-bold text-[#1A2A44] leading-tight">
                        Unmissable attractions in Nha Trang
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        By Van Duong An | Published on 3 Apr, 2025
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>Print</span>
                        <span>Share to: 🔗 Facebook • Twitter • Email</span>
                    </div>

                    <p className="mt-6 text-[18px] font-medium text-[#1A2A44]">
                        The best attractions in Nha Trang are set against a
                        stunning backdrop of white sandy beaches, verdant
                        mountains, and untouched islands.
                    </p>

                    <p className="mt-4 text-gray-700">
                        Great for history buffs, Nha Trang is home to remnants
                        of the Champa Kingdom, Buddhist temples, and
                        gothic-style Catholic churches while natural hot
                        springs, salt fields, and unique waterfalls offer a
                        myriad of sightseeing and recreational activities.
                    </p>

                    {/* Section 1 */}
                    <div id="po-nagar" className="mt-10">
                        <h2 className="text-[18px] font-semibold text-[#1A2A44] mb-4">
                            1. Po Nagar Cham Towers
                        </h2>
                        <img
                            src={nhaTrangImage}
                            alt="Po Nagar Cham Towers"
                            className="w-full rounded-md object-cover mb-4"
                        />
                        <p className="text-gray-700">
                            Po Nagar Cham temple complex was built between 8th
                            and 11th centuries by the Cham people who once ruled
                            the central plain of Vietnam...
                        </p>
                        <p className="mt-2 text-gray-700">
                            Later, historians have come to identify Po Nagar
                            with the Hindu goddesses Bhagavati, wife of Shiva,
                            and Durga, the buffalo-demon slayer.
                        </p>
                    </div>

                    {/* Read more + Rating */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mt-12 border-t pt-6">
                        {/* Left: Read more tags */}
                        <div>
                            <p className="text-sm font-medium mb-2 text-[#1A2A44]">
                                Read more:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["NATURE", "ADVENTURE", "DESTINATIONS"].map(
                                    (tag) => (
                                        <button
                                            key={tag}
                                            className="border border-blue-500 text-blue-500 text-xs px-4 py-1 rounded-full hover:bg-blue-50"
                                        >
                                            {tag}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Right: Rating */}
                        <div className="text-right">
                            <p className="text-sm font-medium mb-1 text-[#1A2A44]">
                                Rate this article
                            </p>
                            <div className="flex items-center gap-1 justify-end">
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
                </article>

                {/* Right column - Ads & Related */}
                <aside className="hidden lg:block lg:col-span-3 space-y-6">
                    <img
                        src="https://via.placeholder.com/300x600?text=Ad"
                        alt="Ad banner"
                        className="w-full rounded shadow"
                    />

                    {/* Related Posts */}
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 border-b pb-3"
                        >
                            <img
                                src={`https://via.placeholder.com/80x80?text=Img${
                                    i + 1
                                }`}
                                alt="Related"
                                className="w-[80px] h-[80px] object-cover rounded"
                            />
                            <p className="text-sm font-medium text-[#1A2A44] leading-snug line-clamp-3">
                                {i % 2 === 0
                                    ? "First look: The St. Regis Aruba is home to the..."
                                    : "When to transfer Chase points instead of..."}
                            </p>
                        </div>
                    ))}
                </aside>
            </div>

            {/* Keep Exploring Section */}
            <section className="mt-20">
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
                        <img
                            src="https://via.placeholder.com/800x500?text=Hero"
                            alt="Hero post"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end text-white">
                            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                                This Tropical Island Has 365 Beaches — One for
                                Every Day of the Year
                            </h3>
                            <p className="text-sm mb-1">20 Apr, 2025</p>
                            <p className="text-sm">
                                Plenty of Caribbean islands are known for their
                                beaches, but blissfully beautiful Antigua beats
                                them all...
                            </p>
                        </div>
                    </div>

                    {/* List posts on the right */}
                    <div className="lg:col-span-5 space-y-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <img
                                    src={`https://via.placeholder.com/80x80?text=Img${
                                        i + 1
                                    }`}
                                    alt="Related"
                                    className="w-[80px] h-[80px] object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-[#1A2A44] leading-snug">
                                        Travel advisors are appreciated, and so
                                        is air safety
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1">
                                        24 Mar, 2025
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExperiencesDetail;
