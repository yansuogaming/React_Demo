import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgOtherRegion1 from '@images/other-region.png'
import imgOtherRegion2 from '@images/other-region2.png'
import { NavLink } from 'react-router'

const OtherRegion = ({ className = '' }) => {
    return (
        <section className={`container mx-auto grid grid-cols-2 gap-[8px] ${className}`}>
            <NavLink to="" className="relative group">
                <div className="rounded-[60px_0_0_0] overflow-hidden">
                    <img src={imgOtherRegion1} alt="Sapa" />
                </div>
                <div className="absolute top-[calc(100%-70px)] left-[40px] w-full group-hover:top-[calc(100%-110px)] transform transition-all duration-500">
                    <h3 className="text-white text-[40px] font-bold mb-[10px]">Sapa</h3>
                    <div to="/" className="flex items-center gap-[8px] text-white text-[18px] opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                        Explore Now
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </NavLink>
            <NavLink to="" className="relative group">
                <div className="rounded-[0_0_60px_0] overflow-hidden">
                    <img src={imgOtherRegion2} alt="Sapa" />
                </div>
                <div className="absolute top-[calc(100%-70px)] left-[40px] w-full group-hover:top-[calc(100%-110px)] transform transition-all duration-500">
                    <h3 className="text-white text-[40px] font-bold mb-[10px]">Ha Long Bay</h3>
                    <div to="/" className="flex items-center gap-[8px] text-white text-[18px] opacity-0 group-hover:opacity-100 transform transition-all duration-500">
                        Explore Now
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </NavLink>
        </section>
    )
}

export default OtherRegion