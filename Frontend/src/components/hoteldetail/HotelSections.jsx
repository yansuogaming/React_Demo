import { useEffect, useRef, useState } from "react";
import HotelTabs_Overview from "./HotelTabs_Overview";
import HotelTabs_Rooms from "./HotelTabs_Rooms";
import HotelTabs_Trip from "./HotelTabs_Trip";
import HotelTabs_Facilities from "./HotelTabs_Facilities";
import HotelTabs_Policies from "./HotelTabs_Policies";
import HotelTabs_Reviews from "./HotelTabs_Reviews";

const HotelSections = () => {
    const overviewRef = useRef(null);
    const roomsRef = useRef(null);
    const tripRef = useRef(null);
    const facilitiesRef = useRef(null);
    const policiesRef = useRef(null);
    const reviewsRef = useRef(null);

    const [activeTab, setActiveTab] = useState("overview");

    const sectionRefs = [
        { id: "overview", label: "Overview", ref: overviewRef },
        { id: "rooms", label: "Rooms", ref: roomsRef },
        { id: "trip", label: "Trip recommendations", ref: tripRef },
        { id: "facilities", label: "Facilities", ref: facilitiesRef },
        { id: "policies", label: "Policies", ref: policiesRef },
        { id: "reviews", label: "Reviews", ref: reviewsRef },
    ];

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -70% 0px",
                threshold: 0.1,
            }
        );

        sectionRefs.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sectionRefs.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <div className="">
            {/* Sticky Tabs */}
            <div className="sticky top-0 z-30 bg-white mb-4">
                <div className="flex gap-4 text-sm font-medium overflow-x-auto whitespace-nowrap px-1 py-2">
                    {sectionRefs.map(({ id, label, ref }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(ref)}
                            className={`transition py-2 border-b-2 ${
                                activeTab === id
                                    ? "border-black text-[#717171] text-[14px] font-[500]"
                                    : "border-transparent hover:border-gray-400 text-gray-500 cursor-pointer"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sections */}
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

                <section ref={tripRef} id="trip" className="scroll-mt-20">
                    <HotelTabs_Trip />
                </section>

                <section ref={reviewsRef} id="reviews" className="scroll-mt-20">
                    <HotelTabs_Reviews />
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
            </div>
        </div>
    );
};

export default HotelSections;
