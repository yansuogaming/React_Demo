import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EventHero = ({ slides, currentIndex, setCurrentIndex }) => {
    const currentSlide = slides[currentIndex];

    const handleNext = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section>
            <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
                {/* Left: Info */}
                <div className="bg-[#0E284E] text-white p-6 flex flex-col justify-center">
                    <div>
                        <span className="inline-block bg-white text-[#0E284E] text-[18px] rounded mb-[32px] font-[700] p-[8px]">
                            {currentSlide.date.split(" ").map((part, i) =>
                                part === "to" ? (
                                    <span
                                        key={i}
                                        className="text-[14px] text-[#1A2A44] font-[400] mr-[6px]"
                                    >
                                        to
                                    </span>
                                ) : (
                                    <span key={i}>{part} </span>
                                )
                            )}
                        </span>

                        <h2 className="text-2xl font-bold mb-4 leading-snug">
                            {currentSlide.title}
                        </h2>
                        <p className="text-sm leading-relaxed">
                            {currentSlide.description}
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full h-full">
                    <img
                        src={currentSlide.image}
                        alt="Event visual"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom thumbnails bar */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-[10px] px-3 py-2 rounded-full shadow-md">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 hover:shadow-md transition"
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="text-[#64646D] text-[12px]"
                        />
                    </button>

                    {slides.map((slide, i) => (
                        <img
                            key={slide.id}
                            src={slide.image}
                            alt=""
                            className={`w-14 h-10 object-cover rounded transition-all duration-300 cursor-pointer ${
                                i === currentIndex
                                    ? "ring-2 ring-white"
                                    : "opacity-60"
                            }`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 hover:shadow-md transition"
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-[#64646D] text-[12px]"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventHero;
