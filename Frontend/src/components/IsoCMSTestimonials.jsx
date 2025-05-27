import React from 'react';
import customer from '@images/customer.png';

const IsoCMSTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lindsay",
      location: "France",
      date: "July 18th, 2024",
      rating: 5.0,
      title: "The journey has a clear plan",
      content: "This was a great trip to see the highlights of Vietnam. The tour company was very organized and all of our pick-ups and tours were right on schedule. Tony, the tour operator, was fantastic and was also just a text mess... View more",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "anisha",
      location: "Japan",
      date: "June 28th, 2024",
      rating: 5.0,
      title: "Great landscape",
      content: "Tour was very well planned covered most of the beautiful attraction in limited time period .",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Dominika",
      location: "US",
      date: "July 9th, 2024",
      rating: 5.0,
      title: "I strongly believe in choosing isoCMS",
      content: "My 11-day Vietnam tour with Wonderscape Travel was superbly organized, covering vibrant cities, historical sites, and breathtaking natural landscapes. The itinerary was a perfect balance of cultural immersion.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-[Helvetica_Neue]">
      {/* Testimonials Section */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            What people love about their experience at isoCMS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Please take a look at the following reviews from our customers
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="hidden sm:flex absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="hidden sm:flex absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name}'s experience`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  {/* Customer Info */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="font-semibold text-base sm:text-lg text-teal-600 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {testimonial.location} | {testimonial.date}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-teal-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-semibold mr-1.5 sm:mr-2">
                      {testimonial.rating}
                    </span>
                    <span className="text-teal-600 font-medium text-xs sm:text-sm">
                      Excellent
                    </span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    {testimonial.title}
                  </h4>

                  {/* Review Content */}
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Center Section */}
      <div className="bg-teal-600 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <img src={customer} className="w-4 h-4 sm:w-6 sm:h-6 text-white" alt="Customer support icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            isoCMS Help Center
          </h3>
          <p className="text-teal-100 text-sm sm:text-base">
            Our customer service team is available 24/7 via chat, email and social.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsoCMSTestimonials;