import { MapPin } from "lucide-react";
import { useMapContext } from "@contexts/MapContext";

const FilterList = ({ list_filter }) => {
  const { onClickItem } = useMapContext();

  return (
    <div className="flex flex-col gap-4">
      {list_filter.map((item, index) => (
        <button
          onClick={() => onClickItem(item)}
          key={index}
          className="flex items-start gap-4 cursor-pointer hover:text-blue-400"
        >
          <img
            loading="lazy"
            src={item?.image}
            className="relative h-16 w-16 rounded-[100px] overflow-hidden bg-gray-800"
          />
          <div className="flex-1 flex flex-col items-start">
            <h3 className="text-xl font-medium text-white text-left">
              {item?.name}
            </h3>
            <div className="space-y-4 text-lg text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin />
                <span className="text-left">{item?.address}</span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default FilterList;