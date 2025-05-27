import { Clock, MapPin, Star } from "lucide-react";
import { useMapContext } from "@contexts/MapContext";
import { useTranslation } from "react-i18next";

const renderRatingStars = (item, t) => {
    const rating = parseFloat(item?.scores_avg) || 5;

    return (
        <div className="flex items-center justify-startgap-1">
            {Array(5)
                .fill(0)
                ?.map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${
                            i < Math.floor(rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-400"
                        }`}
                    />
                ))}
            <span className="ml-1 text-white">{rating.toFixed(1)}</span>
            <span className="text-gray-400">
                ({item?.total_reviews || 5} {t("reviews")})
            </span>
        </div>
    );
};

const FilterList = ({ list_filter }) => {
    const { t } = useTranslation();
    const { onClickItem ,selectedMarker} = useMapContext();

    const formatOpeningHours = (item) => {
        if (item?.start_time && item?.close_time) {
            return `${item.start_time} - ${item.close_time}`;
        }
        return null;
    };

   
    return (
        <div className="flex flex-col">
            {list_filter.map((item, index) => (
                <button
                    onClick={() => onClickItem(item)}
                    key={index}
                    className={`flex p-4 items-start gap-4 cursor-pointer hover:text-blue-400 ${selectedMarker?.potential_id === item?.potential_id ? "bg-[#343e58]":""}`}
                >
                    <div className="flex-1 flex flex-col items-start gap-2">
                        <h3 className="text-xl font-medium text-white text-left">
                            {item?.name}
                        </h3>
                        {renderRatingStars(item, t)}
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 flex-shrink-0 text-gray-400" />
                            <div>
                                <span>{formatOpeningHours()}</span>
                                <p className="text-sm text-green-500">
                                    {item?.today_status !== "_closed"
                                        ? t("open_now")
                                        : t("closed")}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-lg text-gray-400">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 flex-shrink-0" />
                                <span className="text-left">
                                    {item?.address}
                                </span>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src={item?.image}
                        className="relative h-22 w-22 rounded-lg overflow-hidden bg-gray-800"
                    />
                </button>
            ))}
        </div>
    );
};

export default FilterList;
