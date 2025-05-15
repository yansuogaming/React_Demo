import HttpClient from "./HttpClient";

const AuthService = {
    login: async (email, password) => {
        try {
            const response = await HttpClient.post('/login', {
                email: email,
                password: password
            });
            return response.data;
        } catch (error) {
            console.error("Login error:", error);
        }
    }
}

export default AuthService