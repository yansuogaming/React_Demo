import { lazy } from "react";
import routesAdmin from "./admin";
import ROUTES from "./routes";
import ExperienceService from "@services/ExperienceService";
import EventService from "@services/EventService";
import FAQService from "@services/FAQService";
import WeatherService from "@services/WeatherService";
import CityService from "@services/CityService";
import TourService from "@services/TourService";
import MapService from "@services/MapService";
import RegionService from "@services/RegionService";
import { t } from "i18next";
import AttractionService from "@services/AttractionService";

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
                                listRegion: res[3],
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
                        path: ROUTES.CITY,
                        Component: lazy(() => import("@pages/City")),
                        loader: async ({ params }) => {
                            const res = await Promise.all([
                                FAQService.getListFAQs(),
                                EventService.getOngoingAndUpcomingEvents(),
                                CityService.getCityBySlug(params.slug),
                                MapService.getListDestination(params.slug),
                            ]);

                            const weather = await WeatherService.getCityWeather(
                                res[2].title
                            );
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
                        path: ROUTES.EXPERIENCES, // "experiences"
                        Component: lazy(() => import("@pages/Expericences")),
                    },
                    {
                        path: ROUTES.TRIP_DETAIL, // "tripdetail"
                        Component: lazy(() => import("@pages/Tripdetail")),
                    },
                    {
                        path: ROUTES.ABOUT, // "about"
                        Component: lazy(() => import("@pages/About")),
                    },
                    {
                        path: ROUTES.EXPERIENCE_SLUG, // "experience/:slug"
                        Component: lazy(() => import("@pages/Expericences")),
                    },
                    {
                        path: ROUTES.EXPERIENCE_DETAIL, // "experience/detail"
                        Component: lazy(() =>
                            import("@pages/ExpericencesDetail")
                        ),
                    },
                    {
                        path: ROUTES.ITINERARIES, // "itineraries"
                        Component: lazy(() => import("@pages/Itineraries")),
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const query = Object.fromEntries(
                                url.searchParams.entries()
                            );
                            const currentPage = query?.page ?? 1;
                            const keyword = query?.keyword ?? "";
                            const duration = query?.duration ?? "";
                            const departurePoint = query?.departurePoint ?? "";
                            const travelStyle = query?.travelStyle ?? "";
                            const lang_id = query?.lang_id ?? "en";
                            const res = await Promise.all([
                                TourService.getListTrending(),
                                TourService.getListItineraries(
                                    keyword,
                                    currentPage,
                                    duration,
                                    departurePoint,
                                    travelStyle
                                ),
                                TourService.getListDeparture(lang_id),
                                TourService.getListTravelStyle(lang_id),
                            ]);
                            return {
                                listTrendingTours: res[0],
                                listTours: res[1].itineraries ?? [],
                                totalPage: res[1].total_page,
                                currentPage,
                                // keyword,
                                // duration,
                                // departurePoint,
                                // travelStyle,
                                listDeparture: res[2].list_departure,
                                listTravelstyle: res[3].list_travelstyle,
                            };
                        },
                    },
                    {
                        path: ROUTES.ITINERARIES_DETAIL, // "itineraries/detail"
                        Component: lazy(() =>
                            import("@pages/ItinerariesDetail")
                        ),
                    },
                    {
                        path: "experiences",
                        Component: lazy(() => import("@pages/Expericences")),
                    },
                    {
                        path: ROUTES.PAYMENT_TOUR, // "payment/tour"
                        children: [
                            {
                                path: "tour",
                                Component: lazy(() =>
                                    import("@pages/PaymentTour")
                                ),
                            },
                        ],
                    },
                    {
                        path: ROUTES.EVENTS, // "events"
                        Component: lazy(() => import("@pages/Events")),
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const query = Object.fromEntries(
                                url.searchParams.entries()
                            );
                            const currentPage = query?.page ?? 1;
                            const keyword = query?.keyword ?? "";
                            const res = await Promise.all([
                                EventService.getOngoingAndUpcomingEvents(),
                                EventService.getEvents(
                                    "All",
                                    keyword,
                                    currentPage
                                ),
                            ]);

                            return {
                                ongoingAndUpcomingEvents: res[0],
                                events: res[1].events ?? [],
                                totalPage: res[1].total_page,
                                currentPage,
                                typeSearch: "All",
                                keyword,
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
                        path: ROUTES.DETAIL_TICKET,
                        Component: lazy(() => import("@pages/DetailTicket")),
           
                    },
                    {
                        path: ROUTES.EVENTS_DETAIL, // "events/detail"
                        Component: lazy(() => import("@pages/EventsDetail")),
                        loader: async ({ params }) => {
                            const { slug } = params;
                            const event = await EventService.getEventBySlug(
                                slug
                            );
                            return { event };
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
                        path: ROUTES.VISA_GUIDE,
                        Component: lazy(() => import("@pages/VisaGuide")),
                    },
                    {
                        path: ROUTES.ESSENTIALS,
                        Component: lazy(() => import("@pages/Essentials")),
                    },
                    {
                        path: ROUTES.GETTING_TO_AND_AROUND,
                        Component: lazy(() =>
                            import("@pages/GettingToAndAround")
                        ),
                    },
                    {
                        path: ROUTES.ACCESSIBILITY,
                        Component: lazy(() => import("@pages/Accessibility")),
                    },
                    {
                        path: ROUTES.VIETNAM_PASS,
                        Component: lazy(() => import("@pages/Pass")),
                    },
                    {
                        path: ROUTES.SAFETY,
                        Component: lazy(() => import("@pages/Safety")),
                    },
                    {
                        path: ROUTES.VISA_INFORMATION,
                        Component: lazy(() => import("@pages/VisaInformation")),
                    },
                    {
                        path: ROUTES.PLACE_TO_GO,
                        Component: lazy(() => import("@pages/PlaceToGo")),
                    },
                    {
                        path: ROUTES.WEATHER_TRIP,
                        Component: lazy(() => import("@pages/WeatherTrip")),
                    },
                    {
                        path: ROUTES.CURRENCY_GUIDE,
                        Component: lazy(() => import("@pages/CurrencyGuide")),
                    },
                    {
                        path: ROUTES.DOWNLOAD_APP,
                        Component: lazy(() => import("@pages/DownloadApp")),
                    },
                    {
                        path: ROUTES.DETAIL_HOTEL,
                        Component: lazy(() => import("@pages/DetailHotel")),
                    },
                    {
                        path: ROUTES.SEARCH_RESULT,
                        Component: lazy(() => import("@pages/SearchResult")),
                    },
                    {
                        path: ROUTES.SIGNIN,
                        Component: lazy(() => import("@pages/auth/SignIn")),
                        meta: () => {
                            return [
                                { title: t("login") },
                                {
                                    name: "description",
                                    content: t("login"),
                                },
                            ];
                        },
                    },
                    {
                        path: ROUTES.SIGNUP,
                        Component: lazy(() => import("@pages/auth/SignUp")),
                        meta: () => {
                            return [
                                { title: t("login") },
                                {
                                    name: "description",
                                    content: t("login"),
                                },
                            ];
                        },
                    },
                    {
                        path: ROUTES.SIGNIN_PASSWORD,
                        Component: lazy(() =>
                            import("@pages/auth/SignInPassword")
                        ),
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const query = Object.fromEntries(
                                url.searchParams.entries()
                            );
                            const email = query?.email ?? "";
                            return {
                                email,
                            };
                        },
                    },
                    {
                        path: ROUTES.FORGOT_PASSWORD,
                        Component: lazy(() =>
                            import("@pages/auth/ForgotPassword")
                        ),
                    },
                    {
                        path: ROUTES.ATTRACTIONS,
                        Component: lazy(() => import("@pages/Attractions")),
                        loader: async () => {
                            const res = await Promise.all([
                                FAQService.getListFAQs(),
                                AttractionService.listAttraction({})
                            ]);
                            return {
                                FAQs: res[0],
                                attractions: res[1].potentials ?? [],
                            };
                        },
                    },
                    {
                        path: ROUTES.SHOPPINGCART,
                        Component: lazy(() => import("@pages/ShoppingCart")),
                    },
                    {
                        path: ROUTES.ATTRACTIONS_DETAIL,
                        Component: lazy(() =>
                            import("@pages/AttractionsDetail")
                        ),
                    },
                    {
                        path: "hotel",
                        Component: lazy(() => import("@pages/Hotel")),
                    },
                ],
            },
            {
                path: `${ROUTES.MAP}/:slug/:id?`,
                Component: lazy(() => import("@pages/Map")),
                loader: async ({params}) => {
                    const res = await MapService.getListDestination(params.slug);
                    return res;
                },
            },
            {
                path: ROUTES.TRIP_DETAIL_RESULT,
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
        path: ROUTES.NOT_FOUND,
        Component: lazy(() => import("@pages/NotFound")),
    },
];

export default routes;
