import HttpClient from "./HttpClient";

const MapService = {
    getListDestination: async () => {
        const res = await HttpClient.get("/common/list-destination", {
            params: {
                city_id: 255,
            },
        });
        if (res.status === 200) {
            return res.data;
        }
    },
    getDetailDestination: async (id) => {
        const res = await HttpClient.get(`/common/resource/${id}`);
        if (res.status === 200) {
            return res.data;
        }
    },
};

export default MapService;
