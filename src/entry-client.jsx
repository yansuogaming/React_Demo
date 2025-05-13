import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import routes from '@routes/index'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import '@css/index.css'

const router = createBrowserRouter(routes)
ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
)