import { createBrowserRouter } from "react-router";
import Home from "@pages/Home";
import City from "@pages/City";
import NotFound from "@pages/NotFound";
import Root from "@layouts/Root";
import Tripdetail from "@pages/Tripdetail";
import TripDetailResult from "@pages/TripdetailResult";
import TripDetail from "@pages/Tripdetail";
import TripDetailLayout from "@layouts/TripDetailLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "city/:slug",
                Component: City,
            },
            {
                path: "tripdetail",
                Component: TripDetail,
            },
        ],
    },
    {
        path: "tripdetail/result",
        Component: TripDetailLayout,
        children: [
            {
                index: true,
                Component: TripDetailResult,
            },
        ],
    },
    {
        path: "*",
        Component: NotFound,
    },
]);

export default router;
