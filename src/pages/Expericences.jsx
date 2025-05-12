import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";
import imageCity from "@images/hanoi.png";
import imageHanoi from "@images/image-hanoi.png";
import imageSapa from "@images/image-sapa.png";
import PageFaqs from "@components/FAQ";
import PlanYourTrip from "@components/PlainYourTrip";
import WhyVisit from "@components/WhyVisit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
    faMagnifyingGlass,
    faClock,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ITEMS_PER_PAGE = 12;

const PostCard = ({ image, title, date, desc, large = false }) => (
    <div className={large ? "lg:col-span-2 group" : "group"}>
        <NavLink
            to="#"
            className="overflow-hidden block relative rounded-tl-[60px]"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-[285px] object-cover group-hover:scale-[1.1] transform transition-all duration-500"
            />
        </NavLink>
        <h3
            className={`${
                large ? "text-[24px] font-bold" : "text-[20px] font-semibold"
            } text-[#1A2A44] mt-4`}
        >
            <NavLink to="#">{title}</NavLink>
        </h3>
        <p className="text-sm text-gray-500 mt-1">
            <FontAwesomeIcon icon={faClock} className="mr-1" />
            {date}
        </p>
        <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">{desc}</p>
    </div>
);

const ExploreCard = ({ image, title, desc, link = "#" }) => (
    <div
        className="
    relative w-full h-[300px] overflow-hidden cursor-pointer group 
    transition-all duration-500
    rounded-[32px] group-hover:rounded-[60px_0px]
  "
    >
        {/* Background image */}
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Custom overlay gradient */}
        <div className="absolute inset-0 transition-all duration-500">
            <div
                className="w-full h-full transition-all duration-500"
                style={{
                    borderRadius: "0px", // default
                    background:
                        "linear-gradient(180deg, rgba(4, 18, 58, 0.00) 0%, rgba(4, 18, 58, 0.70) 100%)",
                }}
            />
            {/* overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    borderRadius: "0px",
                    background:
                        "linear-gradient(180deg, rgba(4, 18, 58, 0.00) 0%, rgba(4, 18, 58, 0.40) 49.04%, #04123A 100%)",
                }}
            />
        </div>
        {/* Title */}
        <div
            className={`absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-500 ${
                desc ? "group-hover:pb-20" : "group-hover:pb-10"
            }`}
        >
            <h3 className="text-xl font-bold mb-0 transition-transform duration-500 group-hover:-translate-y-5">
                {title}
            </h3>
        </div>
        {/* Desc + Explore */}
        <div
            className={`
        absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500
        flex flex-col justify-start
        ${!desc ? "pt-1" : desc.length < 60 ? "pt-2" : "pt-3"}
      `}
        >
            {desc && <p className="text-sm leading-snug mb-2">{desc}</p>}
            <a
                href={link}
                className="text-sm font-medium underline hover:text-blue-300"
            >
                Explore →
            </a>
        </div>
    </div>
);

const ExploreSlider = ({ data }) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mt-10"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <ExploreCard {...item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const exploreItems = [
    {
        title: "Cuisine",
        image: imageHanoi,
        desc: "",
    },
    {
        title: "Nature & Adventure",
        image: imageSapa,
        desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    },
    {
        title: "Festivals",
        image: imageHanoi,
        desc: "Vietnam's cultural festivals reflect deep traditions and beliefs.",
    },
    {
        title: "Historical Sites",
        image: imageSapa,
        desc: "Explore ancient architecture and imperial landmarks.",
    },
];

const Experiences = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: "Cultural Heritage", href: "/" },
    ];

    const items = Array.from({ length: 20 }, (_, i) => ({
        image: i % 2 === 0 ? imageHanoi : imageSapa,
        title: `Sample Title ${i + 1}`,
        date: "10 Apr, 2025",
        desc: "Short description of the destination, activities or cultural content goes here.",
    }));

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const paginatedItems = items.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const inputClass =
        "w-full h-[42px] rounded-[4px] border border-[#D9D9D9] bg-[#F8FAFC] px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <main>
            {/* Banner */}
            <section className="relative text-white bg-[linear-gradient(180deg,_#F5F6FA_0%,_#EFF4FF_70.01%)]">
                <img
                    src={imageCity}
                    alt="Hà Nội"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-center drop-shadow-lg">
                        Cultural Heritage
                    </h1>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Breadcrumb
                    className="mb-[60px] mt-[30px]"
                    items={breadcrumdItems}
                />
                {/* Intro */}
                <div className="text-center">
                    <p className="text-[20px] font-[400] w-full max-w-[846px] mx-auto">
                        Vietnam is the cradle of long-standing cultural values,
                        from architectural heritage, traditional festivals to
                        unique folk art. This journey of discovery will bring
                        you closer to the stories, people and beauty that make
                        up the identity of Vietnam through each period.
                    </p>
                </div>
                {/* Filters */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    {["Keyword", "Category", "Region"].map((label, idx) => (
                        <div
                            key={label}
                            className={`flex flex-col w-full ${
                                label === "Region"
                                    ? "max-w-[162px]"
                                    : "max-w-[351px]"
                            }`}
                        >
                            <label
                                htmlFor={label.toLowerCase()}
                                className="mb-[7px] text-sm font-medium text-gray-800"
                            >
                                {label}
                            </label>
                            {idx === 0 ? (
                                <div className="relative">
                                    <input
                                        id="keyword"
                                        type="text"
                                        placeholder="Keyword"
                                        className={inputClass}
                                    />
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                    />
                                </div>
                            ) : (
                                <select
                                    id={label.toLowerCase()}
                                    className={inputClass}
                                >
                                    {[
                                        "All",
                                        label === "Category"
                                            ? "Culture"
                                            : "North",
                                        label === "Category" ? "Food" : "South",
                                    ].map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                    <div className="pt-5 w-full max-w-[200px]">
                        <button className="w-full h-[42px] rounded-md bg-blue-600 px-6 text-white text-sm font-medium hover:bg-blue-700 cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
                {/* Top feature */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[60px]">
                    <PostCard
                        image={imageCity}
                        title="Red footbridges and ancient forests: the most famous hot spring"
                        date="10 Apr, 2025"
                        desc="If you are crossing the Andes Mountain Range from Argentina looking for a location that mixes wild nature, architectural designs and relaxation, you will love the Geometric Hot Springs"
                        large
                    />
                    <PostCard
                        image={imageCity}
                        title="Red footbridges and ancient forests: the most famous hot spring"
                        date="10 Apr, 2025"
                        desc="If you are crossing the Andes Mountain Range from Argentina looking for a location that mixes wild nature, architectural designs and relaxation, you will love the Geometric Hot Springs"
                    />
                </div>
                {/* Grid list */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px]">
                    {paginatedItems.map((item, index) => (
                        <PostCard key={index} {...item} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-[40px] gap-[5px] items-center">
                    {/* Prev button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() =>
                            setCurrentPage((p) => Math.max(p - 1, 1))
                        }
                        className="w-[12px] h-[24px] flex items-center justify-center"
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className={`mr-[16px] ${
                                currentPage === 1
                                    ? "text-[#D9D9D9]"
                                    : "text-[#1A2A44]"
                            }`}
                        />
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-[50px] h-[50px] flex items-center justify-center border rounded text-[16px] font-[500] cursor-pointer ${
                                currentPage === i + 1
                                    ? "bg-[#007BFF] text-white rounded-[4px]"
                                    : "bg-[#EEF0F5] text-[#1A2A44] hover:bg-[#b8c6eb] rounded-[4px]"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next button */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() =>
                            setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        className="w-[12px] h-[24px] flex items-center justify-center"
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`ml-[16px] ${
                                currentPage === totalPages
                                    ? "text-[#D9D9D9]"
                                    : "text-[#1A2A44]"
                            }`}
                        />
                    </button>
                </div>
                <div className="mt-[175px]">
                    <h2 className="text-[40px] font-[700] text-[#1A2A44]">
                        Keep exploring
                    </h2>
                    <ExploreSlider data={exploreItems} />
                </div>
            </section>

            <div className="">
                <WhyVisit />
            </div>

            <div className="mt-[80px]">
                <PageFaqs />
            </div>

            <div className="mt-[120px]">
                <PlanYourTrip />
            </div>
        </main>
    );
};

export default Experiences;
