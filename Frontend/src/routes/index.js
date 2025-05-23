import { lazy } from "react";
import routesAdmin from "./admin";
import ExperienceService from "@services/ExperienceService";
import EventService from "@services/EventService";
import FAQService from "@services/FAQService";
import WeatherService from "@services/WeatherService";
import CityService from "@services/CityService";
import TourService from "@services/TourService";
import MapService from "@services/MapService";
import RegionService from "@services/RegionService";

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
                            const res = await Promise.all([
                                ExperienceService.getExperienceTypes(),
                                EventService.getOngoingAndUpcomingEvents(),
                                TourService.getListTrending(),
                                RegionService.getListRegionInHome(),
                            ]);
                            return {
                                experienceTypes: res[0],
                                events: res[1],
                                listTrendingTours: res[2],
                                listRegion: res[3]
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
                        loader: async ({ params }) => {
                            const res = await Promise.all([
                                FAQService.getListFAQs(),
                                EventService.getOngoingAndUpcomingEvents(),
                                CityService.getCityBySlug(params.slug),
                                MapService.getListDestination(),
                            ]);

                            const weather = await WeatherService.getCityWeather(res[2].title)
                            return {
                                FAQs: res[0],
                                events: res[1],
                                weather,
                                city: res[2],
                                dataDestination: res[3],
                            };
                        },
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
                        loader: async () => {
                            const res = await Promise.all([
                                TourService.getListTrending(),
                                TourService.getListTour(),
                            ]);
                            console.log(res[1]);
                            return {
                                listTrendingTours: res[0],
                                listTours: res[1],
                            };
                        },
                    },
                    {
                        path: "itineraries/detail",
                        Component: lazy(() =>
                            import("@pages/ItinerariesDetail")
                        ),
                    },
                    {
                        path: "events",
                        Component: lazy(() => import("@pages/Events")),
                        loader: async () => {
                            const res = await Promise.all([
                                EventService.getOngoingAndUpcomingEvents(),
                                EventService.getEvents(),
                            ]);
                            return {
                                ongoingAndUpcomingEvents: res[0],
                                events: res[1],
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
                        path: "events/detail",
                        Component: lazy(() => import("@pages/EventsDetail")),
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
                        path: "search-result/:keyword?",
                        Component: lazy(() => import("@pages/SearchResult")),
                    },
                    {
                        path: "signin",
                        Component: lazy(() => import("@pages/SignIn")),
                    },
                    {
                        path: "signin-password",
                        Component: lazy(() => import("@pages/SignInPassword")),
                    },
                    {
                        path: "forgot-password",
                        Component: lazy(() => import("@pages/ForgotPassword")),
                    },
                    {
                        path: "attractions",
                        Component: lazy(() => import("@pages/Attractions")),
                    },
                    {
                        path: 'shopping',
                        Component: lazy(() => import("@pages/ShoppingCart")),
                    }
                ],
            },
            {
                path: "map-ha-noi/:id?",
                Component: lazy(() => import("@pages/Map")),
                loader: async () => {
                    const res = await MapService.getListDestination();
                    return res;
                },
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
