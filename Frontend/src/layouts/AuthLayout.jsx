import { Outlet } from "react-router";
import AdminLayout from "./AdminLayout";
import AuthProvider from "@contexts/AuthContext";
import { LoadingBarContainer } from "react-top-loading-bar";

export default function AuthLayout() {
    return (
        <AuthProvider>
            <LoadingBarContainer>
                <AdminLayout>
                    <Outlet />
                </AdminLayout>
            </LoadingBarContainer>
        </AuthProvider>
    );
}
