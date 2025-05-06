import image from '@images/image_10.png'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Story = () => {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-[30px] font-bold text-[#1A2A44] mb-[20px]">
                    Stories from Vietnam Travelers
                </h2>
                <NavLink to="/" className="flex items-center gap-[8px] text-[#3470b2]">
                    {t('Read more')}
                    <FontAwesomeIcon icon={faArrowRight} />
                </NavLink>
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
                <div>
                    <NavLink to="" className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Cruising Ha Long Bay: A Dream Come True
                        </NavLink>
                    </h3>
                    <NavLink to="/" className="flex items-center gap-[5px] group hover:text-[#3470b2]">
                        <svg className="group-hover:fill-[#3470b2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M9.12109 2.5L8.92547 2.67563L2.05047 9.55062L1.62109 10L2.05047 10.4494L7.67547 16.0744L8.12484 16.5037L8.57422 16.0744L15.4492 9.19938L15.6248 9.00375V2.5H9.12109ZM9.64859 3.75H14.3748V8.47687L8.12484 14.7269L3.39797 10L9.64859 3.75ZM16.2498 4.375V5.625H16.8748V10.7225L10.9373 16.6213L10.1561 15.84L9.27734 16.7188L10.488 17.9494L10.9373 18.3787L11.3673 17.9494L17.9486 11.445L18.1248 11.25V4.375H16.2498ZM12.4998 5C12.1561 5 11.8748 5.28125 11.8748 5.625C11.8748 5.96875 12.1561 6.25 12.4998 6.25C12.8436 6.25 13.1248 5.96875 13.1248 5.625C13.1248 5.28125 12.8436 5 12.4998 5Z" />
                        </svg>
                        #Vietnamtravel
                    </NavLink>
                </div>
                <div>
                    <NavLink to="" className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Cruising Ha Long Bay: A Dream Come True
                        </NavLink>
                    </h3>
                    <NavLink to="/" className="flex items-center gap-[5px] group hover:text-[#3470b2]">
                        <svg className="group-hover:fill-[#3470b2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M9.12109 2.5L8.92547 2.67563L2.05047 9.55062L1.62109 10L2.05047 10.4494L7.67547 16.0744L8.12484 16.5037L8.57422 16.0744L15.4492 9.19938L15.6248 9.00375V2.5H9.12109ZM9.64859 3.75H14.3748V8.47687L8.12484 14.7269L3.39797 10L9.64859 3.75ZM16.2498 4.375V5.625H16.8748V10.7225L10.9373 16.6213L10.1561 15.84L9.27734 16.7188L10.488 17.9494L10.9373 18.3787L11.3673 17.9494L17.9486 11.445L18.1248 11.25V4.375H16.2498ZM12.4998 5C12.1561 5 11.8748 5.28125 11.8748 5.625C11.8748 5.96875 12.1561 6.25 12.4998 6.25C12.8436 6.25 13.1248 5.96875 13.1248 5.625C13.1248 5.28125 12.8436 5 12.4998 5Z" />
                        </svg>
                        #Vietnamtravel
                    </NavLink>
                </div>
                <div>
                    <NavLink to="" className="rounded-[60px_4px_4px_4px] overflow-hidden">
                        <img src={image} alt="Cruising Ha Long Bay: A Dream Come True" />
                    </NavLink>
                    <h3 className="text-[24px] font-bold mb-[5px] mt-[20px]">
                        <NavLink to="/" className="hover:text-[#3470b2]">
                            Cruising Ha Long Bay: A Dream Come True
                        </NavLink>
                    </h3>
                    <NavLink to="/" className="flex items-center gap-[5px] group hover:text-[#3470b2]">
                        <svg className="group-hover:fill-[#3470b2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M9.12109 2.5L8.92547 2.67563L2.05047 9.55062L1.62109 10L2.05047 10.4494L7.67547 16.0744L8.12484 16.5037L8.57422 16.0744L15.4492 9.19938L15.6248 9.00375V2.5H9.12109ZM9.64859 3.75H14.3748V8.47687L8.12484 14.7269L3.39797 10L9.64859 3.75ZM16.2498 4.375V5.625H16.8748V10.7225L10.9373 16.6213L10.1561 15.84L9.27734 16.7188L10.488 17.9494L10.9373 18.3787L11.3673 17.9494L17.9486 11.445L18.1248 11.25V4.375H16.2498ZM12.4998 5C12.1561 5 11.8748 5.28125 11.8748 5.625C11.8748 5.96875 12.1561 6.25 12.4998 6.25C12.8436 6.25 13.1248 5.96875 13.1248 5.625C13.1248 5.28125 12.8436 5 12.4998 5Z" />
                        </svg>
                        #Vietnamtravel
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Story