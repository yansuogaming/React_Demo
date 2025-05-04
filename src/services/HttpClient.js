import axios from 'axios'

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

    setTimeout(timeout) {
        this.instance.defaults.timeout = timeout
    }

    setBaseUrl(baseURL) {
        this.instance.defaults.baseURL = baseURL
    }

    setHeader(key, value) {
        instance.defaults.headers.common[key] = value;
    }

    setHeaders() {
        headers.forEach(header => {
            this.setHeader(header.key, header.value)
        })
    }

    setLoading(loading = true) {
        this.loading = loading
    }

    async request(config) {
        // Handle Loading
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