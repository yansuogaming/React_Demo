import image from "@images/image_17.png";
import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardService from "./card/CardService";
import Reveal from "./animation/Reveal";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const TrendingItinerary = ({ className = "" }) => {
    const { t } = useTranslation();

    return (
        <section className={`container ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-[20px] gap-4 sm:gap-0">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-[#1A2A44]">
                    Trending Itineraries
                </h2>
                <ViewMoreButton text={t("Create Trip Plan")} />
            </div>

            {/* Cards */}
            <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] gap-[16px] lg:gap-y-8">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CardService
                            title="Enjoy Hanoi street food"
                            widthImage="100%"
                            heightImage="auto"
                            image={image}
                            href="/"
                            key={index}
                            padding="15px 0 0 0"
                        >
                            <div className="flex gap-[28px] text-[16px] font-[400]">
                                <p className="flex gap-[5px] items-center mb-[15px] text-[#1D2D53]">
                                    <FaStar className="text-[#FED141]" /> 4.5
                                    (1411)
                                </p>
                                <p className="flex gap-[5px] items-center mb-[15px] text-[#494951]">
                                    <CiClock2 /> 3 days 2 nights
                                </p>
                            </div>

                            <p className="text-[16px] font-normal hidden lg:block">
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour)
                            </p>
                        </CardService>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default TrendingItinerary;
