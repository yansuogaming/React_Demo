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
                        <span className="inline-block bg-white text-[#0E284E] text-sm px-3 py-1 rounded mb-4">
                            {currentSlide.date}
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
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full shadow-md">
                    <button onClick={handlePrev} className="text-xl px-2">
                        ‹
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
                    <button onClick={handleNext} className="text-xl px-2">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventHero;
