import image1 from '@images/image_6.png'
import image2 from '@images/image_7.svg'
import image3 from '@images/image_8.svg'
import image4 from '@images/image_9.svg'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ViewMoreButton from './button/ViewMoreButton'

const TopVietnamExperiences = ({ className = ''}) => {
    return (
        <section className={`container ${className}`}>
            <h2 className="mb-[32px] text-[#1A2A44] text-[30px] text-center">Unforgettable Vietnam Experiences</h2>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px] group overflow-hidden">
                <img height="280px" src={image1} alt="Cultural Heritage" />
                <div className="absolute -bottom-[100px] left-[47px] z-1 group-hover:bottom-[10px] transform transition-all duration-500">
                    <h3 className="text-[32px] font-bold text-white mb-[5px]">
                        Cultural Heritage
                    </h3>
                    <p className="text-[16px] text-white opacity-0 group-hover:opacity-100 w-[400px] transform transition-all duration-500">
                        Savor Vietnam’s diverse cuisine—from fragrant pho and crispy bánh mì to grilled meats and egg coffee—a true feast of flavors and cultural stories.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500 mt-[15px] text-white text-[25px]">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="w-1/2 h-full absolute top-0 left-0 rounded-[150px_0_0_0] bg-[linear-gradient(90deg,_#F258BE_0%,_rgba(242,88,190,0.5)_56.25%,_rgba(242,88,190,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px] group overflow-hidden">
                <img height="280px" src={image2} alt="Cultural Heritage" />
                <div className="absolute -bottom-[100px] left-[47px] z-1 group-hover:bottom-[10px] transform transition-all duration-500">
                    <h3 className="text-[32px] font-bold text-white mb-[5px]">
                        Cuisine
                    </h3>
                    <p className="text-[16px] text-white opacity-0 group-hover:opacity-100 w-[400px] transform transition-all duration-500">
                        Savor Vietnam’s diverse cuisine—from fragrant pho and crispy bánh mì to grilled meats and egg coffee—a true feast of flavors and cultural stories.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500 mt-[15px] text-white text-[25px]">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="w-1/2 h-full absolute top-0 left-0 bg-[linear-gradient(90deg,_#F26833_0%,_rgba(242,104,51,0.5)_61.37%,_rgba(242,104,51,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px] group overflow-hidden">
                <img height="280px" src={image3} alt="Cultural Heritage" />
                <div className="absolute -bottom-[100px] left-[47px] z-1 group-hover:bottom-[10px] transform transition-all duration-500">
                    <h3 className="text-[32px] font-bold text-white mb-[5px]">
                        Nature & Adventure
                    </h3>
                    <p className="text-[16px] text-white opacity-0 group-hover:opacity-100 w-[400px] transform transition-all duration-500">
                        Savor Vietnam’s diverse cuisine—from fragrant pho and crispy bánh mì to grilled meats and egg coffee—a true feast of flavors and cultural stories.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500 mt-[15px] text-white text-[25px]">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="w-1/2 h-full absolute top-0 left-0 bg-[linear-gradient(90deg,_#33B6E2_0%,_rgba(51,182,226,0.5)_65.38%,_rgba(51,182,226,0)_100%)]"></div>
            </NavLink>
            <NavLink to="/" className="w-fit mx-auto block relative mt-[10px] group overflow-hidden">
                <img height="280px" src={image4} alt="Cultural Heritage" />
                <div className="absolute -bottom-[100px] left-[47px] z-1 group-hover:bottom-[10px] transform transition-all duration-500">
                    <h3 className="text-[32px] font-bold text-white mb-[5px]">
                        Sustainable Travel
                    </h3>
                    <p className="text-[16px] text-white opacity-0 group-hover:opacity-100 w-[400px] transform transition-all duration-500">
                        Savor Vietnam’s diverse cuisine—from fragrant pho and crispy bánh mì to grilled meats and egg coffee—a true feast of flavors and cultural stories.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform transition-all duration-500 mt-[15px] text-white text-[25px]">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="w-1/2 h-full absolute top-0 left-0 rounded-[0_0_150px_0] bg-[linear-gradient(90deg,_#2FB22F_0%,_rgba(47,178,47,0)_100%)]"></div>
            </NavLink>
            <ViewMoreButton text="Explore All Experiences" className="text-[#007BFF] p-[15px] w-fit mx-auto border-1 border-[#007BFF] mt-[32px] rounded-[80px]" />
        </section>
    )
}

export default TopVietnamExperiences