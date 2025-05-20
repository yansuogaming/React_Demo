import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogPortal,
} from "@/components/ui/dialog";
import {
    FaExpand,
    FaVolumeMute,
    FaVolumeUp,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const slides = [
    {
        type: "image",
        src: "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2017-06/vietnam-travel-5.jpg?itok=XVnHP3ty",
    },
    {
        type: "video",
        src: "https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_h264.mov",
    },
];

const GalleryCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [zoomSlide, setZoomSlide] = useState(null);
    const videoRefs = useRef([]);
    const [isMuted, setIsMuted] = useState(true);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());

        slides.forEach((slide, i) => {
            const video = videoRefs.current[i];
            if (slide.type === "video" && video) {
                if (i === index) {
                    if (video.paused) {
                        video.play().catch(() => {});
                        video.muted = isMuted;
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                    }
                }
            }
        });
    }, [emblaApi, isMuted]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", onSelect);
            onSelect();
        }
    }, [emblaApi, onSelect]);

    const toggleMute = () => {
        const video = videoRefs.current[selectedIndex];
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <>
            <div
                className="embla w-full overflow-hidden relative"
                ref={emblaRef}
            >
                <div className="embla__container flex w-full">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className="embla__slide min-w-0 shrink-0 basis-full relative"
                        >
                            {slide.type === "image" ? (
                                <img
                                    src={slide.src}
                                    alt=""
                                    className="w-full h-[220px] sm:h-[300px] md:h-[475px] object-cover rounded-[12px]"
                                />
                            ) : (
                                <video
                                    ref={(el) => (videoRefs.current[idx] = el)}
                                    src={slide.src}
                                    className="w-full h-[220px] sm:h-[300px] md:h-[475px] object-cover rounded-[12px]"
                                    muted
                                    loop
                                    playsInline
                                    controls={false}
                                    preload="auto"
                                />
                            )}

                            {/* Volume button (chỉ khi là video và đang được chọn) */}
                            {slide.type === "video" &&
                                selectedIndex === idx && (
                                    <button
                                        onClick={toggleMute}
                                        className="absolute bottom-3 right-14 bg-white/20 p-2 rounded-[4px] z-10"
                                    >
                                        {isMuted ? (
                                            <FaVolumeMute className="text-white hover:cursor-pointer" />
                                        ) : (
                                            <FaVolumeUp className="text-white hover:cursor-pointer" />
                                        )}
                                    </button>
                                )}
                        </div>
                    ))}
                </div>

                {/* Nút Zoom cố định cho slide đang active */}
                <Dialog
                    open={zoomSlide === slides[selectedIndex]}
                    onOpenChange={(open) => {
                        const video = videoRefs.current[selectedIndex];
                        const slide = slides[selectedIndex];

                        if (slide.type === "video" && video) {
                            if (open) {
                                video.pause();
                            } else {
                                video.play().catch(() => {});
                                video.muted = isMuted;
                            }
                        }

                        setZoomSlide(open ? slide : null);
                    }}
                    onPointerDownOutside={() => setZoomSlide(null)}
                    onEscapeKeyDown={() => setZoomSlide(null)}
                >
                    <DialogTrigger asChild>
                        <button
                            onClick={() => setZoomSlide(slides[selectedIndex])}
                            className="absolute bottom-3 right-3 bg-white/20 p-2 rounded-[4px] z-10"
                        >
                            <FaExpand className="text-white hover:cursor-pointer" />
                        </button>
                    </DialogTrigger>

                    <DialogPortal>
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {slides[selectedIndex].type === "image" ? (
                                    <img
                                        src={slides[selectedIndex].src}
                                        alt="Zoomed"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                ) : (
                                    <video
                                        ref={(el) => {
                                            if (
                                                el &&
                                                slides[selectedIndex] ===
                                                    zoomSlide
                                            ) {
                                                el.muted = isMuted;
                                                el.play().catch(() => {});
                                            }
                                        }}
                                        src={slides[selectedIndex].src}
                                        controls
                                        autoPlay
                                        muted={isMuted}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                )}
                                <DialogClose className="absolute top-4 right-4 text-white text-3xl z-50">
                                    ×
                                </DialogClose>
                            </div>
                        </div>
                    </DialogPortal>
                </Dialog>

                {/* Prev button */}
                <button
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-20 ${
                        prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    <FaChevronLeft className="text-gray-700 text-[14px]" />
                </button>

                {/* Next button */}
                <button
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-20 ${
                        nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    <FaChevronRight className="text-gray-700 text-[14px]" />
                </button>
            </div>
        </>
    );
};

export default GalleryCarousel;
