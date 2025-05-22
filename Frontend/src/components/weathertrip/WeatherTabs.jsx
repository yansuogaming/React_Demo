import { useEffect, useState } from "react";
import { fetchCurrentWeatherByCoords } from "@components/weathertrip/weatherApi"; // cập nhật đúng path

const WeatherTabs = () => {
    const [countryName, setCountryName] = useState("this country");

    const scrollToThingsToDo = () => {
        const el = document.getElementById("things-to-do");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const current = await fetchCurrentWeatherByCoords(
                    latitude,
                    longitude
                );
                if (current?.location?.country) {
                    setCountryName(current.location.country);
                }
            },
            async () => {
                // fallback Dubai
                const current = await fetchCurrentWeatherByCoords(
                    25.276987,
                    55.296249
                );
                if (current?.location?.country) {
                    setCountryName(current.location.country);
                }
            }
        );
    }, []);

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                    Winter in {countryName}
                </button>
                <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                    Summer in {countryName}
                </button>
                <button
                    onClick={scrollToThingsToDo}
                    className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded"
                >
                    Things to do in {countryName} each month
                </button>
            </div>
        </div>
    );
};

export default WeatherTabs;
