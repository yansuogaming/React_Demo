import { Outlet } from "react-router";
import AdminLayout from "./AdminLayout";
import AuthProvider from "@contexts/AuthContext";

export default function AuthLayout() {
    return (
        <AuthProvider>
            <AdminLayout>
                <Outlet />
            </AdminLayout>
        </AuthProvider>
    )
}