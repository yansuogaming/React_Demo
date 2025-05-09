import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'

const router = createBrowserRouter([
    {
        path: '/',
        Component: lazy(() => import('@layouts/Root')),
        children: [
            {
                index: true,
                Component: lazy(() => import('@pages/Home')),
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
]);

export default router;
