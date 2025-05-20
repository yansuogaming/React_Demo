import React from "react";
import { NavLink } from "react-router";

import imgHotel1 from "@images/photo-hotel1.jpeg";
import imgHotel2 from "@images/photo-hotel2.jpeg";

const planningItems = [
    {
        title: "Practical information",
        description:
            "Plan your trip, find advice on how to prepare, and get all the information you need before your Dubai holiday.",
        image: imgHotel1,
    },
    {
        title: "Visa information",
        description:
            "Planning a trip to Dubai? Find out whether you need a visa and how to apply.",
        image: imgHotel2,
    },
    {
        title: "Transportation in Dubai: Getting to & around the city",
        description:
            "From touchdown to take-off, getting around Dubai is easy.",
        image: imgHotel1,
    },
    {
        title: "Travel accessibility",
        description:
            "Dubai strives to enhance its offerings for travellers with special needs.",
        image: imgHotel2,
    },
];

const StartPlanningSection = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            {/* Heading */}

            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A2A44] mb-2">
                Start planning
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#505050] mb-6 max-w-3xl">
                Find a range of essential information – from basic customs to
                hotels, restaurants, public transport and discounts.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {planningItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                        <NavLink to="/" className="block group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </NavLink>
                        <div className="p-4">
                            <h3 className="font-semibold text-[#1A2A44] text-[16px] mb-2">
                                <NavLink
                                    to="/"
                                    className="transition-colors duration-300 group-hover:text-[#007BFF] group-hover:underline"
                                >
                                    {item.title}
                                </NavLink>
                            </h3>
                            <p className="text-[14px] text-[#505050]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StartPlanningSection;
