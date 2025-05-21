import { useState } from "react";
import { Map, CircleAlert, Maximize2, MapPin } from "lucide-react";
import { NavLink } from "react-router";

export default function ExpectMap() {
    const [expandedDetails, setExpandedDetails] = useState(false);

    const toggleDetails = () => {
        setExpandedDetails(!expandedDetails);
    };

    const itinerary = [
        {
            day: 1,
            title: "Welcome To Vietnam - Arrival in Hanoi",
            content: [
                "Your unforgettable Vietnam adventure begins the moment you arrive in Hanoi! Upon landing, your private driver will be waiting for you at the airport, holding a sign with your name for a warm and hassle-free welcome. From there, you'll be escorted to your hotel, perfectly situated in the heart of the city, just steps away from the vibrant Old Quarter.",
                "Take some time to relax at your hotel or dive straight into exploring the charming streets of Hanoi at your own pace. Whether you choose to sip a cup of traditional egg coffee, wander through bustling markets, or simply soak in the city's unique atmosphere, your adventure has only just begun!",
            ],
        },
        {
            day: 2,
            title: "Explore the Charms of Hanoi - Full-Day City Tour (B/L)",
            content: [
                "<strong>08:00 - 08:30</strong> : Your adventure in Hanoi begins! Our friendly tour guide and comfortable bus will pick you up from your hotel as we set off to explore the city's rich history and vibrant culture.",
                "<strong>08:45</strong> : Our first stop is the Ho Chi Minh Complex, the final resting place of Vietnam's beloved leader, Uncle Ho. Here, you'll have the unique opportunity to view his embalmed body and take a peaceful stroll through the lush gardens, where two traditional houses showcase his simple yet inspiring lifestyle from 1954 to 1969.",
                "Next, we visit the iconic One Pillar Pagoda, a sacred Buddhist temple dedicated to the Goddess of Mercy. With its unique lotus-shaped design, it is considered one of the most distinctive pagodas in the world.",
            ],
        },
        {
            day: 3,
            title: "Optional Excursion - Halong Bay (B/L)",
            content: [
                "Depart for Halong Bay and enjoy a scenic cruise, explore limestone caves, and savor a fresh seafood lunch onboard.",
                "Return to Hanoi in the evening. Optional evening walk in the Old Quarter.",
            ],
        },
        {
            day: 4,
            title: "Departure Day - Goodbye Vietnam",
            content: [
                "Enjoy breakfast at your hotel, and depending on your flight time, you may have some free time to explore or shop.",
                "Our driver will transfer you to the airport for your departure flight. Goodbye and see you again!",
            ],
        },
    ];

    const visibleItems = expandedDetails ? itinerary : itinerary.slice(0, 2);

    return (
        <div className="">
            <h1 className="text-[#1A2A44] font-[700] text-[28px] mb-[24px]">
                What to expect
            </h1>

            {/* Map Section */}
            <div className="relative w-full h-64 bg-green-100 rounded-lg mb-6 overflow-hidden">
                <div className="absolute bottom-0 right-0 p-1 text-xs text-gray-600">
                    Bản đồ dữ liệu © 2023 Google | Điều khoản | Báo cáo một lỗi
                    bản đồ
                </div>

                {/* Map Markers */}
                <div className="absolute top-1/2 left-1/4">
                    <div className="bg-white rounded-full p-1 shadow-md">
                        <CircleAlert size={16} className="text-gray-600" />
                    </div>
                </div>

                <div className="absolute top-1/3 left-1/2">
                    <div className="bg-white rounded-full p-1 shadow-md">
                        <CircleAlert size={16} className="text-gray-600" />
                    </div>
                </div>

                <div className="absolute top-1/4 left-3/4">
                    <div className="bg-white rounded-full p-1 shadow-md">
                        <CircleAlert size={16} className="text-gray-600" />
                    </div>
                </div>

                <div className="absolute bottom-1/3 right-1/3">
                    <div className="bg-red-500 rounded-full p-1 shadow-md">
                        <MapPin size={16} className="text-white" />
                    </div>
                </div>

                <div className="absolute bottom-1/4 left-1/6">
                    <div className="bg-green-600 rounded-full p-1 shadow-md">
                        <MapPin size={16} className="text-white" />
                    </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md">
                    <button className="flex items-center justify-center p-2 font-medium text-blue-600">
                        <Map size={20} className="mr-2" />
                        <NavLink to="/" className="hover:underline">
                            View map
                        </NavLink>
                    </button>
                </div>

                <div className="absolute bottom-16 right-4 flex flex-col gap-2">
                    <button className="bg-white p-2 rounded-lg shadow-md">
                        <Maximize2 size={16} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Itinerary Section */}
            <div className="relative pl-[40px]">
                {/* Main vertical line */}
                {visibleItems.length > 1 && (
                    <div className="absolute left-[14px] top-0 w-[1px] bg-[#052A75] h-full z-0" />
                )}

                {visibleItems.map((item) => {
                    return (
                        <div key={item.day} className="relative mb-[32px] z-10">
                            {/* Circle number */}
                            <div className="absolute -left-[42px] top-[0px] w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                {item.day}
                            </div>
                            <div className="text-[#1A2A44]">
                                <h2 className="text-[18px]  font-[700] mb-[10px]">
                                    Day {item.day}: {item.title}
                                </h2>

                                <div className="space-y-4 text-[16px]">
                                    {item.content.map((para, i) => (
                                        <p
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: para,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {!expandedDetails && (
                <button
                    onClick={toggleDetails}
                    className="text-[#007BFF] text-[16px] font-[500] hover:underline hover:cursor-pointer"
                >
                    See {itinerary.length - 2} more itinerary details
                </button>
            )}
        </div>
    );
}
