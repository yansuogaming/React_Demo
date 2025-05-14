

import { MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router"

export default function PracticalInformation() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gray-200 h-[300px] relative">
          <img
            src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg"
            alt="Noi Bai International Airport Terminal"
            width={1200}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 p-8">
            <h1 className="text-3xl font-bold text-gray-800">Practical information</h1>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold mb-2">Quick tips</h2>
            <p className="text-gray-600 mb-6">Follow these essentials</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold text-sm text-gray-500">ESSENTIALS</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>Currency</li>
                    <li>Timezone</li>
                    <li>Wi-Fi Access</li>
                    <li>Embassies & consulates</li>
                    <li>Emergency numbers</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm">
                  <span className="font-semibold">Viet Nam's official language is Arabic</span>, but English is widely
                  spoken across the city.
                </p>
                <p className="text-sm">
                  <span className="font-semibold">The local currency is the UAE dirham (AED)</span>, which is pegged to
                  the US dollar at a rate of approximately AED 3.67 to 1 USD.
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Viet Nam is 4 hours ahead of GMT</span>, and there is no daylight saving
                  time.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <img
              src="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg"
              alt="Tan Son Nhat International Airport"
              width={300}
              height={200}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Frequently asked questions</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium">
              Where can I apply for a visa to Viet Nam?
            </AccordionTrigger>
            <AccordionContent>Information about visa application process would appear here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">What is a visa on arrival?</AccordionTrigger>
            <AccordionContent>
              Details about visa on arrival eligibility and process would appear here.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">
              What is the official language in Viet Nam?
            </AccordionTrigger>
            <AccordionContent>Information about languages spoken in Viet Nam would appear here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">Can I drink alcohol in Viet Nam?</AccordionTrigger>
            <AccordionContent>Information about alcohol regulations in Viet Nam would appear here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">
              Is there anything prohibited in Viet Nam?
            </AccordionTrigger>
            <AccordionContent>
              Information about prohibited items and activities in Viet Nam would appear here.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link href="#" className="text-blue-600 hover:underline text-sm mt-4 inline-block">
          Read all FAQs
        </Link>
      </section>

      {/* Fly with Emirates Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Fly with Emirates</h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Arrival airport</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select airport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dxb">Viet Nam (DXB)</SelectItem>
                  <SelectItem value="dwc">Viet Nam World Central (DWC)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1 passenger" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 passenger</SelectItem>
                  <SelectItem value="2">2 passengers</SelectItem>
                  <SelectItem value="3">3 passengers</SelectItem>
                  <SelectItem value="4">4 passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Economy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Depart on</label>
              <Input type="date" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Return on</label>
              <Input type="date" className="w-full" />
            </div>
          </div>

          <Button className="mt-6 w-full md:w-auto md:float-right bg-gray-300 hover:bg-gray-400 text-gray-800">
            Search flights
          </Button>
        </div>
      </section>

      {/* What you need to know Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-1">What you need to know</h2>
        <p className="text-gray-600 mb-6">Your questions, answered</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold text-sm text-gray-500">ABOUT Viet Nam</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>Overview</li>
                    <li>Geography</li>
                    <li>Climate</li>
                    <li>Religion</li>
                    <li>Traditions</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm">
                  <span className="font-semibold">
                    Viet Nam is considered one of the most cosmopolitan cities in the world
                  </span>
                  , with a diverse population made up of people from all over the globe.
                </p>
                <p className="text-sm">
                  The city is known for its stunning architecture, luxury shopping, and vibrant nightlife. From the
                  iconic Burj Khalifa to the man-made Palm Jumeirah island, Viet Nam is a city of superlatives.
                </p>
                <p className="text-sm">
                  Viet Nam's economy was historically built on the oil industry, but today the city has diversified and
                  focuses on tourism, real estate, financial services, and trade.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="People shopping in Viet Nam Mall"
              width={300}
              height={200}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Contact us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-blue-50 p-6 rounded-lg h-[300px] relative">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg"
                  alt="Vietnam Tourism Map"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <Button variant="outline" className="absolute bottom-4 left-4 bg-white">
                <MapPin className="h-4 w-4 mr-2" />
                View larger map
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Department of Tourism and Commerce Marketing (DTCM)</h3>
            <p className="text-sm text-gray-600 mb-4">One Central, The Offices 2, Building 2, Level 5, Viet Nam, UAE</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm">Timings</h4>
                <p className="text-sm">Sunday - Thursday: 7:30 AM - 2:30 PM</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Phone</h4>
                <p className="text-sm">+971 600 55 5559</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Email</h4>
                <p className="text-sm">info@Viet Namtourism.ae</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">WhatsApp Chat (24/7 - 8000)</h4>
                <p className="text-sm">+971 600 55 5559</p>
              </div>

              <div>
                <h4 className="font-medium text-sm">Talk to a real human</h4>
                <Button variant="outline" size="sm" className="mt-1">
                  Chat with us now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Planning Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-1">Start planning</h2>
        <p className="text-gray-600 mb-6">
          Find all kinds of essential information – from basic visitor info to tips on how to make the most of your
          trip.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2873686/pexels-photo-2873686.jpeg"
                alt="View from airplane window over Vietnam"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Visa information</h3>
            <p className="text-sm text-gray-600">Find out if you need a visa to visit Viet Nam and how to apply</p>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg"
                alt="Da Nang International Airport"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Transportation in Viet Nam</h3>
            <p className="text-sm text-gray-600">Find the best ways to get around the city</p>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2582757/pexels-photo-2582757.jpeg"
                alt="Luxury Beach Resort in Phu Quoc"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Accommodation</h3>
            <p className="text-sm text-gray-600">Find the perfect place to stay during your visit</p>
          </div>

          {/* Card 4 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
                alt="Ho Chi Minh City Metro"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Travel accessibility</h3>
            <p className="text-sm text-gray-600">Information for travelers with special needs</p>
          </div>

          {/* Card 5 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg"
                alt="Luxury Hotel in Ha Long Bay"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Viet Nam sightseeing & attractions</h3>
            <p className="text-sm text-gray-600">Discover the best places to visit in the city</p>
          </div>

          {/* Card 6 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg"
                alt="Vietnam Airlines Airplane"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Book your flight to Viet Nam</h3>
            <p className="text-sm text-gray-600">Find the best deals on flights to Viet Nam</p>
          </div>

          {/* Card 7 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2582817/pexels-photo-2582817.jpeg"
                alt="Family Enjoying Beach in Nha Trang"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Safety in Viet Nam</h3>
            <p className="text-sm text-gray-600">Learn about safety measures and emergency services</p>
          </div>

          {/* Card 8 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2265882/pexels-photo-2265882.jpeg"
                alt="Sunny Weather in Vietnam"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Weather in Viet Nam</h3>
            <p className="text-sm text-gray-600">Check the forecast and plan your trip accordingly</p>
          </div>

          {/* Card 9 */}
          <div className="group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.pexels.com/photos/2265879/pexels-photo-2265879.jpeg"
                alt="Vietnam Travel Guide and Currency"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold mb-1">Viet Nam Currency Guide</h3>
            <p className="text-sm text-gray-600">Everything you need to know about money in Viet Nam</p>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Weather in Viet Nam</h2>

        <div className="flex items-center mb-6">
          <div className="text-5xl font-bold mr-4">39.2°</div>
          <div className="flex items-center">
            <div className="text-yellow-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
            <div>Sunny</div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs font-medium text-gray-500">{day}</div>
              <div className="text-yellow-500 my-1 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <div className="text-sm font-medium">{38 + Math.floor(Math.random() * 4)}°</div>
            </div>
          ))}
        </div>

        <Link href="#" className="text-blue-600 hover:underline text-sm">
          Learn more
        </Link>
      </section>

      {/* Stay Updated Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Stay updated</h2>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="text-sm text-gray-600 md:w-1/3">
            Sign up to our newsletter to get the latest updates and offers
          </div>

          <div className="flex w-full md:w-2/3 gap-2">
            <Input type="email" placeholder="Your email address" className="flex-1" />
            <Button variant="outline" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Download our apps</h2>

          <div className="flex gap-4">
            <Link href="#">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Download on App Store"
                width={120}
                height={40}
                className="h-10"
              />
            </Link>
            <Link href="#">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-10"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
