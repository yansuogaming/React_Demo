import HttpClient from '@services/HttpClient'
import toast from 'react-hot-toast';

const RegionService = {
    getListRegion: async () => {
        const res = await HttpClient.get('region');
        if (res.status === 200) {
            return res.data.data;
        }
        return [];
    },

    create: async (fields) => {
        const res = await HttpClient.post('region', fields);
        if (res.status === 201) {
            toast.success('Thêm vùng miền thành công!')
            return true;
        }

        toast.error('Thêm vùng miền thất bại!')
        return false;
    },

    update: async (id, fields) => {
        const res = await HttpClient.post(`region/${id}`, fields);
        if (res.status === 200) {
            toast.success('Cập nhật vùng miền thành công!')
            return true;
        }

        toast.error('Thêm vùng miền thất bại!')
        return false;
    },

    changeStatus: async (id) => {
        const res = await HttpClient.put(`region/status/${id}`);
        if (res.status === 200) {
            toast.success('Cập nhật tình trang thành công!')
            return true;
        }

        toast.error('Cập nhật tình trạng thất bại!')
        return false;
    },

    getListRegionInHome: async () => {
        const res = await HttpClient.get('/region/list-in-home');
        return res.data;
    }
}

export default RegionService;