import image from '@images/image_10.png'
import iconLocation from '@images/icon-location2.svg'
import iconTicket from '@images/icon-ticket.svg'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const VietNamEvent = ({ className = '' }) => {
    const { t } = useTranslation()

    return (
        <section className={className}>
            <div className="container mx-auto">
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
                        <div className="rounded-[60px_4px_0_0] overflow-hidden relative">
                            <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" className="h-[200px]" />
                            <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                                <b>10 Apr</b><br />
                                to <b>27 Jun</b>
                            </p>
                        </div>
                        <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                            <h3 className="text-[20px] mb-[8px] font-bold">Enjoy Hanoi street food</h3>
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-[60px_4px_0_0] overflow-hidden relative">
                            <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" className="h-[200px]" />
                            <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                                <b>10 Apr</b><br />
                                to <b>27 Jun</b>
                            </p>
                        </div>
                        <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                            <h3 className="text-[20px] mb-[8px] font-bold">Enjoy Hanoi street food</h3>
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-[60px_4px_0_0] overflow-hidden relative">
                            <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" className="h-[200px]" />
                            <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                                <b>10 Apr</b><br />
                                to <b>27 Jun</b>
                            </p>
                        </div>
                        <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                            <h3 className="text-[20px] mb-[8px] font-bold">Enjoy Hanoi street food</h3>
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-[60px_4px_0_0] overflow-hidden relative">
                            <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" className="h-[200px]" />
                            <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                                <b>10 Apr</b><br />
                                to <b>27 Jun</b>
                            </p>
                        </div>
                        <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                            <h3 className="text-[20px] mb-[8px] font-bold">Enjoy Hanoi street food</h3>
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VietNamEvent