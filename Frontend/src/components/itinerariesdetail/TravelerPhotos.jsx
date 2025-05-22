import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import img1 from "@images/3-1595134332.webp";
import img2 from "@images/4-1708873508769.webp";

const photos = [
    { src: img1, alt: "Group at Ba Na Hills" },
    { src: img2, alt: "Sun World" },
    { src: img1, alt: "Golden Bridge" },
    { src: img2, alt: "Flower Garden" },
    { src: img1, alt: "Clouds view", overlay: true },
];

export default function TravelerPhotos() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openPhoto = (index) => {
        setActiveIndex(index);
        setOpen(true);
    };

    return (
        <section className="my-10">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1A2A44] mb-6">
                Traveler Photos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 max-w-6xl">
                {/* Ảnh lớn bên trái chiếm khoảng 7/12 (~58.33%) */}
                <div
                    className="sm:col-span-7 rounded-[12px] overflow-hidden cursor-pointer"
                    onClick={() => openPhoto(0)}
                >
                    <img
                        src={photos[0].src}
                        alt={photos[0].alt}
                        className="w-full h-full object-cover aspect-[3/2]"
                    />
                </div>

                {/* 4 ảnh nhỏ bên phải chiếm 5/12 */}
                <div className="sm:col-span-5 grid grid-cols-2 grid-rows-2 gap-4">
                    {photos.slice(1).map((photo, index) => (
                        <div
                            key={index + 1}
                            className="relative rounded-[12px] overflow-hidden aspect-square cursor-pointer"
                            onClick={() => openPhoto(index + 1)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay cho ảnh cuối */}
                            {photo.overlay && (
                                <div className="absolute inset-0 bg-[#1A2A44]/50 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold">
                                        + See more
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog zoom ảnh */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-full max-w-[90vw] max-h-[90vh] p-0 bg-transparent shadow-none border-none flex items-center justify-center">
                    <img
                        src={photos[activeIndex].src}
                        alt={photos[activeIndex].alt}
                        className="w-auto max-w-full max-h-[90vh] object-contain rounded-[12px]"
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
}
