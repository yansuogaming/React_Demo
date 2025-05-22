import { useState, useEffect } from "react";
import { MapPin, Clock, Info, Star, Navigation, Play } from "lucide-react";
import { Button } from "@components/ui/button";
import { useMapContext } from "@contexts/MapContext";
import { useTranslation } from "react-i18next";

const Destination = () => {
  const { t } = useTranslation();
  const {
    detailResource,
    selectedMarker,
    setShowVR,
    setShowVideo,
    handleClickNearbyItem,
  } = useMapContext();
  const [activeTab, setActiveTab] = useState("info");
  const [selectedImage, setSelectedImage] = useState();
  const item = detailResource; // For readability

  console.log("detailResource", detailResource);
  useEffect(() => {
    if (item?.list_images?.length > 0) {
      setSelectedImage(item?.list_images?.[0]?.thumb);
    }
  }, [item]);

  const formatOpeningHours = () => {
    if (item?.start_time && item?.close_time) {
      return `${item.start_time} - ${item.close_time}`;
    }
    return null;
  };

  const onClickImage = (image) => {
    setSelectedImage(image);
  };

  const renderRatingStars = () => {
    const rating = parseFloat(item?.scores_avg) || 0;
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
          ({item?.total_reviews || 0} {t("reviews")})
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-between items-start">
        <h3 className="text-2xl text-left font-medium text-white">
          {item?.name}
        </h3>
        {item?.scores_avg && renderRatingStars()}
      </div>

      <div className="relative h-64 w-full overflow-hidden rounded-md bg-gray-800">
        {selectedImage ? (
          <img
            loading="lazy"
            src={selectedImage}
            className="h-full w-full object-cover"
            alt={selectedMarker?.name}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            {t("no_images")}
          </div>
        )}
      </div>

      <div className="flex space-x-2 border-b border-gray-700">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "info"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("info")}
        >
          {t("information")}
        </button>
        {item?.content && (
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "content"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("content")}
          >
            {t("details")}
          </button>
        )}
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "nearby"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("nearby")}
        >
          {t("nearby_places")}
        </button>
      </div>

      {activeTab === "info" && (
        <div className="space-y-4 text-lg text-gray-400">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
            <span>{item?.address}</span>
          </div>

          {formatOpeningHours() && (
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <span>{formatOpeningHours()}</span>
                <p className="text-sm text-green-500">
                  {item?.today_status !== "_closed"
                    ? t("open_now")
                    : t("closed")}
                </p>
              </div>
            </div>
          )}

          {item?.other_information && item.other_information.length > 0 && (
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                {item.other_information?.map((info, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-white">{info.label}:</span>
                    <span>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item?.resource_type && (
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white">{t("type")}:</span>
                <span>{item.resource_type.title}</span>
              </div>
            </div>
          )}

          {item?.resource_group && (
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white">{t("resource_group")}:</span>
                <span>{item.resource_group.title}</span>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            {item?.vr_url && (
              <Button
                className="flex items-center border-2 border-white justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[rgb(35,37,43)] rounded-md"
                onClick={() => {
                  setShowVideo(false);
                  setShowVR(true);
                }}
              >
                <Play className="h-4 w-4" />
                <span>{t("view_vr")}</span>
              </Button>
            )}
            {item?.video_url && (
              <Button
                className="flex border-2 items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[rgb(35,37,43)] rounded-md"
                onClick={() => {
                  setShowVR(false);
                  setShowVideo(true);
                }}
              >
                <Play className="h-4 w-4" />
                <span>{t("view_video")}</span>
              </Button>
            )}
          </div>
        </div>
      )}

      {activeTab === "nearby" &&
        item?.list_nearbys &&
        item.list_nearbys.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {item.list_nearbys?.map((place, index) => (
              <button
                onClick={() => {
                  handleClickNearbyItem(place);
                }}
                key={index}
                className="flex gap-3 p-3 rounded-md bg-gray-800"
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={place.thumb}
                    alt={place.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white font-medium">{place.name}</h4>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{place.scores_avg}</span>
                    <span className="text-gray-400">
                      ({place.total_reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Navigation className="h-3 w-3" />
                    <span>{place.distance} km</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

      {activeTab === "content" && item?.content && (
        <div
          className="prose prose-invert max-w-none text-gray-400"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      )}

      {item?.list_images && item.list_images.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-medium text-white mb-2">{t("images")}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {item.list_images.slice(0, 4)?.map((img, index) => (
              <button
                onClick={() => {
                  onClickImage(img.thumb);
                }}
                key={index}
                className={`h-24 overflow-hidden rounded-md bg-gray-800
                  ${selectedImage === img.thumb ? "border-2 border-white" : ""}
                  `}
              >
                <img
                  src={img.thumb}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
