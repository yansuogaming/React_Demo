import { lazy } from "react";

const routes = [
    {
        path: ":lang_id?",
        Component: lazy(() => import("@layouts/LanguageLayout")), // Layout này sẽ xử lý đổi ngôn ngữ
        children: [
            {
                Component: lazy(() => import("@layouts/Root")),
                children: [
                    {
                        index: true,
                        Component: lazy(() => import("@pages/Home")),
                        meta: () => {
                            return [
                                { title: "Xin chào" },
                                {
                                    name: "description",
                                    content: "Welcome to the home page",
                                },
                            ];
                        },
                    },
                    {
                        path: "city/:slug",
                        Component: lazy(() => import("@pages/City")),
                    },
                    {
                        path: "tripdetail",
                        Component: lazy(() => import("@pages/Tripdetail")),
                    },
                    {
                        path: "about",
                        Component: lazy(() => import("@pages/About")),
                    },
                    {
                        path: "experience/:slug",
                        Component: lazy(() => import("@pages/Expericences")),
                    },
                    {
                        path: "experience/detail",
                        Component: lazy(() =>
                            import("@pages/ExpericencesDetail")
                        ),
                    },
                    {
                        path: "itineraries",
                        Component: lazy(() => import("@pages/Itineraries")),
                    },
                    {
                        path: "events",
                        Component: lazy(() => import("@pages/Events")),
                    },
                    {
                        path: "visa-guide",
                        Component: lazy(() => import("@pages/VisaGuide")),
                    },
                    {
                        path: "essentials",
                        Component: lazy(() => import("@pages/Essentials")),
                    },
                    {
                        path: "getting-to-and-around",
                        Component: lazy(() =>
                            import("@pages/GettingToAndAround")
                        ),
                    },
                    {
                        path: "visainformation",
                        Component: lazy(() => import("@pages/VisaInformation")),
                    },
                    {
                        path: "placetogo",
                        Component: lazy(() => import("@pages/PlaceToGo")),
                    },
                    {
                        path: "weathertrip",
                        Component: lazy(() => import("@pages/WeatherTrip")),
                    },
                ],
            },
            {
                path: "tripdetail/result",
                Component: lazy(() => import("@layouts/TripDetailLayout")),
                children: [
                    {
                        index: true,
                        Component: lazy(() =>
                            import("@pages/TripDetailResult")
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        Component: lazy(() => import("@pages/NotFound")),
    },
];

export default routes;
