import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import Breadcrumb from "@components/Breadcrumb";

import GalleryCarousel from "@components/itinerariesdetail/GalleryCarousel";
import TourContent from "@components/itinerariesdetail/TourContent";
import TourSidebar from "@components/itinerariesdetail/TourSidebar";
import BookTour from "@components/itinerariesdetail/BookTour";
import VietnamItinerary from "@components/itinerariesdetail/ExpectMap";
import ExpectMap from "@components/itinerariesdetail/ExpectMap";
import ExperienceDetails from "@components/itinerariesdetail/ExperienceDetails";
import AdditionalInfo from "@components/itinerariesdetail/AdditionalInfo";
import TravelerPhotos from "@components/itinerariesdetail/TravelerPhotos";

const ItinerariesDetail = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Experiences"), href: "/" },
        { label: t("Nature & Adventure"), href: "/" },
        { label: "Unmissable attractions in Nha Trang" },
    ];
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Breadcrumb
                className="m-[0px_40px_28px] text-[14px]"
                items={breadcrumdItems}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-8">
                <div>
                    <GalleryCarousel />
                    <TourContent />
                    <BookTour/>
                    <ExpectMap/>
                    <ExperienceDetails/>
                    <AdditionalInfo/>
                    <TravelerPhotos/>
                </div>

                <TourSidebar />
            </div>
        </main>
    );
};

export default ItinerariesDetail;
