import { FaCheckCircle } from "react-icons/fa";

const facilityGroups = [
    {
        title: "Bathroom",
        items: [
            "Toilet paper",
            "Towel",
            "Bath or Shower",
            "Private bathroom",
            "Free toiletries",
        ],
    },
    {
        title: "Bedroom",
        items: ["Bedspread", "Closet or closet", "Alarm clock"],
    },
    {
        title: "Out side",
        items: ["Outdoor tables and chairs", "Sun terrace", "Terrace/patio"],
    },
    {
        title: "Kitchen",
        items: ["Electric kettle", "Fridge"],
    },
    {
        title: "Work",
        items: ["Bicycle rental", "Cycling tour"],
    },
    {
        title: "Reception service",
        items: [
            "Lockers",
            "Private check-in/check-out",
            "Concierge service",
            "Keep your luggage",
            "Tour desk",
            "Currency exchange",
        ],
    },
    {
        title: "Cleaning service",
        items: ["Clean the room every day", "Trouser ironing board"],
    },
];

const columns = [
    ["Bathroom", "Bedroom"],
    ["Out side", "Kitchen", "Work"],
    ["Reception service", "Cleaning service"],
];

const HotelTabs_Facilities = () => {
    return (
        <div className="mb-[80px]">
            <h2 className="text-[28px] font-[700] text-[#000] mb-[32px]">
                Facilities of Hanoi Veris Boutique Hotel & Spa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                {columns.map((groupTitles, colIdx) => (
                    <div key={colIdx} className="space-y-5">
                        {groupTitles.map((title) => {
                            const group = facilityGroups.find(
                                (g) => g.title === title
                            );
                            return (
                                <div key={title}>
                                    <h3 className="text-[16px] font-[700] text-[#111D37] mb-[16px]">
                                        {group.title}
                                    </h3>
                                    <ul className="space-y-[16px]">
                                        {group.items.map((label, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-[8px] text-[#111D37] text-[16px] leading-[24px]"
                                            >
                                                <FaCheckCircle className="text-[#434B5C] w-[24px] h-[24px]" />
                                                <span>{label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelTabs_Facilities;
