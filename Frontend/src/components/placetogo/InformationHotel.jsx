import React from "react";

const InformationHotel = () => (
    <section className="space-y-[60px]">
        {/* Luxury hotels */}
        <div>
            <h2 className="font-bold text-[28px] text-[#1A2A44] mb-3">
                Luxury hotels
            </h2>
            <p className="text-[16px] text-[#57585c] mb-6 leading-relaxed">
                Dubai is famous around the world for its staggering range of
                luxury resorts...
            </p>
            <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            >
                New hotels in Dubai
            </a>
        </div>

        {/* Budget hotels */}
        <div>
            <h2 className="font-bold text-[28px] text-[#1A2A44] mb-3">
                Budget hotels
            </h2>
            <p className="text-[16px] text-[#57585c] mb-6 leading-relaxed">
                Your stay in Dubai doesn't have to break the bank...
            </p>
            <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            >
                Guide to budget hotels
            </a>
        </div>
    </section>
);

export default InformationHotel;
