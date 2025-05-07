import image from '@images/image_43.png'
import { Form } from 'react-router'
import iconMagicSpark from '@images/icon-magic-spark.svg'
import iconVisa from '@images/icon-visa.svg'
import iconItinerary from '@images/icon-itinerary.svg'
import iconTools from '@images/icon-tools.svg'

const PlainYourTrip = ({ className = '' }) => {
    return (
        <section className={`rounded-[8px] container flex justify-between mx-auto bg-[linear-gradient(104deg,_#F5F6FA_0%,_#EFF4FF_70.01%)] p-[15px_15px_15px_50px] ${className}`}>
            <Form>
                <h2 className="text-[40px] font-bold mb-[20px]">
                    Plan Your Trip
                </h2>
                <p className="text-[20px] font-normal mb-[30px]">
                    Plan your trip for free and enjoy exclusive deals on local experiences!
                </p>
                <div className="group items-center gap-[10px] flex border-2 rounded-[80px] p-[15px_20px] border-[#D8DAE2] focus-within:border-[#007BFF]">
                    <div>
                        <svg className="stroke-[#D8DAE2] group-focus-within:stroke-[#007BFF]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14.6536 24.29C14.4632 24.4267 14.2347 24.5003 14.0002 24.5003C13.7658 24.5003 13.5373 24.4267 13.3469 24.29C7.71307 20.2743 1.7339 12.0143 7.7784 6.04567C9.4378 4.41332 11.6725 3.49898 14.0002 3.5C16.3336 3.5 18.5724 4.41583 20.2221 6.0445C26.2666 12.0132 20.2874 20.272 14.6536 24.29Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.0003 13.9999C14.6192 13.9999 15.2127 13.7541 15.6502 13.3165C16.0878 12.8789 16.3337 12.2854 16.3337 11.6666C16.3337 11.0477 16.0878 10.4543 15.6502 10.0167C15.2127 9.57909 14.6192 9.33325 14.0003 9.33325C13.3815 9.33325 12.788 9.57909 12.3504 10.0167C11.9128 10.4543 11.667 11.0477 11.667 11.6666C11.667 12.2854 11.9128 12.8789 12.3504 13.3165C12.788 13.7541 13.3815 13.9999 14.0003 13.9999Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <p className="text-[20px] text-[#494951] font-bold">
                            Where do you want to go?
                        </p>
                        <input type="text" className="w-full outline-none text-[20px]" placeholder="Eg: Bangkok, Singapore, Hanoi,..." />
                    </div>
                </div>
                <button className="flex gap-[18px] bg-[#007BFF] rounded-[33px] p-[15px_60px] text-[22px] items-center text-white mt-[12px] font-bold">
                    <img src={iconMagicSpark} alt="Create itinerary now!" />
                    Create itinerary now!
                </button>
                <div className="flex gap-[12px] mt-[30px]">
                    <button className="flex gap-[5px] bg-white rounded-[80px] p-[5px_15px]">
                        <img src={iconVisa} alt="Visa" />
                        Visas
                    </button>
                    <button className="flex gap-[5px] bg-white rounded-[80px] p-[5px_15px]">
                        <img src={iconItinerary} alt="Visa" />
                        Itineraries
                    </button>
                    <button className="flex gap-[5px] bg-white rounded-[80px] p-[5px_15px]">
                        <img src={iconTools} alt="Visa" />
                        Apps & Tools
                    </button>
                </div>
            </Form>
            <div>
                <img src={image} alt="Map" width="480px" />
            </div>
        </section>
    )
}

export default PlainYourTrip