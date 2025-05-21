import { lazy } from "react";
import routesAdmin from "./admin";
import ExperienceService from "@services/ExperienceService";
import EventService from "@services/EventService";
import FAQService from "@services/FAQService";
import WeatherService from "@services/WeatherService";
import MapService from "@services/MapService";

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
                EventService.getListGoingOn(),
              ]);
              return {
                experienceTypes: res[0],
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
            path: "city/:slug",
            Component: lazy(() => import("@pages/City")),
            loader: async () => {
              const res = await Promise.all([
                FAQService.getListFAQs(),
                EventService.getListGoingOn(),
                WeatherService.getCityWeather("Hà Nội"),
              ]);
              return {
                FAQs: res[0],
                events: res[1],
                weather: res[2],
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
            Component: lazy(() => import("@pages/ExpericencesDetail")),
          },
          {
            path: "itineraries",
            Component: lazy(() => import("@pages/Itineraries")),
          },
          {
            path: "events",
            Component: lazy(() => import("@pages/Events")),
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
            path: "visa-guide",
            Component: lazy(() => import("@pages/VisaGuide")),
          },
          {
            path: "essentials",
            Component: lazy(() => import("@pages/Essentials")),
          },
          {
            path: "getting-to-and-around",
            Component: lazy(() => import("@pages/GettingToAndAround")),
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
        ],
      },
      {
        path: "map-ha-noi",
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
            Component: lazy(() => import("@pages/TripDetailResult")),
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
