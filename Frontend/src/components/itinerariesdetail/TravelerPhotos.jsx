import React from 'react';
import imgDemo from "@images/about-vietnam.png";

const TravelerPhotos = () => {
  return (
    <div className="max-w-7xl mx-auto font-[Visit_Qatar] mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 font-[Visit_Qatar]">Traveler Photos</h1>
      
      <div className="grid grid-cols-12 gap-2">
        {/* Large image on the left */}
        <div className="col-span-12 md:col-span-6 h-80">
          <div className="relative h-full">
            <img 
              src={imgDemo} 
              alt="Group of travelers at theme park" 
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
        </div>
        
        {/* Right section with 2x2 grid */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-2">
          {/* Top-left image */}
          <div className="col-span-1 h-[156px]">
            <div className="relative h-full">
              <img 
                src={imgDemo} 
                alt="Traditional Asian gateway architecture" 
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
          
          {/* Top-right image */}
          <div className="col-span-1 h-[156px]">
            <div className="relative h-full">
              <img 
                src={imgDemo} 
                alt="Couple on bridge walkway" 
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
          
          {/* Bottom-left image */}
          <div className="col-span-1 h-[156px]">
            <div className="relative h-full">
              <img 
                src={imgDemo} 
                alt="Travelers at botanical garden" 
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
          
          {/* Bottom-right image with "See more" overlay */}
          <div className="col-span-1 h-[156px] relative">
            <div className="relative h-full overflow-hidden rounded-[8px]">
              <img 
                src={imgDemo}
                alt="Mountain view" 
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-medium">+ See more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerPhotos;