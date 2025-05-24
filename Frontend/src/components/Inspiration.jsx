import React, { useState } from "react";
import { Map, Bell, Utensils, Car, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const Inspiration = () => {
  const items = [
    { id: 1, icon: Map, label: "Sightseeing" },
    { id: 2, icon: Bell, label: "Hotels" },
    { id: 3, icon: Utensils, label: "Delicious dish" },
    { id: 4, icon: Car, label: "Transports" },
    { id: 5, icon: ShoppingBag, label: "Shopping" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 5;

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerSlide);

  const hasMoreItems = startIndex + itemsPerSlide < items.length;

  return (
    <div className="mt-[60px]">
      <h2 className="text-[28px] text-[#10154C] font-bold mb-6">
        Inspiration at your destination
      </h2>

      <div className="relative w-full md:w-2/3 pr-4">
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col justify-center h-32 hover:bg-gray-50 transition-colors duration-200"
            >
              <item.icon className="w-[32px] h-[32px] mb-[20px] text-blue-400" />
              <span className="text-blue-900">{item.label}</span>
            </div>
          ))}
        </div>


        {hasMoreItems && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Inspiration;