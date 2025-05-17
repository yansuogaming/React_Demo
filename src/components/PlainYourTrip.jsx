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
            <div className="flex flex-col lg:flex-row items-center justify-between p-[40px_20px_10px_20px] lg:p-[15px_15px_15px_50px] gap-8">
                <Form
                    action="/tripdetail"
                    className="h-fit w-full lg:w-1/2 flex flex-col items-start lg:items-start"
                >
                    <h2 className="text-[34px] lg:text-[40px] font-[700] mb-[15px] lg:mb-[20px]">
                        Plan Your Trip
                    </h2>
                    <p className="text-[16px] lg:text-[20px] mb-[24px] lg:mb-[32px] font-[400] text-[#494951]">
                        Plan your trip for free and enjoy exclusive deals on
                        local experiences!
                    </p>
                    <InputTripLocation />
                    <CreateItineraryButton className="mt-[12px] mx-auto lg:mx-0 " />
                    <div className="flex justify-start flex-wrap gap-[8px] lg:gap-[12px] mt-[20px] lg:mt-[30px]">
                        <button className="flex gap-[8px] bg-white rounded-[80px] p-[9px_16px] text-[16px] lg:[20px] font-[500]">
                            <img src={iconVisa} alt="Visa" />
                            Visas
                        </button>
                        <button className="flex gap-[8px] bg-white rounded-[80px] p-[9px_16px] text-[16px] lg:[20px] font-[500]">
                            <img src={iconItinerary} alt="Visa" />
                            Itineraries
                        </button>
                        <button className="flex gap-[8px] bg-white rounded-[80px] p-[9px_16px] text-[16px] lg:[20px] font-[500]">
                            <img src={iconTools} alt="Visa" />
                            Apps & Tools
                        </button>
                    </div>
                </Form>
                <div className="w-full lg:w-1/2">
                    <img
                        src={image}
                        alt="Map"
                        className="w-full max-w-[480px] mx-auto"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default PlainYourTrip;
