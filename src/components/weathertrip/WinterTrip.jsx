import { useState } from "react";

const WinterCard = ({ icon, title, description, cta }) => (
    <div className="flex flex-col items-start gap-2 min-w-[260px] sm:min-w-[300px] px-4">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-[18px] font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-sm font-semibold mt-2">{cta}</p>
    </div>
);

const winterItems = [
    {
        icon: "🌊",
        title: "Beach life",
        description:
            "Enjoy a relaxing day soaking up the sun at Kite Beach or The Beach at JBR",
        cta: "Explore beaches",
    },
    {
        icon: "🐪",
        title: "Desert adventures",
        description: "Discover Dubai's stunning natural environment",
        cta: "Explore the desert",
    },
    {
        icon: "🏊",
        title: "Take a dip",
        description: "Relax and enjoy at Dubai's best pools",
        cta: "Explore pools",
    },
    {
        icon: "🚴",
        title: "On your bike",
        description: "Go mountain biking in Hatta or at Mushrif National Park",
        cta: "Explore cycling",
    },
];

const WinterTrip = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        const maxSlide = Math.ceil(winterItems.length / itemsPerPage) - 1;
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
    };

    const start = currentSlide * itemsPerPage;
    const visibleItems = winterItems.slice(start, start + itemsPerPage);

    return (
        <section className="container mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-[#1A2A44] mb-2">
                    Winter in Dubai
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    From October until April, beautiful weather and a packed
                    calendar of events combine to create a truly special season
                    in Dubai. Visitors from near and far flock to enjoy the
                    city’s blissful sunshine, world-class attractions,
                    Michelin-starred restaurants, live entertainment from
                    international superstars and so much more...
                </p>
            </div>

            {/* Slider */}
            <div className="relative">
                {/* Navigation buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-[-1.5rem] top-[40%] z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow"
                >
                    ◀
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-[-1.5rem] top-[40%] z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow"
                >
                    ▶
                </button>

                {/* Cards */}
                <div className="flex overflow-x-auto md:overflow-hidden gap-6 scroll-smooth">
                    {visibleItems.map((item, idx) => (
                        <WinterCard key={idx} {...item} />
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {[...Array(Math.ceil(winterItems.length / itemsPerPage))].map(
                    (_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                                i === currentSlide
                                    ? "bg-gray-800"
                                    : "bg-gray-300"
                            }`}
                        ></span>
                    )
                )}
            </div>
        </section>
    );
};

export default WinterTrip;
