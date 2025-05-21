import { handleLoading, navigateTo } from '@lib/utils'
import axios from 'axios'
import i18next from 'i18next'
import toast from 'react-hot-toast'

class HttpClient {
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            timeout: import.meta.env.VITE_API_TIMEOUT, 
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
        return this
    }

    setHeaders() {
        this.headers.forEach(header => {
            this.setHeader(header.key, header.value)
        })
        return this
    }

    setLoading(loading = true) {
        this.loading = loading
    }

    tourdb() {
        this.setBaseUrl(import.meta.env.VITE_API_TOURDB_URL)
        return this
    }

    travelIndex() {
        this.setBaseUrl(import.meta.env.VITE_API_TRAVEL_INDEX_URL)
        return this
    }

    async request(config = {}) {
        // Handle Loading
        this.setHeader('Accept-Language', i18next.language == 'vi' ? 'vn' : i18next.language)
        let res = null;
        try {
            res = await handleLoading(() => this.instance.request(config));
        } catch (error) {
            res = error.response
    
        }
   
        if (res.status === 401) {
            navigateTo('/admin/login');
            if (config.url !== '/login') {
                toast.error('Phiên đăng nhập đã hết hạn.');
            }
        }

        if (res.status === 500) {
            toast.error('Lỗi server.');
        }

        return res;
    }

    async get(url, config = {}) {
        config.url = url;
        config.method = 'GET';
        return await this.request(config)
    }

    async post(url, data, config = {}) {
        config.url = url;
        config.data = data;
        config.method = 'POST';
        return await this.request(config)
    }

    async put(url, data, config = {}) {
        config.url = url;
        config.data = data;
        config.method = 'PUT';
        return await this.request(config)
    }

    async delete(url, config = {}) {
        config.url = url;
        config.method = 'DELETE';
        return await this.request(config)
    }

    async patch(url, data, config = {}) {
        config.url = url;
        config.data = data;
        config.method = 'PATCH';
        return await this.request(config)
    }
}

export default new HttpClient();