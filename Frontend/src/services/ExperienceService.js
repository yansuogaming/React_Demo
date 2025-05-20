import HttpClient from '@services/HttpClient'

const ExperienceService = {
    getExperienceTypes: async () => {
        const res = await HttpClient.get('/experience-type', {
            params: {
                per_page: 4
            }
        });
        if (res.status === 200) {
            return res.data.data;
        }

        return [];
    }
}

export default ExperienceService
