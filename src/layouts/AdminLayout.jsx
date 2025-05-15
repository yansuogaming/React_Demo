import AppSidebar from "@components/admin/AppSildebar";
import SkipToMain from "@components/admin/SkipToMain";
import { SidebarProvider } from "@components/ui/sidebar";
import { SearchProvider } from "@contexts/SearchContext";
import { cn } from "@lib/utils";
import Cookies from "js-cookie";
import { Outlet } from "react-router";

export default function AdminLayout() {
    const defaultOpen = Cookies.get('sidebar_state') !== 'false';
    return (
        <SearchProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
                <SkipToMain />
                <AppSidebar />
                <div
                    id='content'
                    className={cn(
                        'ml-auto w-full max-w-full',
                        'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
                        'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
                        'sm:transition-[width] sm:duration-200 sm:ease-linear',
                        'flex h-svh flex-col',
                        'group-data-[scroll-locked=1]/body:h-full',
                        'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
                    )}
                >
                    <Outlet />
                </div>
            </SidebarProvider>
        </SearchProvider>
    )
}