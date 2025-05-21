import HttpClient from './HttpClient'

const WeatherService = {
    getCityWeather: async (name) => {
        const res = await HttpClient.get(`/weather/${name}`)
        return res.data;
    }
}

export default WeatherService