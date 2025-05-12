const EventFilterBar = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}) => (
    <>
        <div className="pb-[43px]">
            <div className="flex items-center rounded-[40px] border border-[#D9DEE2] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] px-4 h-[67px] max-w-2xl w-full mx-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M21 21L17 17M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z"
                        stroke="#007BFF"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search events, keywords..."
                    className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400 ml-2"
                />
            </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6 text-sm font-medium justify-center">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full ${
                        selectedCategory === cat
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    </>
);

export default EventFilterBar;
