import HttpClient from "./HttpClient";

const FAQService = {
    getListFAQs: async () => {
        const res = await HttpClient.get("/faq/list");
        if (res.status === 200) {
            return res.data.data;
        }

        return [];
    }
}

export default FAQService