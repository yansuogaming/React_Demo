import { Outlet } from "react-router"
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useLocation } from 'react-router'

const Root = () => {
    const location = useLocation()
    return (
        <>
            <Header noBackgroundOnScroll={location.pathname === '/'} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
