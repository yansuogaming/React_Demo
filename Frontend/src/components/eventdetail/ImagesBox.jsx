import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
    {
        src: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/486772895_1047483534078654_2159896767620870433_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Pj6cna3YasQ7kNvwE2dV3T&_nc_oc=AdmFTBgDWk_waBmZeXGz9i09O23yl3tdD2pJmIMsFXIMpCekKrgxwYop4VFtrFIKplU&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=Nt0PLJ20o-6sc7_Rgz_AmQ&oh=00_AfLaIEpcGGGgB9ye0JXjMpKraCvGNGits1-OxZE8kCYBPg&oe=68348A6F",
        alt: "Stage performance full view",
    },
    {
        src: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/487115127_1047483560745318_7648338525179792816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CjrZ6gp66vUQ7kNvwHNg_BI&_nc_oc=AdmvSlZXBt-2p6qtfZtqOsT_OEQ1sejlNcgQlXzFwUoedsLiXg4U1JxB_wPsGBxRxbE&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=NC1QUKJaAWXMNSbMsXvJew&oh=00_AfIkN9p1BBSdNVD7BhR2k9qbPIZz-NJJiiH6C_NKe7UgNw&oe=68346247",
        alt: "Female singer in green",
    },
    {
        src: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/486822983_1047483504078657_4371848667813250577_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l6Mx0WIBIW8Q7kNvwHCfGor&_nc_oc=Adk5Tq1hUat6adFJs6CRznm1MXQMOmVPrd9khahRtfQhxqXt3MB-89smtI3F-joN4Ao&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=P4PrQoJ9e_JnPgbjU_K6jA&oh=00_AfKPeX6FPjkRYI1XQ6rw_o2j865lY2nNb3dWHtSz7KQXlw&oe=683492DE",
        alt: "Performer playing violin",
    },
    {
        src: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/487168007_1047483570745317_203978752426260811_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HihMtVNc0x8Q7kNvwEW502M&_nc_oc=Adn-KfWfyyAy5X5hR-TsrZ2vqolmfsIea1M2E9epiD7WHlohzc-TIoV0uJhV5oP5WYk&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=A_ig2n-oKysn7RlOquUJ4w&oh=00_AfKhUrVgx2IlF8YD1Ko8VuxrP32sWjxfHp4SJBgqOXFaKQ&oe=68345F4B",
        alt: "Male singer and dancers",
    },
    {
        src: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/486951014_1047483510745323_4655981430185700337_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_tZCNl3mImEQ7kNvwH9k3wl&_nc_oc=AdmaJm5FmAENpa9AK3XTrNeOzlUQOhwc6gXahiHiUAYi3Mi5wGcphtKYrUuScZzLKsc&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=P4PrQoJ9e_JnPgbjU_K6jA&oh=00_AfKFWYV8dAHjYuW7TZVnu2RTS7nWvZ1fsoEa4Zo1PYKR1A&oe=6834707D",
        alt: "Main performance with dancers",
    },
];

export default function ImagesBox() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openZoom = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    return (
        <section className="mt-10">
            <h3 className="text-[24px] font-[500] text-[#1A2A44] mb-[16px]">
                Images
            </h3>

            {/* ✅ Desktop layout */}
            <div className="hidden lg:grid grid-cols-3 gap-4 justify-center">
                {/* Column 1 */}
                <div className="flex flex-col justify-between h-[447px] gap-4">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="w-[275px] h-full object-cover rounded-tl-[60px] cursor-pointer"
                        onClick={() => openZoom(images[0])}
                    />
                    <img
                        src={images[3].src}
                        alt={images[3].alt}
                        className="w-[275px] h-full object-cover cursor-pointer"
                        onClick={() => openZoom(images[3])}
                    />
                </div>

                {/* Column 2 */}
                <div className="flex justify-center">
                    <img
                        src={images[2].src}
                        alt={images[2].alt}
                        className="w-[276px] h-[447px] object-cover cursor-pointer"
                        onClick={() => openZoom(images[2])}
                    />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col justify-between h-[447px] gap-4">
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className="w-[275px] h-full object-cover cursor-pointer"
                        onClick={() => openZoom(images[1])}
                    />
                    <img
                        src={images[4].src}
                        alt={images[4].alt}
                        className="w-[275px] h-full object-cover rounded-br-[60px] cursor-pointer"
                        onClick={() => openZoom(images[4])}
                    />
                </div>
            </div>

            {/* ✅ Mobile & Tablet layout */}
            <div className="grid grid-cols-1 gap-4 lg:hidden">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto rounded-lg object-cover cursor-pointer"
                        onClick={() => openZoom(img)}
                    />
                ))}
            </div>

            {/* ✅ Zoom Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-full w-full p-0 bg-transparent border-none">
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[90vh] w-full object-contain mx-auto rounded-lg"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
