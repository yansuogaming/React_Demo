import HttpClient from "./HttpClient";

const FAQService = {
    getListFAQs: async () => {
        const res = await HttpClient.get("/faq", {
            params: {
                lang_id: 
            }
        });
        if (res.status === 200) {
            return res.data.data;
        }

        return [];
    }
}

export default FAQService