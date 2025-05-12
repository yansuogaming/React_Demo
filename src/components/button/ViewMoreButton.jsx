import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router'

const ViewMoreButton = ({ className = '', text, href = '/', ...props }) => {
    return (
        <NavLink to={href} className={`group flex items-center gap-[8px] text-[#007BFF] ${className}`} {...props}>
            {text}
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-[5px] transform transition-all duration-200" />
        </NavLink>
    )
}

export default ViewMoreButton