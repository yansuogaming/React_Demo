import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { fetchCurrentWeatherByCoords } from "@components/weathertrip/weatherApi";

import Breadcrumb from "@components/Breadcrumb";
import CurrencyConverter from "@components/currencyguide/CurrencyConverter";
import CostComparison from "@components/currencyguide/CostComparison";
import CurrencyFactSlider from "@components/currencyguide/CurrencyFactSlider";
import CurrencyImageSlider from "@components/currencyguide/CurrencyImageSlider";
import SpendSmarter from "@components/currencyguide/SpendSmarter";

import FAQ from "@components/FAQ";
import WeatherSubscribe from "@components/WeatherSubscribe";

const currencyDescriptions = {
    Vietnam: {
        heading: "Vietnam Currency Guide",
        intro: "Discover everything you need to know about the Vietnamese đồng (VND), from exchange tips to how to spend wisely in Vietnam.",
        detail: "The Vietnamese đồng is the official currency of Vietnam, with denominations ranging from coins to large banknotes...",
    },
    "United States": {
        heading: "United States Currency Guide",
        intro: "Learn how to manage your money while traveling in the United States...",
        detail: "The US dollar is one of the most widely used currencies in the world...",
    },
    // Thêm quốc gia khác tại đây
};

const CurrencyGuide = () => {
    const { t } = useTranslation();
    const [locationName, setLocationName] = useState("...");

    const defaultDescription = {
        heading: `${locationName} Currency Guide`,
        intro: `Get to know the currency used in ${locationName}, including exchange tips and spending advice.`,
        detail: `Explore how to exchange, spend, and manage your money while traveling in ${locationName}.`,
    };
    const description =
        currencyDescriptions[locationName] || defaultDescription;

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                fetchCurrentWeatherByCoords(latitude, longitude).then(
                    (data) => {
                        if (data && data.location && data.location.country) {
                            setLocationName(data.location.country);
                        }
                    }
                );
            },
            () => {
                // Nếu người dùng từ chối, fallback là Vietnam
                setLocationName("Vietnam");
            }
        );
    }, []);

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: `${locationName} Currency Guide` },
    ];
    return (
        <main>
            <section className="container mx-auto">
                <div>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </div>
                <section>
                    <h2 className="text-[56px] font-[700] mb-[20px]">
                        {description.heading}
                    </h2>
                    <p className="text-[20px] font-[300] text-[#505050] mb-[20px]">
                        {description.intro}
                    </p>
                    <p>{description.detail}</p>
                </section>
            </section>
            <CurrencyConverter />
            <CostComparison />
            <CurrencyFactSlider />
            <CurrencyImageSlider />
            <FAQ />
            <SpendSmarter />
            <WeatherSubscribe />
        </main>
    );
};

export default CurrencyGuide;
