import iconFilter from "@images/icon-filter.svg";
import { Checkbox } from "@ui/checkbox";
import toutItemImage from "@images/tourItem.png";
import providerImage from "@images/providerImage.png";
import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import ExploreTopTravelService from "@images/ExploreTopTravelService.png";
import ImageHotel from '@images/img_hotel.png';
import { useEffect, useState } from "react";
import Pagination from "./pagination/pagination";
// import advertising from "@images/advertising.png";
import { Link } from "react-router";
import maps from '@images/maps.png';
import locations from '@images/locations.png';
import arrow from '@images/arrow.png';
import { Slider } from '@/components/ui/slider';
import image1 from '@images/image1.png';
import rejected from '@images/rejected.png';
import refund from '@images/refund.png';

const nileCruisePackage = {
    title: "Pharaohs Nile Cruise Adventure - Return Flights Included",
    image: toutItemImage,
    rating: {
        score: 4.5,
        reviewCount: 1411,
    },
    destinations: {
        main: ["Cairo", "Giza", "Luxor"],
        additional: 2,
    },
    departure: {
        location: "Hanoi, Vietnam",
    },
    duration: {
        days: 3,
        nights: 2,
    },
    pricing: {
        basePrice: 916,
        currency: "USD",
        includesTaxesAndFees: true,
    },
    provider: "travel",
    providerImage: providerImage,
    actions: ["Detail tour"],
    isVideo: 1,
    isVr: 1
};

const FilterHotel = ({ className = "" }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFilterOpen]);

    return (
        <section className={`container ${className} flex flex-col gap-4 sm:gap-6 lg:gap-[30px] items-center lg:items-end`}>
            <MenuFilter />
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[30px] relative mt-2 sm:mt-[10px]">
                {/* Mobile filter button */}
                {/* Filter sidebar */}
                <div
                    className={`
            fixed lg:relative top-0 left-0 h-full w-[80%] max-w-[300px] lg:w-auto
            bg-white lg:bg-transparent ${isFilterOpen ? "z-50" : "z-20"} transform transition-transform duration-300 ease-in-out
            ${isFilterOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                        }
            p-3 sm:p-4 lg:p-0 overflow-y-auto
          `}
                >
                    <Filter onClose={() => setIsFilterOpen(false)} />
                </div>

                {/* Overlay */}
                {isFilterOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-80 z-10 lg:hidden"
                        onClick={() => setIsFilterOpen(false)}
                    />
                )}
                <div className="mt-2 sm:mt-[10px]">
                    <ListHotel
                        isFilterOpen={isFilterOpen}
                        setIsFilterOpen={setIsFilterOpen}
                        listTour={Array(14).fill(nileCruisePackage)}
                    />
                </div>
            </div>
            <Pagination />
        </section>
    );
};

export default FilterHotel;

const MenuFilter = () => {
    return (
        <div className="w-full flex flex-row">
            <div className='relative'>
                <img className='w-[297px] h-[150px] object-cover' src={maps} alt="Banner" />
                <div className='absolute  inset-0 flex justify-center items-center'>
                    <div className="flex flex-row bg-white items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                        <img src={locations} className="w-5 h-5" />
                        <h1 className='text-[#007BFF] font-bold text-[20px] ml-2'>View map</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[953px] ml-5">
                <text>In Vietnam, the chain of hotels and restaurants is focused on convenient services and modern facilities, which will surely satisfy all visitors. In particular, the hotel also provides a system of meeting and conference rooms for work and important events. Entertainment areas, swimming pools, bars, gyms, etc. promise to bring you a feeling of relaxation... View more</text>
                <div className="flex flex-row justify-between items-center mt-7">
                    <text className="font-[Helvetica_Neue] text-[14px] text-[#1D2D53]">1,000+ result</text>
                    <div className="flex flex-row items-center">
                        <text className="text-[#717171] text-[14px] font-[400] mr-2 font-[Helvetica_Neue]">Sort by:</text>
                        <div className="border border-[#C8CBD0] rounded-[8px] flex flex-row w-[214px] h-[40px] justify-between items-center px-2">
                            <text className="text-[16px] text-[#1D2D53] font-medium font-[Helvetica_Neue]">Featured</text>
                            <img src={arrow} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Filter = ({ onClose }) => {
    const [range, setRange] = useState([0, 1000]);

    const handleValueChange = (newValues) => {
        setRange(newValues);
    };

    return (
        <div>
            <div className="w-full lg:w-auto">
                <div className="w-full lg:min-w-[297px] mb-4 sm:mb-[24px] flex items-center justify-between font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px]">
                    <div className="flex gap-2 sm:gap-[12px] items-center">
                        <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <h3 className="text-sm sm:text-base font-[Helvetica_Neue]">Applied filters</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="lg:hidden pr-3 sm:pr-5 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                <div>
                    <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px] font-[Helvetica_Neue]">Duration</p>
                    <ul className="flex flex-col gap-3 sm:gap-[15px] font-[Helvetica_Neue]">
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Hotel
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />Guesthouse
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />Resort
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Homestay
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                                Show more <img src={arrow} />
                            </label>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 sm:my-[24px]" />
                <div className="w-full max-w-md mx-auto">
                    <h2 className="text-xl font-semibold text-[#1D2D53] mb-4">
                        Your budget (per night)
                    </h2>

                    <div className="relative">
                        <div className="flex justify-between items-center mt-1 mb-2">
                            <span className="text-blue-900 font-medium">$0</span>
                            <span className="text-blue-900 font-medium">$1000</span>
                        </div>
                        <Slider
                            value={range}
                            onValueChange={handleValueChange}
                            min={0}
                            max={1000}
                            step={50}
                            className="w-full"
                        />
                    </div>
                </div>
                <hr className="my-4 sm:my-[24px]" />
                <div>
                    <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px] font-[Helvetica_Neue]">Property rating</p>
                    <ul className="flex flex-col gap-3 sm:gap-[15px] font-[Helvetica_Neue]">
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                5 stars
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                4 stars
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                3 stars
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Un rated
                            </label>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 sm:my-[24px]" />
                <div>
                    <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px] font-[Helvetica_Neue]">Location</p>
                    <ul className="flex flex-col gap-3 sm:gap-[15px] font-[Helvetica_Neue]">
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Hanoi
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Ho Chi Minh City
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Da Nang
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Phu Quoc
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                                Show more <img src={arrow} />
                            </label>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 sm:my-[24px]" />
                <div>
                    <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px] font-[Helvetica_Neue]">Property facilities</p>
                    <ul className="flex flex-col gap-3 sm:gap-[15px] font-[Helvetica_Neue]">
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Swimming pool
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Internet
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Car park
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                Gym/fitness
                            </label>
                        </li>
                        <li>
                            <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                                Show more <img src={arrow} />
                            </label>
                        </li>
                    </ul>
                </div>

                <hr className="my-4 sm:my-[24px]" />
            </div>
        </div>
    );
};

const ListHotel = ({ listTour, setIsFilterOpen, isFilterOpen }) => {
    return (
        <div className="flex-1">
            <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex gap-2 sm:gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px]"
            >
                <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
                {listTour.map(() => {
                    // return <TourItem key={index} item={item} index={index} />;
                    return <HotelCard />
                })}
            </div>
        </div>
    );
};

const TourItem = ({ item, index }) => {
    const tourDetails = [
        {
            id: 1,
            icon: <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-gray-600 flex-shrink-0" />,
            label: "Hanoi Old Quarter, Hoan Kiem, Hanoi",
            content: "",
        },
        {
            id: 2,
            icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-gray-600 flex-shrink-0" />,
            label: "Open now",
            content: "",
        },
        {
            id: 3,
            // icon: <Navigation className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
            label: "Admission tickets from ",
            content: "$3",
        },
    ];
    const TourDetailItem = ({ icon, label, content, extraButton }) => {
        return (
            <div className="flex items-start gap-2">
                {icon}
                <div>
                    <span className="text-xs sm:text-[14px] text-[#1A2A44]">{label}</span>{" "}
                    <span>{content}</span>
                    {extraButton && (
                        <button className="text-xs sm:text-[14px] font-normal text-blue-500">
                            {extraButton}
                        </button>
                    )}
                </div>
            </div>
        );
    };

    const BannerItem = () => {
        return (
            <div className="w-full max-w-[950px] h-auto sm:h-[180px] md:h-[218px] rounded-[8px] bg-gray-100 flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-[60%] h-auto sm:h-[180px] md:h-[218px] flex flex-col justify-center px-4 sm:pl-8 py-4 sm:py-0">
                    <h2 className="text-black font-bold text-lg sm:text-xl md:text-[28px] mb-2">
                        Explore Top Travel Service
                    </h2>
                    <p className="text-black text-sm sm:text-[16px] mb-3 sm:mb-4">
                        {`Not only sightseeing everywhere, Hanoi also has accommodations with great services for you.`}
                    </p>
                    <button className="w-[120px] sm:w-[150px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 sm:py-2 rounded-lg">
                        Explore Now
                    </button>
                </div>
                <img
                    src={ImageHotel}
                    alt="Explore Top Travel Service"
                    className="w-full sm:w-[40%] h-[160px] sm:h-[180px] md:h-[218px] object-cover"
                />
            </div>
        );
    };

    return (
        <>
            <Link to={"/"} className="border border-solid rounded-[8px] flex flex-col md:flex-row relative p-3 sm:p-4 md:p-[16px] pb-[16px] sm:pb-[21px] group hover:cursor-pointer">
                <div className="w-full md:w-[292px] h-[180px] sm:h-[200px] md:h-[230px] object-cover relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover  group-hover:scale-[1.1] transition-all duration-500"
                    />
                </div>

                {/* Right side - Package details */}
                <div className="mt-3 sm:mt-4 md:mt-0 md:ml-[19px] flex-1 flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-base sm:text-lg md:text-[20px] font-bold text-[#1D2D53] group-hover:text-blue-500">
                                Times Corner Sorrento Boutique Hotel - Free Hon Thom Cable Car & Aquatopia Water Park
                            </h2>
                            {/* <div className="flex flex-row gap-2">
                                <div>
                                    <span className="border border-gray-300 bg-white rounded-3xl px-2 py-1 text-xs sm:text-sm text-[#1A2A44]">
                                        Video
                                    </span>
                                </div>
                                <div>
                                    <span className="border border-gray-300 bg-white rounded-3xl px-2 py-1 text-xs sm:text-sm text-[#1A2A44]">
                                        VR
                                    </span>
                                </div>
                            </div> */}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mt-2 sm:mt-[8px] mb-3 sm:mb-[16px]">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-xs sm:text-[14px] font-normal mt-[2px]">
                                4.5 (1411)
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-col gap-2 sm:gap-2">
                                {tourDetails.map((detail) => (
                                    <TourDetailItem
                                        key={detail.id}
                                        icon={detail.icon}
                                        label={detail.label}
                                        content={detail.content}
                                        extraButton={detail.extraButton}
                                    />
                                ))}
                            </div>
                            <div className="w-full sm:w-[200px] md:w-[300px] mt-3 sm:mt-0 sm:ml-6 md:ml-[40px]">
                                <text className="text-xs sm:text-[14px] font-[Visit_qatar]">{`“I visited the lake while in Hanoi. Walked around and saw the important sites on the perimeter. I was surprised to see that the entire perimeter...”`}</text>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row overflow-x-auto flex-nowrap gap-2 sm:gap-4 mt-3 sm:mt-4">
                        <button className="h-8 sm:h-[40px] flex-shrink-0 bg-blue-500 border border-gray-300 rounded-full flex items-center justify-center text-[#1A2A44] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
                            <text className="px-3 sm:px-5 text-[#ffffff]">See tickets</text>
                        </button>
                        <button className="h-8 sm:h-[40px] flex-shrink-0 bg-blue-500 border border-gray-300 rounded-full flex items-center justify-center text-[#1A2A44] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
                            <text className="px-3 sm:px-4 text-[#ffffff]">Tour itinerary</text>
                        </button>
                    </div>
                </div>
            </Link>
            {index === 4 && <BannerItem />}
            {index === 8 && <img className="hidden sm:flex w-full max-w-[950px] rounded-[8px]" src={ExploreTopTravelService} />}
        </>
    );
};

const HotelCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-5xl mx-auto font-[Helvetica_Neue]">
            {/* Hotel Image */}
            <div className="w-86 h-64 flex-shrink-0">
                <img
                    src={image1}
                    alt="Times Corner Sorrento Boutique Hotel"
                    className="w-[292px] h-[194px] object-cover ml-5 mt-6"
                />
            </div>

            {/* Hotel Details */}
            <div className="flex-1  flex flex-col justify-between">
                <div>
                    {/* Hotel Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        Times Corner Sorrento Boutique Hotel - Free Hon Thom Cable Car & Aquatopia Water Park
                    </h2>

                    {/* Star Rating */}
                    <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center mb-4">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-sm mr-2">
                            9.2
                        </span>
                        <span className="text-blue-600 font-semibold mr-2">Excellent</span>
                        <span className="text-gray-600">2 reviews</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-start mb-4">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <span className="text-gray-700">221 Sorrento, An Thoi, Phu Quoc Island, Vietnam, 92500. </span>
                            <button className="text-blue-600 hover:underline">View map</button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            Spa & Wellness
                        </span>
                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
                            Top Booked
                        </span>
                    </div>

                    {/* Payment Features */}
                    <div className="space-y-2 flex flex-row justify-between">
                        <div>
                            <div className="flex items-center">
                                <img src={rejected} className="w-5 h-5 text-teal-500 mr-2" />
                                <span className="text-teal-600 font-medium">No advance payment</span>
                            </div>
                            <div className="flex items-center">
                                <img src={refund} className="w-5 h-5 text-teal-500 mr-2"/>
                                <span className="text-teal-600 font-medium">Refundable</span>
                            </div>
                        </div>
                        <div className="text-right mr-5">
                            <div className=" font-bold text-red-600">
                                US <text className="text-3xl">$916</text> 
                            </div>
                            <div className="text-gray-600 text-sm">
                                per night includes taxes & fees
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-end mt-6 mb-4 justify-end">
                    <button className="text-[16px] bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors mr-5">
                        View more
                    </button>
                </div>
            </div>
        </div>
    );
};