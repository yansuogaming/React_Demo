import { lazy } from "react";
import routesAdmin from "./admin";
import ExperienceService from "@services/ExperienceService";

const routes = [
    ...routesAdmin,
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
                        loader: async () => {
                            const experienceTypes =
                                await ExperienceService.getExperienceTypes();
                            return {
                                experienceTypes,
                            };
                        },
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
                        path: "expericences",
                        Component: lazy(() => import("@pages/Expericences")),
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
                        path: "accessibility",
                        Component: lazy(() => import("@pages/Accessibility")),
                    },
                    {
                        path: "vietnam-pass",
                        Component: lazy(() => import("@pages/Pass")),
                    },
                    {
                        path: "safety",
                        Component: lazy(() => import("@pages/Safety")),
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
                    {
                        path: "currency",
                        Component: lazy(() => import("@pages/CurrencyGuide")),
                    },
                    {
                        path: "downloadapp",
                        Component: lazy(() => import("@pages/DownloadApp")),
                    },
                    {
                        path: "itineraries/detail",
                        Component: lazy(() =>
                            import("@pages/ItinerariesDetail")
                        ),
                    },
                    {
                        path: "search-result/:keyword?",
                        Component: lazy(() => import("@pages/SearchResult")),
                    },
                    {
                        path: "log",
                        Component: lazy(() => import("@pages/DownloadApp")),
                    },
                    {
                        path: "signin",
                        Component: lazy(() => import("@pages/SignIn")),
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
