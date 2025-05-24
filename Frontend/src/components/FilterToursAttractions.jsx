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
import advertising from "@images/advertising.png";
import { Link } from "react-router";

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

const FilterToursAttractions = ({ className = "" }) => {
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
          <ListTourResult
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

export default FilterToursAttractions;

const MenuFilter = () => {
  return (
    <div className="w-full">
      <h1 className="text-[#1A2A44] font-bold text-lg sm:text-2xl lg:text-[32px]">
        Hanoi Attractions
      </h1>
      <h1 className="text-[#1A2A44] text-sm sm:text-base lg:text-[16px] mb-3 sm:mb-4">
        Pick a category to filter your recs
      </h1>
      <div className="flex flex-row overflow-x-auto flex-nowrap gap-2 sm:gap-4">
        {[
          { name: "Cultural tourism resources", count: 104 },
          { name: "Natural tourism resources", count: 122 },
          { name: "National-Level", count: 24 },
          { name: "Provincial-Level", count: 11 },
        ].map((category, index) => (
          <button
            key={index}
            className="h-8 sm:h-[40px] flex-shrink-0 bg-white border border-gray-300 rounded-full flex items-center justify-center text-[#1A2A44] text-xs sm:text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            <text className="px-3 sm:px-5">
              {`${category.name} (${category.count})`}
            </text>
          </button>
        ))}
      </div>
    </div>
  )
}

const Filter = ({ onClose }) => {
  return (
    <div>
      <div className="w-full lg:w-auto">
        <div className="w-full lg:min-w-[297px] mb-4 sm:mb-[24px] flex items-center justify-between font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px]">
          <div className="flex gap-2 sm:gap-[12px] items-center">
            <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base">Applied filters</h3>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden pr-3 sm:pr-5 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div>
          <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px]">Duration</p>
          <ul className="flex flex-col gap-3 sm:gap-[15px]">
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                Full day
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />1 to 3 days
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />4 to 7 days
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                 7 days
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-4 sm:my-[24px]" />
        <div>
          <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px]">Departure point</p>
          <ul className="flex flex-col gap-3 sm:gap-[15px]">
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
          </ul>
        </div>
        <hr className="my-4 sm:my-[24px]" />
        <div>
          <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px]">Travel styles</p>
          <ul className="flex flex-col gap-3 sm:gap-[15px]">
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                Festival & Events
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                In-depth Cultural
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                Explorer
              </label>
            </li>
            <li>
              <label className="flex gap-3 sm:gap-[15px] items-center text-sm sm:text-[16px] text-[#1A2A44]">
                <Checkbox />
                Hiking & Trekking
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-4 sm:my-[24px]" />
        <div>
          <p className="text-base sm:text-[18px] font-bold mb-3 sm:mb-[16px]">Travel agency</p>
        </div>
        <input
          type="text"
          className="w-full rounded-[8px] border border-solid border-[#C8CBD0] p-[8px_12px] sm:p-[10px_15px] text-sm sm:text-[16px] text-[#1A2A44]"
          placeholder="Search"
        />
        <img src={advertising} alt="Advertising" className="w-full mt-4 sm:mt-[32px] rounded-[8px]" />
      </div>
    </div>
  );
};

const ListTourResult = ({ listTour, setIsFilterOpen, isFilterOpen }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center mb-4 sm:mb-[24px] py-2 sm:py-[10px] gap-2 sm:gap-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex gap-2 sm:gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[8px_12px] sm:p-[10px_15px]"
        >
          <img src={iconFilter} alt="Applied filters" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="flex gap-2 sm:gap-[12px] font-bold">
          <p className="font-medium text-base sm:text-lg leading-[21px] tracking-normal font-[Visit_Qatar] text-[#1A2A44]">
            {listTour?.length} results
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
        {listTour.map((item, index) => {
          return <TourItem key={index} item={item} index={index} />;
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
      <Link to={"/"} className="border border-solid rounded-[8px] rounded-tl-[60px] flex flex-col md:flex-row relative p-3 sm:p-4 md:p-[16px] pb-[16px] sm:pb-[21px] group hover:cursor-pointer">
        <div className="w-full md:w-[292px] h-[180px] sm:h-[200px] md:h-[230px] object-cover relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-tl-[60px] group-hover:scale-[1.1] transition-all duration-500"
          />
        </div>

        {/* Right side - Package details */}
        <div className="mt-3 sm:mt-4 md:mt-0 md:ml-[19px] flex-1 flex flex-col justify-between">
          <div>
            {/* Title */}
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-base sm:text-lg md:text-[20px] font-bold text-[#1D2D53] group-hover:text-blue-500">
                Old Quarter
              </h2>
              <div className="flex flex-row gap-2">
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
              </div>
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