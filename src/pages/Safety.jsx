
import { ChevronDown, Facebook, Instagram, Search, Sun, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router"

export default function Safety() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[80vh] w-[80vw] mx-auto">
          <div className="w-full h-full overflow-hidden rounded-br-[100px]">
            <img
              src="https://cdn.baogialai.com.vn/images/822863faa89937513fac62d7aa33eaf61a699ca6d1cb942c5dd210083a40d96956455cd5a5ab96b6d00ad1efa949e7568cef72d796776500468ad8dc73944b05/images2596564_a_3.jpg"
              alt="Beach in Dubai"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-20 right-0">
            <div className="bg-[#006699] text-white p-6  md:p-12 max-w-3xl rounded-tr-4xl">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Safety in Dubai</h1>
              <p className="text-sm md:text-base">
                Your complete guide to staying safe in Dubai and what to do in the unlikely event of an emergency.
              </p>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-8">
          {/* Intro Text */}
          <div className="max-w-3xl mb-12">
            <p className="mb-4 text-sm md:text-base">
              Dubai is one of the world's safest cities and one of the safest destinations to visit. The crime rate in
              Dubai is extremely low, and it's safe for women to travel alone. Dubai Police is known for its swift
              response to emergencies. However, like any other destination, it's always good to be prepared.
              <Link href="#" className="text-blue-600 hover:underline">
                {" "}
                Learn more about crime rates
              </Link>{" "}
              in the UAE compared to other cities and follow these safety tips.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Dubai has a dedicated tourism police department that helps tourists with any issues they may face during
              their stay. You can find tourism police officers at major tourist attractions, shopping malls, and
              beaches. They speak multiple languages and are there to assist you.
            </p>
          </div>

          {/* Emergency Numbers Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Police, medical emergency, fire and coastguard numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Police */}
              <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                <div className="p-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-center py-3 bg-[#005580]">
                  <div className="text-3xl font-bold">999</div>
                  <div className="text-sm">Dubai Police</div>
                </div>
                <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
              </div>

              {/* Ambulance */}
              <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                <div className="p-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-center py-3 bg-[#005580]">
                  <div className="text-3xl font-bold">998</div>
                  <div className="text-sm">Ambulance</div>
                </div>
                <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
              </div>

              {/* Fire Department */}
              <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                <div className="p-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 23C16.9706 23 21 18.9706 21 14C21 9.02944 16.9706 5 12 5C7.02944 5 3 9.02944 3 14C3 18.9706 7.02944 23 12 23Z"
                      fill="white"
                    />
                    <path
                      d="M12 1C12.5523 1 13 1.44772 13 2V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V2C11 1.44772 11.4477 1 12 1Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-center py-3 bg-[#005580]">
                  <div className="text-3xl font-bold">997</div>
                  <div className="text-sm">Fire Department</div>
                </div>
                <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
              </div>

              {/* Coastguard */}
              <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                <div className="p-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H2V11L4 4H20L22 11V13H20V21Z"
                      fill="white"
                    />
                    <path
                      d="M9.5 9.5C9.5 8.12 10.62 7 12 7C13.38 7 14.5 8.12 14.5 9.5C14.5 10.88 13.38 12 12 12C10.62 12 9.5 10.88 9.5 9.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-center py-3 bg-[#005580]">
                  <div className="text-3xl font-bold">996</div>
                  <div className="text-sm">Coastguard</div>
                </div>
                <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
              </div>
            </div>
          </div>

          {/* About Safety Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">All about safety in Dubai</h2>
            <p className="mb-4 text-sm md:text-base">
              Dubai is consistently ranked among the safest cities in the world. The UAE's strict laws and efficient
              police force contribute to the low crime rate. Violent crime is rare, and petty crime such as
              pickpocketing is uncommon. However, like any major city, it's always good to take basic precautions.
            </p>
            <p className="mb-4 text-sm md:text-base">
              The UAE has strict laws regarding public behavior, dress code, alcohol consumption, and relationships.
              It's important to familiarize yourself with these laws before your visit to avoid any unintentional
              violations. Respect for local customs and traditions is highly valued in Dubai.
            </p>
          </div>

          {/* Safety Sections */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Staying safe on the roads and driving rules in Dubai</h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai has a modern road infrastructure with well-maintained highways. However, driving can be
                challenging due to high speeds and sometimes aggressive driving. If you're planning to drive in Dubai,
                make sure you have a valid international driving permit and familiarize yourself with local traffic
                rules.
              </p>
              <p className="mb-4 text-sm md:text-base">
                Speed limits are strictly enforced in Dubai with cameras installed throughout the city. The general
                speed limit on highways is 120 km/h, on main roads 80 km/h, and in residential areas 40 km/h. Always
                wear your seatbelt and never use your mobile phone while driving.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Staying safe in the Dubai sea</h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai has beautiful beaches with clear waters, but it's important to be aware of sea conditions. Always
                swim in designated areas where lifeguards are present. Pay attention to flag warnings: red means
                dangerous conditions, yellow means caution, and green means safe to swim.
              </p>
              <p className="mb-4 text-sm md:text-base">
                If you're planning water activities such as jet skiing or parasailing, make sure to use licensed
                operators and wear appropriate safety equipment. Never swim alone or at night, and be cautious of strong
                currents, especially during changing tides.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Staying safe while hiking in Dubai</h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai and the surrounding emirates offer beautiful hiking trails, especially in the Hajar Mountains. If
                you're planning a hike, make sure to go with a group or inform someone about your plans. Carry plenty of
                water, wear appropriate footwear, and protect yourself from the sun.
              </p>
            </div>

            {/* img Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="h-[250px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Water activities in Dubai"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[250px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=400"
                  alt="Dubai landscape"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Staying safe in the Dubai desert</h2>
              <p className="mb-4 text-sm md:text-base">
                Desert safaris are a popular activity in Dubai, but the desert environment can be harsh. Always go with
                licensed tour operators who have experienced guides. Wear light, loose-fitting clothes and a hat to
                protect yourself from the sun. Carry plenty of water to stay hydrated.
              </p>
              <p className="mb-4 text-sm md:text-base">
                If you're driving in the desert on your own, make sure you have a 4x4 vehicle and are experienced in
                desert driving. Never go alone, carry extra water and food, and let someone know your plans. Mobile
                phone coverage can be limited in remote desert areas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Protect yourself from the sun</h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai has a hot desert climate with intense sun, especially during summer months. Always wear sunscreen
                with a high SPF, reapply it regularly, and wear a hat and sunglasses. Stay hydrated by drinking plenty
                of water and avoid outdoor activities during the hottest part of the day (11am-3pm).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">What to do in a medical emergency</h2>
              <p className="mb-4 text-sm md:text-base">
                In case of a medical emergency, dial 998 for an ambulance. Dubai has world-class medical facilities with
                English-speaking staff. If you need medical attention that is not an emergency, there are many clinics
                and hospitals throughout the city. Make sure you have travel insurance that covers medical expenses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Tips for first-time visitors to Dubai and rules in Dubai for tourists
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai is a modern city with a blend of traditional Islamic values. Respect local customs by dressing
                modestly, especially in public places and religious sites. Public displays of affection should be
                limited to holding hands. Alcohol is only served in licensed venues such as hotels and specific
                restaurants.
              </p>
              <p className="mb-4 text-sm md:text-base">
                During the holy month of Ramadan, eating, drinking, and smoking in public during daylight hours is
                prohibited. Be mindful of your behavior and respect the religious practices of the local population
                during this time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Dubai Police Stations</h2>
              <p className="mb-4 text-sm md:text-base">
                Dubai has police stations throughout the city, with officers who speak multiple languages. The main
                police headquarters is located in Al Muraqqabat area. You can also report non-emergency incidents
                through the Dubai Police app or website.
              </p>
            </div>

            {/* Other Useful Numbers */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Other useful numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Tourism Police */}
                <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                  <div className="text-center py-3 bg-[#005580]">
                    <div className="text-3xl font-bold">901</div>
                    <div className="text-sm">Tourism Police</div>
                  </div>
                  <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
                </div>

                {/* Dubai Municipality */}
                <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                  <div className="text-center py-3 bg-[#005580]">
                    <div className="text-3xl font-bold">800-900</div>
                    <div className="text-sm">Dubai Municipality</div>
                  </div>
                  <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
                </div>

                {/* Dubai Airport */}
                <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                  <div className="text-center py-3 bg-[#005580]">
                    <div className="text-3xl font-bold">+971 4 224 5555</div>
                    <div className="text-sm">Dubai International Airport</div>
                    <div className="text-xs">24/7</div>
                  </div>
                  <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
                </div>

                {/* Electricity Failure */}
                <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                  <div className="text-center py-3 bg-[#005580]">
                    <div className="text-3xl font-bold">991</div>
                    <div className="text-sm">Electricity Failure</div>
                  </div>
                  <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
                </div>

                {/* Water Service */}
                <div className="bg-[#006699] text-white rounded-sm overflow-hidden">
                  <div className="text-center py-3 bg-[#005580]">
                    <div className="text-3xl font-bold">922</div>
                    <div className="text-sm">Water Service</div>
                  </div>
                  <div className="text-xs text-center py-1 bg-[#004466]">CALL NOW</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="my-12">
            <h2 className="text-xl font-semibold mb-6">FAQs</h2>
            <div className="space-y-2">
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Is Dubai a safe holiday destination?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Is driving prohibited in Dubai?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Can I drink alcohol in Dubai?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Is it safe to eat street food in Dubai?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Are there sharks in Dubai water?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
              <div className="border p-4 flex justify-between items-center cursor-pointer">
                <div className="font-medium">Can I take photos in Dubai?</div>
                <ChevronDown className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* More About Section */}
          <div className="my-12">
            <h2 className="text-xl font-semibold mb-6">More about</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#006699] text-white overflow-hidden">
                <div className="h-[150px] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=150&width=400"
                    alt="Festival information"
                    width={400}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Festival information</h3>
                  <p className="text-sm mb-4">Learn about Dubai's vibrant festivals and events throughout the year.</p>
                  <Link href="#" className="text-sm underline">
                    Read more
                  </Link>
                </div>
              </div>

              <div className="bg-[#006699] text-white overflow-hidden">
                <div className="h-[150px] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=150&width=400"
                    alt="Visa information"
                    width={400}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Visa information</h3>
                  <p className="text-sm mb-4">Everything you need to know about visa requirements for Dubai.</p>
                  <Link href="#" className="text-sm underline">
                    Read more
                  </Link>
                </div>
              </div>

              <div className="bg-[#006699] text-white overflow-hidden">
                <div className="h-[150px] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=150&width=400"
                    alt="Languages spoken in Dubai"
                    width={400}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Languages spoken in Dubai</h3>
                  <p className="text-sm mb-4">Discover the diverse languages spoken in this cosmopolitan city.</p>
                  <Link href="#" className="text-sm underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Section */}
          <div className="my-12 border-t pt-8">
            <h2 className="text-xl font-semibold mb-6">Weather in Dubai</h2>
            <div className="flex items-center">
              <div className="text-5xl font-bold mr-4">33°</div>
              <Sun className="h-8 w-8 text-yellow-500 mr-4" />
              <div>Sunny</div>
            </div>
            <div className="grid grid-cols-7 gap-4 mt-6">
              <div className="text-center">
                <div className="text-sm font-medium">Today</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">33°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Mon</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">34°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Tue</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">35°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Wed</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">34°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Thu</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">33°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Fri</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">32°</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">Sat</div>
                <Sun className="h-6 w-6 text-yellow-500 mx-auto my-2" />
                <div className="text-sm">33°</div>
              </div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="my-12 border-t border-b py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-semibold mb-2">Stay updated</h3>
                <p className="text-sm mb-4">Get the latest Dubai news and events on our mobile app</p>
              </div>
              <div className="flex space-x-4">
                <img src="/placeholder.svg?height=40&width=120" alt="App Store" width={120} height={40} />
                <img src="/placeholder.svg?height=40&width=120" alt="Google Play" width={120} height={40} />
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}
