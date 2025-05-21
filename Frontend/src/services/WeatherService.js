import HttpClient from './HttpClient'

const WeatherService = {
    getCityWeather: async (name) => {
        const res = await HttpClient
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${name},%20VN&units=metric&appid=fc94a02e7f94ea96ef2e403d1a1d47cb`)
        return res.data;
    }
}

export default WeatherService