import AppSidebar from "@components/admin/AppSildebar";
import SkipToMain from "@components/admin/SkipToMain";
import { SidebarProvider } from "@components/ui/sidebar";
import { useAuth } from "@contexts/AuthContext";
import { SearchProvider } from "@contexts/SearchContext";
import {
    cn,
    setCompleteLoading,
    setNavigate,
    setStartLoading,
} from "@lib/utils";
import HttpClient from "@services/HttpClient";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useLoadingBar } from "react-top-loading-bar";

export default function AdminLayout() {
    const defaultOpen = Cookies.get("sidebar_state") !== "false";
    const navigate = useNavigate();
    const auth = useAuth();
    const { i18n } = useTranslation();
    const language = i18n.language;
    if (language !== "vi") {
        i18n.changeLanguage("vi");
    }

    const { start, complete } = useLoadingBar({
        color: 'oklch(0.554 0.046 257.417)',
        height: 2,
        shadow: true
    });

    useEffect(
        function () {
            if (!auth.admin) {
                async function checkLogin() {
                    const res = await HttpClient.get("check-login");
                    if (res.status === 200) {
                        auth.setAdmin(res.data.data);
                    } else {
                        navigate("/admin/login");
                    }
                }
                checkLogin();
            }
            setNavigate(navigate);
        },
        [auth, navigate]
    );

    useEffect(() => {
        setStartLoading(start);
        setCompleteLoading(complete);
    }, [start, complete]);

    return (
        <SearchProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
                <SkipToMain />
                <AppSidebar />
                <div
                    id="content"
                    className={cn(
                        "ml-auto w-full max-w-full",
                        "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
                        "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
                        "sm:transition-[width] sm:duration-200 sm:ease-linear",
                        "flex h-svh flex-col",
                        "group-data-[scroll-locked=1]/body:h-full",
                        "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
                    )}
                >
                    <Outlet />
                </div>
                <Toaster position="top-right" reverseOrder={false} />
            </SidebarProvider>
        </SearchProvider>
    );
}
