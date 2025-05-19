import { useTranslation } from "react-i18next";

import Breadcrumb from "@components/Breadcrumb";
import CurrencyConverter from "@components/currencyguide/CurrencyConverter";
import CostComparison from "@components/currencyguide/CostComparison";
import CurrencyFactSlider from "@components/currencyguide/CurrencyFactSlider";

import FAQ from "@components/FAQ";
import WeatherSubscribe from "@components/WeatherSubscribe";

const CurrencyGuide = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: "Dubai Currency Guide" },
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
                        Dubai Currency Guide
                    </h2>
                    <p className="text-[20px] font-[300] text-[#505050] mb-[20px]">
                        All you need to know about the dirham, from exchange
                        rates to helpful tips.
                    </p>
                    <p className="">
                        The dirham (AED) is the official currency of Dubai, as
                        well as the UAE's six other emirates. Celebrating its
                        50th anniversary in 2023, the currency is pegged at
                        AED3.67 to the US dollar. Here's our comprehensive guide
                        to getting the most out of your money in Dubai, from
                        everyday price point comparisons to common visitor
                        queries. You can also familiarise yourself with the
                        coins and banknotes, and the artworks displayed upon
                        them that celebrate the UAE's rich history and culture.
                        And finally, use the currency converter to check the
                        latest exchange rates with other global currencies, such
                        as the Indian rupee, the Pakistani rupee and the British
                        pound.
                    </p>
                </section>
            </section>
            <CurrencyConverter />
            <CostComparison />
            <CurrencyFactSlider />
            <FAQ />
            <WeatherSubscribe />
        </main>
    );
};

export default CurrencyGuide;
