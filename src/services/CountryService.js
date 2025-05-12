import HttpClient from '@services/HttpClient'

export default CountryService = {
    getCountry: async () => {
        const res = await HttpClient
            .tourdb()
            .get('/tourism-promotion/your-country')
        return res.data
    }
}
