import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const newsItems = [
    {
        id: 1,
        title: "Discover the first cruise departing from Phu My port",
        link: "#",
    },
    {
        id: 2,
        title: "Travel to Russia during the white night season, 20 years of experience company",
        link: "#",
    },
    {
        id: 3,
        title: "Indochina Restaurant – a culinary space with a strong ancient touch",
        link: "#",
    },
    {
        id: 4,
        title: "More events coming soon this summer in Central Vietnam",
        link: "#",
    },
];

const EventNewsSlider = () => {
    return (
        <section className="bg-gradient-to-r from-[#0E1B3D] to-[#300052] py-10 px-4 sm:px-8 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-xl sm:text-2xl font-bold">
                    Event News
                </h2>
                <NavLink to="#" className="text-sm text-white hover:underline">
                    More event news →
                </NavLink>
            </div>

            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                modules={[Navigation]}
            >
                {newsItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-white rounded-[32px] p-6 h-full shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-xs text-gray-400 font-medium mb-2">
                                    EVENT NEWS
                                </h3>
                                <p className="text-[#0E284E] font-semibold text-base leading-relaxed">
                                    {item.title}
                                </p>
                            </div>
                            <NavLink
                                to={item.link}
                                className="mt-4 text-blue-600 text-sm hover:underline inline-block"
                            >
                                Read More →
                            </NavLink>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default EventNewsSlider;
