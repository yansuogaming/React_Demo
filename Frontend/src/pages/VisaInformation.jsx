import { useTranslation } from "react-i18next";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@lib/utils";

import Breadcrumb from "@components/Breadcrumb";
import FAQ from "@components/FAQ";
import EmiratesBookingBox from "@components/EmiratesBookingBox";
import WeatherSubscribe from "@components/WeatherSubscribe";

const VisaRequirementBox = () => {
    const [passport, setPassport] = useState("");
    const [visaType, setVisaType] = useState("");

    const isFormValid = passport && visaType;

    return (
        <section className="container mx-auto px-4 mt-8">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase">
                Do you need a visa?
            </h2>

            <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-6 gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                        What passport do you hold?
                    </label>
                    <select
                        value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    >
                        <option value="">Please select</option>
                        <option value="VN">Vietnam</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                    </select>
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                        What type of visa do you need?
                    </label>
                    <select
                        value={visaType}
                        onChange={(e) => setVisaType(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    >
                        <option value="">Please select</option>
                        <option value="tourist">Tourist</option>
                        <option value="business">Business</option>
                        <option value="student">Student</option>
                        <option value="transit">Transit</option>
                    </select>
                </div>

                <div className="w-full lg:w-auto">
                    <button
                        disabled={!isFormValid}
                        className={`w-full lg:w-auto px-6 py-2 rounded-md transition 
                            ${
                                isFormValid
                                    ? "bg-[#57585C] text-white hover:bg-blue-700"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Check visa requirements
                    </button>
                </div>
            </div>
            <div className="border-b border-gray-200 mt-8" />
        </section>
    );
};

const VisaInfoSection = () => {
    return (
        <section className="container mx-auto px-4 py-10 space-y-12">
            {/* Visa types */}
            <div>
                <h2 className="text-2xl font-semibold text-[#1A2A44] mb-4">
                    Visa types
                </h2>
                <p className="mb-4 text-gray-700">
                    If you're planning a visit to Dubai, there are various types
                    of tourist visas to accommodate different travel needs,
                    depending on your eligibility:
                </p>
                <ul className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
                    <li>
                        A single entry tourist visa, valid for 30 days or 60
                        days
                    </li>
                    <li>
                        A multiple-entry tourist visa, valid for 30 days or 60
                        days
                    </li>
                    <li>
                        A multiple-entry long-term tourist visa, valid for five
                        years
                    </li>
                    <li>
                        A transit visa, one for 48 hours and another for 96
                        hours
                    </li>
                    <li>
                        Visa on arrival, either for 30 days or 90 days
                        contingent on nationality
                    </li>
                    <li>
                        Visa on arrival for Indians who have a visa issued by
                        the USA, or a green card issued by the USA, or a visit
                        visa/residence permit issued by the UK or the EU.
                    </li>
                    <li>
                        eVisa for residents of GCC countries (GCC citizens are
                        eligible for visa-free entry).
                    </li>
                </ul>
                <p className="mt-4 text-gray-700">
                    Check the available visa options and requirements for your
                    nationality using the dropdown menu.
                </p>
                <p className="mt-2 text-gray-700">
                    There are fines for overstaying, which amount to a
                    standardised fee of AED50 a day and will be calculated from
                    10 days after the expiry of the visa. Before applying for
                    any tourist visa, do review the specific requirements for
                    your chosen visa type and ensure all necessary documents are
                    in order. In some cases, it is also possible to{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        extend a tourist visa
                    </a>{" "}
                    via GDRFA’s official website or an Amer Service Centre.
                </p>
                <p className="mt-2 text-gray-700">
                    For detailed and up-to-date information, please refer to{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        GDRFA’s official website
                    </a>
                    .
                </p>
            </div>

            {/* Visa requirements */}
            <div>
                <h2 className="text-2xl font-semibold text-[#1A2A44] mb-4">
                    Visa requirements and application
                </h2>
                <p className="mb-4 text-gray-700">
                    Each visa type has its own requirements for documents that
                    need to be submitted, a few commonly needed documents
                    include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                    <li>A recent passport photograph</li>
                    <li>
                        A passport or travel document, valid for no less than 6
                        months
                    </li>
                    <li>Valid health insurance</li>
                    <li>
                        A national identity card in the case of certain
                        nationalities
                    </li>
                    <li>
                        A travel ticket showing an onward journey, and in the
                        case of transit visas, this should be within 96 hours of
                        arriving in Dubai
                    </li>
                    <li>For GCC residents, a copy of your residence permit</li>
                    <li>
                        For visa on arrival for Indian nationals, a permanent
                        residence card (green card) issued by the USA, a visit
                        visa issued by the USA or a residence/visit visa issued
                        by the UK or European Union countries.
                    </li>
                </ul>
                <p className="mt-4 text-gray-700">
                    Once you have all your documents ready, you can either apply
                    directly via the GDRFA website or apply through an
                    authorised agency such as your travel agent or tour
                    operator, approved airlines or your booked hotel. While
                    processing time varies based on the visa, it approximately
                    takes 48 hours to be issued.
                </p>
                <p className="mt-2 text-gray-700">
                    For detailed and up-to-date information, please refer to{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        GDRFA’s official website
                    </a>{" "}
                    or check with your travel agent.
                </p>
            </div>
        </section>
    );
};

const residencyItems = [
    {
        icon: "💻",
        title: "Work remotely programme",
        description:
            "Do you want to mix business with pleasure in Dubai? With a new one-year virtual working programme, you can live and work by the beach.",
        cta: "Apply now",
    },
    {
        icon: "🧑‍💼",
        title: "Residency for investors and entrepreneurs",
        description:
            "If you wish to open a business or invest in property in Dubai, you can apply for five and ten-year residency visas, with a possibility to also bring your business partners and family.",
    },
    {
        icon: "🚀",
        title: "Residency for specialist talent",
        description:
            "If you are a specialist in science, medicine, sport, culture, or art, Dubai offers state-of-the-art facilities to grow your talent. Apply for this ten-year visa and reach your potential.",
    },
    {
        icon: "📚",
        title: "Residency for outstanding students",
        description:
            "Dubai’s cutting-edge research and facilities attract the brightest minds from around the world. Explore the five and ten-year visas supporting exceptional student talent.",
    },
];
const RelocateToDubai = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const items = [...residencyItems, ...residencyItems];

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-semibold text-[#1A2A44] mb-2">
                Relocate to Dubai
            </h2>

            <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
                <p className="text-gray-600 max-w-2xl">
                    Whether working remotely from Dubai, permanently moving your
                    business, or coming for retirement, there are lots of
                    options for you to enjoy the full benefits of being a Dubai
                    resident.
                </p>
                <div className="hidden sm:flex gap-2">
                    <button
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}
                        className={cn(
                            "w-8 h-8 rounded shadow bg-white flex items-center justify-center",
                            prevBtnDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        )}
                    >
                        <FaChevronLeft className="text-blue-500" />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={nextBtnDisabled}
                        className={cn(
                            "w-8 h-8 rounded shadow bg-white flex items-center justify-center",
                            nextBtnDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        )}
                    >
                        <FaChevronRight className="text-blue-500" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-none px-2 w-[80%] sm:w-1/2 sm:max-w-[45%] lg:w-1/4"
                        >
                            <div className="bg-[#005B88] text-white rounded-md p-6 h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-2xl mb-2 flex gap-[10px]">
                                        <span>{item.icon}</span>
                                        <h3 className="font-[400] text-[24px]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-[20px] font-[300] m-[14px_0_16px_0]">
                                        {item.description}
                                    </p>
                                </div>
                                {item.cta && (
                                    <button className="mt-6 text-sm border border-white py-2 px-4 rounded hover:bg-white hover:text-[#005B88] hover:cursor-pointer transition">
                                        {item.cta}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-end mt-4 gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                            "h-[10px] transition rounded-full",
                            selectedIndex === index
                                ? "w-[30px] bg-gray-800"
                                : "w-[10px] bg-gray-300"
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

const VisaInformation = () => {
    const { t } = useTranslation();

    const breadcrumdItems = [
        { label: t("home"), href: "/" },
        { label: t("Plan your trip"), href: "planyourtrip" },
        { label: "Visa Information" },
    ];
    return (
        <main>
            <div className="container mx-0">
                <section>
                    <Breadcrumb
                        className="p-[16px_40px_28px_0] text-[14px]"
                        items={breadcrumdItems}
                    />
                </section>
                <section className="container">
                    <h2 className="text-[56px] text-[#000] font-[700] mb-[20px]">
                        Visa information
                    </h2>
                    <p className="text-[20px] font-[500] text-[#505050]">
                        Planning a trip to Dubai? Find out whether you need a
                        visa and how to apply.
                    </p>
                </section>
                <VisaRequirementBox />
                <VisaInfoSection />
                <RelocateToDubai />
                <FAQ />
                <EmiratesBookingBox />
            </div>
            <WeatherSubscribe />
        </main>
    );
};
export default VisaInformation;
