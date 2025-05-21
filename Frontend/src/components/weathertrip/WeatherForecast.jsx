import { useEffect, useState } from "react";
import { fetchWeatherForecastByCoords } from "@components/weathertrip/weatherApi";

const WeatherForecast = () => {
    const [forecastDays, setForecastDays] = useState([]);

    const fetchForecast = async (lat, lon) => {
        const data = await fetchWeatherForecastByCoords(lat, lon, 7);
        if (data) {
            setForecastDays(data.forecast.forecastday.slice(0, 6));
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                fetchForecast(latitude, longitude);
            },
            () => {
                // fallback to Dubai
                fetchForecast(25.276987, 55.296249);
            }
        );
    }, []);

    return (
        <div className="mb-10">
            <h3 className="font-semibold text-[#1A2A44] text-lg mb-4">
                This Week
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {forecastDays.map((d, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 p-4 rounded-lg text-center flex flex-col items-center"
                    >
                        <p className="text-sm font-medium text-gray-700">
                            {new Date(d.date).toLocaleDateString("en-US", {
                                weekday: "long",
                            })}
                        </p>
                        <img
                            src={d.day.condition.icon}
                            alt={d.day.condition.text}
                            className="w-10 h-10 my-2"
                        />
                        <p className="text-lg font-bold text-[#1A2A44]">
                            {d.day.maxtemp_c}&#176;
                        </p>
                        <p className="text-sm text-gray-500">
                            {d.day.mintemp_c}&#176;
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
