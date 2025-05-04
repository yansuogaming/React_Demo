import { useState, useEffect } from 'react'
import heroImage from '@images/hero-image.svg'

export default function () {
    return (
        <main>
            <div className="relative text-white">
                <img src={heroImage} alt="" />
                <h2 className="text-center text-[60px] font-bold text-shadow-[0_2px_4px_rgba(0_0_0_/_0.40)] absolute bottom-[220px] w-full">
                    Vietnam: Where Every Journey Inspires
                </h2>
                <p className="text-center text-[20px] font-normal absolute bottom-[188px] w-full">
                    Discover UNESCO heritage, vibrant cities, and breathtaking nature
                </p>
                <div className="flex gap-[8px]">
                    
                </div>
            </div>
        </main>
    );
};
