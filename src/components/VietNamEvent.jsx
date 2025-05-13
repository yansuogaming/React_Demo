import image from "@images/image_10.png";
import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardEvent from "./card/CardEvent";
import { NavLink } from "react-router";
import { addDays } from "date-fns";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faTicket,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useEffect } from "react";

const VietNamEvent = ({ className = "" }) => {
    const { t } = useTranslation();
    const startTime = new Date();
    const endTime = addDays(new Date(), 1);

    // Gán class để điều hướng tùy chỉnh hoạt động
    useEffect(() => {
        const next = document.querySelector(".custom-next-w");
        const prev = document.querySelector(".custom-prev-swipper");

        if (next && prev) {
            next.classList.add("swiper-button-next");
            prev.classList.add("swiper-button-prev");
        }
    }, []);

    const eventItems = Array.from({ length: 4 }).map((_, idx) => (
        <SwiperSlide key={idx}>
            <CardEvent
                title="Enjoy Hanoi street food"
                widthImage="450px"
                heightImage="245px"
                image={image}
                href="/"
                startTime={startTime}
                endTime={endTime}
            >
                <NavLink className="bg-white rounded-[0_0_12px_12px] block p-4">
                    <p className="flex gap-[8px] items-center text-[#1A2A44]">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="w-5 h-5"
                        />
                        <span>Nha Trang</span>
                        <FontAwesomeIcon icon={faTicket} className="w-5 h-5" />
                    </p>
                    <p className="text-[16px] font-normal mt-[16px]">
                        Various versions have evolved over the years, sometimes
                        by accident, sometimes on purpose (injected humour)
                    </p>
                </NavLink>
            </CardEvent>
        </SwiperSlide>
    ));

    return (
        <section className={className}>
            <div className="container">
                <div className="flex items-center justify-between mb-[20px]">
                    <h2 className="text-[30px] font-bold text-[#1A2A44]">
                        Celebrate Vietnam’s Vibrant Events
                    </h2>
                    <ViewMoreButton text={t("See All Events")} />
                </div>

                <div className="relative">
                    {/* Custom navigation with FontAwesome only */}
                    <button className="custom-prev-swipper absolute left-[-16px] top-1/2 z-10 -translate-y-1/2 text-[24px] text-[#1A2A44] hidden md:block">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button className="custom-next-w absolute right-[-16px] top-1/2 z-10 -translate-y-1/2 text-[24px] text-[#1A2A44] hidden md:block">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".custom-prev-swipper",
                            nextEl: ".custom-next-w",
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {eventItems}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default VietNamEvent;
