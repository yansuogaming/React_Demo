import heroImage from '@images/hero-image.svg'
import { useTranslation } from 'react-i18next'
import Story from '@components/Story'

const Home = () => {
    const { t } = useTranslation()
    return (
        <main>
            <section className="relative text-white">
                <img src={heroImage} alt="" />
                <h2 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] absolute bottom-[220px] w-full">
                    {t('home.hero_heading')}
                </h2>
                <p className="text-center text-[20px] font-normal absolute bottom-[188px] w-full">
                    {t('home.description')}
                </p>
                <div className="flex gap-[8px]">
                    
                </div>
            </section>
            
            <Story />
        </main>
    )
}

export default Home
