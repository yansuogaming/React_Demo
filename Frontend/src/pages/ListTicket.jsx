// ListTicket.jsx hoặc .tsx
import { useTranslation } from "react-i18next";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import Breadcrumb from "@components/Breadcrumb";

import UpcomingEventsCarousel from "@components/listticket/UpcomingEventsCarousel";
import FeatureCarousel from "@components/event/FeatureCarousel";
import VisaBanner from "@components/event/VisaBanner";

const bannerImages = [
    "https://i.iheart.com/v3/re/new_assets/6814dd8ee4b6587ebd840aa6?ops=contain(1480,0)",
    "https://radiosongsforsingers.com/wp-content/uploads/2018/07/ed_sheeran-e1532921766493.jpg?w=1000&h=576&crop=1",
    "https://thanhnien.mediacdn.vn/zoom/686_429/Uploaded/ttt/images/Content/tin-tuc/cap-nhat/2017_08_w2/Thu_Thuy/IMG_7347.JPG",
];

const ListTicket = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Travel Offers"), href: "/traveloffers" },
        { label: "Sightseeing tickets" },
    ];

    return (
        <>
            <main className="container mx-auto">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>

                <section className="relative overflow-hidden rounded-[32px] my-8">
                    <Carousel>
                        <CarouselContent>
                            {bannerImages.map((src, index) => (
                                <CarouselItem key={index}>
                                    <img
                                        src={src}
                                        alt={`Banner ${index + 1}`}
                                        className="w-full h-[407px] object-cover rounded-[60px_0]"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Prev/Next buttons chỉ hiện ở desktop */}
                        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-9 h-9 shadow-md" />
                        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full w-9 h-9 shadow-md" />
                    </Carousel>
                </section>
                <section>
                    <UpcomingEventsCarousel />
                </section>
                <section>
                    <FeatureCarousel />
                </section>
            </main>
            <section>
                <VisaBanner />
            </section>
        </>
    );
};

export default ListTicket;
