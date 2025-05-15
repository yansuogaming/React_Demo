import { useTranslation } from "react-i18next";

import Breadcrumb from "@components/Breadcrumb";
// import FAQ from "@components/FAQ";
// import EmiratesBookingBox from "@components/EmiratesBookingBox";
// import WeatherSubscribe from "@components/WeatherSubscribe";

import WeatherSection from "@components/weathertrip/WeatherSection";
import WeatherForecast from "@components/weathertrip/WeatherForecast";
import WeatherTabs from "@components/weathertrip/WeatherTabs";
import WinterTrip from "@components/weathertrip/WinterTrip";

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
            </div>
        </main>
    );
};

export default WeatherTrip;
