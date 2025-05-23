import toast from "react-hot-toast";
import HttpClient from "./HttpClient";
import { navigateTo } from "@lib/utils";

const UserService = {
    checkLogin: async (email) => {
        const res = await HttpClient.post('/user/checklogin', { email });
        if (res.status === 200) {
            return true;
        }

        return false;
    },

    login: async (email, password) => {
        const res = await HttpClient.post('/user/login', {
            email: email,
            password: password
        });
        if (res.status === 200) {
            const data = res.data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('refresh_token', data.token);
            localStorage.setItem('admin', data.data);
            return true;
        }

        toast.error('Email hoặc mật khẩu không hợp lệ.');
        return false;
    },

    logout: async () => {
        const res = await HttpClient.get('/user/logout');
        if (res.status === 200) {
            navigateTo('/admin/login');
            toast.success('Đăng xuất thành công.');
            return true;
        }

        return false;
    },

    forgotPassword: async (email) => {
        const res = await HttpClient.get('/user/forgot-password', {
            params: { email }
        });
        if (res.status === 200) {
            toast.success('Vui lòng kiểm tra email để tiếp tục quá trình đặt lại mật khẩu.".');
            return true;
        }

        if (res.status === 404) {
            toast.error('Email không tồn tại.');
        }
        return false;
    }
}

export default UserService
