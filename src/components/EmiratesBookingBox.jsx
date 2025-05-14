import React from "react";
import visaImage from "@images/visa-image.png";

const EmiratesBookingBox = () => {
    return (
        <section className="container mx-auto my-8 px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
                {/* Left image */}
                <div className="w-full lg:w-1/3">
                    <img
                        src={visaImage} // 👉 thay bằng đường dẫn ảnh thật
                        alt="Emirates Crew"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right form */}
                <div className="w-full lg:w-2/3 p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Fly with Emirates
                    </h2>

                    <form className="space-y-4">
                        {/* Row 1: Departure / Arrival */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Departure airport */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Departure airport
                                </label>
                                <select className="w-full border rounded px-4 py-2 text-sm">
                                    <option>Select airport</option>
                                </select>
                            </div>

                            {/* Arrival airport (locked) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Arrival airport
                                </label>
                                <div className="flex items-center border rounded px-4 py-2 text-sm bg-gray-100">
                                    <span className="flex-grow">
                                        Dubai (DXB)
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v-3m0-4h.01M5.5 20h13a2 2 0 002-2v-9a2 2 0 00-2-2H5.5a2 2 0 00-2 2v9a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Dates + Passengers */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Select date
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="date"
                                        className="w-1/2 border rounded px-4 py-2 text-sm"
                                    />
                                    <input
                                        type="date"
                                        className="w-1/2 border rounded px-4 py-2 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Passengers */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Passenger(s)
                                </label>
                                <select className="w-full border rounded px-4 py-2 text-sm">
                                    <option>1 Passenger(s)</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3: Class + Button */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Class
                                </label>
                                <select className="w-full border rounded px-4 py-2 text-sm">
                                    <option>Economy Class</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
                            >
                                Search flights
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmiratesBookingBox;
