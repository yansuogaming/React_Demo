import Footer from '@components/Footer';
import Header from '@components/Header'
import ScrollToTop from '@components/ScrollToTop'
import { useState } from 'react';

const NotFound = () => {
    const [background, setBackground] = useState('red')

    const onLoadImage = () => {
        
    }

    return (
        <>
            <ScrollToTop />
            <Header noBackgroundOnScroll={true} />
            <main>
                <div className="w-screen h-screen transform transition-all duration-500">
                    <img onLoad={onLoadImage} src="https://media.myswitzerland.com/image/fetch/c_lfill,g_north,w_2320,h_1600/f_auto,q_auto,e_sharpen:50/https://www.myswitzerland.com/-/media/dam/error/error%20page/image%20summer/38125_32001800_1.jpeg" alt="" />
                </div>
            </main>
            <Footer />
        </>
    )
};

export default NotFound