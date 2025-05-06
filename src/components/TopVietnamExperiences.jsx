import image1 from '@images/image_6.png'
import image2 from '@images/image_7.svg'
import image3 from '@images/image_8.svg'
import image4 from '@images/image_9.svg'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { useTranslation } from 'react-i18next'

const TopVietnamExperiences = ({ className = ''}) => {
    // const { t } = useTranslation()

    return (
        <section className={`container mx-auto ${className}`}>
            <h2 className="mb-[32px] text-[#1A2A44] text-[30px] text-center">Unforgettable Vietnam Experiences</h2>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px]">
                <img height="280px" src={image1} alt="Cultural Heritage" />
                <h3 className="absolute bottom-[30px] left-[47px] text-[32px] font-bold text-white z-1">Cultural Heritage</h3>
                <div className="w-1/2 h-full absolute top-0 left-0 rounded-[150px_0_0_0] bg-[linear-gradient(90deg,_#F258BE_0%,_rgba(242,88,190,0.5)_56.25%,_rgba(242,88,190,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px]">
                <img height="280px" src={image2} alt="Cultural Heritage" />
                <h3 className="absolute bottom-[30px] left-[47px] text-[32px] font-bold text-white z-1">Cuisine</h3>
                <div className="w-1/2 h-full absolute top-0 left-0 bg-[linear-gradient(90deg,_#F26833_0%,_rgba(242,104,51,0.5)_61.37%,_rgba(242,104,51,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px]">
                <img height="280px" src={image3} alt="Cultural Heritage" />
                <h3 className="absolute bottom-[30px] left-[47px] text-[32px] font-bold text-white z-1">Nature & Adventure</h3>
                <div className="w-1/2 h-full absolute top-0 left-0 bg-[linear-gradient(90deg,_#33B6E2_0%,_rgba(51,182,226,0.5)_65.38%,_rgba(51,182,226,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px]">
                <img height="280px" src={image4} alt="Cultural Heritage" />
                <h3 className="absolute bottom-[30px] left-[47px] text-[32px] font-bold text-white z-1">Sustainable Travel</h3>
                <div className="w-1/2 h-full absolute top-0 left-0 rounded-[0_0_150px_0] bg-[linear-gradient(90deg,_#2FB22F_0%,_rgba(47,178,47,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="flex gap-[10px] text-[#007BFF] p-[15px] w-fit mx-auto border-1 border-[#007BFF] mt-[32px] rounded-[80px] items-center">
                Explore All Experiences
                <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
        </section>
    )
}

export default TopVietnamExperiences