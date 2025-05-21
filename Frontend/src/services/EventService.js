import HttpClient from '@services/HttpClient'

const EventService = {
    getListGoingOn: async () => {
        const res = await HttpClient
            .get('/event/list-going-on')
        return res.data.events
    },
}

export default EventService