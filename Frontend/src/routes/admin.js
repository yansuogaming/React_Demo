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
                path: 'experiences/:id',
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
                path: 'experience-types/:id',
                Component: lazy(() => import("@pages/admin/Experience/EditExperienceType")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'faqs',
                Component: lazy(() => import("@pages/admin/FAQ/Index")),
                meta: () => {
                    return [
                        { title: "FAQ" },
                        { name: "FAQ", content: "FAQ" },
                    ];
                },
            },
            {
                path: 'faqs/add',
                Component: lazy(() => import("@pages/admin/FAQ/Edit")),
                meta: () => {
                    return [
                        { title: "FAQ" },
                        { name: "FAQ", content: "FAQ" },
                    ];
                },
            },
            {
                path: 'faqs/:id',
                Component: lazy(() => import("@pages/admin/FAQ/Edit")),
                meta: () => {
                    return [
                        { title: "FAQ" },
                        { name: "FAQ", content: "FAQ" },
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
            {
                path: 'regions/add',
                Component: lazy(() => import("@pages/admin/Region/Edit")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'regions/:id',
                Component: lazy(() => import("@pages/admin/Region/Edit")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'cities',
                Component: lazy(() => import("@pages/admin/City/Index")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'cities/add',
                Component: lazy(() => import("@pages/admin/City/Edit")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'cities/:id',
                Component: lazy(() => import("@pages/admin/City/Edit")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'events',
                Component: lazy(() => import("@pages/admin/Event/Index")),
                meta: () => {
                    return [
                        { title: "Experience" },
                        { name: "description", content: "Experience" },
                    ];
                },
            },
            {
                path: 'reasons',
                Component: lazy(() => import("@pages/admin/Reason/Index")),
                meta: () => {
                    return [
                        { title: "Reasons" },
                        { name: "description", content: "Reasons" },
                    ];
                },
            },
        ]
    }
];

export default routesAdmin;