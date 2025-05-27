import i18next from "i18next";
import HttpClient from "./HttpClient";

const TourService = {
    getListTrending: async () => {
        const res = await HttpClient.get("/tour/list-trending");
        return res.data.tours;
    },

    getListItineraries: async (
        keyword = "",
        page = 1
        // duration = "",
        // departure_point = "",
        // travel_style = ""
    ) => {
        const res = await HttpClient.post("/tour/list-tour", {
            keyword,
            page,
            // duration,
            // departure_point,
            // travel_style,
        });

        return {
            itineraries: res.data.itineraries,
            total_page: res.data.total_page,
        };
    },

    getListDeparture: async () => {
        const res = await HttpClient.post("/tour/list-departure", {
            params: {
                lang_id: i18next.language === "vi" ? "vn" : i18next.language,
            },
        });

        return {
            list_departure: res.data.list_departure,
        };
    },

    getListTravelStyle: async () => {
        const res = await HttpClient.post("/tour/list-travelstyle", {
            params: {
                lang_id: i18next.language === "vi" ? "vn" : i18next.language,
            },
        });

        return {
            list_travelstyle: res.data.list_travelstyle,
        };
    },
};

export default TourService;
