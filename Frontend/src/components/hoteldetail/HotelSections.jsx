// HotelSections.jsx (cleaned and modularized)
import { useRef } from "react";
import HotelTabs_Overview from "./HotelTabs_Overview.jsx";
import HotelTabs_Rooms from "./HotelTabs_Rooms.jsx";
// import HotelTabs_Trip from "./HotelTabs_Trip";
// import HotelTabs_Facilities from "./HotelTabs_Facilities";
// import HotelTabs_Policies from "./HotelTabs_Policies";
// import HotelTabs_Reviews from "./HotelTabs_Reviews";

const HotelSections = () => {
    const overviewRef = useRef(null);
    const roomsRef = useRef(null);
    const tripRef = useRef(null);
    const facilitiesRef = useRef(null);
    const policiesRef = useRef(null);
    const reviewsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Tabs */}
            <div className="flex gap-4 text-sm font-medium mb-4 overflow-x-auto whitespace-nowrap">
                {[
                    ["Overview", overviewRef],
                    ["Rooms", roomsRef],
                    ["Trip recommendations", tripRef],
                    ["Facilities", facilitiesRef],
                    ["Policies", policiesRef],
                    ["Reviews", reviewsRef],
                ].map(([label, ref], i) => (
                    <button
                        key={i}
                        onClick={() => scrollToSection(ref)}
                        className="py-2 border-b-2 border-transparent hover:border-black transition"
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Content sections */}
            <div className="space-y-12">
                <section
                    ref={overviewRef}
                    id="overview"
                    className="scroll-mt-20"
                >
                    <HotelTabs_Overview />
                </section>

                <section ref={roomsRef} id="rooms" className="scroll-mt-20">
                    <HotelTabs_Rooms />
                </section>

                {/* <section ref={tripRef} id="trip" className="scroll-mt-20">
                    <HotelTabs_Trip />
                </section>

                <section
                    ref={facilitiesRef}
                    id="facilities"
                    className="scroll-mt-20"
                >
                    <HotelTabs_Facilities />
                </section>

                <section
                    ref={policiesRef}
                    id="policies"
                    className="scroll-mt-20"
                >
                    <HotelTabs_Policies />
                </section>

                <section ref={reviewsRef} id="reviews" className="scroll-mt-20">
                    <HotelTabs_Reviews />
                </section> */}
            </div>
        </div>
    );
};

export default HotelSections;
