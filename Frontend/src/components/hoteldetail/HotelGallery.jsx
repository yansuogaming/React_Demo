import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
    {
        src: "https://images.trvl-media.com/lodging/23000000/22890000/22882300/22882236/c04c718c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        alt: "Lobby",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Có video
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/209890188.jpg?k=882e748be3114714efa7f001b6ffa97425b1a52a458d3166dea3c1af7c66ac09&o=&hp=1",
        alt: "Room",
    },
    {
        src: "https://i.ytimg.com/vi/sTrJGDCXJNI/maxresdefault.jpg",
        alt: "Opera House",
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46843072.jpg?k=3470a6a57d8ccad210e3b1e25bf243875180d09cf678ed49cf2f2f7173f73fc3&o=&hp=1",
        alt: "Yellow Building",
    },
    {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/da/3a/f5/img-hotel-s-rio-quente.jpg?w=900&h=500&s=1",
        alt: "Mausoleum",
    },
];

const HotelGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSeeAllPhotos = () => {
        // Mặc định mở ảnh đầu tiên trong nhóm ảnh nhỏ
        setSelectedImage(images[1]);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 h-[400px]">
                {/* Left: Main image */}
                <div
                    className="relative col-span-2 overflow-hidden rounded-lg cursor-pointer h-full"
                    onClick={() => setSelectedImage(images[0])}
                >
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="w-full h-full object-cover"
                    />

                    {/* Hiện icon play nếu có video */}
                    {images[0].videoUrl && (
                        <button className="absolute bottom-2 left-2 bg-white text-sm px-3 py-1 rounded shadow">
                            ▶
                        </button>
                    )}

                    {/* See all photos: bắt đầu từ ảnh nhỏ */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleSeeAllPhotos();
                        }}
                        className="absolute bottom-2 right-2 bg-white text-sm px-3 py-1 rounded shadow"
                    >
                        📷 See all photos
                    </button>
                </div>

                {/* Right: 4 equal images */}
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                    {images.slice(1).map((img, idx) => (
                        <div
                            key={idx}
                            className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Zoom view */}
            <Dialog
                open={!!selectedImage}
                onOpenChange={() => setSelectedImage(null)}
            >
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
                    {selectedImage?.videoUrl ? (
                        <iframe
                            src={selectedImage.videoUrl}
                            title="Video"
                            className="w-full aspect-video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    ) : (
                        <img
                            src={selectedImage?.src}
                            alt={selectedImage?.alt}
                            className="w-full h-full object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default HotelGallery;
