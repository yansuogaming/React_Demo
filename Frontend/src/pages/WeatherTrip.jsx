/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import WeatherSection from "@components/weathertrip/WeatherSection";
import WeatherForecast from "@components/weathertrip/WeatherForecast";
import WeatherTabs from "@components/weathertrip/WeatherTabs";
import WinterTrip from "@components/weathertrip/WinterTrip";
import WinterTipsBox from "@components/weathertrip/WinterTipsBox";
import WinterCarousel from "@components/weathertrip/WinterCarousel";
import WinterLinkCarousel from "@components/weathertrip/WinterLinkCarousel";
import SummerTrip from "@components/weathertrip/SummerTrip";
import SummerTipsBox from "@components/weathertrip/SummerTipsBox";
import SummerCarousel from "@components/weathertrip/SummerCarousel";
import SummerLinkCarousel from "@components/weathertrip/SummerLinkCarousel";
import BestTimeToVisit from "@components/weathertrip/BestTimeToVisit";
import MonthlyActivities from "@components/weathertrip/MonthlyActivities";
import FAQ from "@components/FAQ";
import StartPlanningSection from "@components/StartPlanningSection";
import WeatherSubscribe from "@components/WeatherSubscribe";
import { useLoaderData } from "react-router";

const WeatherTrip = () => {
    const { weather } = useLoaderData();
    const { t } = useTranslation();
    const [locationName, setLocationName] = useState("...");

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: `Weather in ${locationName}` },
    ];
    return (
        <main>
            <div className="container mx-auto">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <WeatherSection onLocationChange={setLocationName} />
                <WeatherForecast />
                <WeatherTabs />

                <WinterTrip />
                <WinterTipsBox />
                <WinterCarousel />
                <WinterLinkCarousel />

                <SummerTrip />
                <SummerTipsBox />
                <SummerCarousel />
                <SummerLinkCarousel />

                <BestTimeToVisit />
                <MonthlyActivities />
                <FAQ />
                <StartPlanningSection />
            </div>
            <WeatherSubscribe />
        </main>
    );
};

export default WeatherTrip;
