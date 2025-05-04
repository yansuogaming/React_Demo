// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import routes from '@routes/index.js'
import './i18n';
import '@css/index.css'

createRoot(document.getElementById('root')).render(
// <StrictMode>
    <RouterProvider router={routes} />
// </StrictMode>
)
