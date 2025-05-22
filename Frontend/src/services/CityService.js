import toast from "react-hot-toast";
import HttpClient from "./HttpClient";

const CityService = {
    getListCities: async (params = {}) => {
        const res = await HttpClient.get('/city', { params });
        if (res.status === 200) {
            return res.data.data;
        }

        toast.error('Lấy danh sách city thất bại.');
        return false;
    },

    getCityBySlug: async (slug) => {
        const res = await HttpClient.get(`/city/${slug}`);
        if (res.status === 200) {
            return res.data.city;
        }
        return false;
    },

    deleteCity: async (cityId) => {
        const res = await HttpClient.get(`/city/${cityId}`);
        if (res.status === 200) {
            return res.data.city;
        }
        return false;
    }
}

export default CityService