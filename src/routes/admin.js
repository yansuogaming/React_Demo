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
        path: "/admin/forgot-password",
        Component: lazy(() => import("@pages/admin/ForgotPassword")),
        meta: () => {
            return [
                { title: "Quên mật khẩu" },
                { name: "description", content: "Đăng nhập vào tài khoản của bạn" },
            ];
        },
    },
    {
        path: "/admin",
        Component: lazy(() => import("@layouts/AuthLayout")),
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
                path: 'experience-types',
                Component: lazy(() => import("@pages/admin/Experience/ExperienceTypes")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'experience-types/add',
                Component: lazy(() => import("@pages/admin/Experience/EditExperienceType")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'experience-types/edit/:id',
                Component: lazy(() => import("@pages/admin/Experience/EditExperienceType")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'regions',
                Component: lazy(() => import("@pages/admin/Region/Index")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
        ]
    }
];

export default routesAdmin;