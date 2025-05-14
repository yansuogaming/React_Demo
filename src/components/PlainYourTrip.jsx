import image from "@images/image_43.png";
import { Form } from "react-router";
import iconVisa from "@images/icon-visa.svg";
import iconItinerary from "@images/icon-itinerary.svg";
import iconTools from "@images/icon-tools.svg";
import CreateItineraryButton from "./button/CreateItineraryButton";
import InputTripLocation from "./input/InputTripLocation";
import { cn } from "@lib/utils";

const PlainYourTrip = ({ className = "" }) => {
    return (
        <section
            className={cn(
                "rounded-[8px] container",
                "bg-[linear-gradient(104deg,_#F5F6FA_0%,_#EFF4FF_70.01%)]",
                className
            )}
        >
            <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-[15px_15px_15px_50px] gap-6">
                <Form
                    action="/tripdetail"
                    className="w-full md:w-1/2 max-w-full"
                >
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-4 md:mb-[20px]">
                        Plan Your Trip
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mb-6 md:mb-[30px] max-w-[600px]">
                        Plan your trip for free and enjoy exclusive deals on
                        local experiences!
                    </p>
                    <InputTripLocation />
                    <CreateItineraryButton className="mt-3 md:mt-[12px]" />
                    <div className="flex flex-wrap gap-3 md:gap-[12px] mt-6 md:mt-[30px]">
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm md:text-base">
                            <img src={iconVisa} alt="Visa" />
                            Visas
                        </button>
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm md:text-base">
                            <img src={iconItinerary} alt="Itinerary" />
                            Itineraries
                        </button>
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm md:text-base">
                            <img src={iconTools} alt="Tools" />
                            Apps & Tools
                        </button>
                    </div>
                </Form>

                <div className="w-full md:w-[480px] flex justify-center md:justify-end">
                    <img
                        src={image}
                        alt="Map"
                        className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[480px] h-auto"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default PlainYourTrip;
