const days = [
    { day: "Friday", high: "32.5°", low: "28.4°" },
    { day: "Saturday", high: "30.7°", low: "27.8°" },
    { day: "Sunday", high: "30.9°", low: "26°" },
    { day: "Monday", high: "31.3°", low: "27.1°" },
    { day: "Tuesday", high: "32.3°", low: "28.7°" },
    { day: "Wednesday", high: "33°", low: "29.3°" },
];

const WeatherForecast = () => (
    <div className="mb-10">
        <h3 className="font-semibold text-[#1A2A44] mb-4">This week</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {days.map((d, idx) => (
                <div
                    key={idx}
                    className="bg-gray-50 p-4 rounded-lg text-center"
                >
                    <p className="text-sm font-medium text-gray-700">{d.day}</p>
                    <div className="text-2xl text-pink-700 my-2">☀️</div>
                    <p className="text-lg font-bold text-[#1A2A44]">{d.high}</p>
                    <p className="text-sm text-gray-500">{d.low}</p>
                </div>
            ))}
        </div>
    </div>
);

export default WeatherForecast;
