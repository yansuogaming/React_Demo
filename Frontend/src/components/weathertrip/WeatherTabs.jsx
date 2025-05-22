import { useEffect, useState } from "react";
import { fetchCurrentWeatherByCoords } from "@components/weathertrip/weatherApi"; // cập nhật đúng path

const WeatherTabs = () => {
    const [city, setCity] = useState("your city");

    const scrollToThingsToDo = () => {
        const el = document.getElementById("things-to-do");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                try {
                    const data = await fetchCurrentWeatherByCoords(
                        coords.latitude,
                        coords.longitude
                    );
                    if (data?.location?.name) {
                        setCity(data.location.name);
                    }
                } catch (err) {
                    console.error("Failed to fetch city name:", err);
                }
            },
            (err) => {
                console.error("Geolocation error:", err);
            }
        );
    }, []);

    return (
        <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                    Winter in {city}
                </button>
                <button className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded">
                    Summer in {city}
                </button>
                <button
                    onClick={scrollToThingsToDo}
                    className="bg-gray-100 text-center py-4 font-medium text-blue-700 hover:bg-gray-200 transition rounded"
                >
                    Things to do in {city} each month
                </button>
            </div>
        </div>
    );
};

export default WeatherTabs;
