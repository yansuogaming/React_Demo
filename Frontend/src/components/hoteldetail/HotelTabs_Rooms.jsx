// HotelTabs_Rooms.jsx
import { useState } from "react";
import {
    FaCircleInfo,
    FaUser,
    FaCirclePlus,
    FaCheck,
    FaBed,
    FaEye,
    FaRulerCombined,
    FaStar,
} from "react-icons/fa6";

const dummyRooms = [
    {
        id: 1,
        title: "Rainbow Deluxe DBL/TWN",
        size: "25 m2",
        bed: "Single bed x 2",
        view: "Mountain View",
        perks: [
            "Great breakfast",
            "No cancellation allowed",
            "Down payment required upon booking",
            "Includes fridge",
        ],
        facilities: ["Designer toiletries", "Phone"],
        price: 100,
        perNight: 100,
        available: true,
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209890188.jpg?k=882e748be3114714efa7f001b6ffa97425b1a52a458d3166dea3c1af7c66ac09&o=&hp=1",
            "https://i.ytimg.com/vi/sTrJGDCXJNI/maxresdefault.jpg",
            "https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-IADGV_006-Dusk-Exterior-home.jpg",
            "https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-country-inn-hotel.jpg",
        ],
    },
    {
        id: 2,
        title: "Superior Twin Room with City View",
        size: "20 m2",
        bed: "1 King bed",
        view: "City View, Mountain View",
        perks: [
            "Included breakfast",
            "Free cancellation before December 14, 2024",
            "No need to pay in advance",
            "Includes late check-in + high-speed internet",
        ],
        facilities: ["Designer toiletries", "Phone"],
        price: 916,
        perNight: 229,
        available: true,
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209890188.jpg?k=882e748be3114714efa7f001b6ffa97425b1a52a458d3166dea3c1af7c66ac09&o=&hp=1",
            "https://i.ytimg.com/vi/sTrJGDCXJNI/maxresdefault.jpg",
            "https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-IADGV_006-Dusk-Exterior-home.jpg",
            "https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-country-inn-hotel.jpg",
        ],
    },
    {
        id: 3,
        title: "Premier King Room",
        size: "30 m2",
        bed: "1 King bed",
        view: "City View",
        perks: [
            "Free cancellation",
            "Late checkout available",
            "No prepayment needed",
        ],
        facilities: ["Bathtub", "Mini bar"],
        price: 0,
        perNight: 0,
        available: false,
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208884971.jpg?k=be362c1bb88dd8379be1fa40c2e7a7cb4c88cfc5cf489c3b1c72a1a94ec0f4cf&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208884951.jpg?k=6ae1f0c8c3f80bdb4c1f9c183640bdff5e62b5cb8d5f2d5fa0c4a934ce939dc9&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208884947.jpg?k=bf1f9b8b98df1f7a3ed1c84c22bbf35bc3dbcb208dd4224c96cf3824db40b53c&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208884943.jpg?k=b34703ae50f01b6fa4439fbe7be63e8b87ea18fa02f58f8721942fdf655a0135&o=&hp=1",
        ],
    },
];

const HotelTabs_Rooms = () => {
    const [showRooms, setShowRooms] = useState(false);

    return (
        <div className="space-y-6">
            {/* Availability filters */}
            <div className="flex flex-wrap gap-4 items-center">
                <input
                    type="text"
                    defaultValue="July 25, 2024 - July 27, 2024"
                    className="border px-4 py-2 rounded w-64 shadow-sm"
                />
                <input
                    type="text"
                    defaultValue="2 Adult(s), 0 Child, 2 Room"
                    className="border px-4 py-2 rounded w-64 shadow-sm"
                />
                <button
                    onClick={() => setShowRooms(true)}
                    className="bg-teal-600 text-white font-medium px-4 py-2 rounded shadow hover:bg-teal-700"
                >
                    Check room availability
                </button>
            </div>

            {showRooms && (
                <div className="space-y-6">
                    {dummyRooms.map((room, index) => (
                        <div
                            key={room.id}
                            className={`rounded-md overflow-hidden ${
                                index === 1
                                    ? "border border-[#DADFE6]"
                                    : "border border-[#50A7F6]"
                            }`}
                        >
                            {index === 0 && (
                                <div className="bg-blue-500 text-white text-sm font-medium px-4 py-2 flex items-center gap-2">
                                    <FaStar className="text-white" /> Lowest
                                    price available!
                                </div>
                            )}

                            {room.available ? (
                                <div className="grid grid-cols-12 shadow-sm bg-white">
                                    {/* Gallery */}
                                    <div className="col-span-12 lg:col-span-3 p-4">
                                        <div className="aspect-[4/3] rounded overflow-hidden mb-2">
                                            <img
                                                src={room.images[0]}
                                                alt="Main"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex gap-2">
                                            <div className="aspect-[4/3] w-1/2 rounded overflow-hidden">
                                                <img
                                                    src={room.images[1]}
                                                    alt="Thumb 2"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="aspect-[4/3] w-1/2 rounded overflow-hidden relative">
                                                <img
                                                    src={room.images[2]}
                                                    alt="Thumb 3"
                                                    className="w-full h-full object-cover"
                                                />
                                                {room.images.length > 3 && (
                                                    <div className="absolute bottom-0 right-0 px-2 py-1 bg-black text-white text-sm font-semibold rounded-br-md opacity-60">
                                                        +
                                                        {room.images.length - 3}{" "}
                                                        images
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <button className="mt-2 text-blue-600 text-xs underline flex items-center gap-1">
                                            <FaCirclePlus /> Room details
                                        </button>
                                    </div>

                                    {/* Info */}
                                    <div className="col-span-12 lg:col-span-5 p-4 space-y-2">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {room.title}
                                        </h3>
                                        <ul className="flex flex-wrap gap-4 text-sm text-gray-700">
                                            <li className="flex items-center gap-1">
                                                <FaRulerCombined /> {room.size}
                                            </li>
                                            <li className="flex items-center gap-1">
                                                <FaBed /> {room.bed}
                                            </li>
                                            <li className="flex items-center gap-1">
                                                <FaEye /> {room.view}
                                            </li>
                                        </ul>
                                        <ul className="text-sm space-y-1">
                                            {room.perks.map((perk, i) => (
                                                <li
                                                    key={i}
                                                    className={`flex items-center gap-2 ${
                                                        perk.includes(
                                                            "Includes"
                                                        )
                                                            ? "text-gray-500"
                                                            : "text-green-700"
                                                    }`}
                                                >
                                                    <FaCheck />{" "}
                                                    <span>{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {room.facilities?.length > 0 && (
                                            <div className="mt-3">
                                                <h4 className="font-medium mb-1">
                                                    Facilities
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {room.facilities.map(
                                                        (f, i) => (
                                                            <div
                                                                key={i}
                                                                className="text-sm flex items-center gap-2 text-gray-700"
                                                            >
                                                                <FaCheck /> {f}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Price & Actions */}
                                    <div className="col-span-12 lg:col-span-4">
                                        <table className="w-full h-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th
                                                        className={`text-center py-2 border border-[#DADFE6] ${
                                                            index > 0
                                                                ? "border-t-0"
                                                                : ""
                                                        }`}
                                                    >
                                                        Guest
                                                    </th>
                                                    <th
                                                        className={`text-center py-2 border border-[#DADFE6] ${
                                                            index > 0
                                                                ? "border-t-0"
                                                                : ""
                                                        }`}
                                                    >
                                                        Room
                                                    </th>
                                                    <th
                                                        className={`py-2 border border-[#DADFE6] text-center ${
                                                            index > 0
                                                                ? "border-t-0"
                                                                : ""
                                                        }`}
                                                    >
                                                        Total price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center py-3 border border-[#DADFE6]">
                                                        <p>
                                                            <span>3</span> x{" "}
                                                            <FaUser className="inline" />
                                                        </p>
                                                        <div className="relative group inline-block">
                                                            <FaCircleInfo className="text-gray-400 cursor-pointer" />
                                                            <div className="absolute z-10 hidden group-hover:block bg-white border border-gray-300 text-xs text-gray-700 p-2 rounded shadow-md top-full left-1/2 -translate-x-1/2 whitespace-nowrap">
                                                                2 x Adult(s), 1
                                                                x Child
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center border border-[#DADFE6]">
                                                        <input
                                                            type="text"
                                                            value="1"
                                                            readOnly
                                                            className="border w-12 text-center rounded bg-gray-50"
                                                        />
                                                    </td>
                                                    <td className="px-4 py-2 border border-[#DADFE6]">
                                                        <div className="text-lg font-bold text-gray-800">
                                                            ${room.price}
                                                        </div>
                                                        <div className="text-green-700 text-sm">
                                                            1 nights includes
                                                            taxes & fees
                                                        </div>
                                                        <div className="text-gray-600 text-sm">
                                                            Price per room/night
                                                            is{" "}
                                                            <span className="font-semibold">
                                                                ${room.perNight}
                                                            </span>
                                                        </div>
                                                        <button className="mt-2 w-full bg-teal-500 text-white py-2 rounded font-semibold">
                                                            Book now
                                                        </button>
                                                        <ul className="text-sm mt-2 text-gray-700 list-disc ml-4">
                                                            <li>
                                                                Limited quantity
                                                            </li>
                                                            <li>
                                                                Confirmation is
                                                                immediate
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-12 shadow-sm bg-white p-4 items-center gap-4">
                                    <div className="col-span-12 lg:col-span-3">
                                        <div className="aspect-[4/3] rounded overflow-hidden">
                                            <img
                                                src={room.images[0]}
                                                alt="Sold Out Room"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-12 lg:col-span-6 space-y-2">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {room.title}
                                        </h3>
                                        <ul className="flex flex-wrap gap-4 text-sm text-gray-700">
                                            <li className="flex items-center gap-1">
                                                <FaRulerCombined /> {room.size}
                                            </li>
                                            <li className="flex items-center gap-1">
                                                <FaBed /> {room.bed}
                                            </li>
                                            <li className="flex items-center gap-1">
                                                <FaEye /> {room.view}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-span-12 lg:col-span-3 text-right flex flex-col items-end justify-between gap-2">
                                        <div className="text-red-500 text-sm font-bold border border-red-500 px-3 py-1 rounded rotate-[10deg] inline-block">
                                            Sold out
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 max-w-[220px] ml-auto">
                                            The room is sold out for the period
                                            you selected. You can{" "}
                                            <a
                                                href="#"
                                                className="text-teal-600 font-medium underline"
                                            >
                                                Contact Us
                                            </a>{" "}
                                            to reserve this favorite room.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HotelTabs_Rooms;
