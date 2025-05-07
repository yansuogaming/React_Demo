import { Outlet } from "react-router"
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useLocation } from 'react-router'
import ScrollToTop from "@components/ScrollToTop"

const Root = () => {
    const location = useLocation()
    return (
        <>
            <ScrollToTop />
            <Header noBackgroundOnScroll={location.pathname === '/'} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
