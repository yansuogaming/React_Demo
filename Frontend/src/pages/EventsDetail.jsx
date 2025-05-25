import Breadcrumb from "@components/Breadcrumb";
import { useTranslation } from "react-i18next";

import { CiHeart } from "react-icons/ci";

import BoxShare from "@components/experiences/BoxShare";
import EventInformationBox from "@components/eventdetail/EventInformationBox";
import ImagesBox from "@components/eventdetail/ImagesBox";
import EventCarousel from "@components/eventdetail/EventCarousel";
import FeatureCarousel from "@components/event/FeatureCarousel";

import VisaBanner from "@components/event/VisaBanner";

const EventsDetail = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("events"), href: "/" },
        { label: "Traditional Festival", href: "/" },
        { label: "The Major Festivals in Vietnam - Lunar New Year" },
    ];

    return (
        <>
            <main className="container mx-auto">
                {/* Breadcrumb Section */}
                <section className="px-4 sm:px-6 md:px-8">
                    <Breadcrumb
                        className="mb-4 sm:mb-6 md:mb-[35px] mt-2 sm:mt-3 md:mt-[15px]"
                        items={breadcrumdItems}
                    />
                    <h1 className="text-[#1A2A44] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium mb-6 sm:mb-8 md:mb-[35px] text-center leading-[140%]">
                        Countdown 2025 Hanoi "burns" out with music festival and
                        brilliant fireworks
                    </h1>
                </section>
                <section>
                    <div className="relative w-full">
                        {/* Heart icon at top-right */}
                        <div className="absolute top-3 right-3 z-0">
                            <div
                                className="w-10 h-10 bg-white flex items-center justify-center"
                                style={{
                                    borderRadius: "8px 0px",
                                    boxShadow:
                                        "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
                                }}
                            >
                                {" "}
                                <CiHeart className="text-[24px]" />
                            </div>
                        </div>

                        {/* Main banner image */}
                        <img
                            src="https://topgo.vn/wp-content/uploads/2024/12/herbalife-countdown-party-2025.jpg"
                            alt="Herbalife Countdown Party 2025"
                            className="w-full h-auto object-cover rounded-[60px_0]"
                        />
                    </div>
                </section>
                <section className="px-4 sm:px-6 md:px-8 mt-[40px]">
                    <div className="max-w-3xl mx-auto">
                        <BoxShare />
                        <EventInformationBox />
                        <ImagesBox />
                    </div>
                </section>
            </main>
            <section className="bg-[#F5F6FA] mt-[100px]">
                <EventCarousel />
            </section>
            <section>
                <FeatureCarousel />
            </section>

            <VisaBanner />
        </>
    );
};

export default EventsDetail;
