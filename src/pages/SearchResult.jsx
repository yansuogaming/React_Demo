import { Search, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import file from "@images/file.svg";
import { useState } from "react";

export default function SearchResults() {
  const [selectedFilter, setSelectedFilter] = useState("Experiences");

  const filters = [
    "All",
    "Restaurant",
    "Experience",
    "Offer",
    "Accommodation",
    "Place",
    "Route",
    "Art",
    "Event",
    "Page",
  ];
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Search Results */}
      <main className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8">Search results</h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="flex items-center bg-white rounded-md border border-gray-700">
            <Search className="ml-3 h-5 w-5 text-black" />
            <input
              type="text"
              defaultValue="passport"
              className="w-full py-3 px-3 bg-transparent text-xl text-black focus:outline-none"
              placeholder="Search..."
            />
            <button className="mr-3">
              <X className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`${
                selectedFilter === filter
                  ? "bg-[#2a1a1e] text-white"
                  : "bg-white text-black"
              } text-lg px-3 py-1.5 rounded-full flex items-center hover:bg-[#2a1a1e] hover:text-white transition-colors`}
            >
              {filter}
            </button>
          ))}
          <div className="ml-auto">
            <div className="bg-white text-black text-lg px-3 py-1.5 rounded-full flex items-center  hover:text-white transition-colors">
              10 results
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div
          className=" w-[100vw] relative left-1/2 translate-x-[-50%]
        "
        >
          {/* Result 1 */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex hover:bg-gray-200  duration-300
                group hover:cursor-pointer"
            >
              <div className="container group-hover:translate-x-20 duration-300
               gap-4 py-6 border-t border-gray-400 flex flex-col md:flex-row">
                <div className="flex-1">
                  <h2
                    className="text-xl font-semibold mb-2
                 group-hover:text-blue-700
                "
                  >
                    Passports and Jobs
                  </h2>
                  <div className="flex items-center text-xs text-black mb-1">
                    <img src={file} alt="File" className="h-5 w-5 mr-2" />
                    <span className="mr-2 text-base">Passports and Jobs</span>
                  </div>
                  <p className="text-lg text-black mb-2">
                    The Swiss Passport has different categories, valid entry for
                    jobs.
                  </p>
                </div>
                <div className="w-full md:w-64 h-36 relative overflow-hidden rounded-2xl">
                  <img
                    src="https://vietnamtravel.com/images/2020/09/halong-vietnam-overview-1.jpg"
                    alt="Swiss passport"
                    fill
                    className="object-cover  group-hover:scale-130 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}

             {/* Result 1 */}
             {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="flex hover:bg-gray-200   group hover:cursor-pointer"
            >
              <div className="container gap-4 py-6 border-t border-gray-400 flex flex-col md:flex-row">
                <div className="flex-1">
                  <h2
                    className="text-xl font-semibold mb-2
                 group-hover:text-blue-500
                "
                  >
                    Passports and Jobs
                  </h2>
                  <div className="flex items-center text-xs text-black mb-1">
                    <img src={file} alt="File" className="h-5 w-5 mr-2" />
                    <span className="mr-2 text-base">Passports and Jobs</span>
                  </div>
                  <p className="text-lg text-black mb-2">
                    The Swiss Passport has different categories, valid entry for
                    jobs.
                  </p>
                </div>
                <div className="w-full md:w-64 h-36 relative overflow-hidden rounded-2xl">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"
                    alt="Swiss passport"
                    fill
                    className="object-cover  group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center text-black bg-transparent border border-gray-700 rounded-md px-6 py-2 hover:bg-gray-800">
              Load More <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Search Modal (Mobile) */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto w-11/12 max-w-lg md:hidden">
        <div className="bg-white rounded-full border border-gray-700 flex items-center">
          <Search className="ml-4 h-5 w-5 text-black" />
          <input
            type="text"
            className="w-full py-3 px-3 bg-transparent text-black focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
