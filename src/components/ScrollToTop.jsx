import { useEffect } from 'react'
import { useLocation, useNavigation } from 'react-router'

const ScrollToTop = () => {
    const location = useLocation()
    const navigation = useNavigation()

    useEffect(() => {
        // chỉ scroll khi navigation đã kết thúc
        if (navigation.state === 'idle') {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
    }, [location, navigation.state])

    return null
}

export default ScrollToTop