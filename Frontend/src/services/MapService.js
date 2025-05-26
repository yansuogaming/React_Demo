import HttpClient from "./HttpClient";

const MapService = {
    getListDestination: async (slug) => {
        const res = await HttpClient.get(`/city/${slug}/destinations`);
        if (res.status === 200) {
            return res.data;
        }

        return false;
    },
    getDetailDestination: async (id) => {
        const res = await HttpClient.get(`/common/resource/${id}`);
        if (res.status === 200) {
            return res.data;
        }
    },
};

export default MapService;
