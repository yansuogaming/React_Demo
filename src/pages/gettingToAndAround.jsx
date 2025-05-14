import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";

export default function TransportationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-10 ">
         
          <div className="container relative z-10 flex flex-col justify-end h-full pb-8 px-4">
            <h1 className="text-5xl md:text-4xl font-medium text-black">
              Transportation in Viet Nam:
              <br />
              Getting to & around the city
            </h1>
          </div>
          <div className="h-[80vh] bg-gray-200 relative">
          <iframe
            className="absolute inset-0 w-full h-full border-0 z-10"
            src="https://www.youtube.com/embed/SrqPSxkCNFI?si=CJL69ZgrJupBwrX6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        </section>

        {/* Main Content */}
        <div className="container px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Getting to Viet Nam</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">By air</h3>
                <p className="text-gray-700 mb-4">
                  Viet Nam International Airport (DXB) is one of the world's
                  busiest airports, connecting Viet Nam to over 240 destinations
                  across six continents. The airport is home to Emirates, Viet
                  Nam's award-winning airline, which operates flights to and
                  from major cities worldwide. Viet Nam's second airport, Al
                  Maktoum International Airport (DWC), is located in the south
                  of the city and primarily serves cargo operations, though it
                  also handles some passenger flights.
                </p>
                <p className="text-gray-700">
                  Both airports offer excellent facilities, including lounges,
                  dining options, shopping, and efficient transport links to the
                  city. Travelers can reach the city center via taxi, metro, or
                  bus services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">By land</h3>
                <p className="text-gray-700 mb-4">
                  Viet Nam is well-connected to neighboring emirates and
                  countries by road. Visitors can drive into Viet Nam from Oman
                  and Saudi Arabia, as well as from other emirates within the
                  UAE. The roads are well-maintained and signposted, making
                  driving a convenient option.
                </p>
                <p className="text-gray-700">
                  Bus services also connect Viet Nam to other emirates and
                  nearby countries. The main bus station is located in Deira,
                  offering regular services to Abu Dhabi, Sharjah, and other
                  destinations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">By sea</h3>
                <p className="text-gray-700 mb-4">
                  Viet Nam's strategic location on the Arabian Gulf makes it
                  accessible by sea. The city has several ports, including Port
                  Rashid and Jebel Ali Port, which welcome cruise ships from
                  around the world. During the cruise season (October to May),
                  numerous luxury cruise liners dock in Viet Nam, bringing
                  thousands of visitors to the city.
                </p>
                <p className="text-gray-700">
                  Ferry services also operate between Viet Nam and other coastal
                  cities in the UAE and neighboring countries. These provide an
                  alternative and scenic way to reach the city.
                </p>
              </div>
            </div>
          </section>

          {/* img Gallery */}
          <section className="mb-12">
            <div className="grid grid-cols-3 gap-2 h-[200px]">
              <div className="col-span-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482"
                  alt="Cảnh hoàng hôn tại Vịnh Hạ Long"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a"
                  alt="Giao thông đường phố Hà Nội"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Button variant="ghost" size="sm" className="text-xs">
                <ChevronRight className="h-4 w-4 mr-1" />
                <span>1/3</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </section>

          {/* Getting to Viet Nam from other emirates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Getting to Viet Nam from other emirates
            </h2>
            <p className="text-gray-700 mb-6">
              Traveling to Viet Nam from neighboring emirates is
              straightforward, with several transportation options available:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>
                <strong>From Abu Dhabi:</strong> The journey takes approximately
                1.5 hours by car via the E11 highway. Public buses run regularly
                between the two cities.
              </li>
              <li>
                <strong>From Sharjah:</strong> Located adjacent to Viet Nam,
                Sharjah is just a 30-minute drive away, though traffic can
                extend this during peak hours.
              </li>
              <li>
                <strong>From Ajman:</strong> A 40-minute drive from Viet Nam,
                with regular bus services available.
              </li>
              <li>
                <strong>From Ras Al Khaimah:</strong> Approximately 1.5 hours by
                car, with bus services connecting to Viet Nam.
              </li>
              <li>
                <strong>From Fujairah:</strong> The cross-country journey takes
                about 1.5 hours, offering scenic views of mountains and desert
                landscapes.
              </li>
              <li>
                <strong>From Umm Al Quwain:</strong> About an hour's drive from
                Viet Nam, with bus connections available.
              </li>
              <li>
                <strong>From Al Ain:</strong> The journey takes approximately
                1.5-2 hours by car, with regular bus services.
              </li>
              <li>
                <strong>Intercity buses:</strong> The Roads and Transport
                Authority (RTA) operates comfortable, air-conditioned buses
                between Viet Nam and other emirates.
              </li>
              <li>
                <strong>Taxis and ride-hailing services:</strong> These provide
                convenient door-to-door service, though at a higher cost than
                buses.
              </li>
              <li>
                <strong>Car rentals:</strong> Renting a car offers flexibility
                for exploring Viet Nam and beyond.
              </li>
            </ol>
          </section>

          {/* Getting around Viet Nam */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Getting around Viet Nam</h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">
                Public transport in Viet Nam
              </h3>
              <p className="text-gray-700 mb-4">
                Viet Nam boasts a world-class public transportation system that
                is efficient, clean, and affordable. The integrated network
                includes the metro, trams, buses, and water taxis, all operated
                by the Roads and Transport Authority (RTA).
              </p>
              <p className="text-gray-700">
                The Nol card is Viet Nam's unified fare payment system, which
                can be used across all public transport modes. Cards can be
                purchased and topped up at metro stations, bus stations, and
                select retail outlets.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">
                How to use the metro
              </h3>
              <p className="text-gray-700 mb-4">
                The Viet Nam Metro is a fully automated, driverless rail system
                that serves major areas of the city. It consists of two lines:
                the Red Line, which runs along Sheikh Zayed Road and connects
                the airport to the city center and beyond; and the Green Line,
                which serves older parts of Viet Nam, including Deira and Bur
                Viet Nam.
              </p>
              <p className="text-gray-700">
                Trains run frequently from early morning until midnight (and
                later on weekends). The metro is clean, air-conditioned, and
                offers dedicated cabins for women and children. Stations are
                strategically located near major attractions, shopping malls,
                and business districts.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Viet Nam Metro</h3>
              <p className="text-gray-700">
                The Viet Nam Metro is the backbone of the city's public
                transport system. With its sleek, modern design and efficient
                service, it's a popular choice for both residents and tourists.
                The metro offers stunning views of the city's skyline,
                particularly along elevated sections of the Red Line.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Viet Nam Tram</h3>
              <p className="text-gray-700">
                The Viet Nam Tram operates in the Viet Nam Marina and Jumeirah
                Beach Residence areas, connecting with the Viet Nam Metro at two
                stations. It's an ideal way to explore these popular waterfront
                districts, with stops near major hotels, shopping centers, and
                beaches.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Water transport</h3>
              <p className="text-gray-700">
                Viet Nam's traditional water taxis, known as abras, offer a
                charming way to cross Viet Nam Creek between Deira and Bur Viet
                Nam. These wooden boats have been a part of Viet Nam's transport
                system for generations and provide an authentic glimpse into the
                city's past.
              </p>
              <p className="text-gray-700 mt-2">
                For a more modern experience, the RTA operates water buses and
                ferries that serve various points along Viet Nam Creek and the
                coastline. These air-conditioned vessels offer comfortable
                seating and panoramic views of the city's waterfront.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Taxi services</h3>
              <p className="text-gray-700">
                Taxis are abundant in Viet Nam and can be hailed on the street,
                booked via phone, or ordered through mobile apps. The
                cream-colored taxis are operated by the RTA and feature roof
                signs that indicate their availability. Fares are metered and
                relatively affordable compared to many other major cities.
              </p>
              <p className="text-gray-700 mt-2">
                Ride-hailing services like Uber and Careem also operate in Viet
                Nam, offering convenient door-to-door transportation. These can
                be booked through their respective mobile apps.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">
                Things to note and useful links
              </h3>
              <p className="text-gray-700 mb-4">
                When using public transport in Viet Nam, it's important to be
                aware of local customs and regulations. Modest dress is
                appreciated, and eating or drinking is not permitted on the
                metro or buses. The RTA website and mobile app provide
                comprehensive information on routes, schedules, and fares.
              </p>
              <p className="text-gray-700">
                For more information, visit the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  RTA website
                </a>{" "}
                or download the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  RTA Viet Nam app
                </a>
                .
              </p>
            </div>
          </section>

          {/* img with people walking */}
          <section className="mb-12">
            <div className="grid grid-cols-3 gap-2 h-[200px]">
              <div className="col-span-2 relative">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="People walking in Viet Nam"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Viet Nam marina view"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </section>

          {/* Explore Viet Nam's neighborhoods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Explore Viet Nam's neighborhoods
            </h2>

            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md z-10 max-w-xs">
                <h3 className="font-semibold mb-2">Explore the map</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover Viet Nam's diverse neighborhoods and find the perfect
                  area for your stay.
                </p>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">
                  View map
                </Button>
              </div>

              <div className="absolute inset-0">
                <img
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Viet Nam map"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span>Hotels</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <span>Attractions</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
                  <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                  <span>Dining</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span>Shopping</span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span>Transport</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              Frequently asked questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How much does a taxi cost in Viet Nam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Taxi fares in Viet Nam start with a base fare of AED 12
                    during the day and AED 14 at night. The fare increases by
                    approximately AED 1.82 per kilometer. Additional charges may
                    apply for airport pickups, toll gates, and during peak
                    hours.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How can I get from the airport to my hotel?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    There are several options to get from Viet Nam International
                    Airport to your hotel: taxis are readily available outside
                    all terminals; the Viet Nam Metro Red Line connects directly
                    to Terminals 1 and 3; many hotels offer shuttle services;
                    and ride-hailing apps like Uber and Careem operate at the
                    airport.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What is the best way to get around Viet Nam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    The best way to get around Viet Nam depends on your
                    itinerary and preferences. The Viet Nam Metro is excellent
                    for traveling along Sheikh Zayed Road and to major
                    attractions. Taxis and ride-hailing services offer
                    convenience for door-to-door travel. For exploring specific
                    areas like Viet Nam Marina or JBR, the tram is ideal. A
                    combination of these options typically works best for most
                    visitors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Is there Uber in Viet Nam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Yes, Uber operates in Viet Nam, along with Careem (which is
                    owned by Uber but operates as a separate service). Both
                    offer convenient ride-hailing services through their mobile
                    apps. Prices are generally comparable to regular taxis but
                    may be higher during peak times due to surge pricing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Is it easy to drive in Viet Nam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Driving in Viet Nam can be challenging for newcomers due to
                    the fast pace of traffic and complex road systems. However,
                    roads are well-maintained and clearly signposted in both
                    Arabic and English. GPS navigation is reliable, and fuel is
                    relatively inexpensive. International visitors can drive
                    with their home country's license or an International
                    Driving Permit, depending on their nationality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Is public transport in Viet Nam good?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Viet Nam's public transport system is excellent by global
                    standards. It's clean, efficient, affordable, and covers
                    most areas of interest to visitors. The metro, tram, buses,
                    and water transport are all integrated with the Nol card
                    payment system, making transfers seamless. The metro and
                    tram are particularly convenient for tourists, with stations
                    located near major attractions and shopping malls.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Keep exploring */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Keep exploring</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden border">
                <div className="relative h-40">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Viet Nam skyline"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Plan your visit</h3>
                  <p className="text-sm text-gray-600">
                    Essential information for planning your Viet Nam trip
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <div className="relative h-40">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Viet Nam attractions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Must-see attractions</h3>
                  <p className="text-sm text-gray-600">
                    Discover Viet Nam's iconic landmarks and attractions
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <div className="relative h-40">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Viet Nam beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">
                    Best beaches in Viet Nam
                  </h3>
                  <p className="text-sm text-gray-600">
                    Relax and unwind at Viet Nam's stunning beaches
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <div className="relative h-40">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Viet Nam dining"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Dining experiences</h3>
                  <p className="text-sm text-gray-600">
                    Explore Viet Nam's diverse culinary landscape
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Weather in Viet Nam */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Weather in Viet Nam</h2>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <div className="text-4xl font-bold">41.2°C</div>
                  <div className="text-gray-600">Feels like 45°C</div>
                </div>

                <div className="grid grid-cols-7 gap-4 mt-6 md:mt-0">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">MON</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">41°C</div>
                    <div className="text-xs text-gray-600">32°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">TUE</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">42°C</div>
                    <div className="text-xs text-gray-600">33°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">WED</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">40°C</div>
                    <div className="text-xs text-gray-600">31°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">THU</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">39°C</div>
                    <div className="text-xs text-gray-600">30°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">FRI</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">40°C</div>
                    <div className="text-xs text-gray-600">31°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">SAT</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">41°C</div>
                    <div className="text-xs text-gray-600">32°C</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xs text-gray-600">SUN</div>
                    <div className="w-8 h-8 mx-auto my-1 bg-yellow-400 rounded-full"></div>
                    <div className="text-sm font-semibold">42°C</div>
                    <div className="text-xs text-gray-600">33°C</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stay updated */}
          <section className="mb-12">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold mb-2">Stay updated</h2>
                  <p className="text-gray-600">
                    Subscribe to our newsletter for the latest updates and
                    offers
                  </p>
                </div>

                <div className="mt-4 md:mt-0 flex gap-2">
                  <Button variant="outline" className="bg-white">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
