import { Button } from "@components/ui/button";
import { useMapContext } from "@contexts/MapContext";

const SearchAndFilterBar = () => {
    const { list_categories, onClickCategory, categorySelected } =
        useMapContext();

    return (
        <div className="p-4 flex flex-wrap gap-3 min-h-16 absolute left-0 top-0 z-20">
            {list_categories?.map((item, index) => (
                <button
                    key={index}
                    onClick={() => {
                        onClickCategory(item);
                    }}
                    variant="outline"
                    className={`
            text-gray-300 gap-2 px-4 text-lg min-h-12 flex items-center rounded-4xl hover:cursor-pointer 
            ${
                categorySelected?.property_id === item.property_id
                    ? "bg-white text-gray-900 border-white"
                    : "bg-gray-800 border-gray-700"
            }
          `}
                >
                    {item.icon}
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default SearchAndFilterBar;
