import InputSearchTrip from "./InputSearchTrip";
import { FaLocationDot } from "react-icons/fa6";

const InputTripLocation = () => {
    return (
        <InputSearchTrip
            label="Where do you want to go?"
            iconSvg={<FaLocationDot className="text-[#007BFF]" size={20} />}
        >
            <input
                className="w-full outline-none text-[20px]"
                placeholder="Eg: Bangkok, Singapore, Hanoi,..."
                type="text"
            />
        </InputSearchTrip>
    );
};

export default InputTripLocation;
