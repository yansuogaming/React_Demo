import { useEffect, useState } from "react";
import { fetchCurrentWeatherByCoords } from "@components/weathertrip/weatherApi";

const countryCurrencyMap = {
    Vietnam: {
        code: "VND",
        label: "VND - Vietnamese Dong",
        flag: "vn",
    },
    "United States": {
        code: "USD",
        label: "USD - US Dollar",
        flag: "us",
    },
    "United Arab Emirates": {
        code: "AED",
        label: "AED - UAE Dirham",
        flag: "ae",
    },
    Japan: {
        code: "JPY",
        label: "JPY - Japanese Yen",
        flag: "jp",
    },
    Thailand: {
        code: "THB",
        label: "THB - Thai Baht",
        flag: "th",
    },
    Germany: {
        code: "EUR",
        label: "EUR - Euro",
        flag: "de",
    },
    France: {
        code: "EUR",
        label: "EUR - Euro",
        flag: "fr",
    },
    UK: {
        code: "GBP",
        label: "GBP - British Pound",
        flag: "gb",
    },
};

const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [userCountry, setUserCountry] = useState(null);
    const [toCurrency, setToCurrency] = useState({
        code: "AED",
        label: "AED - UAE Dirham",
    });

    const isReady = amount !== "" && fromCurrency !== "";

    // Lấy quốc gia người dùng
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchCurrentWeatherByCoords(latitude, longitude).then(
                    (data) => {
                        const country = data?.location?.country;
                        setUserCountry(country);
                        if (countryCurrencyMap[country]) {
                            setToCurrency(countryCurrencyMap[country]);
                        }
                    }
                );
            },
            () => {
                const fallback = "United Arab Emirates";
                setUserCountry(fallback);
                setToCurrency(countryCurrencyMap[fallback]);
            }
        );
    }, []);

    // Lấy tỷ giá
    useEffect(() => {
        if (!fromCurrency || !toCurrency.code) return;

        fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.rates && data.rates[toCurrency.code]) {
                    setExchangeRate(data.rates[toCurrency.code]);
                } else {
                    setExchangeRate(null);
                }
            })
            .catch(() => setExchangeRate(null));
    }, [fromCurrency, toCurrency.code]);

    const handleConvert = () => {
        if (!isReady || !exchangeRate) return;
        const value = parseFloat(amount);
        if (!isNaN(value)) {
            setConvertedAmount((value * exchangeRate).toFixed(2));
        }
    };

    return (
        <section className="container p-6">
            <h1 className="text-[48px] font-[500] mb-2">Currency converter</h1>

            {userCountry === "Vietnam" && (
                <p className="text-gray-500 text-sm mb-4">
                    Hiển thị tiền tệ phù hợp cho Việt Nam
                </p>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-[500] text-[16px]">
                        Amount
                    </label>
                    <input
                        type="number"
                        className="w-full border px-4 py-2 rounded"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-[500] text-[16px]">
                        Currency
                    </label>
                    <select
                        className="w-full border px-4 py-2 rounded"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        <option value="">Select currency</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="USD">USD - US Dollar</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="VND">VND - Vietnamese Dong</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="THB">THB - Thai Baht</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2 font-[500] text-[16px]">
                        Converted amount
                    </label>
                    <input
                        type="text"
                        className="w-full border px-4 py-2 rounded bg-gray-100"
                        value={convertedAmount ? `${convertedAmount}` : ""}
                        disabled
                    />
                </div>

                <div>
                    <label className="block mb-2 font-[500] text-[16px]">
                        Currency
                    </label>
                    <div className="w-full border px-4 py-2 rounded bg-gray-100 flex items-center gap-2">
                        {toCurrency.flag && (
                            <img
                                src={`https://flagcdn.com/w40/${toCurrency.flag}.png`}
                                alt={toCurrency.code}
                                className="w-5 h-5 rounded-full object-cover"
                            />
                        )}
                        <span>{toCurrency.label}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={handleConvert}
                disabled={!isReady || !exchangeRate}
                className={`p-[15px_40px] rounded text-white shadow ${
                    isReady && exchangeRate
                        ? "bg-[#035E88] hover:bg-blue-600 hover:cursor-pointer"
                        : "bg-blue-300 cursor-not-allowed"
                }`}
            >
                Convert
            </button>
        </section>
    );
};

export default CurrencyConverter;
