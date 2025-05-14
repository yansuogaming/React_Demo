import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import "swiper/css";
import { NavLink } from "react-router";
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
        title: "Indochina Restaurant - a culinary space with a strong ancient touch",
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
                        to=""
                        className="text-[18px] text-white font-[700] hover:underline"
                    >
                        More event news →
                    </NavLink>
                </div>

                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {newsItems.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-4 sm:basis-1 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="bg-white rounded-tl-[60px] rounded-br-[60px] p-[71px_30px] aspect-square shadow-md flex flex-col">
                                    <NavLink
                                        to="/"
                                        className="text-[14px] text-[#494951] font-[700] hover:underline"
                                    >
                                        EVENT NEWS
                                    </NavLink>

                                    <div className="flex-1 flex items-center">
                                        <NavLink
                                            to={item.link}
                                            className="text-[#1A2A44] text-[24px] font-[700] hover:text-[#007BFF]"
                                        >
                                            {item.title}
                                        </NavLink>
                                    </div>

                                    <NavLink
                                        to={item.link}
                                        className="text-[#007BFF] text-[18px] font-[700] hover:underline"
                                    >
                                        Read More →
                                    </NavLink>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0 hidden sm:flex" />
                    <CarouselNext className="right-0 hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default EventNewsSlider;
