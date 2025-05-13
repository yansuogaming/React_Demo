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
import { useRef } from "react";

const Story = ({ className = "" }) => {
    const { t } = useTranslation();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
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
                                            width="18"
                                            height="17"
                                            viewBox="0 0 18 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.12109 0.5L7.92547 0.675625L1.05047 7.55062L0.621094 8L1.05047 8.44938L6.67547 14.0744L7.12484 14.5037L7.57422 14.0744L14.4492 7.19938L14.6248 7.00375V0.5H8.12109ZM8.64859 1.75H13.3748V6.47687L7.12484 12.7269L2.39797 8L8.64859 1.75ZM15.2498 2.375V3.625H15.8748V8.7225L9.93734 14.6213L9.15609 13.84L8.27734 14.7188L9.48797 15.9494L9.93734 16.3787L10.3673 15.9494L16.9486 9.445L17.1248 9.25V2.375H15.2498ZM11.4998 3C11.1561 3 10.8748 3.28125 10.8748 3.625C10.8748 3.96875 11.1561 4.25 11.4998 4.25C11.8436 4.25 12.1248 3.96875 12.1248 3.625C12.1248 3.28125 11.8436 3 11.4998 3Z"
                                                fill="#494951"
                                            />
                                        </svg>
                                        #Vietnamtravel
                                    </NavLink>
                                </CardService>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Nav Buttons (ref-based) */}
                    <button
                        ref={prevRef}
                        className="custom-swiper-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        aria-label="Previous"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        ref={nextRef}
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
