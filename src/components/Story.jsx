import image from "@images/image_10.png";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardService from "./card/CardService";
import Reveal from "./animation/Reveal";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Story = ({ className = "" }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const next = document.querySelector(".custom-swiper-next");
        const prev = document.querySelector(".custom-swiper-prev");

        if (next && prev) {
            next.classList.add("swiper-button-next");
            prev.classList.add("swiper-button-prev");
        }
    }, []);

    return (
        <section className={`container ${className}`}>
            <div className="flex items-center justify-between mb-[20px]">
                <h2 className="text-[30px] font-bold text-[#1A2A44]">
                    Stories from Vietnam Travelers
                </h2>
                <ViewMoreButton text={t("Read more")} />
            </div>

            <Reveal>
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        navigation={{
                            nextEl: ".custom-swiper-next",
                            prevEl: ".custom-swiper-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <CardService
                                    title="Cruising Ha Long Bay: A Dream Come True"
                                    widthImage="450px"
                                    heightImage="245px"
                                    image={image}
                                    href="/"
                                    padding="20px 0 0 0"
                                >
                                    <NavLink
                                        to="/"
                                        className="flex items-center gap-[5px]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.12109 2.5L8.92547 2.67563L2.05047 9.55062L1.62109 10L2.05047 10.4494L7.67547 16.0744L8.12484 16.5037L8.57422 16.0744L15.4492 9.19938L15.6248 9.00375V2.5H9.12109ZM9.64859 3.75H14.3748V8.47687L8.12484 14.7269L3.39797 10L9.64859 3.75ZM16.2498 4.375V5.625H16.8748V10.7225L10.9373 16.6213L10.1561 15.84L9.27734 16.7188L10.488 17.9494L10.9373 18.3787L11.3673 17.9494L17.9486 11.445L18.1248 11.25V4.375H16.2498ZM12.4998 5C12.1561 5 11.8748 5.28125 11.8748 5.625C11.8748 5.96875 12.1561 6.25 12.4998 6.25C12.8436 6.25 13.1248 5.96875 13.1248 5.625C13.1248 5.28125 12.8436 5 12.4998 5Z" />
                                        </svg>
                                        #Vietnamtravel
                                    </NavLink>
                                </CardService>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Nav Buttons */}
                    <button
                        className="custom-swiper-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        aria-label="Previous"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        className="custom-swiper-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        aria-label="Next"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </Reveal>
        </section>
    );
};

export default Story;
