import React from 'react';

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
    <div className="max-w-7xl mx-auto px-4 py-12 font-[Helvetica_Neue]">
      {/* Testimonials Section */}
      <div className="mb-16">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What people love about their experience at isoCMS
          </h2>
          <p className="text-gray-600">
            Please take a look at the following reviews from our customers
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name}'s experience`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Customer Info */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg text-teal-600 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location} | {testimonial.date}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <span className="bg-teal-500 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                      {testimonial.rating}
                    </span>
                    <span className="text-teal-600 font-medium text-sm">
                      Excellent
                    </span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {testimonial.title}
                  </h4>

                  {/* Review Content */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Center Section */}
      <div className="bg-teal-600 rounded-2xl p-8 flex items-center">
        {/* Avatar */}
        <div className="flex-shrink-0 mr-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">
            isoCMS Help Center
          </h3>
          <p className="text-teal-100">
            Our customer service team is available 24/7 via chat, email and social.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsoCMSTestimonials;