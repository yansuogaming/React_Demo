import React from "react";
import imageCity from "@images/hanoi.png";

const ExperienceHeader = () => {
    return (
        <section className="relative text-white">
            <img src={imageCity} alt="Hà Nội" className="w-full object-cover" />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,58,0)_0%,rgba(4,18,58,0.4)_100%)]"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 flex-col">
                <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-center drop-shadow-lg">
                    Unmissable attractions in Nha Trang
                </h2>
                <p className="text-[18px] text-w mt-2">
                    By Van Duong An | Published on 3 Apr, 2025
                </p>
            </div>
        </section>
    );
};

export default ExperienceHeader;
