import HttpClient from "./HttpClient";

const TourService = {
    getListTrending: async () => {
        const res = await HttpClient.get("/tour/list-trending");
        return res.data.tours;
    },

    getListItineraries: async (
        keyword = "",
        page = 1,
        duration = "",
        departure_point = "",
        travel_style = ""
    ) => {
        const res = await HttpClient.get("/tour/list-tour", {
            params: {
                keyword,
                page,
                duration,
                departure_point,
                travel_style,
            },
        });
        return {
            itineraries: res.data.data,
            total_page: res.data.total_page,
        };
    },
};

export default TourService;
