import iconFilter from "@images/icon-filter.svg";
import { Checkbox } from "@ui/checkbox";
import toutItemImage from "@images/tourItem.png";
import providerImage from "@images/providerImage.png";
import { Clock, MapPin, Navigation } from "lucide-react";
import ExploreTopTravelService from "@images/ExploreTopTravelService.png";
import ImageHotel from '@images/img_hotel.png';
import { useEffect, useState } from "react";
import Pagination from "@components/pagination/pagination";
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
    <section className={`container ${className} flex flex-col gap-[30px] items-center lg:items-end`}>
      <MenuFilter />
      <div className="flex flex-col lg:flex-row gap-[30px] relative mt-[10px]">
        {/* Mobile filter button */}

        {/* Filter sidebar */}
        <div
          className={`
          fixed xl:relative top-0 left-0 h-full w-[80%] max-w-[300px] xl:w-auto
          bg-white xl:bg-transparent ${isFilterOpen ? "z-50" : "z-20"} transform transition-transform duration-300 ease-in-out
          ${isFilterOpen
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
            }
          p-4 xl:p-0 overflow-y-auto
        `}
        >

          <Filter onClose={() => setIsFilterOpen(false)} />
        </div>

        {/* Overlay */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black opacity-80 z-10 xl:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}
        <div className="mt-[10px]">
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
      <h1 className="text-[#1A2A44] font-bold text-[22px] md:text-[32px]">
        Hanoi Attractions
      </h1>
      <h1 className="text-[#1A2A44] text-[14px] md:text-[16px] mb-4">
        Pick a category to filter your recs
      </h1>
      <div className="flex flex-row overflow-x-auto flex-nowrap gap-4">
        {[
          { name: "Cultural tourism resources", count: 104 },
          { name: "Natural tourism resources", count: 122 },
          { name: "National-Level", count: 24 },
          { name: "Provincial-Level", count: 11 },
        ].map((category, index) => (
          <button
            key={index}
            className="h-[40px] flex-shrink-0 bg-white border border-gray-300 rounded-full flex items-center justify-center text-[#1A2A44] text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            <text className="px-5">
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
      <div style={{}} className="w-full lg:w-auto">
        <div className="w-full lg:min-w-[297px] mb-[24px] flex items-center justify-between font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[10px_15px]">
          <div className="flex gap-[12px] items-center">
            <img src={iconFilter} alt="Applied filters" />
            <h3>Applied filters</h3>
          </div>
          <button
            onClick={onClose}
            className="xl:hidden lg:pr-5 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div>
          <p className="text-[18px] font-bold mb-[16px]">Duration</p>
          <ul className="flex flex-col gap-[15px]">
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Full day
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />1 to 3 days
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />4 to 7 days
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                &gt; 7 days
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-[24px]" />
        <div>
          <p className="text-[18px] font-bold mb-[16px]">Departure point</p>
          <ul className="flex flex-col gap-[15px]">
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Hanoi
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Ho Chi Minh City
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Da Nang
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Phu Quoc
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-[24px]" />
        <div>
          <p className="text-[18px] font-bold mb-[16px]">Travel styles</p>
          <ul className="flex flex-col gap-[15px]">
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Festival & Events
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                In-depth Cultural
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Explorer
              </label>
            </li>
            <li>
              <label className="flex gap-[15px] items-center text-[16px] text-[#1A2A44]">
                <Checkbox />
                Hiking & Trekking
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-[24px]" />
        <div>
          <p className="text-[18px] font-bold mb-[16px]">Travel agency</p>
        </div>
        <input
          type="text"
          className="w-full rounded-[8px] border border-solid border-[#C8CBD0] p-[10px_15px] text-[16px] text-[#1A2A44]"
          placeholder="Search"
        />
        <img src={advertising} alt="Advertising" className="w-full mt-[32px] rounded-[8px]" />
      </div>
    </div>
  );
};

const ListTourResult = ({ listTour, setIsFilterOpen, isFilterOpen }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center mb-[24px]  py-[10px] gap-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="xl:hidden flex gap-[12px] font-bold bg-[#F6F6FA] text-[#1A2A44] rounded-[8px] p-[10px_15px] "
        >
          <img src={iconFilter} alt="Applied filters" />
        </button>
        <div className="flex gap-[12px] font-bold  ">
          <p className="font-medium text-lg leading-[21px] tracking-normal font-[Visit_Qatar] text-[#1A2A44]">
            {listTour?.length} results
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
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
      icon: <MapPin className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
      label: "Hanoi Old Quarter, Hoan Kiem, Hanoi",
      content: "",
    },
    {
      id: 2,
      icon: <Clock className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
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
          <span className="text-[14px] text-[#1A2A44]">{label}</span>{" "}
          <span>{content}</span>
          {extraButton && (
            <button className="text-[14px] font-normal text-blue-500">
              {extraButton}
            </button>
          )}
        </div>
      </div>
    );
  };

  const BannerItem = () => {
    return (
      <div className="w-full max-w-[950px] mx-auto rounded-[8px] bg-gray-100 flex flex-col lg:flex-row justify-between overflow-hidden">
        {/* Content Section */}
        <div className="w-full lg:w-[538px] flex flex-col justify-center p-6 lg:p-8 order-2 lg:order-1">
          <h2 className="text-black font-bold text-[20px] sm:text-[24px] lg:text-[28px] mb-2 font-[Visit_Qatar]">
            Explore Top Travel Service
          </h2>
          <p className="text-black text-[14px] sm:text-[16px] mb-4 font-[Visit_Qatar]">
            Not only sightseeing everywhere, Hanoi also has accommodations with great services for you.
          </p>
          <button className="w-full sm:w-[150px] bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg font-[Visit_Qatar] transition-colors duration-200">
            Explore Now
          </button>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-[412px] h-[200px] sm:h-[218px] order-1 lg:order-2">
          <img
            src={ImageHotel}
            alt="Explore Top Travel Service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Link 
        to={"/"} 
        className="w-full border border-solid rounded-[8px] rounded-tl-[60px] flex flex-col lg:flex-row relative p-4 sm:p-[16px] pb-[21px] group hover:cursor-pointer transition-all duration-300 hover:shadow-lg"
      >
        {/* Image Section */}
        <div className="w-full lg:w-[292px] h-[200px] sm:h-[230px] lg:h-[230px] relative overflow-hidden">
          <img
            src={item?.image || "/api/placeholder/292/230"}
            alt={item?.title || "Tour image"}
            loading="lazy"
            className="w-full h-full object-cover rounded-tl-[60px] group-hover:scale-[1.1] transition-all duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="mt-4 lg:mt-0 lg:ml-[19px] flex-1 flex flex-col justify-between">
          <div>
            {/* Title and Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1D2D53] group-hover:text-blue-500 font-[Visit_Qatar] transition-colors duration-200">
                Old Quarter
              </h2>
              <div className="flex flex-row gap-2">
                <span className="border border-gray-300 bg-white rounded-3xl px-3 py-1 text-sm text-[#1A2A44] font-[Visit_Qatar]">
                  Video
                </span>
                <span className="border border-gray-300 bg-white rounded-3xl px-3 py-1 text-sm text-[#1A2A44] font-[Visit_Qatar]">
                  VR
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-[8px] mb-[16px]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-[14px] font-normal mt-[2px] font-[Visit_Qatar]">
                4.5 (1411)
              </span>
            </div>

            {/* Tour Details and Description */}
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-[40px]">
              {/* Tour Details */}
              <div className="flex flex-col gap-2 flex-shrink-0">
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
              
              {/* Description - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block xl:w-[300px]">
                <p className="text-[14px] font-[Visit_Qatar] text-gray-700 italic">
                  "I visited the lake while in Hanoi. Walked around and saw the important sites on the perimeter. I was surprised to see that the entire perimeter..."
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 lg:mt-0">
            <button className="w-full sm:w-auto h-[40px] bg-blue-500 hover:bg-blue-600 border border-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium transition-colors duration-200 font-[Visit_Qatar]">
              <span className="px-5">See tickets</span>
            </button>
            <button className="w-full sm:w-auto h-[40px] bg-blue-500 hover:bg-blue-600 border border-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium transition-colors duration-200 font-[Visit_Qatar]">
              <span className="px-4">Tour itinerary</span>
            </button>
          </div>
        </div>
      </Link>

      {/* Conditional Banner and Image */}
      {index === 4 && (
        <div className="mt-6 mb-6">
          <BannerItem />
        </div>
      )}
      {index === 8 && (
        <div className="mt-6 mb-6">
          <img 
            className="w-full max-w-[950px] mx-auto rounded-[8px]" 
            src={ExploreTopTravelService}
            alt="Explore Top Travel Service"
          />
        </div>
      )}
    </>
  );
};
