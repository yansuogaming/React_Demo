import React from "react";

const reasons = [
  {
    number: 1,
    description: "Pay your experience with longest cable car in Asia ",
  },
  {
    number: 2,
    description: "Golden Bridge on Huge Hand of Budda",
  },
  {
    number: 3,
    description: "Legend view from mountain to Hai Van Pass - Da Nang city",
  },
  {
    number: 4,
    description: "Enjoy a more personalized experience with fewer travelers.",
  },
  {
    number: 5,
    description: "Engage with local traditions and communities authentically.",
  },
  {
    number: 6,
    description: "Our team is available around the clock to assist you.",
  },
];

const BookTour = () => {
  return (
    <div className="py-10 bg-white-50 mt-10">
      {/* Tiêu đề */}
      <div className="md:text-[24px] text-[20px] text-3xl font-bold font-[Visit_Qatar] text-gray-800 mb-6">
        6 reasons to book this tour
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {reasons.map((reason) => (
          <div key={reason.number} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full text-gray flex items-center justify-center font-[Visit_Qatar] text-lg">
              -
            </div>
            <div className="flex-1 mt-2 font-[Visit_Qatar]">
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTour;