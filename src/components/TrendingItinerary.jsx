import image from '@images/image_10.png'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TrendingItinerary = ({ className = ''}) => {
    const { t } = useTranslation()

    return (
        <section className={`container mx-auto ${className}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-[30px] font-bold text-[#1A2A44] mb-[20px]">
                    Trending Itineraries
                </h2>
                <NavLink to="/" className="flex items-center gap-[8px] text-[#007BFF]">
                    {t('Create Trip Plan')}
                    <FontAwesomeIcon icon={faArrowRight} />
                </NavLink>
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
                <div>
                    <NavLink className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Enjoy Hanoi street food
                        </NavLink>
                    </h3>
                    <p className="flex gap-[5px] items-center mb-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z" stroke="#494951" stroke-miterlimit="10"/>
                            <path d="M10 5V10.625H13.75" stroke="#494951" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
                <div>
                    <NavLink className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Enjoy Hanoi street food
                        </NavLink>
                    </h3>
                    <p className="flex gap-[5px] items-center mb-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z" stroke="#494951" stroke-miterlimit="10"/>
                            <path d="M10 5V10.625H13.75" stroke="#494951" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        3 days 2 nights
                    </p>
                    <p className="text-[16px] font-normal">
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                    </p>
                </div>
                <div>
                    <NavLink className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Enjoy Hanoi street food
                        </NavLink>
                    </h3>
                    <p className="flex gap-[5px] items-center mb-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5Z" stroke="#494951" stroke-miterlimit="10"/>
                            <path d="M10 5V10.625H13.75" stroke="#494951" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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

export default TrendingItinerary