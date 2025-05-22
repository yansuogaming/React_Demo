import HttpClient from "./HttpClient";

const TourService = {
    getListTrending: async () => {
        const res = await HttpClient.get("/tour/list-trending");
        return res.data.tours;
    },

    getListTour: async () => {
        const res = await HttpClient.get("/tour/list-tour");
        return res.data.data;
    },
};

export default TourService;
