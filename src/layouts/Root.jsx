import { Outlet } from "react-router"
import Header from '@components/Header'
import Footer from '@components/Footer'

const Root = () => {
    return (
        <>
            <Header noBackgroundOnScroll={true} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
