import toast from "react-hot-toast";
import HttpClient from "./HttpClient";

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
    }
}

export default AuthService