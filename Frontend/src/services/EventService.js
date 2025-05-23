import HttpClient from '@services/HttpClient'

const EventService = {
    // Lấy sự kiện đang diễn ra và sắp diễn ra
    getOngoingAndUpcomingEvents: async () => {
        const res = await HttpClient
            .get('/event/list-ongoing-and-upcomming')
        return res.data.events
    },

    // Lấy tất cả sự theo type
    getEvents: async (type = 'all', keyword = '', page = 1) => {
        const res = await HttpClient
            .get('/event/list-approved', {
                params: {
                    type,
                    keyword,
                    page
                }
            })
        return {
            events: res.data.events,
            total_page: res.data.total_page
        }
    },
}

export default EventService