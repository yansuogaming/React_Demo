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
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="..." />
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
