import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import VisaSvg from "@images/visa.svg";
import plane from "@images/plane.svg";
import map from "@images/map.svg";
import tower from "@images/tower.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "@components/Breadcrumb";
import imageCity from "@images/hanoi.png";
import HeroSection from "@components/HeroSection";
import Reveal from "@components/animation/Reveal";
import { FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";

// Visa Free Entry Section Component
const VisaFreeSection = () => {
  return (
    <>
      <h1 className="mb-6 text-center text-6xl font-light text-teal-700">
        Visa-free entry or
        <br />
        e-visa
      </h1>

      <p className="mb-8 text-2xl text-center text-gray-700">
        Travellers from 102 countries can enter visa-free, while others can
        easily
        <br />
        apply for an e-visa through the E-Visa platform. Check if you qualify
        for visa-
        <br />
        free entry or need an e-visa.
      </p>

      <div className="mb-12">
        <p className="mb-2 text-center text-sm text-gray-500">
          What is your nationality or your passport?
        </p>
        <div className="mx-auto max-w-md">
          <div className="relative">
            <select className="w-full appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 text-gray-700 shadow-sm focus:border-teal-500 focus:outline-none">
              <option>Chọn quốc tịch của bạn</option>
              <option value="vietnam">Việt Nam</option>
              <option value="usa">Hoa Kỳ</option>
              <option value="japan">Nhật Bản</option>
              <option value="korea">Hàn Quốc</option>
              <option value="china">Trung Quốc</option>
              <option value="thailand">Thái Lan</option>
              <option value="singapore">Singapore</option>
              <option value="malaysia">Malaysia</option>
              <option value="australia">Úc</option>
              <option value="uk">Vương Quốc Anh</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// First Time Visiting Section Component
const FirstTimeSection = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-4 text-center text-5xl font-light text-teal-700">
        Is it your first time visiting Viet Nam?
      </h2>
      <p className="mb-8 text-center text-xl text-gray-700">
        Viet Nam Tourism is dedicated to welcome you to Viet Nam. Find all the
        info you need to make the
        <br />
        most of your stay.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src="https://asiapioneertravel.com/wp-content/uploads/2017/07/family-shopping-at-Ben-Thanh-Market.jpg"
            alt="Shopping in VietNam"
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-xl font-medium">Shopping in VietNam</h3>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img
            src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FW3Iz4WACAy2J0qT0cCT3xA%2Fdidi%2Farticles%2Fd635k67kaa5scl9g81i53ykt%2Fpublic&w=1920&q=75"
            alt="Hamad International Airport"
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-xl font-medium">
              Noi Bai International Airport
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Travel Plan Section Component
const TravelPlanSection = () => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-2 text-3xl font-light text-teal-700">
        Complete your travel plan
      </h2>
      <p className="mb-6 text-lg text-gray-700">
        Book a hotel and plan your activities in Viet Nam
      </p>
      <Button className="bg-[#7d002a] hover:bg-[#5f0020] py-5">Book now</Button>
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center text-5xl font-light text-teal-700">
        Frequently asked questions about Viet Nam visas
      </h2>

      <div className="mx-auto grid grid-cols-2 mt-20">
        <div className="mb-4">
          <h3 className="text-3xl text-teal-700">Frequently Asked Questions</h3>
        </div>

        <div className="border-t border-gray-200">
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Mandatory Health Insurance</span>
              <Plus className="h-5 w-5 text-teal-700" />
            </div>
          </div>
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Visa-Free Entry</span>
              <Plus className="h-5 w-5 text-teal-700" />
            </div>
          </div>
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">
                Viet Nam Visitor Entry Tourist Visa
              </span>
              <Plus className="h-5 w-5 text-teal-700" />
            </div>
          </div>
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Viet Nam Transit Visa</span>
              <Plus className="h-5 w-5 text-teal-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About E-Visa Section Component
const AboutEVisaSection = () => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-6 text-4xl font-light text-teal-700">About E-Visa</h2>
      <p className="mx-auto mb-4 max-w-4xl text-lg leading-relaxed text-gray-700">
        The "E-Visa" platform is a comprehensive digital service that serves the
        citizens and residents of Viet Nam alike. Available through the website
        and the mobile app, E-Visa is Viet Nam's "e-key platform" offers a
        variety of services, such as e-visa applications, fan ID/E-Visa card
        issuance, including Tourism, Business, Family Visit, and GCC Residents
        visas. The platform also offers a variety of other services, such as
        event registration, transportation, and accommodation.
      </p>
      <p className="mb-6 text-lg text-gray-700">
        Check here to apply for your type of visa:
      </p>
      <Button
        onClick={() => {
          window.open("https://evisa.gov.vn/", "_blank");
        }}
        className="bg-[#7d002a] hover:bg-[#5f0020] py-5"
      >
        Apply for visa
      </Button>
    </div>
  );
};
// Things to know section Component
const ThingsToKnowSection = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-10 text-center text-3xl font-light text-teal-700">
        Things to know before travelling
      </h2>

      <Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-35 w-35 items-center justify-center rounded-full border-2 border-teal-100 p-3">
                <img src={VisaSvg} alt="Visas icon" width={140} height={140} />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium text-teal-700">Visas</h3>
            <p className="mb-4 text-sm text-gray-600">
              Check if you need a Visa or if you're eligible for visa-free entry
            </p>
            <a href="#" className="text-sm text-teal-700 hover:underline">
              Read more
            </a>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-35 w-35 items-center justify-center rounded-full border-2 border-teal-100 p-3">
                <img src={plane} alt="Visas icon" width={140} height={140} />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium text-teal-700">
              Getting here
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Discover how to get to Viet Nam by air, land or sea
            </p>
            <a href="#" className="text-sm text-teal-700 hover:underline">
              Read more
            </a>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-35 w-35 items-center justify-center rounded-full border-2 border-teal-100 p-3">
                <img src={map} alt="Visas icon" width={140} height={140} />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium text-teal-700">
              Travel tips
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Make the most of your stay with our travel tips
            </p>
            <a href="#" className="text-sm text-teal-700 hover:underline">
              Read more
            </a>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-35 w-35 items-center justify-center rounded-full border-2 border-teal-100 p-3">
                <img src={tower} alt="Visas icon" width={140} height={140} />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-medium text-teal-700">
              Getting around
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Discover all the transportation options available in Viet Nam
            </p>
            <a href="#" className="text-sm text-teal-700 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

// Video Section Component
const VideoSection = () => {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  console.log("iframeRef: ", iframeRef);

  return (
    <div className="mb-16">
      <Reveal>
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg shadow-lg">
          {isPlaying ? (
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full border-0 z-10"
              src="https://www.youtube.com/embed/SrqPSxkCNFI?si=CJL69ZgrJupBwrX6&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ) : (
            <>
              <img
                src="https://a.tcnn.vn//Images/images/images5452377_DJI_0724.jpg"
                alt="Vietnam"
                className="w-full h-full object-cover"
              ></img>
              <button
                onClick={handlePlayVideo}
                className="absolute top-8 overflow-hidden group right-8 w-15 h-15 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition z-20 before:absolute before:inset-0 before:bg-[#035E88] before:origin-right before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200 before:-z-10"
              >
                <FaPlay className="text-sm w-5 h-5 group-hover:text-white" />
              </button>
            </>
          )}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </Reveal>
    </div>
  );
};

export default function VisaGuide() {
  const { t } = useTranslation();
  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("plan_your_trip"), href: "/" },
    { label: t("visa_guide"), href: "/" },
  ];
  return (
    <main className="bg-white ">
      <HeroSection image={imageCity} showArrowDown={true} />
      <div className="container">
        <Breadcrumb
          className="p-[16px_40px_28px_0] text-[14px]"
          items={breadcrumdItems}
        />
        <div className="container mx-auto px-4 py-8">
          <VisaFreeSection />
          <FirstTimeSection />
          <TravelPlanSection />
          <FAQSection />
          <AboutEVisaSection />
          <VideoSection />
          <ThingsToKnowSection />
        </div>
      </div>
    </main>
  );
}
