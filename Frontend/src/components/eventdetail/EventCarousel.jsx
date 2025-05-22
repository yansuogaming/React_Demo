"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CardEvent from "@components/card/CardEvent";

const events = [
    {
        title: "Reunification Day",
        image: "/images/events/reunification.jpg",
        startTime: new Date("2025-04-30"),
        endTime: new Date("2025-04-30"),
        href: "/events/reunification",
        children: (
            <p className="text-sm text-gray-600 line-clamp-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in...
            </p>
        ),
    },
    {
        title: "Nha Trang - Khanh Hoa Sea Festival 2025",
        image: "/images/events/nhatrang.jpg",
        startTime: new Date("2025-04-27"),
        endTime: new Date("2025-04-30"),
        href: "/events/nhatrang",
        children: (
            <p className="text-sm text-gray-600 line-clamp-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in...
            </p>
        ),
    },
    {
        title: "HCMC Tourism Festival 2025",
        image: "/images/events/hcmc.jpg",
        startTime: new Date("2025-04-03"),
        endTime: new Date("2025-04-06"),
        href: "/events/hcmc",
        children: (
            <p className="text-sm text-gray-600 line-clamp-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in...
            </p>
        ),
    },

    {
        title: "HCMC Tourism Festival 2025",
        image: "/images/events/hcmc.jpg",
        startTime: new Date("2025-04-03"),
        endTime: new Date("2025-04-06"),
        href: "/events/hcmc",
        children: (
            <p className="text-sm text-gray-600 line-clamp-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in...
            </p>
        ),
    },
];

export default function EventCarousel() {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-xl font-semibold mb-6 text-[#1A2A44]">
                More events like this
            </h2>
            <div className="relative">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {events.map((event, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                            >
                                <CardEvent
                                    title={event.title}
                                    image={event.image}
                                    startTime={event.startTime}
                                    endTime={event.endTime}
                                    href={event.href}
                                    widthImage="100%"
                                    heightImage="200px"
                                >
                                    {event.children}
                                </CardEvent>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10" />
                    <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10" />
                </Carousel>
            </div>
        </section>
    );
}
