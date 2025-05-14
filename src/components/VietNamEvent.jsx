import image from '@images/image_10.png'
import iconLocation from '@images/icon-location2.svg'
import iconTicket from '@images/icon-ticket.svg'
import { useTranslation } from 'react-i18next'
import ViewMoreButton from './button/ViewMoreButton'
import CardEvent from './card/CardEvent'
import { NavLink } from 'react-router'
import { addDays } from 'date-fns'
import { useEffect } from 'react'
import HttpClient from '@services/HttpClient'

const VietNamEvent = ({ className = '' }) => {
    const { t } = useTranslation()

    const getEvents = async function () {
        const res = await HttpClient
            .tourdb()
            .get('')
        return res.data
    }

    useEffect(() => {
        getEvents()
    }, [])

    const startTime = new Date()
    const endTime = addDays(new Date(), 1)
    return (
        <section className={className}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <h2 className="text-[30px] font-bold text-[#1A2A44] mb-[20px]">
                        Celebrate Vietnam’s Vibrant Events
                    </h2>
                    <ViewMoreButton text={t('See All Events')} />
                </div>
                <div className="grid grid-cols-4 gap-[30px]">
                    <CardEvent
                        title="Enjoy Hanoi street food"
                        widthImage="450px"
                        heightImage="245px"
                        image={image}
                        href="/"
                        startTime={startTime}
                        endTime={endTime}
                    >
                        <NavLink className="bg-white rounded-[0_0_12px_12px]">
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </NavLink>
                    </CardEvent>
                    <CardEvent
                        title="Enjoy Hanoi street food"
                        widthImage="450px"
                        heightImage="245px"
                        image={image}
                        href="/"
                        startTime={startTime}
                        endTime={endTime}
                    >
                        <NavLink className="bg-white rounded-[0_0_12px_12px]">
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </NavLink>
                    </CardEvent>
                    <CardEvent
                        title="Enjoy Hanoi street food"
                        widthImage="450px"
                        heightImage="245px"
                        image={image}
                        href="/"
                        startTime={startTime}
                        endTime={endTime}
                    >
                        <NavLink className="bg-white rounded-[0_0_12px_12px]">
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </NavLink>
                    </CardEvent>
                    <CardEvent
                        title="Enjoy Hanoi street food"
                        widthImage="450px"
                        heightImage="245px"
                        image={image}
                        href="/"
                        startTime={startTime}
                        endTime={endTime}
                    >
                        <NavLink className="bg-white rounded-[0_0_12px_12px]">
                            <p className="flex gap-[5px] items-center">
                                <img src={iconLocation} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                                <span>Nha Trang</span>
                                <img src={iconTicket} style={{ width: '20px', height: '20px' }} alt="3 days 2 nights" />
                            </p>
                            <p className="text-[16px] font-normal mt-[16px]">
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                            </p>
                        </NavLink>
                    </CardEvent>
                </div>
            </div>
        </section>
    )
}

export default VietNamEvent