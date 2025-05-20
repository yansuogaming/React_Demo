import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import accommodationImage from "@images/wp12060285.webp";

const AccommodationImage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/NSnkb1IAjbE";
    const hasVideo = videoUrl.trim() !== "";

    return (
        <section className="mb-[20px]">
            <h2 className="text-[40px] font-bold text-[#1A2A44] mb-4">
                Accommodation
            </h2>
            <div className="relative overflow-hidden rounded-ee-[60px] aspect-[16/9] w-full mb-6 bg-black">
                {isPlaying && hasVideo ? (
                    <iframe
                        className="w-full h-full"
                        src={`${videoUrl}?autoplay=1&rel=0`}
                        title="Accommodation Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <img
                            src={accommodationImage}
                            alt="Accommodation"
                            className="w-full h-full object-cover"
                        />
                        {hasVideo && (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-md flex items-center justify-center shadow-md hover:scale-105 transition"
                            >
                                <FaPlay className="text-sm" />
                            </button>
                        )}
                    </>
                )}
            </div>
            <p className="text-[20px] text-[#505050]">
                Five-star resort or chic boutique hotel? Pick from an incredible
                range of options.
            </p>
        </section>
    );
};

export default AccommodationImage;
