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

    getCity: async (cityId) => {
        const res = await HttpClient.get(`/city/${cityId}`);
        if (res.status === 200) {
            return res.data.city;
        }

        toast.error('Lấy city thất bại.');
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
    },

    update: async (cityId, fields = {}) => {
        const res = await HttpClient.put(`city/${cityId}`, fields);
        if (res.status === 200) {
            toast.success('Cập nhật city thành công!');
            return true;
        }

        toast.success('Cập nhật city thất bại!');
        return false;
    },

    create: async (fields = {}) => {
        const res = await HttpClient.post('city', fields);
        if (res.status === 201) {
            toast.success('Thêm city thành công!');
            return true;
        }

        toast.success('Thêm city thất bại!');
        return false;
    },
}

export default CityService