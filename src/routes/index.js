import { createBrowserRouter } from 'react-router'
import Home from '@pages/Home'
import City from '@pages/City'
import NotFound from '@pages/NotFound'
import Root from '@layouts/Root'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'city/:slug',
                Component: City
            }
        ]
    },
    {
        path: '*',
        Component: NotFound,
    },
])

export default router
