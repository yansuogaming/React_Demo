import React from "react";
import { useTranslation } from "react-i18next";

import Breadcrumb from "@components/Breadcrumb";

import AccommodationImage from "@components/placetogo/AccommodationImage";
import InformationHotel from "@components/placetogo/InformationHotel";
import HotelCarousel from "@components/placetogo/HotelCarousel";
import HotelApartmentSection from "@components/placetogo/HotelApartmentSection";
import ApartmentRentalSection from "@components/placetogo/ApartmentRentalSection";
import RecommendationCarousel from "@components/placetogo/RecommendationCarousel";
import EmiratesBookingBox from "@components/EmiratesBookingBox";
import StartPlanningSection from "@components/StartPlanningSection";
import WeatherSubscribe from "@components/WeatherSubscribe";

// Import Show
const PlaceToGo = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: "Hotels and places to stay in Dubai" },
    ];
    return (
        <main>
            <div className="container mx-auto">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <AccommodationImage />
                <InformationHotel />
                <HotelCarousel />
                <HotelApartmentSection />
                <ApartmentRentalSection />
                <RecommendationCarousel />
                <EmiratesBookingBox />
            </div>
            <StartPlanningSection />
            <WeatherSubscribe />
        </main>
    );
};

export default PlaceToGo;
