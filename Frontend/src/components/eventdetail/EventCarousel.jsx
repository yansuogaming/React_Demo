import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CardEvent from "@components/card/CardEvent";
import { NavLink } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

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

export default function EventCarousel() {
    return (
        <section className="container mx-auto pt-[60px]">
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
                                        <NavLink className="flex flex-col justify-between flex-grow pb-4">
                                            <p className="flex gap-[8px] items-center text-[#1A2A44] text-sm font-medium">
                                                <CiLocationOn className="text-[20px]" />
                                                <span>{item.city}</span>
                                                <IoTicketOutline className="text-[20px]" />
                                            </p>
                                            <div
                                                className="hidden sm:block text-[15px] text-gray-600 mt-[12px] line-clamp-3 min-h-[60px]"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.intro,
                                                }}
                                            />
                                        </NavLink>
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
