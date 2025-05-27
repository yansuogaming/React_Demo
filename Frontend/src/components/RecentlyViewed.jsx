import React from 'react';

const RecentlyViewed = () => {
  const hotels = [
    {
      id: 1,
      name: "Merry Land Hotel Da Nang",
      location: "Da Nang",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 9.2,
      ratingText: "Excellent",
      reviews: 2,
      price: 21
    },
    {
      id: 2,
      name: "ViAn Hotel And Spa Danang",
      location: "Da Nang",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 9.2,
      ratingText: "Excellent",
      reviews: 2,
      price: 26
    },
    {
      id: 3,
      name: "Hotel 4 star - ATP Galaxy Hotel & Apartment Danang",
      location: "Da Nang",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 9.2,
      ratingText: "Excellent",
      reviews: 2,
      price: 17
    },
    {
      id: 4,
      name: "Le House Boutique Hotel",
      location: "Da Nang",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 9.2,
      ratingText: "Excellent",
      reviews: 2,
      price: 20
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 font-[Helvetica_Neue]">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>

      {/* Hotels Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:shadow-xl transition-shadow">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Hotels Grid */}
        <div className="grid grid-cols-4 gap-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              {/* Hotel Image */}
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-blue-900 bg-opacity-80 text-white px-2 py-1 rounded text-sm font-medium">
                  {hotel.location}
                </div>
              </div>

              {/* Hotel Details */}
              <div className="p-4">
                {/* Hotel Name */}
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                  {hotel.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                    {hotel.rating}
                  </span>
                  <span className="text-blue-600 font-medium text-sm mr-1">
                    {hotel.ratingText}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {hotel.reviews} reviews
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline">
                  <span className="text-gray-600 text-sm mr-1">from</span>
                  <span className="text-gray-600 text-sm mr-1">US</span>
                  <span className="text-red-600 font-bold text-lg">
                    ${hotel.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;