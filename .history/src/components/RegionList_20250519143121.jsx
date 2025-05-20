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
const RegionList = ({ className, ...props }) => {
    const curentRegion = "North";
    const desRegion =
        "West Vietnam features a distinctive landscape of rugged mountains, lush forests, and beautiful waterfalls. It also offers historical landmarks like the famous River Kwai Bridge, ancient temples, and intriguing cultural heritage sites, making it a diverse and captivating travel destination.";
    const [activeRegion, setActiveRegion] = useState(0);
    const regions = [
        { id: 0, component: <NorthImage />, title: "North" },
        { id: 1, component: <CentralImage />, title: "Central" },
        { id: 2, component: <SouthImage />, title: "South" },
        { id: 3, component: <ParacelIslands />, title: "Paracel Islands" },
        { id: 4, component: <SpratlyIslands />, title: "Spratly Islands" },
    ];
    return (
        <section {...props} className={cn("container", className)}>
            {/* Menu Region */}
            <div className="text-center">
                <h2 className="text-[#1A2A44] text-[40px] font-bold mb-[24px]">
                    Destination by Region
                </h2>
                <ul className="inline-flex items-center justify-center gap-[46px] rounded-[80px] bg-white shadow-[0px_4px_12px_0px_rgba(54,133,143,0.15)] px-[70px] py-[16px] pb-[20px] mb-[66px]">
                    {regions.map((region, index) => (
                        <li>
                            <NavLink
                                key={index}
                                onClick={(e) => {
                                    console.log(index);
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
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-[35px]">
                {/* Bản đồ vùng - chỉ hiển thị desktop */}
                <div onClick={() => setActiveRegion("north")}>
                    <NorthImage
                        className={
                            activeRegion === "north"
                                ? "hnv_region_active_map"
                                : ""
                        }
                    />
                </div>
                <div
                    className="translate-x-[69px] translate-y-[-32px]"
                    onClick={() => setActiveRegion("central")}
                >
                    <CentralImage
                        className={
                            activeRegion === "central"
                                ? "hnv_region_active_map"
                                : ""
                        }
                    />
                </div>
                <div
                    className="translate-x-[93px] translate-y-[-44px]"
                    onClick={() => setActiveRegion("south")}
                >
                    <SouthImage
                        className={
                            activeRegion === "south"
                                ? "hnv_region_active_map"
                                : ""
                        }
                    />
                </div>
                <div
                    className="absolute top-[282px] right-[82px]"
                    onClick={() => setActiveRegion("paracel")}
                >
                    <ParacelIslands
                        className={
                            activeRegion === "paracel"
                                ? "hnv_region_active_map"
                                : ""
                        }
                    />
                </div>
                <div
                    className="absolute top-[528px] right-[12px]"
                    onClick={() => setActiveRegion("spratly")}
                >
                    <SpratlyIslands
                        className={
                            activeRegion === "spratly"
                                ? "hnv_region_active_map"
                                : ""
                        }
                    />
                </div>
                {/* <div className="hidden lg:block min-w-[512px] relative h-fit">
                    <div>
                        <NorthImage className="hnv_region_active_map" />
                    </div>
                    <div className="translate-x-[69px] translate-y-[-32px]">
                        <CentralImage />
                    </div>
                    <div className="translate-x-[93px] translate-y-[-44px]">
                        <SouthImage />
                    </div>
                    <div className="absolute top-[282px] right-[82px]">
                        <ParacelIslands />
                    </div>
                    <div className="absolute top-[528px] right-[12px]">
                        <SpratlyIslands />
                    </div>
                </div> */}

                {/* Thông tin + Carousel */}
                <div className="w-full text-left">
                    <h2 className="text-[#1A2A44] text-[40px] md:text-[56px] lg:text-[72px] font-bold">
                        {curentRegion}
                    </h2>
                    <p className="text-[#494951] text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-[30px] md:mb-[40px] lg:mb-[50px]">
                        {desRegion}
                    </p>

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
                        <CarouselContent className="-ml-[20px]">
                            {[imageNaNoi, imageHaLong, imageSapa].map(
                                (img, index) => {
                                    const titles = ["Hanoi", "Halong", "Sa pa"];
                                    return (
                                        <CarouselItem
                                            key={index}
                                            className="basis-[80%] sm:basis-[45%] pl-[20px] relative group"
                                        >
                                            <NavLink to="/city/hanoi">
                                                <img
                                                    src={img}
                                                    alt={titles[index]}
                                                    className="w-full rounded-[60px_4px_4px_4px]"
                                                    loading="lazy"
                                                />
                                                <div
                                                    className={cn(
                                                        "absolute right-0 top-[calc(100%-70px)] z-10 w-[calc(100%-20px)]",
                                                        "p-[20px_20px_0_20px] overflow-hidden transition-all duration-500",
                                                        "group-hover:top-[calc(100%-195px)]"
                                                    )}
                                                >
                                                    <h3 className="text-white text-[28px] font-bold">
                                                        {titles[index]}
                                                    </h3>
                                                    <div
                                                        className={cn(
                                                            "opacity-0 group-hover:opacity-100",
                                                            "transition-all duration-500"
                                                        )}
                                                    >
                                                        <p className="text-white mt-2 font-[16px]">
                                                            Many desktop
                                                            publishing packages
                                                            and web page editors
                                                            now use Lorem Ipsum
                                                            as their default
                                                            model text,
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
                                    );
                                }
                            )}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex left-[10px] md:left-[20px] cursor-pointer" />
                        <CarouselNext className="hidden md:flex right-[10px] md:right-[20px] cursor-pointer" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default RegionList;
