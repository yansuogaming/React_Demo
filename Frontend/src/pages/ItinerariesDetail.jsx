import { useTranslation } from "react-i18next";
import Breadcrumb from "@components/Breadcrumb";

import GalleryCarousel from "@components/itinerariesdetail/GalleryCarousel";
import TourContent from "@components/itinerariesdetail/TourContent";
import TourSidebar from "@components/itinerariesdetail/TourSidebar";
import BookTour from "@components/itinerariesdetail/BookTour";
import ExpectMap from "@components/itinerariesdetail/ExpectMap";
import ExperienceDetails from "@components/itinerariesdetail/ExperienceDetails";
import AdditionalInfo from "@components/itinerariesdetail/AdditionalInfo";
import BookingForm from "@components/itinerariesdetail/BookingForm";
import TravelerPhotos from "@components/itinerariesdetail/TravelerPhotos";
import ReviewSection from "@components/itinerariesdetail/ReviewSection";

import MostPopularTours from "@components/MostPopularTours";

const ItinerariesDetail = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: t("Nature & Adventure"), href: "/" },
        { label: "Unmissable attractions in Nha Trang" },
    ];

    return (
        <>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Breadcrumb
                    className="m-[0px_40px_28px] text-[14px]"
                    items={breadcrumdItems}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <section className="lg:col-span-8">
                        <GalleryCarousel />
                        <TourContent />
                        <BookTour />
                        <ExpectMap />
                        <ExperienceDetails />
                        <AdditionalInfo />
                        <BookingForm />
                        <TravelerPhotos />
                    </section>
                    <section className="lg:col-span-4">
                        <TourSidebar />
                    </section>
                </div>
                <ReviewSection />
            </main>
            <div
                className="pt-[80px]"
                style={{
                    background:
                        "linear-gradient(180deg, #F5F6FA 0%, rgba(245, 246, 250, 0) 100%)",
                }}
            >
                <MostPopularTours />
            </div>
        </>
    );
};

export default ItinerariesDetail;
