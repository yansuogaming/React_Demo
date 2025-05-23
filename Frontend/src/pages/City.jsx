import Breadcrumb from "@components/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import VietNamEvent from "@components/VietNamEvent";
import Weather from "@components/Weather";
import TopThingsToDo from "@components/TopThingsToDo";
import PlainYourTrip from "@components/PlainYourTrip";
import ExperienceActivities from "@components/ExperienceActivities";
import Impressions from "@components/Impressions";
import FAQ from "@components/FAQ";
import OtherRegion from "@components/OtherRegion";
import Share from "@components/Share";
import HeroSection from "@components/HeroSection";
import { lazy, useState } from "react";
import { cn } from "@lib/utils";
const MapCity = lazy(() => import("@components/city/Map"));

const City = () => {
  const { t } = useTranslation();
  const { FAQs, events, weather, city, dataDestination } = useLoaderData();
  const [tab, setTab] = useState("welcome");

  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("Destinations"), href: "/" },
    { label: city.title },
  ];

  return (
    <main>
      <HeroSection title={city.title} image={city.banner} showArrowDown={true}>
        <div
          className="text-center text-[20px] font-normal w-full truncate_3"
          dangerouslySetInnerHTML={{ __html: city.intro }}
        ></div>
      </HeroSection>
      {/* Overview city */}
      <section className="container">
        <Breadcrumb className="mb-[60px] mt-[30px]" items={breadcrumdItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          <div className="lg:col-span-2">
            <div className="flex gap-[10px] mb-[35px] overflow-x-auto scrollbar-hide">
              <button
                className={cn(
                  'cursor-pointer whitespace-nowrap p-[8px_16px] rounded-[80px]',
                  tab === "welcome" ? "bg-white text-[#007BFF] border-[#007BFF]" : "bg-[#ECECF1] text-[#64646D]",
                  'hover:border-[#007BFF] border-[1px]',
                  'hover:text-[#007BFF] hover:bg-white'
                )}
                onClick={() => setTab("welcome")}
              >
                Welcome
              </button>
              <button
                className={cn(
                  'cursor-pointer whitespace-nowrap p-[8px_16px] rounded-[80px]',
                  tab === "getting_to" ? "bg-white text-[#007BFF] border-[#007BFF]" : "bg-[#ECECF1] text-[#64646D]",
                  'hover:border-[#007BFF] border-[1px]',
                  'hover:text-[#007BFF] hover:bg-white'
                )}
                onClick={() => setTab("getting_to")}
              >
                Getting to Hanoi
              </button>
              <button
                className={cn(
                  'cursor-pointer whitespace-nowrap p-[8px_16px] rounded-[80px]',
                  tab === "when_to_visit" ? "bg-white text-[#007BFF] border-[#007BFF]" : "bg-[#ECECF1] text-[#64646D]",
                  'hover:border-[#007BFF] border-[1px]',
                  'hover:text-[#007BFF] hover:bg-white'
                )}
                onClick={() => setTab("when_to_visit")}
              >
                When to visit
              </button>
              <button
                className={cn(
                  'cursor-pointer whitespace-nowrap p-[8px_16px] rounded-[80px]',
                  tab === "accessibility" ? "bg-white text-[#007BFF] border-[#007BFF]" : "bg-[#ECECF1] text-[#64646D]",
                  'hover:border-[#007BFF] border-[1px]',
                  'hover:text-[#007BFF] hover:bg-white'
                )}
                onClick={() => setTab("accessibility")}
              >
                Accessibility
              </button>
            </div>
            <div
              className={`text-[#1A2A44] text-[16px] lg:text-[18px] ${tab === "welcome" ? "" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: city.content }}
            ></div>
            <div
              className={`text-[#1A2A44] text-[16px] lg:text-[18px] ${tab === "getting_to" ? "" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: city.content_getting_to }}
            ></div>
            <div
              className={`text-[#1A2A44] text-[16px] lg:text-[18px] ${tab === "when_to_visit" ? "" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: city.content_when_to_visit }}
            ></div>
            <div
              className={`text-[#1A2A44] text-[16px] lg:text-[18px] ${tab === "accessibility" ? "" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: city.content_accessibility }}
            ></div>
          </div>
          <MapCity listDestination={dataDestination.list_resources} />
        </div>
      </section>

      <Weather data={weather} />
      <TopThingsToDo className="mt-[120px]" />
      <VietNamEvent
        data={events}
        className="mt-[80px] bg-[#F5F6FA] py-[80px]"
      />
      <ExperienceActivities className="mt-[120px]" />
      <Impressions className="mt-[120px]" />
      <PlainYourTrip className="mt-[120px]" />
      <FAQ data={FAQs} className="mt-[120px]" />
      <OtherRegion className="mt-[120px]" />
      <Share color="#007BFF" className="mt-[60px] lg:mt-[120px]" />
    </main>
  );
};

export default City;
