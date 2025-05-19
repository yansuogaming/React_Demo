import HttpClient from "@services/HttpClient";
import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const navigate = useNavigate();

    const loginAction = async (email, password) => {
        const res = await HttpClient.post('/login', {
            email,
            password
        });

        if (res.status === 200) {
            const data = res.data;
            // Set local storage
            localStorage.setItem('admin', data.data);
            // set state
            setAdmin(data.data);
            navigate('/admin');
            return true;
        }

        toast.error('Email hoặc mật khẩu không hợp lệ.');
    };

    const logOut = () => {
        setAdmin(null);
        navigate('/admin/login');
    };

    return (
        <AuthContext.Provider value={{ setAdmin, admin, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
