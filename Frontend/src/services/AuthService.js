import toast from "react-hot-toast";
import HttpClient from "./HttpClient";
import { navigateTo } from "@lib/utils";

const AuthService = {
    login: async (email, password) => {
        const res = await HttpClient.post('/login', {
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
        const res = await HttpClient.get('logout')
        if (res.status === 200) {
            navigateTo('/admin/login');
            toast.success('Đăng xuất thành công.');
            return true;
        }

        return false;
    }
}

export default AuthService