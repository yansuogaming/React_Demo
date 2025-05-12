import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import imgbg from "@images/bg_news_event.jpg";

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
        <section
            style={{
                backgroundImage: `url(${imgbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="p-[80px] text-white"
        >
            <div className="container mx-auto">
                <div className="text-end mb-[17px]">
                    <NavLink
                        to="#"
                        className="text-sm text-white hover:underline"
                    >
                        More event news →
                    </NavLink>
                </div>

                <Swiper
                    spaceBetween={31}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    // navigation
                    // modules={[Navigation]}
                >
                    {newsItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white rounded-tl-[60px] rounded-br-[60px] p-[71px_30px] aspect-square shadow-md flex flex-col">
                                <NavLink
                                    to="/"
                                    className="text-[14px] text-[#494951] font-[700]"
                                >
                                    EVENT NEWS
                                </NavLink>

                                <div className="flex-1 flex items-center">
                                    <NavLink
                                        to={item.link}
                                        className="text-[#0E284E] font-semibold text-lg leading-relaxed hover:underline"
                                    >
                                        {item.title}
                                    </NavLink>
                                </div>

                                <NavLink
                                    to={item.link}
                                    className="text-blue-600 text-sm hover:underline"
                                >
                                    Read More →
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default EventNewsSlider;
