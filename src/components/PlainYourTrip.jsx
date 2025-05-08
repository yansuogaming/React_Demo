import image from '@images/image_43.png'
import { Form } from 'react-router'
import iconVisa from '@images/icon-visa.svg'
import iconItinerary from '@images/icon-itinerary.svg'
import iconTools from '@images/icon-tools.svg'
import CreateItineraryButton from './button/CreateItineraryButton'
import InputTripLocation from './input/InputTripLocation'

const PlainYourTrip = ({ className = '' }) => {
    return (
        <section className={`rounded-[8px] container flex justify-between mx-auto bg-[linear-gradient(104deg,_#F5F6FA_0%,_#EFF4FF_70.01%)] p-[15px_15px_15px_50px] ${className}`}>
            <Form action="/tripdetail">
                <h2 className="text-[40px] font-bold mb-[20px]">
                    Plan Your Trip
                </h2>
                <p className="text-[20px] font-normal mb-[30px]">
                    Plan your trip for free and enjoy exclusive deals on local experiences!
                </p>
                <InputTripLocation />
                <CreateItineraryButton className="mt-[12px]" />
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