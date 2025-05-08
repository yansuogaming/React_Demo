import TertiaryHeading from '@components/text/TertiaryHeading'
import useLanguage from '@hooks/useLanguage'
import { format } from 'date-fns'
import { vi, enUS } from 'date-fns/locale'
import { NavLink } from 'react-router'

const CardEvent = ({
    title,
    widthImage,
    heightImage,
    image,
    children,
    href = '/',
    startTime = new Date(),
    endTime = new Date()
}) => {
    const {language} = useLanguage()

    let txtStartTime = ''
    let txtEndTime = ''
    switch (language) {
        case 'vi':
            txtStartTime = format(startTime, 'd MMM', { locale: vi })
            txtEndTime = format(endTime, 'd MMM', { locale: vi })
            break;
        default:
            txtStartTime = format(startTime, 'd MMM', { locale: enUS })
            txtEndTime = format(endTime, 'd MMM', { locale: enUS })
            break;
    }

    return (
        <div className="group">
            <NavLink to={href} className="rounded-[60px_0_0_0] overflow-hidden block relative">
                <img
                    src={image}
                    alt={title}
                    style={{width: widthImage, height: heightImage }}
                    className="group-hover:scale-[1.1] transform transition-all duration-500"
                />
                <p className="absolute bottom-[15px] bg-white text-right p-[6px_8px] rounded-[4px] left-[15px]">
                    <b>{txtStartTime}</b>
                    {txtStartTime !== txtEndTime && (
                        <>
                            <br />
                            to <b>{txtEndTime}</b>
                        </>
                    )}
                </p>
            </NavLink>
            <div className="bg-white p-[16px] rounded-[0_0_12px_12px]">
                <TertiaryHeading
                    className="text-[20px] mb-[8px] group-hover:text-[#007BFF] transform transition-all duration-500"
                >
                    <NavLink to={href}>
                        {title}
                    </NavLink>
                </TertiaryHeading>
                {children}
            </div>
        </div>
    )
}

export default CardEvent