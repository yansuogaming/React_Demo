const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

// Thời tiết hiện tại
export async function fetchCurrentWeatherByCoords(lat, lon) {
    const query = `${lat},${lon}`;
    try {
        const response = await fetch(
            `${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=no`
        );
        if (!response.ok) throw new Error("Failed to fetch current weather");
        return await response.json();
    } catch (err) {
        console.error("WeatherAPI Error (current):", err);
        return null;
    }
}

// Dự báo theo giờ (dùng cho thanh thời gian và biểu đồ)
export async function fetchWeatherForecastByCoords(lat, lon, days = 1) {
    const query = `${lat},${lon}`;
    try {
        const response = await fetch(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=${days}&aqi=no&alerts=no`
        );
        if (!response.ok) throw new Error("Failed to fetch forecast");
        return await response.json();
    } catch (err) {
        console.error("WeatherAPI Error (forecast):", err);
        return null;
    }
}

// ✅ Dự báo theo tháng (lấy 30 ngày và nhóm lại theo tháng)
export async function fetchMonthlyForecastSummary(lat, lon) {
    try {
        const response = await fetch(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=30&aqi=no&alerts=no`
        );
        if (!response.ok) throw new Error("Failed to fetch monthly forecast");

        const data = await response.json();
        const forecastDays = data?.forecast?.forecastday || [];

        const monthlyMap = {};

        forecastDays.forEach((day) => {
            const date = new Date(day.date);
            const monthName = date.toLocaleString("default", { month: "long" });

            if (!monthlyMap[monthName]) monthlyMap[monthName] = [];

            monthlyMap[monthName].push({
                avg: day.day.avgtemp_c,
                condition: day.day.condition.text,
                icon: day.day.condition.icon,
            });
        });

        const conditionDescriptions = {
            Sunny: "Enjoy outdoor adventures and beach days under clear skies.",
            Rain: "Perfect month to explore indoor attractions and cozy cafes.",
            "Partly cloudy": "A mix of sun and shade—great for sightseeing!",
            Overcast: "Calmer month, ideal for museums and cultural spots.",
        };

        const result = {};
        Object.entries(monthlyMap).forEach(([month, entries]) => {
            const avgTemp =
                entries.reduce((sum, item) => sum + item.avg, 0) /
                entries.length;

            const conditionCounts = entries.reduce((acc, item) => {
                acc[item.condition] = (acc[item.condition] || 0) + 1;
                return acc;
            }, {});

            const mostCommonCondition = Object.entries(conditionCounts).sort(
                (a, b) => b[1] - a[1]
            )[0][0];

            const icon = entries.find(
                (item) => item.condition === mostCommonCondition
            )?.icon;

            result[month] = {
                avg: `${avgTemp.toFixed(1)}°C`,
                icon,
                description:
                    conditionDescriptions[mostCommonCondition] ||
                    "Discover seasonal experiences throughout the city.",
            };
        });

        return result;
    } catch (err) {
        console.error("WeatherAPI Error (monthly summary):", err);
        return {};
    }
}

export async function fetchWeatherAlerts(lat, lon) {
    const query = `${lat},${lon}`;
    try {
        const response = await fetch(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=1&alerts=yes`
        );
        if (!response.ok) throw new Error("Failed to fetch alerts");
        const data = await response.json();
        return data.alerts?.alert || [];
    } catch (err) {
        console.error("WeatherAPI Error (alerts):", err);
        return [];
    }
}

// 🔧 Mock dữ liệu thời tiết cho 12 tháng (dùng nếu API thật không đủ)
export function getMockMonthlyWeatherData() {
    return {
        January: {
            avg: "21°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description: "Cool and dry – perfect for sightseeing.",
        },
        February: {
            avg: "23°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Pleasant breeze—great for festivals and beach trips.",
        },
        March: {
            avg: "26°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
            description: "Warming up—perfect mix of sunshine and outdoor fun.",
        },
        April: {
            avg: "30°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description:
                "Sunny days ideal for desert safaris and beach resorts.",
        },
        May: {
            avg: "34°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Hot and dry—best enjoyed indoors or in the evenings.",
        },
        June: {
            avg: "38°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description: "Scorching heat—enjoy malls, museums, and waterparks.",
        },
        July: {
            avg: "39°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description:
                "Peak summer—best for indoor attractions and late walks.",
        },
        August: {
            avg: "38°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
            description: "Hot with occasional dust—time to chill indoors.",
        },
        September: {
            avg: "36°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Still warm—transition to the cooler season begins.",
        },
        October: {
            avg: "32°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description: "Comfortable temperatures for exploring the city.",
        },
        November: {
            avg: "28°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            description: "Pleasant and breezy—perfect for outdoor festivals.",
        },
        December: {
            avg: "24°C",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            description: "Mild and festive—great month to visit Dubai.",
        },
    };
}
