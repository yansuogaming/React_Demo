import HttpClient from '@services/HttpClient'
import toast from 'react-hot-toast';

const CommonService = {
    uploadImage: async (image, folder) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("folder", folder);
        const res = await HttpClient.post("/common/upload-image", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.status === 200) {
            return res.data.image;
        } else if (res.status === 422) {
            toast.error(res.data.errors.image[0]);
        } else {
            toast.error("Tải ảnh lên thất bại!");
        }

        return null;
    },
}

export default CommonService;