import { useRef, useEffect, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import experience from "@images/experiences.png";
import imgDemo from "@images/about-vietnam.png";
import { NavLink } from "react-router";

// Data arrays
const includedItems = [
    {
        icon: <Check className="text-green-500" size={24} />,
        desc: "Professional naturalist guide",
    },
    {
        icon: <Check className="text-green-500" size={24} />,
        title: "Lunch",
        desc: "A picnic lunch, sourced locally with seasonal ingredients and packaged with recyclable and compostable materials.",
    },
    {
        icon: <Check className="text-green-500" size={24} />,
        title: "Snacks",
        desc: "A variety of snacks, sourced locally and organic when possible.",
    },
    {
        icon: <Check className="text-green-500" size={24} />,
        desc: "Bottled Water",
    },
    {
        icon: <Check className="text-green-500" size={24} />,
        desc: "Emergency medical kit carried by guide.",
    },
];

const notIncludedItems = [
    {
        icon: <X className="text-red-500" size={24} />,
        desc: "National Park entrance fees. Cost is $20 per person, charged at the gate, subject to change.",
    },
    {
        icon: <X className="text-red-500" size={24} />,
        desc: "Gratuities",
    },
];

export default function ExperienceDetails() {
    const [showAllIncluded, setShowAllIncluded] = useState(false);
    const [multilineStates, setMultilineStates] = useState([]);
    const descRefs = useRef([]);

    useEffect(() => {
        const updated = descRefs.current.map((el) => {
            if (!el) return false;
            const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
            const numLines = el.scrollHeight / lineHeight;
            return numLines > 1;
        });
        setMultilineStates(updated);
    }, []);

    const visibleIncludedItems = showAllIncluded
        ? includedItems
        : includedItems.slice(0, 3); // Show first 3 initially

    return (
        <div className="max-w-6xl mx-auto font-sans mt-20 px-4">
            {/* Banner section */}
            <div className="flex flex-col md:flex-row gap-6 mb-16">
                <div className="w-full md:w-1/2 bg-amber-50 rounded-3xl p-6 md:p-8 flex items-center">
                    <div className="mr-4 md:mr-6">
                        <img
                            src={experience}
                            alt="Vietnam map outline"
                            className="w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            Vietnam
                        </h2>
                        <NavLink
                            to="#"
                            className="flex items-center text-[16px] text-[#1A2A44] font-[400]"
                        >
                            Discover more experiences{" "}
                            <ArrowRight className="ml-2" size={20} />
                        </NavLink>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden h-[240px] md:h-auto">
                    <img
                        src={imgDemo}
                        alt="Vietnam landscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                        <div className="bg-white/80 rounded-md px-6 py-5 md:p-[31px_0px] text-center w-full">
                            <h2 className="text-lg md:text-[22px] text-[#1A2A44] font-bold mb-2">
                                First time in Vietnam?
                            </h2>
                            <a
                                href="#"
                                className="text-base text-[#1A2A44] hover:underline"
                            >
                                Let's find out quickly
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details section */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                {/* Included */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-[28px] font-[700] text-[#1A2A44] mb-[16px]">
                        What's included
                    </h2>

                    {visibleIncludedItems.map((item, index) => (
                        <div key={index} className="mb-[16px]">
                            <div
                                className={`flex ${
                                    item.title ? "items-start" : "items-center"
                                } gap-4`}
                            >
                                <div className="mt-1">{item.icon}</div>
                                <div className="text-[#1A2A44] text-[16px]">
                                    {item.title ? (
                                        <>
                                            <h3 className="font-[500]">
                                                {item.title}
                                            </h3>
                                            <p className="font-[400]">
                                                {item.desc}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="font-[400]">
                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {!showAllIncluded && (
                        <button
                            onClick={() => setShowAllIncluded(true)}
                            className="text-blue-600 font-medium"
                        >
                            See more
                        </button>
                    )}
                </div>

                {/* Not included */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-[28px] font-[700] text-[#1A2A44] mb-[16px]">
                        What's not included
                    </h2>

                    {notIncludedItems.map((item, index) => (
                        <div key={index} className="mb-[16px]">
                            <div
                                className={`flex gap-4 text-[#1A2A44] ${
                                    multilineStates[index]
                                        ? "items-start"
                                        : "items-center"
                                }`}
                            >
                                <div className="mt-1">{item.icon}</div>
                                <p
                                    ref={(el) => (descRefs.current[index] = el)}
                                    className="text-[16px] font-[400]"
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
