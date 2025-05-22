import imageCity from "@images/hanoi.png";
import Breadcrumb from "@components/Breadcrumb";
import { useTranslation } from "react-i18next";
import { NavLink, useLoaderData } from "react-router";
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
import MapCity from "@components/city/Map";

const City = () => {
  const { t } = useTranslation();
  const { FAQs, events, weather, city, dataDestination } = useLoaderData();

  const breadcrumdItems = [
    { label: t("home"), href: "/" },
    { label: t("Destinations"), href: "/" },
    { label: "Hanoi" },
  ];

  return (
    <main>
      <HeroSection title={city.title} image={imageCity} showArrowDown={true}>
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
              <NavLink
                className="whitespace-nowrap p-[8px_16px] border-[#007BFF] border-[1px] rounded-[80px] text-[#007BFF]"
                href="/"
              >
                Welcome
              </NavLink>
              <NavLink
                className="whitespace-nowrap p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]"
                href="/"
              >
                Getting to Hanoi
              </NavLink>
              <NavLink
                className="whitespace-nowrap p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]"
                href="/"
              >
                When to visit
              </NavLink>
              <NavLink
                className="whitespace-nowrap p-[8px_16px] bg-[#ECECF1] rounded-[80px] text-[#64646D]"
                href="/"
              >
                Accessibility
              </NavLink>
            </div>
            <div
              className="text-[#1A2A44] text-[16px] lg:text-[18px]"
              dangerouslySetInnerHTML={{ __html: city.intro }}
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
