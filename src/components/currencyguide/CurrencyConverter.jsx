import { useState } from "react";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const toCurrency = "AED - UAE Dirham";
    const exchangeRate = 3.96;

    const isReady = amount !== "" && fromCurrency !== "";

    const handleConvert = () => {
        if (!isReady) return;
        const value = parseFloat(amount);
        if (!isNaN(value)) {
            setConvertedAmount((value * exchangeRate).toFixed(2));
        }
    };

    return (
        <section className="container p-6">
            <h1 className="text-[48px] font-[500] mb-6">Currency converter</h1>

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
                        value={convertedAmount}
                        disabled
                    />
                </div>

                <div>
                    <label className="block mb-2 font-[500] text-[16px]">
                        Currency
                    </label>
                    <input
                        type="text"
                        className="w-full border px-4 py-2 rounded bg-gray-100"
                        value={toCurrency}
                        disabled
                    />
                </div>
            </div>

            <button
                onClick={handleConvert}
                disabled={!isReady}
                className={`p-[15px_40px] rounded text-white shadow ${
                    isReady
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
