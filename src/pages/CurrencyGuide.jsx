import { useTranslation } from "react-i18next";

import Breadcrumb from "@components/Breadcrumb";

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
            <div className="container mx-auto">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <section>
                    <h2 className="text-[56px] font-[700]">
                        Dubai Currency Guide
                    </h2>
                    <p className="text-[20px] font-[300] text-[#505050]">
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
            </div>
            <FAQ />
            <WeatherSubscribe />
        </main>
    );
};

export default CurrencyGuide;
