import Reveal from '@components/animation/Reveal'
import TertiaryHeading from '@components/text/TertiaryHeading'
import { NavLink } from 'react-router'

const CardService = ({ title, widthImage, heightImage, image, children, href = '/' }) => {
    return (
        <Reveal className="group">
            <NavLink to={href} className="rounded-[60px_0_0_0] overflow-hidden block">
                <img
                    src={image}
                    alt={title}
                    style={{width: widthImage, height: heightImage }}
                    className="group-hover:scale-[1.1] transform transition-all duration-500"
                />
            </NavLink>
            <div className="bg-white rounded-[0_0_12px_12px]">
                <TertiaryHeading
                    className="text-[24px] mb-[8px] pt-[20px] group-hover:text-[#007BFF] transform transition-all duration-500"
                >
                    <NavLink to={href}>
                        {title}
                    </NavLink>
                </TertiaryHeading>
                {children}
            </div>
        </Reveal>
    )
}

export default CardService