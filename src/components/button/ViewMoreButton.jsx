import { FaArrowRight } from 'react-icons/fa6'
import { NavLink } from 'react-router'

const ViewMoreButton = ({ className = '', text, href = '/', ...props }) => {
    return (
        <NavLink to={href} className={`group flex items-center gap-[8px] text-[#007BFF] ${className}`} {...props}>
            {text}
            <FaArrowRight className="group-hover:translate-x-[5px] transform transition-all duration-200" />
        </NavLink>
    )
}

export default ViewMoreButton