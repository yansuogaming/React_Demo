import axios from 'axios'
import i18next from 'i18next'

class HttpClient {
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: import.meta.env.VITE_API_TIMEOUT
        })

        this.loading = true
    }

    newInstance() {
        return new this()
    }

    setTimeout(timeout) {
        this.instance.defaults.timeout = timeout
    }

    setBaseUrl(baseURL) {
        this.instance.defaults.baseURL = baseURL
    }

    setHeader(key, value) {
        this.instance.defaults.headers.common[key] = value;
    }

    setHeaders() {
        this.headers.forEach(header => {
            this.setHeader(header.key, header.value)
        })
    }

    setLoading(loading = true) {
        this.loading = loading
    }

    tourdb() {
        this.setBaseUrl(import.meta.env.VITE_API_TOURDB_URL)
        return this
    }

    async request(config = {}) {
        // Handle Loading
        this.setHeader('Accept-Language', i18next.language == 'vi' ? 'vn' : i18next.language)
        return await this.instance.request(config)
    }

    async get(url, config = {}) {
        config.url = url;
        return await this.instance.request(config)
    }

    async post(url, data, config = {}) {
        config.url = url;
        config.data = data;
        return await this.instance.request(url, data, config)
    }

    async put(url, data, config = {}) {
        config.url = url;
        config.data = data;
        return await this.instance.request(url, data, config)
    }

    async delete(url, config = {}) {
        config.url = url;
        return await this.instance.delete(url, config)
    }

    async patch(url, data, config = {}) {
        config.url = url;
        config.data = data;
        return await this.instance.patch(url, data, config)
    }
}

export default new HttpClient();