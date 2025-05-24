import { useEffect, useState } from "react";
import { fetchCurrentWeatherByCoords } from "@components/weathertrip/weatherApi";

const costData = [
    { item: "A short taxi ride", usd: 4.08 },
    { item: "A one-day waterpark ticket (adult)", usd: 78.97 },
    { item: "A cup of coffee", usd: 4.9 },
    { item: "A small bottle of water", usd: 0.41 },
    { item: "A Dubai Metro one-day standard pass (adult)", usd: 5.45 },
];

const countryCurrencyMap = {
    Vietnam: "VND",
    "United States": "USD",
    "United Arab Emirates": "AED",
    Japan: "JPY",
    Thailand: "THB",
    Germany: "EUR",
    France: "EUR",
    UK: "GBP",
};

const CostComparison = () => {
    const [userCurrencyCode, setUserCurrencyCode] = useState("USD");
    const [exchangeRate, setExchangeRate] = useState(1);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const data = await fetchCurrentWeatherByCoords(
                    latitude,
                    longitude
                );
                const country = data?.location?.country || "United States";
                const currencyCode = countryCurrencyMap[country] || "USD";
                setUserCurrencyCode(currencyCode);

                try {
                    const res = await fetch(
                        `https://open.er-api.com/v6/latest/USD`
                    );
                    const rateData = await res.json();
                    const rate = rateData?.rates?.[currencyCode];
                    if (rate) setExchangeRate(rate);
                } catch {
                    setExchangeRate(1);
                }
            },
            () => {
                // fallback nếu bị từ chối quyền truy cập
                setUserCurrencyCode("USD");
                setExchangeRate(1);
            }
        );
    }, []);

    const format = (value, currency) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
            maximumFractionDigits: 2,
        }).format(value);

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-[32px] font-[500] mb-2">Cost comparisons</h2>
            <p className="text-[16px] font-[300] text-[#505050] mb-6">
                A few reference points for everyday spending.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-1">
                    <thead>
                        <tr className="text-left text-sm font-medium border-b">
                            <th className="py-2 pr-4">
                                ITEM
                                <br />
                                (GUIDE PRICE)
                            </th>
                            <th className="py-2 px-4">
                                USD
                                <br />
                                (base)
                            </th>
                            <th className="py-2 px-4">
                                {userCurrencyCode}
                                <br />
                                (est.)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {costData.map((row, idx) => (
                            <tr
                                key={idx}
                                className={idx % 2 !== 0 ? "bg-gray-100" : ""}
                            >
                                <td className="py-3 pr-4">{row.item}</td>
                                <td className="py-3 px-4">
                                    {format(row.usd, "USD")}
                                </td>
                                <td className="py-3 px-4">
                                    {exchangeRate
                                        ? format(
                                              row.usd * exchangeRate,
                                              userCurrencyCode
                                          )
                                        : "Loading..."}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CostComparison;
