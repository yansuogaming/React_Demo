import { useState } from 'react';
import { Map, CircleAlert, Maximize2, MapPin } from 'lucide-react';

export default function ExpectMap() {
  const [expandedDetails, setExpandedDetails] = useState(false);

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <div className="max-w-4xl mx-auto font-sans text-slate-800 mt-4">
      <h1 className="text-3xl font-bold mb-6 font-[Visit_Qatar]">What to expect</h1>
      
      {/* Map Section */}
      <div className="relative w-full h-64 bg-green-100 rounded-lg mb-6 overflow-hidden">
        <div className="absolute bottom-0 right-0 p-1 text-xs text-gray-600">
           Bản đồ dữ liệu © 2023 Google | Điều khoản | Báo cáo một lỗi bản đồ
        </div>
        
        {/* Map Markers */}
        <div className="absolute top-1/2 left-1/4">
          <div className="bg-white rounded-full p-1 shadow-md">
            <CircleAlert size={16} className="text-gray-600" />
          </div>
        </div>
        
        <div className="absolute top-1/3 left-1/2">
          <div className="bg-white rounded-full p-1 shadow-md">
            <CircleAlert size={16} className="text-gray-600" />
          </div>
        </div>
        
        <div className="absolute top-1/4 left-3/4">
          <div className="bg-white rounded-full p-1 shadow-md">
            <CircleAlert size={16} className="text-gray-600" />
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/3">
          <div className="bg-red-500 rounded-full p-1 shadow-md">
            <MapPin size={16} className="text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/6">
          <div className="bg-green-600 rounded-full p-1 shadow-md">
            <MapPin size={16} className="text-white" />
          </div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md">
          <button className="flex items-center justify-center p-2 font-medium text-blue-600">
            <Map size={20} className="mr-2" />
            View map
          </button>
        </div>
        
        <div className="absolute bottom-16 right-4 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-lg shadow-md">
            <Maximize2 size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Itinerary Section */}
      <div className="relative pl-8 border-l-2 border-gray-200">
        {/* Day 1 */}
        <div className="mb-8 relative">
          <div className="absolute -left-12 top-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-[Visit_Qatar]">
            1
          </div>
          <h2 className="text-xl font-[Visit_Qatar] mb-4">Day 1 Welcome To Vietnam - Arrival in Hanoi</h2>
          <p className="mb-4 font-[Visit_Qatar]">
            Your unforgettable Vietnam adventure begins the moment you arrive in Hanoi! Upon landing, your private driver will be
            waiting for you at the airport, holding a sign with your name for a warm and hassle-free welcome. From there, you'll be
            escorted to your hotel, perfectly situated in the heart of the city, just steps away from the vibrant Old Quarter.
          </p>
          <p className="mb-2 font-[Visit_Qatar]">
            Take some time to relax at your hotel or dive straight into exploring the charming streets of Hanoi at your own pace.
            Whether you choose to sip a cup of traditional egg coffee, wander through bustling markets, or simply soak in the city's
            unique atmosphere, your adventure has only just begun!
          </p>
        </div>
        
        {/* Day 2 */}
        <div className="mb-6 relative">
          <div className="absolute -left-12 top-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-[Visit_Qatar]">
            2
          </div>
          <h2 className="text-xl font-[Visit_Qatar] mb-4">Day 2: Explore the Charms of Hanoi – Full-Day City Tour (B/L)</h2>
          <p className="mb-4 font-[Visit_Qatar]">
            <span className="font-bold">08:00 – 08:30</span> | Your adventure in Hanoi begins! Our friendly tour guide and comfortable bus will pick you up from your
            hotel as we set off to explore the city's rich history and vibrant culture.
          </p>
          <p className="mb-4 font-[Visit_Qatar]">
            <span className="font-bold">08:45</span> | Our first stop is the Ho Chi Minh Complex, the final resting place of Vietnam's beloved leader, Uncle Ho. Here,
            you'll have the unique opportunity to view his embalmed body and take a peaceful stroll through the lush gardens, where
            two traditional houses showcase his simple yet inspiring lifestyle from 1954 to 1969.
          </p>
          <p className="mb-4 font-[Visit_Qatar]">
            Next, we visit the iconic One Pillar Pagoda, a sacred Buddhist temple dedicated to the Goddess of Mercy. With its
            unique lotus-shaped design, it is considered one of the most distinctive pagodas in the world.
          </p>
        </div>
        
        {/* See more link */}
        <button onClick={toggleDetails} className="text-blue-600 font-[Visit_Qatar]">
          See 8 more itinerary details
        </button>
      </div>
    </div>
  );
}