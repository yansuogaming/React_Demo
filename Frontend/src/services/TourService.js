import HttpClient from "./HttpClient";

const TourService = {
    getListTrending: async () => {
        const res = await HttpClient.get('/tour/list-trending');
        return res.data.tours;
    }
}

export default TourService