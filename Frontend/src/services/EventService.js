import HttpClient from '@services/HttpClient'

export default EventService = {
    getCurrentEvents: async () => {
        const res = await HttpClient
            .tourdb()
            .get('/app/event/list_dash')
        return res.data
    }
}
