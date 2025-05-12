import { useState } from "react";
import SpotCard from "@components/SpotCard";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

import SpotDetail from "@components/SpotDetail";

const SpotsContent = () => {
    const [activeCity, setActiveCity] = useState("hanoi");
    const [selectedItem, setSelectedItem] = useState(null);

    const [attractions, setAttractions] = useState([
        {
            id: 1,
            name: "Hoan Kiem Lake",
            image: "https://vietnamtour.in/wp-content/uploads/Hoan-Kiem-lake-1-1-1120x800.jpg",
            images: [
                "https://mia.vn/media/uploads/blog-du-lich/ho-hoan-kiem-3-1710638969.jpg",
                "https://image-tc.galaxy.tf/wipng-daexn19ej5lhhexs5yjcrc003/vietnam-trip-1_standard.png?crop=34%2C0%2C533%2C400",
                "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/02/04/thap-rua-ho-guom-tho-ai-1-1531.jpg",
                "https://dntt.mediacdn.vn/197608888129458176/2023/10/31/ho-hoan-kiem-2-1698740202578918448714.jpg",
                "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/anh-ho-guom.jpg",
            ],
            type: "Natural Feature",
            duration: "1-3 hours",
            rating: 4.7,
            reviews: 9547,
            tags: ["🔥 Popular attractions", "🗿 History and culture"],
        },
    ]);

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

    const deleteAttraction = (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this attraction?"
        );
        if (confirmed) {
            setAttractions((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const deleteRestaurant = (id) => {
        setRestaurants((prev) => prev.filter((r) => r.id !== id));
    };

    return (
        <>
            <div className="flex gap-2 mb-4">
                {["hanoi", "nhatrang"].map((city) => (
                    <button
                        key={city}
                        onClick={() => setActiveCity(city)}
                        className={`inline-flex px-6 py-3 rounded-full border text-sm font-medium transition ${
                            activeCity === city
                                ? "bg-[#007BFF] text-white border-[#007BFF]"
                                : "bg-white text-[#1A2A44] border-[#D9D9D9]"
                        }`}
                    >
                        {city === "hanoi" ? "Hanoi" : "Nha Trang"}
                    </button>
                ))}
            </div>

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
                                Attractions ({attractions.length})
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 space-y-4">
                                {attractions.map((item) => (
                                    <SpotCard
                                        key={item.id}
                                        item={item}
                                        onDelete={deleteAttraction}
                                        onClick={() => setSelectedItem(item)}
                                    />
                                ))}
                                <button
                                    onClick={() => {
                                        const newId = Date.now();
                                        setAttractions((prev) => [
                                            ...prev,
                                            {
                                                ...prev[0],
                                                id: newId,
                                                name: `New Attraction ${
                                                    prev.length + 1
                                                }`,
                                            },
                                        ]);
                                    }}
                                    className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-[#007BFF] border border-[#007BFF] rounded-full hover:bg-[#F0F8FF]"
                                >
                                    ➕ Add attraction
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
                                Food & Restaurants ({restaurants.length})
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 space-y-4">
                                {restaurants.map((item) => (
                                    <SpotCard
                                        key={item.id}
                                        item={item}
                                        onDelete={deleteRestaurant}
                                        onClick={() => setSelectedItem(item)}
                                    />
                                ))}
                                <button
                                    onClick={() => {
                                        const newId = Date.now();
                                        setRestaurants((prev) => [
                                            ...prev,
                                            {
                                                ...prev[0],
                                                id: newId,
                                                name: `New Restaurant ${
                                                    prev.length + 1
                                                }`,
                                            },
                                        ]);
                                    }}
                                    className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-[#007BFF] border border-[#007BFF] rounded-full hover:bg-[#F0F8FF]"
                                >
                                    ➕ Add food & restaurants
                                </button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </>
            )}

            {activeCity === "nhatrang" && (
                <div>🏖️ List of spots in Nha Trang</div>
            )}

            {selectedItem && (
                <div className="fixed right-0 top-0 h-full w-full md:w-[820px] overflow-y-auto bg-white shadow-lg z-50 p-4">
                    <SpotDetail
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                </div>
            )}
        </>
    );
};

export default SpotsContent;
