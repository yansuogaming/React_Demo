import image from '@images/image_10.png'
import iconCLock from '@images/icon-clock.png'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const VietNamEvent = ({ className = ''}) => {
    const { t } = useTranslation()

    return (
        <section className={`container mx-auto ${className}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-[30px] font-bold text-[#1A2A44] mb-[20px]">
                    Celebrate Vietnam’s Vibrant Events
                </h2>
                <NavLink to="/" className="flex items-center gap-[8px] text-[#007BFF]">
                    {t('See All Events')}
                    <FontAwesomeIcon icon={faArrowRight} />
                </NavLink>
            </div>
            <div className="grid grid-cols-4 gap-[30px]">
                <div>
                    <div className="rounded-[60px_4px_0_0] overflow-hidden mb-[20px]">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </div>
                    <h3 className="text-[24px] font-bold">Enjoy Hanoi street food</h3>
                    <p className="flex gap-[5px] items-center">
                        <img src={iconCLock} style={{width: '20px', height: '20px'}} alt="3 days 2 nights" />
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
                <div>
                    <div className="rounded-[60px_4px_0_0] overflow-hidden mb-[20px]">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </div>
                    <h3 className="text-[24px] font-bold">Enjoy Hanoi street food</h3>
                    <p className="flex gap-[5px] items-center">
                        <img src={iconCLock} style={{width: '20px', height: '20px'}} alt="3 days 2 nights" />
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
                <div>
                    <div className="rounded-[60px_4px_0_0] overflow-hidden mb-[20px]">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </div>
                    <h3 className="text-[24px] font-bold">Enjoy Hanoi street food</h3>
                    <p className="flex gap-[5px] items-center">
                        <img src={iconCLock} style={{width: '20px', height: '20px'}} alt="3 days 2 nights" />
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
                <div>
                    <div className="rounded-[60px_4px_0_0] overflow-hidden mb-[20px]">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </div>
                    <h3 className="text-[24px] font-bold">Enjoy Hanoi street food</h3>
                    <p className="flex gap-[5px] items-center">
                        <img src={iconCLock} style={{width: '20px', height: '20px'}} alt="3 days 2 nights" />
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
            </div>
        </section>
    )
}

export default VietNamEvent