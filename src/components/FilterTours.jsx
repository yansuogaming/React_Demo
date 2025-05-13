import iconFilter from "@images/icon-filter.svg";
import { Checkbox } from "@ui/checkbox";
import toutItemImage from "@images/tourItem.png";
import providerImage from "@images/providerImage.png";
import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import ExploreTopTravelService from "@images/ExploreTopTravelService.png";
import { useEffect, useState } from "react";
import Pagination from "./pagination/pagination";
import advertising from "@images/advertising.png";

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
};

const FilterTours = ({ className = "" }) => {
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
      <div className="flex flex-col lg:flex-row gap-[30px] relative">
        {/* Mobile filter button */}

        {/* Filter sidebar */}
        <div
          className={`
          fixed xl:relative top-0 left-0 h-full w-[80%] max-w-[300px] xl:w-auto
          bg-white xl:bg-transparent ${isFilterOpen?"z-50":"z-20"} transform transition-transform duration-300 ease-in-out
          ${
            isFilterOpen
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

        <ListTourResult
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          listTour={Array(10).fill(nileCruisePackage)}
        />

        
      </div>
      <Pagination/>
    </section>
  );
};

export default FilterTours;

const Filter = ({ onClose }) => {
  return (
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
        <img src={advertising} alt="Advertising" className="w-full mt-[32px] rounded-[8px]"/>
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
      icon: <Navigation className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
      label: "Places to visit:",
      content: "Cairo, Giza, Luxor,",
      extraButton: "+ 2 more",
    },
    {
      id: 2,
      icon: <MapPin className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
      label: "Start:",
      content: "Hanoi, Vietnam",
    },
    {
      id: 3,
      icon: <Clock className="w-4 h-4 mt-1 text-gray-600 flex-shrink-0" />,
      label: "Duration:",
      content: "3 days 2 nights",
    },
  ];
  const TourDetailItem = ({ icon, label, content, extraButton }) => {
    return (
      <div className="flex items-start gap-2">
        {icon}
        <div>
          <span className="text-[14px] font-bold text-[#1A2A44]">{label}</span>{" "}
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
  return (
    <>
      <div className="border border-solid rounded-[8px] rounded-tl-[60px] flex flex-col md:flex-row relative p-[16px] pb-[21px]">
        <div className="w-full md:w-[292px] h-[194px] object-cover  relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-tl-[60px]"
          />

          <img
            src={item.providerImage}
            alt={item.title}
            className="w-[85px] h-[48px] absolute left-[12px] bottom-[12px] object-cover rounded-br-[4px] px-[12px] py-[10px] bg-white"
          />
        </div>

        {/* Right side - Package details */}
        <div className="mt-4 md:mt-0 md:ml-[19px] flex-1 flex flex-col justify-between">
          <div className="">
            {/* Title */}
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#1D2D53]">
              Pharaohs Nile Cruise Adventure - Return Flights Included
            </h2>

            {/* Rating */}
            <div className="flex items-center mt-[8px] mb-[16px]">
              <div className="flex ">
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
              <span className="ml-2 text-[14px] font-normal mt-[2px]">
                4.5 (1411)
              </span>
            </div>

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
          </div>

          {/* Price and button */}
          <div className="flex flex-col items-center lg:items-end justify-between mt-6 md:items-start lg:absolute lg:right-5 lg:bottom-5">
            <div className="text-center md:text-left lg:text-right mb-2">
              <div className="text-[14px] text-[#494951] font-normal">from</div>
              <div className="text-[20px] text-[#C81E3A] font-bold">
                US $916
              </div>
              <div className="text-[14px] text-[#494951] font-normal">
                includes taxes & fees
              </div>
            </div>
            <button className="w-full lg:w-auto bg-[#007BFF] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg">
              Detail tour
            </button>
          </div>
        </div>
      </div>
      {index === 4 && <img src={ExploreTopTravelService} />}
    </>
  );
};
