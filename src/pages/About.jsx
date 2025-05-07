import Breadcrumb from '@components/Breadcrumb'
import aboutVietNam from '@images/about-vietnam.png'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    const breadcrumdItems = [
        { label: t('home'), href: '/' },
        { label: 'About Vietnam ' }
    ]

    return (
        <main>
            <section className="container mx-auto">
                <Breadcrumb className="mb-[35px] mt-[15px]" items={breadcrumdItems} />
                <h1 className="text-[#1A2A44] text-[60px] font-medium mb-[35px]">About Vietnam</h1>
            </section>
            <section>
                <img src={aboutVietNam} alt="About Vietnam" />
            </section>
            <section>
                
            </section>
        </main>
    )
}

export default About