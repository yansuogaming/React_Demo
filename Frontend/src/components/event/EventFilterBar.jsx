import { FaSearch } from "react-icons/fa";

const EventFilterBar = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    changeKeyword,
    keyword,
}) => (
    <>
        <div className="pb-[43px]">
            <div className="flex items-center rounded-[40px] border border-[#D9DEE2] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] pl-[18px] h-[67px] max-w-2xl w-full mx-auto gap-[8px]">
                <FaSearch className="text-[#007BFF] text-[24px]" />
                <input
                    type="text"
                    placeholder="Search events, keywords..."
                    className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400 ml-2"
                    onChange={(e) => changeKeyword(e.target.value)}
                    value={keyword}
                />
            </div>
        </div>

        <div className="flex flex-wrap gap-[30px] mb-[43px] text-sm font-medium justify-center">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[16px] font-[700] transition-all ${
                        selectedCategory === cat
                            ? "border-b-2 border-[#007BFF] text-[#007BFF]"
                            : "text-[#898EA1] hover:text-blue-600"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    </>
);

export default EventFilterBar;
