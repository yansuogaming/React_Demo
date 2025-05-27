import HttpClient from '@services/HttpClient'
import i18next from 'i18next'

const EventService = {
    // Lấy sự kiện đang diễn ra và sắp diễn ra
    getOngoingAndUpcomingEvents: async () => {
        const res = await HttpClient
            .get('/event/list-ongoing-and-upcomming', {
                params: {
                    lang_id:  i18next.language === 'vi' ? 'vn' : i18next.language
                }
            })
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

    // Lấy sự kiện theo slug
    getEventBySlug: async (slug) => {
        const res = await HttpClient.get(`/event/${slug}`, {
            params: {
                lang_id:  i18next.language === 'vi' ? 'vn' : i18next.language
            }
        })
        return res.data.event;
    },
}

export default EventService