import { createBrowserRouter } from 'react-router'
import Home from '@pages/Home'
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
            }
        ]
    },
    {
        path: '*',
        Component: NotFound,
    },
])

export default router
