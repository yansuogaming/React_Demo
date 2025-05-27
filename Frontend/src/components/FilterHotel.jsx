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
        <section className={`container ${className} flex flex-col gap-4 sm:gap-6 lg:gap-[30px] items-center lg:items-end px-4 sm:px-6 lg:px-8`}>
            <MenuFilter />
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[30px] relative mt-2 sm:mt-[10px] w-full">
                {/* Mobile filter button */}
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex gap-2 sm:gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px] mb-4"
                >
                    <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Filters</span>
                </button>
                {/* Filter sidebar */}
                <div
                    className={`
                        fixed lg:static top-0 left-0 h-full w-[80%] max-w-[300px] sm:max-w-[350px] lg:max-w-[297px]
                        bg-white lg:bg-transparent ${isFilterOpen ? "z-50" : "z-20"} transform transition-transform duration-300 ease-in-out
                        ${isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                        p-4 sm:p-6 lg:p-0 overflow-y-auto lg:overflow-visible
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
                <div className="flex-1">
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
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3">
            <div className='relative w-full sm:w-[297px]'>
                <img className='w-full h-[120px] sm:h-[150px] object-cover rounded-lg' src={maps} alt="Banner" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className="flex flex-row bg-white items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                        <img src={locations} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <h1 className='text-[#007BFF] font-bold text-[16px] sm:text-[20px] ml-2'>View map</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full sm:flex-1">
                <p className="text-sm sm:text-base text-[#1A2A44] leading-relaxed">
                    In Vietnam, the chain of hotels and restaurants is focused on convenient services and modern facilities, which will surely satisfy all visitors. In particular, the hotel also provides a system of meeting and conference rooms for work and important events. Entertainment areas, swimming pools, bars, gyms, etc. promise to bring you a feeling of relaxation... <span className="text-blue-600 cursor-pointer">View more</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-7">
                    <span className="font-[Helvetica_Neue] text-[12px] sm:text-[14px] text-[#1D2D53]">1,000+ results</span>
                    <div className="flex flex-row items-center mt-2 sm:mt-0">
                        <span className="text-[#717171] text-[12px] sm:text-[14px] font-[400] mr-2 font-[Helvetica_Neue]">Sort by:</span>
                        <div className="border border-[#C8CBD0] rounded-[8px] flex flex-row w-[180px] sm:w-[214px] h-[36px] sm:h-[40px] justify-between items-center px-2">
                            <span className="text-[14px] sm:text-[16px] text-[#1D2D53] font-medium font-[Helvetica_Neue]">Featured</span>
                            <img src={arrow} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Filter = ({ onClose }) => {
    const [range, setRange] = useState([0, 1000]);

    const handleValueChange = (newValues) => {
        setRange(newValues);
    };

    return (
        <div className="w-full">
            <div className="w-full mb-4 sm:mb-6 flex items-center justify-between font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px]">
                <div className="flex gap-2 sm:gap-[12px] items-center">
                    <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <h3 className="text-sm sm:text-base font-[Helvetica_Neue]">Applied filters</h3>
                </div>
                <button
                    onClick={onClose}
                    className="lg:hidden pr-3 sm:pr-5 text-gray-500 hover:text-gray-700 text-lg"
                >
                    ✕
                </button>
            </div>
            <div>
                <p className="text-sm sm:text-[16px] font-bold mb-3 sm:mb-4 font-[Helvetica_Neue]">Duration</p>
                <ul className="flex flex-col gap-3 sm:gap-4 font-[Helvetica_Neue]">
                    {["Hotel", "Guesthouse", "Resort", "Homestay"].map((type, idx) => (
                        <li key={idx}>
                            <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                {type}
                            </label>
                        </li>
                    ))}
                    <li>
                        <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                            Show more <img src={arrow} className="" />
                        </label>
                    </li>
                </ul>
            </div>
            <hr className="my-4 sm:my-6" />
            <div className="w-full">
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D2D53] mb-4">
                    Your budget (per night)
                </h2>
                <div className="relative">
                    <div className="flex justify-between items-center mt-1 mb-2">
                        <span className="text-blue-900 font-medium text-sm sm:text-base">$0</span>
                        <span className="text-blue-900 font-medium text-sm sm:text-base">$1000</span>
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
            <hr className="my-4 sm:my-6" />
            <div>
                <p className="text-sm sm:text-[16px] font-bold mb-3 sm:mb-4 font-[Helvetica_Neue]">Property rating</p>
                <ul className="flex flex-col gap-3 sm:gap-4 font-[Helvetica_Neue]">
                    {["5 stars", "4 stars", "3 stars", "Un rated"].map((rating, idx) => (
                        <li key={idx}>
                            <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                {rating}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="my-4 sm:my-6" />
            <div>
                <p className="text-sm sm:text-[16px] font-bold mb-3 sm:mb-4 font-[Helvetica_Neue]">Location</p>
                <ul className="flex flex-col gap-3 sm:gap-4 font-[Helvetica_Neue]">
                    {["Hanoi", "Ho Chi Minh City", "Da Nang", "Phu Quoc"].map((location, idx) => (
                        <li key={idx}>
                            <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                {location}
                            </label>
                        </li>
                    ))}
                    <li>
                        <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                            Show more <img src={arrow} className="" />
                        </label>
                    </li>
                </ul>
            </div>
            <hr className="my-4 sm:my-6" />
            <div>
                <p className="text-sm sm:text-[16px] font-bold mb-3 sm:mb-4 font-[Helvetica_Neue]">Property facilities</p>
                <ul className="flex flex-col gap-3 sm:gap-4 font-[Helvetica_Neue]">
                    {["Swimming pool", "Internet", "Car park", "Gym/fitness"].map((facility, idx) => (
                        <li key={idx}>
                            <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44]">
                                <Checkbox />
                                {facility}
                            </label>
                        </li>
                    ))}
                    <li>
                        <label className="flex gap-3 sm:gap-4 items-center text-[14px] sm:text-[16px] text-[#1A2A44] font-[Helvetica_Neue]">
                            Show more <img src={arrow} className="" />
                        </label>
                    </li>
                </ul>
            </div>
            <hr className="my-4 sm:my-6" />
        </div>
    );
};

const ListHotel = ({ listTour }) => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
                {listTour.map((item, index) => (
                    <HotelCard key={index} item={item} index={index} />
                ))}
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
            <div className="w-full h-auto rounded-[8px] bg-gray-100 flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-[60%] h-auto flex flex-col justify-center px-4 sm:pl-6 py-4 sm:py-0">
                    <h2 className="text-black font-bold text-base sm:text-lg md:text-xl mb-2">
                        Explore Top Travel Service
                    </h2>
                    <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4">
                        Not only sightseeing everywhere, Hanoi also has accommodations with great services for you.
                    </p>
                    <button className="w-[120px] sm:w-[140px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 sm:py-2 rounded-lg text-sm">
                        Explore Now
                    </button>
                </div>
                <img
                    src={ImageHotel}
                    alt="Explore Top Travel Service"
                    className="w-full sm:w-[40%] h-[140px] sm:h-[160px] md:h-[180px] object-cover rounded-b-[8px] sm:rounded-b-none sm:rounded-r-[8px]"
                />
            </div>
        );
    };

    return (
        <>
            <Link to={"/"} className="border border-solid rounded-[8px] flex flex-col sm:flex-row relative p-3 sm:p-4 pb-[16px] sm:pb-[21px] group hover:cursor-pointer">
                <div className="w-full sm:w-[260px] md:w-[292px] h-[160px] sm:h-[180px] md:h-[200px] object-cover relative overflow-hidden rounded-[8px]">
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500"
                    />
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-4 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-base sm:text-lg md:text-[20px] font-bold text-[#1D2D53] group-hover:text-blue-500">
                                Times Corner Sorrento Boutique Hotel
                            </h2>
                        </div>

                        <div className="flex items-center mt-2 mb-3">
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

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <div className="flex flex-col gap-2">
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
                            <div className="w-full sm:w-[180px] md:w-[240px] mt-3 sm:mt-0 sm:ml-4">
                                <p className="text-xs sm:text-[14px] font-[Visit_qatar]">
                                    “I visited the lake while in Hanoi. Walked around and saw the important sites on the perimeter. I was surprised to see that the entire perimeter...”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row overflow-x-auto flex-nowrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <button className="h-8 sm:h-[36px] flex-shrink-0 bg-blue-500 border border-gray-300 rounded-full flex items-center justify-center text-[#ffffff] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
                            <span className="px-3 sm:px-4">See tickets</span>
                        </button>
                        <button className="h-8 sm:h-[36px] flex-shrink-0 bg-blue-500 border border-gray-300 rounded-full flex items-center justify-center text-[#ffffff] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
                            <span className="px-3 sm:px-4">Tour itinerary</span>
                        </button>
                    </div>
                </div>
            </Link>
            {index === 4 && <BannerItem />}
            {index === 8 && <img className="hidden sm:flex w-full rounded-[8px]" src={ExploreTopTravelService} />}
        </>
    );
};

const HotelCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row max-w-5xl mx-auto font-[Helvetica_Neue]">
            <div className="w-full sm:w-[260px] md:w-[292px] h-[160px] sm:h-[180px] md:h-[194px] flex-shrink-0">
                <img
                    src={image1}
                    alt="Times Corner Sorrento Boutique Hotel"
                    className="w-full h-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
                />
            </div>

            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                        Times Corner Sorrento Boutique Hotel - Free Hon Thom Cable Car & Aquatopia Water Park
                    </h2>

                    <div className="flex items-center mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    <div className="flex items-center mb-3 sm:mb-4">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-xs sm:text-sm mr-2">
                            9.2
                        </span>
                        <span className="text-blue-600 font-semibold text-xs sm:text-sm mr-2">Excellent</span>
                        <span className="text-gray-600 text-xs sm:text-sm">2 reviews</span>
                    </div>

                    <div className="flex items-start mb-3 sm:mb-4">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M180-4.95a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <span className="text-gray-700 text-xs sm:text-sm">221 Sorrento, An Thoi, Phu Quoc Island, Vietnam, 92500.</span>
                            <button className="text-blue-600 hover:underline text-xs sm:text-sm ml-1">View map</button>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                        <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            Spa & Wellness
                        </span>
                        <span className="bg-red-50 text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            Top Booked
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <img src={rejected} className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-2" />
                                <span className="text-teal-600 font-medium text-xs sm:text-sm">No advance payment</span>
                            </div>
                            <div className="flex items-center">
                                <img src={refund} className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-2" />
                                <span className="text-teal-600 font-medium text-xs sm:text-sm">Refundable</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-red-600 text-lg sm:text-xl">
                                US <span className="text-2xl sm:text-3xl">$916</span>
                            </div>
                            <div className="text-gray-600 text-xs sm:text-sm">
                                per night includes taxes & fees
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-end mt-4 sm:mt-6 justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                        View more
                    </button>
                </div>
            </div>
        </div>
    );
};