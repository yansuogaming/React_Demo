import HttpClient from "./HttpClient";

const AttractionService = {
    listAttraction: async (params) => {
        const res = await HttpClient.get('attraction', {
            params
        });
        return res.data;
    }
}

export default AttractionService