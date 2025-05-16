import { useTranslation } from "react-i18next";

import Breadcrumb from "@components/Breadcrumb";

import WeatherSection from "@components/weathertrip/WeatherSection";
import WeatherForecast from "@components/weathertrip/WeatherForecast";
import WeatherTabs from "@components/weathertrip/WeatherTabs";
import WinterTrip from "@components/weathertrip/WinterTrip";
import WinterTipsBox from "@components/weathertrip/WinterTipsBox";
import SummerCarousel from "@components/weathertrip/SummerCarousel";
import SummerLinkCarousel from "@components/weathertrip/SummerLinkCarousel";
import BestTimeToVisit from "@components/weathertrip/BestTimeToVisit";
import MonthlyActivities from "@components/weathertrip/MonthlyActivities";
import FAQ from "@components/FAQ";
import StartPlanningSection from "@components/StartPlanningSection";
import WeatherSubscribe from "@components/WeatherSubscribe";

const WeatherTrip = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: "Weather in Hanoi" },
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
                <WeatherSection />
                <WeatherForecast />
                <WeatherTabs />
                <WinterTrip />
                <WinterTipsBox />
                <SummerCarousel />
                <SummerLinkCarousel />
                <BestTimeToVisit />
                <MonthlyActivities />
                <FAQ />
                <StartPlanningSection />
                <WeatherSubscribe />
            </div>
        </main>
    );
};

export default WeatherTrip;
