import { NavLink } from "react-router";
import { useState } from "react";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const TripDetailResult = () => {
    const [activeTab, setActiveTab] = useState("spots");
    const [activeCity, setActiveCity] = useState("hanoi"); // thêm state cho city

    // Hanoi attraction logic
    const [attractions, setAttractions] = useState([
        {
            id: 1,
            name: "Hoan Kiem Lake",
            image: "https://vietnamtour.in/wp-content/uploads/Hoan-Kiem-lake-1-1-1120x800.jpg",
            type: "Natural Feature",
            duration: "1-3 hours",
            rating: 4.7,
            reviews: 9547,
            tags: ["🔥 Popular attractions", "🗿 History and culture"],
        },
    ]);

    // Food & Restaurants

    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: "Cha Ca Thang Long",
            image: "https://product.hstatic.net/1000275435/product/foody-cha-ca-thang-long-608-636549138293313100_a23d4f8072144d5896ef0db3f69a46d9_master.jpg",
            type: "Restaurant",
            rating: 4.7,
            reviews: 9547,
            tags: ["🍜 Cuisine"],
        },
        {
            id: 2,
            name: "Quan An Ngon",
            image: "https://www.cet.edu.vn/wp-content/uploads/2018/08/cha-ca-la-vong.jpg",
            type: "Restaurant",
            rating: 4.7,
            reviews: 9547,
            tags: ["🍜 Cuisine"],
        },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [toDeleteId, setToDeleteId] = useState(null);

    const handleDelete = () => {
        setAttractions((prev) => prev.filter((item) => item.id !== toDeleteId));
        setShowDeleteModal(false);
    };

    return (
        <main>
            <div className="relative grid w-full grid-cols-12 flex-row justify-center bg-[#F8FAFC]">
                {/* Left information */}
                <div className="col-span-12 flex flex-col md:col-span-8">
                    <div className="flex flex-1 flex-col">
                        {/* Tab buttons */}
                        <div className="sticky top-[0px] flex w-full justify-between gap-2 bg-white md:h-[52px] rounded-t-[16px] md:rounded-t-[30px] border-b border-[#D9D9D9] z-[10]">
                            {/* List of spots */}
                            <div
                                onClick={() => setActiveTab("spots")}
                                className={`flex w-1/3 cursor-pointer flex-col items-center justify-center gap-0.5 md:flex-row md:gap-2 ${
                                    activeTab === "spots"
                                        ? "border-b-3 border-action text-action md:pb-0 border-[#007BFF] text-[#007BFF]"
                                        : "text-[#1A2A44] "
                                }`}
                            >
                                <div className="text-md font-medium text-[18px]">
                                    List of spots
                                </div>
                            </div>
                            {/* Itinerary */}
                            <div
                                onClick={() => setActiveTab("itinerary")}
                                className={`flex w-1/3 cursor-pointer flex-col items-center justify-center gap-0.5 md:flex-row md:gap-2 ${
                                    activeTab === "itinerary"
                                        ? "border-b-4 border-action pb-1.5 text-action md:pb-0 border-[#007BFF] text-[#007BFF]"
                                        : "text-[#1A2A44]"
                                }`}
                            >
                                <div className="text-md font-medium text-[18px]">
                                    Itinerary
                                </div>
                            </div>

                            {/* Notes & Tips */}
                            <div
                                onClick={() => setActiveTab("notes")}
                                className={`flex w-1/3 cursor-pointer flex-col items-center justify-center gap-0.5 md:flex-row md:gap-2 ${
                                    activeTab === "notes"
                                        ? "border-b-4 border-action pb-1.5 text-action md:pb-0 border-[#007BFF] text-[#007BFF]"
                                        : "text-[#1A2A44]"
                                }`}
                            >
                                <div className="text-md font-medium text-[18px]">
                                    Notes &amp; Tips
                                </div>
                            </div>
                        </div>

                        {/* Tab content */}
                        <div className="p-4">
                            {activeTab === "spots" && (
                                <div>
                                    {/* City buttons */}
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() =>
                                                setActiveCity("hanoi")
                                            }
                                            className={`inline-flex px-6 py-3 justify-center items-center gap-[10px] rounded-full border text-sm font-medium transition ${
                                                activeCity === "hanoi"
                                                    ? "bg-[#007BFF] text-white border-[#007BFF]"
                                                    : "bg-white text-[#1A2A44] border-[#D9D9D9]"
                                            }`}
                                        >
                                            Hanoi
                                        </button>
                                        <button
                                            onClick={() =>
                                                setActiveCity("nhatrang")
                                            }
                                            className={`inline-flex px-6 py-3 justify-center items-center gap-[10px] rounded-full border text-sm font-medium transition ${
                                                activeCity === "nhatrang"
                                                    ? "bg-[#007BFF] text-white border-[#007BFF]"
                                                    : "bg-white text-[#1A2A44] border-[#D9D9D9]"
                                            }`}
                                        >
                                            Nha Trang
                                        </button>
                                    </div>

                                    {/* Nội dung thành phố */}
                                    <div>
                                        {activeCity === "hanoi" && (
                                            <>
                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                    defaultValue="item-1"
                                                    className="bg-white rounded-[12px] shadow-sm"
                                                >
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger className="text-lg font-semibold px-4 py-3">
                                                            Attractions (
                                                            {attractions.length}
                                                            )
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pb-4 space-y-4">
                                                            {attractions.map(
                                                                (item) => (
                                                                    <div
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex items-start gap-4 border rounded-lg p-[17px_15px_14px] relative"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                item.image
                                                                            }
                                                                            alt={
                                                                                item.name
                                                                            }
                                                                            className="w-[112px] h-[112px] object-cover rounded-[12px_0px]"
                                                                        />
                                                                        <div className="flex-1">
                                                                            <h3 className="font-semibold text-md">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </h3>
                                                                            <p className="text-sm text-gray-500">
                                                                                {
                                                                                    item.type
                                                                                }{" "}
                                                                                •
                                                                                Duration:{" "}
                                                                                {
                                                                                    item.duration
                                                                                }
                                                                            </p>
                                                                            <p className="text-sm text-orange-500 font-medium mt-1">
                                                                                ⭐{" "}
                                                                                {
                                                                                    item.rating
                                                                                }{" "}
                                                                                (
                                                                                {item.reviews.toLocaleString()}

                                                                                )
                                                                            </p>
                                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                                {item.tags.map(
                                                                                    (
                                                                                        tag,
                                                                                        i
                                                                                    ) => (
                                                                                        <span
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className="bg-gray-100 px-2 py-0.5 text-sm rounded-md"
                                                                                        >
                                                                                            {
                                                                                                tag
                                                                                            }
                                                                                        </span>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            onClick={() => {
                                                                                setToDeleteId(
                                                                                    item.id
                                                                                );
                                                                                setShowDeleteModal(
                                                                                    true
                                                                                );
                                                                            }}
                                                                            className="absolute bottom-2 right-2 text-gray-400 hover:text-red-500"
                                                                        >
                                                                            🗑️
                                                                        </button>
                                                                    </div>
                                                                )
                                                            )}

                                                            <button
                                                                onClick={() =>
                                                                    setShowAddModal(
                                                                        true
                                                                    )
                                                                }
                                                                className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-[#007BFF] border border-[#007BFF] rounded-full hover:bg-[#F0F8FF]"
                                                            >
                                                                ➕ Add
                                                                attraction
                                                            </button>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                    defaultValue="item-2"
                                                    className="bg-white rounded-[12px] mt-6"
                                                >
                                                    <AccordionItem value="item-2">
                                                        <AccordionTrigger className="text-lg font-semibold px-4 py-3">
                                                            Food & Restaurants (
                                                            {restaurants.length}
                                                            )
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-4 pb-4 space-y-4">
                                                            {restaurants.map(
                                                                (item) => (
                                                                    <div
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex items-start gap-4 border rounded-lg p-[17px_15px_14px] relative"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                item.image
                                                                            }
                                                                            alt={
                                                                                item.name
                                                                            }
                                                                            className="w-[112px] h-[112px] object-cover rounded-[12px_0px]"
                                                                        />
                                                                        <div className="flex-1">
                                                                            <h3 className="font-semibold text-md">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </h3>
                                                                            <p className="text-sm text-gray-500">
                                                                                {
                                                                                    item.type
                                                                                }
                                                                            </p>
                                                                            <p className="text-sm text-orange-500 font-medium mt-1">
                                                                                ⭐{" "}
                                                                                {
                                                                                    item.rating
                                                                                }{" "}
                                                                                (
                                                                                {item.reviews.toLocaleString()}

                                                                                )
                                                                            </p>
                                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                                {item.tags.map(
                                                                                    (
                                                                                        tag,
                                                                                        i
                                                                                    ) => (
                                                                                        <span
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className="bg-gray-100 px-2 py-0.5 text-sm rounded-md"
                                                                                        >
                                                                                            {
                                                                                                tag
                                                                                            }
                                                                                        </span>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            onClick={() =>
                                                                                setRestaurants(
                                                                                    (
                                                                                        prev
                                                                                    ) =>
                                                                                        prev.filter(
                                                                                            (
                                                                                                r
                                                                                            ) =>
                                                                                                r.id !==
                                                                                                item.id
                                                                                        )
                                                                                )
                                                                            }
                                                                            className="absolute bottom-2 right-2 text-gray-400 hover:text-red-500"
                                                                        >
                                                                            🗑️
                                                                        </button>
                                                                    </div>
                                                                )
                                                            )}

                                                            <button
                                                                onClick={() => {
                                                                    const newId =
                                                                        Date.now();
                                                                    setRestaurants(
                                                                        (
                                                                            prev
                                                                        ) => [
                                                                            ...prev,
                                                                            {
                                                                                ...prev[0],
                                                                                id: newId,
                                                                            },
                                                                        ]
                                                                    );
                                                                }}
                                                                className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-[#007BFF] border border-[#007BFF] rounded-full hover:bg-[#F0F8FF]"
                                                            >
                                                                ➕ Add food &
                                                                restaurants
                                                            </button>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </>
                                        )}

                                        {activeCity === "nhatrang" && (
                                            <div>
                                                🏖️ List of spots in Nha Trang
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {activeTab === "itinerary" && (
                                <div>🗓️ This is the itinerary</div>
                            )}
                            {activeTab === "notes" && (
                                <div>📝 These are the notes and tips</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div className="col-span-12 flex flex-col md:col-span-4">
                    <img
                        src="https://www.vietnambooking.com/wp-content/uploads/2020/12/thoi-gian-bay-tu-can-tho-den-hanoi-18122020-1.jpg"
                        alt=""
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                        <h3 className="font-semibold text-lg mb-4">
                            Delete attraction?
                        </h3>
                        <p className="text-sm mb-4 text-gray-600">
                            Are you sure you want to remove this attraction?
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 rounded-md border text-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-md bg-red-500 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                        <h3 className="font-semibold text-lg mb-4">
                            Add Attraction
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                            This is a placeholder. Replace with form later.
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="px-4 py-2 rounded-md border"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    const newId = Date.now();
                                    setAttractions((prev) => [
                                        ...prev,
                                        { ...prev[0], id: newId },
                                    ]);
                                    setShowAddModal(false);
                                }}
                                className="px-4 py-2 rounded-md bg-blue-500 text-white"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default TripDetailResult;
