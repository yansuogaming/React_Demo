import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SpotDetail = ({ item, onClose }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const images = item.images ?? [item.image];

    return (
        <div className="w-full bg-white rounded-xl shadow-md p-4 md:p-6">
            <button
                onClick={onClose}
                className="text-sm text-blue-600 mb-3 md:mb-4"
            >
                ← Back
            </button>

            <h2 className="text-xl md:text-2xl font-semibold mb-2">
                {item.name}
            </h2>

            <p className="text-sm text-gray-600 mb-1">
                {item.type}
                {item.duration && ` • Duration: ${item.duration}`}
            </p>

            <p className="text-sm text-orange-500 font-medium mb-3">
                ⭐ {item.rating} ({item.reviews?.toLocaleString() ?? 0})
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-gray-100 px-2 py-1 text-xs rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* --- IMAGE HANDLING --- */}

            {images.length === 1 && (
                <div className="mb-4">
                    <img
                        src={images[0]}
                        className="w-full rounded-xl object-cover cursor-zoom-in"
                        onClick={() => {
                            setIndex(0);
                            setOpen(true);
                        }}
                        alt=""
                    />
                </div>
            )}

            {images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mb-4">
                    {/* LEFT - big image */}
                    <div
                        className="overflow-hidden rounded-tl-[20px] cursor-pointer"
                        onClick={() => {
                            setIndex(0);
                            setOpen(true);
                        }}
                    >
                        <img
                            src={images[0]}
                            className="w-full h-full object-cover aspect-[4/3] md:rounded-tl-[20px] rounded-xl"
                            alt=""
                        />
                    </div>

                    {/* RIGHT - 2 small images */}
                    <div className="flex flex-col gap-2 h-full mt-2 md:mt-0">
                        {images[1] && (
                            <div
                                className="cursor-pointer rounded-tr-[10px] overflow-hidden flex-1"
                                onClick={() => {
                                    setIndex(1);
                                    setOpen(true);
                                }}
                            >
                                <img
                                    src={images[1]}
                                    className="w-full h-full object-cover rounded-xl md:rounded-none"
                                    alt=""
                                />
                            </div>
                        )}

                        {images[2] && (
                            <div
                                className="relative cursor-pointer rounded-br-[20px] overflow-hidden flex-1"
                                onClick={() => {
                                    setIndex(2);
                                    setOpen(true);
                                }}
                            >
                                <img
                                    src={images[2]}
                                    className="w-full h-full object-cover rounded-xl md:rounded-none md:rounded-br-[20px]"
                                    alt=""
                                />
                                {images.length > 3 && (
                                    <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center text-lg font-semibold">
                                        +{images.length - 3}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />

            <p className="text-sm text-gray-700">
                This is a placeholder for the item's full description or more
                detailed content.
            </p>
        </div>
    );
};

export default SpotDetail;
