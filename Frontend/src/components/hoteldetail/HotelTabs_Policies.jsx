import { FaCircleInfo, FaCalendarCheck, FaCalendarDay } from "react-icons/fa6";

const policies = [
    {
        icon: <FaCalendarCheck className="text-[#1D2D53]" />,
        title: "Check-in",
        content: "From 2:00 PM",
    },
    {
        icon: <FaCalendarDay className="text-[#1D2D53]" />,
        title: "Check-out",
        content: "Until 12:00 PM",
    },
    {
        icon: <FaCircleInfo className="text-[#1D2D53]" />,
        title: "Cancellation/ prepayment",
        content:
            "Cancelation and prepayment policies vary according to accommodation type. Check what conditions apply to each option when making your selection.",
    },
    {
        icon: <FaCircleInfo className="text-[#1D2D53]" />,
        title: "Children & Beds",
        content: (
            <div className="space-y-2">
                <div>
                    <span className="font-semibold">Child policies</span>
                    <p>Children of all ages are welcome.</p>
                    <p>
                        Children 18 and above will be charged as adults at this
                        property.
                    </p>
                    <p>
                        To see correct prices and occupancy info, add the number
                        and ages of children in your group to your search.
                    </p>
                </div>
                <div>
                    <span className="font-semibold">
                        Crib and extra bed policies
                    </span>
                    <p>0 - 2 years - Crib upon request: Free</p>
                    <p>
                        6+ years - Extra bed upon request: VND 400,000 per
                        person, per night
                    </p>
                </div>
            </div>
        ),
    },
    {
        icon: <FaCircleInfo className="text-[#1D2D53]" />,
        title: "Other regulations",
        content: "Pets are not allowed.",
    },
];

const HotelTabs_Policies = () => {
    return (
        <div className="">
            <h2 className="text-[28px] md:text-[24px] font-[700] text-[#000] mb-[20px]">
                Property policies
            </h2>

            <div className="border border-[#DADFE6] rounded-[3px] overflow-hidden divide-y divide-[#DADFE6] bg-white">
                {policies.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-start gap-4 px-4 py-5"
                    >
                        <div className="flex items-start gap-2 w-full md:w-[220px]">
                            <span className="text-[16px] mt-[2px] min-w-[20px]">
                                {item.icon}
                            </span>
                            <span className="font-[700] text-[#1D2D53] text-[16px]">
                                {item.title}
                            </span>
                        </div>
                        <div className="text-[16px] text-[#1D2D53] font-[400] w-full md:flex-1 leading-[1.6]">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#E8F8F8] rounded-[8px] p-[20px_30px] mt-[40px]">
                <h3 className="text-[20px] font-[700] text-[#1D2D53]">
                    The Best of Hanoi
                </h3>
                <p className="text-[16px] text-[#1D2D53] mt-[6px]">
                    Click here to see more hotels and other accommodations in Da
                    Nang
                </p>
            </div>
        </div>
    );
};

export default HotelTabs_Policies;
