import useLanguage from "@hooks/useLanguage";
import { format } from "date-fns";
import { enUS, vi } from "date-fns/locale";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const EventHero = ({ slides, currentIndex, setCurrentIndex }) => {
    const currentSlide = slides[currentIndex];

    const handleNext = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const { language } = useLanguage();
    let txtStartTime = "";
    let txtEndTime = "";
    switch (language) {
        case "vi":
            txtStartTime = format(new Date(currentSlide.start_date * 1000), "d MMM", { locale: vi });
            txtEndTime = format(new Date(currentSlide.due_date * 1000), "d MMM", { locale: vi });
            break;
        default:
            txtStartTime = format(new Date(currentSlide.start_date * 1000), "d MMM", { locale: enUS });
            txtEndTime = format(new Date(currentSlide.due_date * 1000), "d MMM", { locale: enUS });
            break;
    }

    return (
        <section>
            <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
                {/* Left: Info */}
                <div className="bg-[#0E284E] text-white p-6 flex flex-col justify-center">
                    <div>
                        <span className="inline-block bg-white text-[#0E284E] text-[18px] rounded mb-[32px] font-[700] p-[8px]">
                            <span>{txtStartTime}</span>
                            <span className="text-[14px] text-[#1A2A44] font-[400] mr-[6px]">
                                {" "}to
                            </span>
                            <span>{txtEndTime}</span>
                        </span>

                        <h2 className="text-2xl font-bold mb-4 leading-snug">
                            {currentSlide.title}
                        </h2>
                        <div
                            className="text-sm leading-relaxed truncate_3"
                            dangerouslySetInnerHTML={{ __html: currentSlide.intro }}
                        >
                        </div>
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
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-[10px] px-3 py-2 rounded-full shadow-md max-w-full overflow-x-auto">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 hover:shadow-md transition"
                    >
                        <FaChevronLeft className="text-[#64646D] text-[12px]" />
                    </button>

                    <div className="flex items-center gap-[6px] sm:gap-[10px] overflow-x-auto">
                        {slides.map((slide, i) => (
                            <img
                                key={i}
                                src={slide.image}
                                alt=""
                                className={`w-[70px] h-[46px] sm:w-[93px] sm:h-[61px] object-cover rounded transition-all duration-300 cursor-pointer ${
                                    i === currentIndex ? "" : "opacity-60"
                                }`}
                                onClick={() => setCurrentIndex(i)}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-700 hover:shadow-md transition"
                    >
                        <FaChevronRight className="text-[#64646D] text-[12px]" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventHero;
