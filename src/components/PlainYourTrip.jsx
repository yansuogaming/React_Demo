import image from '@images/image_43.png'
// import iconArrowDown from '@images/icon-arrow-down.svg'
// import iconTag from '@images/icon-tag.png'
// import { NavLink } from 'react-router'
// import { useTranslation } from 'react-i18next'

const PlainYourTrip = ({ className = '' }) => {
    // const { t } = useTranslation()

    return (
        <section className={`container flex justify-between mx-auto bg-[linear-gradient(104deg,_#F5F6FA_0%,_#EFF4FF_70.01%)] p-[15px_15px_15px_50px] ${className}`}>
            <div>
                <h2 className="text-[40px] font-bold mb-[20px]">Plan Your Trip</h2>
                <p className="text-[20px] font-normal mb-[30px]">
                    Plan your trip for free and enjoy exclusive deals on local experiences!
                </p>
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14.6536 24.29C14.4632 24.4267 14.2347 24.5003 14.0002 24.5003C13.7658 24.5003 13.5373 24.4267 13.3469 24.29C7.71307 20.2743 1.7339 12.0143 7.7784 6.04567C9.4378 4.41332 11.6725 3.49898 14.0002 3.5C16.3336 3.5 18.5724 4.41583 20.2221 6.0445C26.2666 12.0132 20.2874 20.272 14.6536 24.29Z" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.0003 13.9999C14.6192 13.9999 15.2127 13.7541 15.6502 13.3165C16.0878 12.8789 16.3337 12.2854 16.3337 11.6666C16.3337 11.0477 16.0878 10.4543 15.6502 10.0167C15.2127 9.57909 14.6192 9.33325 14.0003 9.33325C13.3815 9.33325 12.788 9.57909 12.3504 10.0167C11.9128 10.4543 11.667 11.0477 11.667 11.6666C11.667 12.2854 11.9128 12.8789 12.3504 13.3165C12.788 13.7541 13.3815 13.9999 14.0003 13.9999Z" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p>Where do you want to go?</p>
                        <input type="text" placeholder="Eg: Bangkok, Singapore, Hanoi,..." />
                    </div>
                </div>
            </div>
            <div>
                <img src={image} alt="Map" width="480px" />
            </div>
        </section>
    )
}

export default PlainYourTrip