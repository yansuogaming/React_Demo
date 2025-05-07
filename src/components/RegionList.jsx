import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/carousel'
import imageNaNoi from '@images/image-hanoi.png'
import imageHaLong from '@images/image-halong.png'
import imageSapa from '@images/image-sapa.png'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import NorthImage from './NorthImage'
import CentralImage from './CentralImage'
import SouthImage from './SouthImage'
import ParacelIslands from './ParacelIslands'
import SpratlyIslands from './SpratlyIslands'

const RegionList = ({ className, ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const [curentRegion, setCurentRegion] = useState('North')
    // eslint-disable-next-line no-unused-vars
    const [desRegion, setDesRegion] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,')

    return (
        <section {...props} className={`flex gap-[35px] container mx-auto ${className}`}>
            <div className="min-w-[512px] relative">
                <div>
                    <NorthImage />
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
            </div>
            <div>
                <h2 className="text-[#1A2A44] text-[72px] font-bold">{curentRegion}</h2>
                <p className="text-[#494951] text-[20px] font-normal mb-[50px]">{desRegion}</p>
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
                        <CarouselItem className="basis-[45%] pl-[20px] relative group">
                            <NavLink to="/city/hanoi">
                                <img src={imageNaNoi} alt="Hanoi" className="w-full rounded-[60px_4px_4px_4px]" />
                                {/* Overlay */}
                                <div className="absolute right-0 bottom-0 z-10 w-[calc(100%-20px)] p-[20px_20px_0_20px] overflow-hidden transform transition-all duration-500 translate-y-[125px] group-hover:translate-y-0">
                                    {/* Title */}
                                    <h3 className="text-white text-[28px] font-bold">
                                        Hanoi
                                    </h3>
                                    {/* Description & Discover */}
                                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                                        <p className="text-white mt-2 font-[16px]">
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                        </p>
                                        <div className="flex mt-[10px] mb-[20px] text-[17px] font-bold text-white gap-[8px] items-center justify-end">
                                            <span>Discover</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient overlay */}
                                <div className="rounded-[4px] bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.5)_100%)] absolute bottom-0 right-0 w-[calc(100%-20px)] h-[145px] group-hover:h-[260px] z-0 transform transition-all duration-500"></div>
                            </NavLink>
                        </CarouselItem>
                        <CarouselItem className="basis-[45%] pl-[20px] relative group">
                            <NavLink to="/city/hanoi">
                                <img src={imageHaLong} alt="Halong" className="w-full rounded-[60px_4px_4px_4px]" />
                                {/* Overlay */}
                                <div className="absolute right-0 bottom-0 z-10 w-[calc(100%-20px)] p-[20px_20px_0_20px] overflow-hidden transform transition-all duration-500 translate-y-[125px] group-hover:translate-y-0">
                                    {/* Title */}
                                    <h3 className="text-white text-[28px] font-bold">
                                        Halong
                                    </h3>
                                    {/* Description & Discover */}
                                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                                        <p className="text-white mt-2 font-[16px]">
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                        </p>
                                        <div className="flex mt-[10px] mb-[20px] text-[17px] font-bold text-white gap-[8px] items-center justify-end">
                                            <span>Discover</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient overlay */}
                                <div className="rounded-[4px] bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.5)_100%)] absolute bottom-0 right-0 w-[calc(100%-20px)] h-[145px] group-hover:h-[260px] z-0transform transition-all duration-500 "></div>
                            </NavLink>
                        </CarouselItem>
                        <CarouselItem className="basis-[45%] pl-[20px] relative group">
                            <NavLink to="/city/hanoi">
                                <img src={imageSapa} alt="Sa pa" className="w-full rounded-[60px_4px_4px_4px]" />
                                {/* Overlay */}
                                <div className="absolute right-0 bottom-0 z-10 w-[calc(100%-20px)] p-[20px_20px_0_20px] overflow-hidden transform transition-all duration-500 translate-y-[125px] group-hover:translate-y-0">
                                    {/* Title */}
                                    <h3 className="text-white text-[28px] font-bold">
                                        Sa pa
                                    </h3>
                                    {/* Description & Discover */}
                                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                                        <p className="text-white mt-2 font-[16px]">
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                        </p>
                                        <div className="flex mt-[10px] mb-[20px] text-[17px] font-bold text-white gap-[8px] items-center justify-end">
                                            <span>Discover</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient overlay */}
                                <div className="rounded-[4px] bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.5)_100%)] absolute bottom-0 right-0 w-[calc(100%-20px)] h-[145px] group-hover:h-[260px] z-0 transform transition-all duration-500"></div>
                            </NavLink>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-[20px] cursor-pointer" />
                    <CarouselNext className="right-[20px] cursor-pointer" />
                </Carousel>
            </div>
        </section>
    )
}

export default RegionList