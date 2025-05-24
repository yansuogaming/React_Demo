import { useTranslation } from "react-i18next";
import ViewMoreButton from "./button/ViewMoreButton";
import CardService from "./card/CardService";
import Reveal from "./animation/Reveal";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const TrendingItinerary = ({ className = "", data = [] }) => {
    const { t } = useTranslation();

    return (
        <section className={`container ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:mb-[40px] mb-[64px] gap-[12px] lg:gap-[0px]">
                <h2 className="text-[34px] sm:text-[28px] lg:text-[40px] font-[700] text-[#1A2A44]">
                    Trending Itineraries
                </h2>
                <ViewMoreButton
                    className="font-[700] text-[18px]"
                    text={t("Create Trip Plan")}
                />
            </div>

            {/* Cards */}
            <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[40px] gap-[16px] lg:gap-y-8">
                    {data.map((tour, index) => (
                        <CardService
                            title={tour.title}
                            widthImage="100%"
                            heightImage="auto"
                            image={tour.image}
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
                                    <CiClock2 /> {tour.number_day} days {tour.number_night}
                                </p>
                            </div>

                            <div
                                className="text-[16px] font-normal hidden lg:block truncate_3"
                                dangerouslySetInnerHTML={{ __html: tour.overview }}
                            >
                            </div>
                        </CardService>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default TrendingItinerary;
