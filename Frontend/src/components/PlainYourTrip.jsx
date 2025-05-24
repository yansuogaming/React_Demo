// import image from "@images/image_43.png";
import { Form } from "react-router";
import iconVisa from "@images/icon-visa.svg";
import iconItinerary from "@images/icon-itinerary.svg";
import iconTools from "@images/icon-tools.svg";
import CreateItineraryButton from "./button/CreateItineraryButton";
import InputTripLocation from "./input/InputTripLocation";
import { cn } from "@lib/utils";
import MapHomePlanYourTrip from "./MapHomePlanYourTrip";

const PlainYourTrip = ({ className = "" }) => {
    return (
        <section
            className={cn(
                "rounded-[8px] container",
                "bg-[linear-gradient(104deg,_#F5F6FA_0%,_#EFF4FF_70.01%)]",
                className
            )}
        >
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-[15px_15px_15px_50px] gap-6 sm:gap-8">
                <Form
                    action="/tripdetail"
                    className="h-fit w-full lg:w-1/2 flex flex-col items-center sm:items-start"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-[700] mb-3 sm:mb-4 md:mb-[15px] lg:mb-[20px]">
                        Plan Your Trip
                    </h2>
                    <p className="text-sm sm:text-base md:text-[16px] lg:text-[20px] mb-4 sm:mb-6 md:mb-[24px] lg:mb-[32px] font-[400] text-[#494951] text-center sm:text-left">
                        Plan your trip for free and enjoy exclusive deals on
                        local experiences!
                    </p>
                    <InputTripLocation />
                    <CreateItineraryButton className="mt-3 sm:mt-4 md:mt-[12px] mx-auto sm:mx-0" />
                    <div className="flex justify-center sm:justify-start flex-wrap gap-2 sm:gap-3 md:gap-[8px] lg:gap-[12px] mt-4 sm:mt-6 md:mt-[20px] lg:mt-[30px]">
                        <button className="flex gap-2 sm:gap-[8px] bg-white rounded-[80px] p-2 sm:p-[9px_16px] text-sm sm:text-base md:text-[16px] lg:text-[20px] font-[500]">
                            <img
                                src={iconVisa}
                                alt="Visa"
                                className="w-5 sm:w-6"
                            />
                            Visas
                        </button>
                        <button className="flex gap-2 sm:gap-[8px] bg-white rounded-[80px] p-2 sm:p-[9px_16px] text-sm sm:text-base md:text-[16px] lg:text-[20px] font-[500]">
                            <img
                                src={iconItinerary}
                                alt="Itinerary"
                                className="w-5 sm:w-6"
                            />
                            Itineraries
                        </button>
                        <button className="flex gap-2 sm:gap-[8px] bg-white rounded-[80px] p-2 sm:p-[9px_16px] text-sm sm:text-base md:text-[16px] lg:text-[20px] font-[500]">
                            <img
                                src={iconTools}
                                alt="Tools"
                                className="w-5 sm:w-6"
                            />
                            Apps & Tools
                        </button>
                    </div>
                </Form>
                <div className="w-full lg:w-1/2 z-0">
                    <MapHomePlanYourTrip />
                </div>
            </div>
        </section>
    );
};

export default PlainYourTrip;
