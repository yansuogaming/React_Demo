import i18n from "i18next";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

// Thời tiết hiện tại
export async function fetchCurrentWeatherByCoords(lat, lon) {
    const query = `${lat},${lon}`;
    const lang = i18n.language?.split("-")[0] || "en";
    try {
        const response = await fetch(
            `${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=no&lang=${lang}`
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
    const lang = i18n.language?.split("-")[0] || "en";
    try {
        const response = await fetch(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=${days}&aqi=no&alerts=no&lang=${lang}`
        );
        if (!response.ok) throw new Error("Failed to fetch forecast");
        return await response.json();
    } catch (err) {
        console.error("WeatherAPI Error (forecast):", err);
        return null;
    }
}

// Lấy dữ liệu thời tiết cho một ngày cụ thể (quá khứ hoặc tương lai)
export async function fetchWeatherByDate(location, date) {
    const lang = i18n.language?.split("-")[0] || "en";
    if (!location || !date) {
        console.warn("Thiếu location hoặc date:", { location, date });
        return null;
    }

    const url = `${BASE_URL}/history.json?key=${API_KEY}&q=${location}&dt=${date}&lang=${lang}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const text = await response.text();
            console.error("WeatherAPI error body:", text);
            throw new Error("Failed to fetch historical weather");
        }
        return await response.json();
    } catch (err) {
        console.error("WeatherAPI Error (byDate):", err);
        return null;
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
