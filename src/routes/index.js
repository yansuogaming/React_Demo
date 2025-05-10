import { lazy } from 'react'

const routes = [
    {
        path: '/',
        Component: lazy(() => import('@layouts/Root')),
        children: [
            {
                index: true,
                Component: lazy(() => import('@pages/Home')),
                // loader() {
                //     return json({ message: "Welcome to React Router!" });
                // }
            },
            {
                path: 'city/:slug',
                Component: lazy(() => import('@pages/City')),
            },
            {
                path: 'tripdetail',
                Component: lazy(() => import('@pages/Tripdetail')),
            },
            {
                path: 'about',
                Component: lazy(() => import('@pages/About')),
            },
            {
                path: 'experience/:slug',
                Component: lazy(() => import('@pages/ExperienceDetail')),
            },
            {
                path: 'itineraries',
                Component: lazy(() => import('@pages/Itineraries')),
            },
            {
                path: 'events',
                Component: lazy(() => import('@pages/Events')),
            },
        ],
    },
    {
        path: 'tripdetail/result',
        Component: lazy(() => import('@layouts/TripDetailLayout')),
        children: [
            {
                index: true,
                Component: lazy(() => import('@pages/TripDetailResult')),
            },
        ],
    },
    {
        path: '*',
        Component: lazy(() => import('@pages/NotFound')),
    },
];

export default routes;
