import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const reviews = [
    {
        rating: 9.2,
        title: "Excellent",
        count: 21,
        tags: [
            { label: "Location", score: 9.2 },
            { label: "Service", score: 9.2 },
            { label: "Facilities", score: 9.2 },
            { label: "Cleanliness", score: 9.3 },
        ],
        text: "Mr Hoa, the owner of Merry Land Hotel kindly allowed me to rent a motorbike without keeping my ID as a deposit like...",
        author: "Loi | United States of America",
    },
    {
        rating: 9.4,
        title: "Superb",
        count: 31,
        tags: [
            { label: "Location", score: 9.4 },
            { label: "Service", score: 9.5 },
            { label: "Facilities", score: 9.3 },
            { label: "Cleanliness", score: 9.6 },
        ],
        text: "Great location, friendly staff and clean room. Highly recommend this hotel!",
        author: "Trang | Vietnam",
    },
];

const HotelOverview_RightBox = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="space-y-4">
            {/* Embla carousel */}
            <div className="border rounded-md p-4 bg-white shadow-sm w-full max-w-md mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {reviews.map((review, i) => (
                            <div key={i} className="flex-[0_0_100%]">
                                <div className="flex items-center gap-2">
                                    <span className="bg-teal-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                                        {review.rating}
                                    </span>
                                    <span className="text-sm font-semibold text-teal-600">
                                        {review.title}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        ({review.count} reviews)
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                    {review.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-green-100 text-green-800 px-2 py-0.5 rounded"
                                        >
                                            {tag.label} {tag.score}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm italic text-gray-700 mt-3">
                                    “{review.text}”
                                </p>
                                <p className="text-xs font-semibold text-gray-800 mt-2">
                                    - {review.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-3">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`w-3 h-[4px] rounded-full transition ${
                                selectedIndex === i
                                    ? "bg-teal-500 w-6"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Map box */}
            <div className="relative rounded-md overflow-hidden border shadow-sm">
                {/* Map image */}
                <img
                    src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
                    alt="Map"
                    className="w-full h-40 object-cover"
                />

                {/* Centered button */}
                <button
                    className="absolute inset-0 m-auto w-fit h-fit px-6 py-3 bg-white text-[#C81E3A] font-[500] text-[16px] flex items-center gap-2 rounded-full shadow-md cursor-pointer"
                    style={{ pointerEvents: "auto" }}
                >
                    <FaMapMarkerAlt className="text-xl" />
                    Show on map
                </button>
            </div>
        </div>
    );
};

export default HotelOverview_RightBox;
