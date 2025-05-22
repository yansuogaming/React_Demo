import Breadcrumb from "@components/Breadcrumb";
import FAQ from "@components/FAQ";
import FilterTours from "@components/FilterTours";
import MostPopularTours from "@components/MostPopularTours";
import PlainYourTrip from "@components/PlainYourTrip";
import WhyVisit from "@components/WhyVisit";
import Reveal from "@components/animation/Reveal";
import TextNormal from "@components/text/TextNormal";
import image from "@images/hero-image-itineraries.png";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";

const Itineraries = () => {
    const { t } = useTranslation();
    const { listTrendingTours, listTours } = useLoaderData();
    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("plan_your_trip"), href: "/" },
        { label: t("itineraries"), href: "/" },
    ];
    // console.log(listTours);

    return (
        <main>
            <section className="container mb-[80px]">
                <Breadcrumb
                    className="mb-[30px] mt-[15px]"
                    items={breadcrumdItems}
                />
                <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center mt-[80px] bg-white rounded-tl-[60px] rounded-br-[60px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.10)]">
                    <div className="">
                        <img
                            className="w-full"
                            src={image}
                            alt="Vietnam – Journeys You Simply Can’t Miss"
                        />
                    </div>
                    <div className="mx-5 mb-5 lg:mx-0 lg:mb-0">
                        <h1 className="text-[#1A2A44] font-bold text-[30px] md:text-[40px]">
                            Vietnam – Journeys You Simply Can’t Miss
                        </h1>
                        <TextNormal className="text-[14px] md:text-[16px]">
                            From the emerald waters of Phu Quoc to the misty
                            mountains of Sa Pa, Vietnam offers a captivating
                            blend of cultural richness, stunning landscapes, and
                            unforgettable cuisine. Each tour reveals a unique
                            slice of the S-shaped country — and maybe it’s time
                            you experienced the magic for yourself.
                        </TextNormal>
                    </div>
                </Reveal>
            </section>
            <MostPopularTours data={listTrendingTours} />
            <FilterTours className="mt-[80px] mb-[160px]" data={listTours} />
            <WhyVisit />
            <FAQ />
            <PlainYourTrip className="mt-[120px]" />
        </main>
    );
};

export default Itineraries;
