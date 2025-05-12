const EventHero = ({ slides, currentIndex, setCurrentIndex }) => {
    const currentSlide = slides[currentIndex];

    const handleNext = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
                {/* Left: Info */}
                <div className="bg-[#0E284E] text-white p-6 flex flex-col justify-between">
                    <div>
                        <span className="inline-block bg-white text-[#0E284E] text-sm px-3 py-1 rounded mb-4">
                            {currentSlide.date}
                        </span>
                        <h2 className="text-xl font-bold mb-4">
                            {currentSlide.title}
                        </h2>
                        <p className="text-sm leading-relaxed">
                            {currentSlide.description}
                        </p>
                    </div>

                    <div className="flex gap-2 mt-8">
                        <button onClick={handlePrev}>◀</button>
                        {slides.map((slide, i) => (
                            <img
                                key={slide.id}
                                src={slide.image}
                                alt=""
                                className={`w-14 h-10 object-cover rounded ${
                                    i === currentIndex
                                        ? "ring-2 ring-white"
                                        : "opacity-60"
                                }`}
                                onClick={() => setCurrentIndex(i)}
                            />
                        ))}
                        <button onClick={handleNext}>▶</button>
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
            </div>
        </section>
    );
};

export default EventHero;
