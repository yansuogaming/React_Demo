import { lazy } from "react";

const routesAdmin = [
    {
        path: "/admin/login",
        Component: lazy(() => import("@pages/admin/Login")),
        meta: () => {
            return [
                { title: "Đăng nhập" },
                { name: "description", content: "Đăng nhập vào tài khoản của bạn" },
            ];
        },
    },
    {
        path: "/admin",
        Component: lazy(() => import("@layouts/AdminLayout")),
        children: [
            {
                index: true,
                Component: lazy(() => import("@pages/admin/Dashboard")),
                meta: () => {
                    return [
                        { title: "Dashboard" },
                        { name: "description", content: "Dashboard" },
                    ];
                },
            },
            {
                path: 'experiences',
                Component: lazy(() => import("@pages/admin/Experience/Index")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'experiences/add',
                Component: lazy(() => import("@pages/admin/Experience/EditExperience")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'experiences/edit/:id',
                Component: lazy(() => import("@pages/admin/Experience/EditExperience")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'settings',
                Component: lazy(() => import("@pages/admin/Settings/Index")),
                children: [
                    {
                        meta: () => {
                            return [
                                { title: "Experience" },
                                { name: "description", content: "Experience" },
                            ];
                        },
                    }
                ]
            }
        ]
    }
];

export default routesAdmin;