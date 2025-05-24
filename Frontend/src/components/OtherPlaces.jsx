import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import TertiaryHeading from "@components/text/TertiaryHeading";
// import useLanguage from "@hooks/useLanguage";
// import { format } from "date-fns";
// import { vi, enUS } from "date-fns/locale";
import { Link } from "react-router";

const events = [
    {
        title: "Reunification Day",
        image: "https://ahavietnam.org/wp-content/uploads/2025/04/486290705_948754734102111_8765447229335446540_n.jpg?w=1568",
        startTime: new Date("2025-04-30"),
        endTime: new Date("2025-04-30"),
        href: "/events/reunification",
        city: "Nha Trang",
        intro: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...",
    },
    {
        title: "Nha Trang - Khanh Hoa Sea Festival 2025",
        image: "https://cdn.antoursvietnam.com/wp-content/uploads/2024/03/Ho-Chi-Minh-City-Tourism-Festival-2024-welcomes-travelers-with-discounts.jpg",
        startTime: new Date("2025-04-27"),
        endTime: new Date("2025-04-30"),
        href: "/events/nhatrang",
        city: "Dong Nai",
        intro: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...",
    },
    {
        title: "HCMC Tourism Festival 2025",
        image: "https://itehcmc.travel/wp-content/uploads/2025/05/Banner-trang-chu-04.png",
        startTime: new Date("2025-04-03"),
        endTime: new Date("2025-04-06"),
        href: "/events/hcmc",
        city: "Ho Chi Minh City",
        intro: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...",
    },
    {
        title: "HCMC Tourism Festival 2025",
        image: "https://images.hcmcpv.org.vn/res/news/2022/04/07-04-2022-thanh-pho-ho-chi-minh-chao-don-ban-welcome-to-ho-chi-minh-city-voi-nhieu-hoat-do-8B0A922B.jpg",
        startTime: new Date("2025-04-03"),
        endTime: new Date("2025-04-06"),
        href: "/events/hcmc",
        city: "Ho Chi Minh City",
        intro: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in...",
    },
];

const CardEvent = ({
    title,
    image,
    children,
    href = "/",
    widthImage = "100%",
    heightImage = "auto",
}) => {


    return (
        <div className="group">
            <Link
                to={href}
                className="rounded-[60px_0_0_0] overflow-hidden block relative"
            >
                <img
                    src={image}
                    alt={title}
                    style={{ width: widthImage, height: heightImage }}
                    className="group-hover:scale-[1.1] transition-all duration-500"
                    loading="lazy"
                />
            </Link>
            <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                <TertiaryHeading className="text-[20px] mb-[8px] group-hover:text-[#007BFF] transition-all duration-500">
                    <Link to={href}>{title}</Link>
                </TertiaryHeading>
                {children}
            </div>
        </div>
    );
};

const Rating = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.844 1.417 8.277L12 18.75l-7.416 3.54 1.417-8.277-6.001-5.844 8.332-1.151z" />
                    </svg>
                ))}
            </div>
            <span className="text-black">4.5 (1411)</span>
        </div>
    );
};

export default function OtherPlaces() {
    return (
        <section className="container pt-[60px]">
            <h2 className="text-[28px] font-[700] mb-[32px] text-[#1A2A44]">
                More events like this
            </h2>
            <div className="relative">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {events.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-[83.33%] sm:basis-[45%] lg:basis-1/4"
                            >
                                <div className="h-full flex flex-col bg-white rounded-[12px] overflow-hidden">
                                    <CardEvent
                                        title={item.title}
                                        image={item.image}
                                        startTime={item.startTime}
                                        endTime={item.endTime}
                                        href={item.href}
                                        widthImage="100%"
                                        heightImage="200px"
                                    >
                                        {/* ✅ Meta content */}
                                        <Rating />
                                        <text>{item?.intro}</text>
                                    </CardEvent>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden lg:flex absolute -left-6 top-[35%] -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 z-10" />
                    <CarouselNext className="hidden lg:flex absolute -right-6 top-[35%] -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 z-10" />
                </Carousel>
            </div>
        </section>
    );
}
