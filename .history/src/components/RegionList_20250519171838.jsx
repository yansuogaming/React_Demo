import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@ui/carousel";
import imageNaNoi from "@images/image-hanoi.png";
import imageHaLong from "@images/image-halong.png";
import imageSapa from "@images/image-sapa.png";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

import NorthImage from "./NorthImage";
import CentralImage from "./CentralImage";
import SouthImage from "./SouthImage";
import ParacelIslands from "./ParacelIslands";
import SpratlyIslands from "./SpratlyIslands";
import { cn } from "@lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const RegionList = ({ className, ...props }) => {
    const { t } = useTranslation();
    const [activeRegion, setActiveRegion] = useState(0);
    const regions = [
        {
            id: 0,
            component: NorthImage,
            title: "North",
            description:
                "Northern Vietnam is a region rich in history, culture, and breathtaking landscapes. It is home to the capital city, Hanoi, where ancient traditions blend seamlessly with modern life. The area boasts stunning natural wonders such as Ha Long Bay, with its emerald waters and limestone islands, and the terraced rice fields of Sapa, offering picturesque views. Northern Vietnam is also known for its diverse ethnic communities, each contributing unique customs and traditions. With its vibrant street food scene, historical sites, and scenic beauty, Northern Vietnam is a must-visit destination for travelers seeking an authentic experience",
            className: "",
            destinations: [
                {
                    image: imageNaNoi,
                    title: "Hanoi",
                    description:
                        "The vibrant capital of Vietnam, known for its centuries-old architecture and rich culture.",
                },
                {
                    image: imageHaLong,
                    title: "Ha Long Bay",
                    description:
                        "A UNESCO World Heritage Site featuring emerald waters and thousands of towering limestone islands.",
                },
                {
                    image: imageSapa,
                    title: "Sapa",
                    description:
                        "A mountain town famous for terraced rice fields, cool climate, and ethnic diversity.",
                },
                {
                    image: imageNaNoi,
                    title: "Haiphong",
                    description:
                        "A mountain town famous for terraced rice fields, cool climate, and ethnic diversity.",
                },
            ],
        },
        {
            id: 1,
            component: CentralImage,
            title: "Central",
            description:
                "Central Vietnam is a region of stunning landscapes, rich history, and vibrant culture. It is home to ancient cities like Hue, the former imperial capital, and Hoi An, a UNESCO World Heritage site known for its charming old town and lantern-lit streets. The region boasts breathtaking coastal scenery, including the pristine beaches of Da Nang and Nha Trang. Central Vietnam also features the majestic caves of Phong Nha-Ke Bang and the lush highlands of Da Lat. With its diverse cuisine, historical landmarks, and natural beauty, Central Vietnam offers a unique and unforgettable experience for travelers.",
            className: "translate-x-[69px] translate-y-[-32px]",
        },
        {
            id: 2,
            component: SouthImage,
            title: "South",
            description:
                "Southern Vietnam is a dynamic region known for its bustling cities, lush landscapes, and rich cultural heritage. Ho Chi Minh City, the largest metropolis, offers a mix of modern skyscrapers and historic landmarks, reflecting the country's rapid development. The Mekong Delta is a vast network of rivers, floating markets, and fertile farmland, providing a glimpse into traditional Vietnamese life. The region also boasts stunning coastal destinations like Phu Quoc and Con Dao, known for their pristine beaches and marine biodiversity. With its vibrant street food, warm hospitality, and diverse scenery, Southern Vietnam is a captivating destination for travelers.",
            className: "translate-x-[93px] translate-y-[-44px]",
        },
        {
            id: 3,
            component: ParacelIslands,
            title: "Paracel Islands",
            description:
                "The Paracel Islands are a group of around 130 small coral islands and reefs located in the East Sea, approximately 400 km east of central Vietnam. The islands are known for their rich marine biodiversity, including sea turtles and seabirds, but they lack fresh water and permanent human settlements. Historically, the Paracel Islands have been a point of geopolitical interest, with multiple nations claiming sovereignty over them2. Despite their remote nature, the islands are surrounded by productive fishing grounds and are believed to contain potential oil and gas reserves. The Paracel Islands remain an important part of Vietnam's maritime heritage and territorial identity.",
            className: "absolute top-[282px] right-[82px]",
        },
        {
            id: 4,
            component: SpratlyIslands,
            title: "Spratly Islands",
            description:
                "The Spratly Islands are a vast archipelago in the East Sea, consisting of over 100 islands, reefs, and submerged features. Located approximately 480 km from Vietnam’s Cam Ranh Peninsula, the islands hold strategic importance and are a symbol of Vietnam’s maritime sovereignty. Despite their remote location and harsh climate, some islands have been developed with infrastructure, including military outposts and small communities. The Spratly Islands are also known for their rich marine biodiversity and play a crucial role in regional geopolitics.",
            className: "absolute top-[528px] right-[12px]",
        },
    ];

    return (
        <section {...props} className={cn("container", className)}>
            {/* Menu Region */}
            <div className="text-center">
                <h2 className="text-[#1A2A44] text-[28px] md:text-[40px] font-bold mb-[24px]  md:mb-[20px]">
                    {t("Destination by Region")}
                </h2>
                <ul className="hidden md:inline-flex flex-wrap items-center justify-center gap-[46px] rounded-[80px] bg-white shadow-[0px_4px_12px_0px_rgba(54,133,143,0.15)] px-[70px] py-[16px] pb-[20px] mb-[66px]">
                    {regions.map((region, index) => (
                        <li key={index} className="flex-shrink-0">
                            <NavLink
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveRegion(index);
                                }}
                                className={`relative ${
                                    activeRegion === index
                                        ? "hnv_region_active_menu"
                                        : ""
                                }
                                    `}
                            >
                                {region.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Carousel
                    className="w-full"
                    opts={{
                        align: "start",
                        skipSnaps: false,
                        containScroll: "trimSnaps",
                        loop: false,
                        dragFree: false,
                    }}
                >
                    {regions.map((region, index) => (
                        <CarouselContent
                            key={region.id}
                            className={cn(
                                "-ml-[20px]",
                                activeRegion === index ? "" : "hidden"
                            )}
                        >
                            {/* Nếu vùng đó có destinations, lặp để hiển thị từng điểm nổi bật */}
                            {region.destinations &&
                                region.destinations.map((destination, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        className="basis-[80%] sm:basis-[45%] pl-[20px] relative group"
                                        onClick={() => setActiveRegion(index)}
                                    >
                                        <NavLink
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveRegion(index);
                                            }}
                                            className={`relative ${
                                                activeRegion === index
                                                    ? "hnv_region_active_menu"
                                                    : ""
                                            }
                                    `}
                                        >
                                            {region.title}
                                        </NavLink>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                    ))}
                    {/* <CarouselPrevious className="hidden md:flex left-[10px] md:left-[20px] cursor-pointer" />
                    <CarouselNext className="hidden md:flex right-[10px] md:right-[20px] cursor-pointer" /> */}
                </Carousel>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-[35px]">
                {/* Bản đồ region */}
                <div className="hidden lg:block min-w-[512px] relative h-fit">
                    {regions.map((region, index) => {
                        const Component = region.component;
                        return (
                            <div
                                key={index}
                                className={region.className}
                                onClick={() => setActiveRegion(index)}
                            >
                                <Component
                                    className={
                                        index === activeRegion
                                            ? "hnv_region_active_map"
                                            : ""
                                    }
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Thông tin + Carousel */}
                <div className="w-full text-left">
                    {regions.map((region, index) => (
                        <div
                            key={index}
                            className={activeRegion === index ? "" : "hidden"}
                        >
                            <h2 className="text-[#1A2A44] text-[40px] md:text-[56px] lg:text-[72px] font-bold">
                                {region.title}
                            </h2>
                            <div className="text-[#494951] text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] md:mb-[40px] lg:mb-[50px] truncate_5">
                                {region.description}
                            </div>
                        </div>
                    ))}

                    <Carousel
                        className="w-full"
                        opts={{
                            align: "start",
                            skipSnaps: false,
                            containScroll: "trimSnaps",
                            loop: false,
                            dragFree: false,
                        }}
                    >
                        {regions.map((region, index) => (
                            <CarouselContent
                                key={region.id}
                                className={cn(
                                    "-ml-[20px]",
                                    activeRegion === index ? "" : "hidden"
                                )}
                            >
                                {/* Nếu vùng đó có destinations, lặp để hiển thị từng điểm nổi bật */}
                                {region.destinations &&
                                    region.destinations.map(
                                        (destination, idx) => (
                                            <CarouselItem
                                                key={idx}
                                                className="basis-[80%] sm:basis-[45%] pl-[20px] relative group"
                                                onClick={() =>
                                                    setActiveRegion(index)
                                                }
                                            >
                                                <NavLink to="/city/hanoi">
                                                    <img
                                                        src={destination.image}
                                                        alt={destination.title}
                                                        className="w-full rounded-[60px_4px_4px_4px]"
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className={cn(
                                                            "absolute right-0 top-[calc(100%-70px)] z-1 w-[calc(100%-20px)]",
                                                            "p-[20px_20px_0_20px] overflow-hidden transition-all duration-500",
                                                            "group-hover:top-[calc(100%-195px)]"
                                                        )}
                                                    >
                                                        <h3 className="text-white text-[28px] font-bold">
                                                            {destination.title}
                                                        </h3>
                                                        <div
                                                            className={cn(
                                                                "opacity-0 group-hover:opacity-100",
                                                                "transition-all duration-500"
                                                            )}
                                                        >
                                                            <p className="text-white mt-2 text-[16px] leading-[1.4]">
                                                                {
                                                                    destination.description
                                                                }
                                                            </p>
                                                            <div
                                                                className={cn(
                                                                    "flex mt-[10px] mb-[20px] text-[17px] font-bold",
                                                                    "text-white gap-[8px] items-center justify-end"
                                                                )}
                                                            >
                                                                <span>
                                                                    Discover
                                                                </span>
                                                                <FaArrowRight />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={cn(
                                                            "rounded-[4px] bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.5)_100%)]",
                                                            "absolute bottom-0 right-0 w-[calc(100%-20px)] h-[145px] group-hover:h-[260px] z-0",
                                                            "transition-all duration-500"
                                                        )}
                                                    ></div>
                                                </NavLink>
                                            </CarouselItem>
                                        )
                                    )}
                            </CarouselContent>
                        ))}
                        <CarouselPrevious className="hidden md:flex left-[10px] md:left-[20px] cursor-pointer" />
                        <CarouselNext className="hidden md:flex right-[10px] md:right-[20px] cursor-pointer" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default RegionList;
