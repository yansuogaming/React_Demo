import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Search,
  Layers,
  Clock,
  Grid,
  MapPin,
  LocationEditIcon,
  ArrowRight,
  Video,
  Star,
  Info,
  Navigation,
  Play,
} from "lucide-react";

import Map, { Marker } from "react-map-gl/mapbox";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { useLoaderData } from "react-router";
import LocationIcon from "@components/icons/LocationIcon";
import { FaLocationPin } from "react-icons/fa6";
import MapService from "@services/MapService";

const accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

export default function MapHaNoi() {
  const [activeTab, setActiveTab] = useState("welcome");
  const { list_resources, list_categories } = useLoaderData() || {};
  const [selectedMarker, setSelectedMarker] = useState(list_resources[0]);
  const [listResources, setListResources] = useState(list_resources);
  const [listCategorySelected, setListCategorySelected] = useState([]);
  const [detailResource, setDetailResource] = useState({});

  const onClickCategory = (category) => {
    const check = listCategorySelected.some(
      (item) => item.property_id === category.property_id
    );

    if (check) {
      setListCategorySelected(
        listCategorySelected.filter(
          (item) => item.property_id !== category.property_id
        )
      );
    } else {
      setListCategorySelected([...listCategorySelected, category]);
    }
  };

  const getDetailResource = async (id) => {
    console.log("id", id);
    const res = await MapService.getDetailDestination(id);

    setDetailResource(res?.oneResources);
  };

  console.log("detailResource", detailResource);
  console.log("selectedMarker", selectedMarker);
  useEffect(() => {
    // if (listCategorySelected.length == 0) {
    //   setListResources(list_resources);
    //   return;
    // }
    // const tempList = list_resources.filter((item) => {
    //   const check = listCategorySelected.some(
    //     (item2) => item2.property_id === item.category_id
    //   );
    //   return check;
    // });
    // setListResources(tempList);
    console.log("setListResources", setListResources);
  }, [listCategorySelected, list_resources]);

  return (
    <div className="flex flex-col h-screen bg-[rgb(35,37,43)] text-gray-200">
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar
          selectedMarker={selectedMarker}
          listResources={listResources}
          setSelectedMarker={setSelectedMarker}
          list_resources={list_resources}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          detailResource={detailResource}
        />
        <MapView
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          list_categories={list_categories}
          destinations={listResources}
          onClickCategory={onClickCategory}
          listCategorySelected={listCategorySelected}
          getDetailResource={getDetailResource}
        />
      </div>
    </div>
  );
}

const MapView = ({
  destinations = [],
  selectedMarker,
  setSelectedMarker,
  list_categories,
  onClickCategory,
  listCategorySelected,
  getDetailResource,
}) => {
  // Tọa độ ranh giới cho Hà Nội (Tây Nam và Đông Bắc)
  const hanoiBounds = [
    [105.2, 20.5], // Góc Tây Nam: [longitude, latitude]
    [106.2, 21.4], // Góc Đông Bắc: [longitude, latitude]
  ];
  // Tọa độ và mức zoom ban đầu

  const mapRef = useRef(null);

  const initialViewState = {
    longitude: selectedMarker?.map_lo,
    latitude: selectedMarker?.map_la,
    zoom: 15,
  };

  // Theo dõi thay đổi của selectedMarker và thực hiện animation di chuyển mượt mà
  useEffect(() => {
    if (mapRef.current && selectedMarker) {
      // Sử dụng flyTo để tạo hiệu ứng di chuyển mượt mà đến vị trí mới
      mapRef.current.flyTo({
        center: [+selectedMarker.map_lo, +selectedMarker.map_la],
        zoom: 15,
        duration: 2000, // Thời gian di chuyển (ms)
        essential: true, // Đảm bảo animation luôn được thực hiện
      });
    }
    getDetailResource(selectedMarker?.potential_id);
  }, [selectedMarker]);

  const handleMarkerClick = (destination) => {
    setSelectedMarker(selectedMarker === destination ? null : destination);
  };

  return (
    <div className="flex-1 relative">
      <SearchAndFilterBar
        list_categories={list_categories}
        handleClick={onClickCategory}
        listCategorySelected={listCategorySelected}
      />
      <Map
        // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
        mapboxAccessToken={accessToken}
        initialViewState={initialViewState}
        maxBounds={hanoiBounds} // Giới hạn vùng bản đồ
        minZoom={1} // Giới hạn mức zoom tối thiểu
        maxZoom={17} // Giới hạn mức zoom tối đa
        mapStyle="mapbox://styles/aboutpro/cmaxfyayo007h01qxh4n7akqj"
        ref={mapRef}
      >
        {destinations &&
          destinations.map((destination, index) => (
            <Marker
              key={`marker-${index}`}
              longitude={+destination?.map_lo}
              latitude={+destination?.map_la}
              anchor="bottom"
              onClick={() => handleMarkerClick(destination)}
            >
              <div
                className={`cursor-pointer ${
                  selectedMarker === destination
                    ? "text-blue-500"
                    : "text-red-500"
                }`}
              >
                <MapPin size={36} />
              </div>
            </Marker>
          ))}
      </Map>
      <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white bg-opacity-70 px-2 py-1 rounded">
        © mapbox
      </div>
    </div>
  );
};

const LeftSideBar = ({
  activeTab,
  setActiveTab,
  selectedMarker,
  setSelectedMarker,
  detailResource,
  listResources,
}) => {
  const [keywords, setKeywords] = useState("");
  const [listFilter, setListFilter] = useState(listResources);

  // Hàm chuẩn hóa chuỗi tiếng Việt (loại bỏ dấu)
  const normalizeVietnameseString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  useEffect(() => {
    const tempList = listResources.filter((item) => {
      const itemNameLower = item.name.toLowerCase();
      const keywordsLower = keywords.toLowerCase();
      const normalizedItemName = normalizeVietnameseString(itemNameLower);
      const normalizedKeywords = normalizeVietnameseString(keywordsLower);

      return (
        itemNameLower.includes(keywordsLower) ||
        normalizedItemName.includes(normalizedKeywords)
      );
    });

    setListFilter(tempList);
  }, [keywords]);

  const onClickItem = (item) => {
    setSelectedMarker(item);
    setKeywords("");
  };

  return (
    <div className=" w-100 relative overflow-y-auto flex flex-col gap-4 border-r border-gray-700 bg-[rgb(35,37,43)]">
      <div className="fixed w-100 p-4 z-20 bg-[rgb(35,37,43)]">
        <div className="relative ">
          <Input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Search"
            className="text-3xl h-full rounded-md pl-3 pr-10 py-2 w-full"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full text-gray-400"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="mt-36 p-4">
        {keywords?.length > 0 && (
          <FilterList
            list_filter={listFilter}
            onClickItem={(item) => onClickItem(item)}
          />
        )}
        {selectedMarker && keywords?.length == 0 && (
          <Destination selectedMarker={selectedMarker} item={detailResource} />
        )}
      </div>
    </div>
  );
};

const FilterList = ({ list_filter, onClickItem }) => {
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
            <h3 className=" text-xl font-medium text-white text-left">
              {item?.name}
            </h3>
            <div className=" space-y-4 text-lg text-gray-400">
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

const Destination = ({ item, selectedMarker }) => {
  const [activeTab, setActiveTab] = useState("info");
  const [selectedImage, setSelectedImage] = useState();

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
          .map((_, i) => (
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
          ({item?.total_reviews || 0} đánh giá)
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col  justify-between items-start ">
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
            Không có hình ảnh
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
          Thông tin
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "nearby"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("nearby")}
        >
          Địa điểm lân cận
        </button>
        {item?.video_url && (
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "video"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("video")}
          >
            Video
          </button>
        )}
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
                    ? "Đang mở cửa"
                    : "Đã đóng cửa"}
                </p>
              </div>
            </div>
          )}

          {item?.other_information && item.other_information.length > 0 && (
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                {item.other_information.map((info, index) => (
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
                <span className="text-white">Loại hình:</span>
                <span>{item.resource_type.title}</span>
              </div>
            </div>
          )}

          {item?.resource_group && (
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white">Nhóm tài nguyên:</span>
                <span>{item.resource_group.title}</span>
              </div>
            </div>
          )}
                {item?.vr_url && (
            <Button 
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md"
              onClick={() => window.open(item?.vr_url, "_blank")}
            >
              <Play className="h-4 w-4" />
              <span>Xem VR</span>
            </Button>
          )}
        </div>
      )}

      {activeTab === "nearby" &&
        item?.list_nearbys &&
        item.list_nearbys.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {item.list_nearbys.map((place, index) => (
              <div
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
              </div>
            ))}
          </div>
        )}

      {activeTab === "video" && item?.video_url && (
        <div className="w-full rounded-md overflow-hidden aspect-video">
          <iframe
            src={item.video_url}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {item?.list_images && item.list_images.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-medium text-white mb-2">Hình ảnh</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {item.list_images.slice(0, 4).map((img, index) => (
              <button
                onClick={() => {
                  onClickImage(img.thumb);
                }}
                key={index}
                className={`h-24 overflow-hidden rounded-md bg-gray-800
                  ${
                    selectedImage === img.thumb
                      ? "border-2 border-white"
                      : ""
                  }
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

const SearchAndFilterBar = ({
  list_categories,
  handleClick,
  listCategorySelected,
}) => {
  return (
    <div className="p-4 flex gap-3 min-h-16 absolute left-0 top-0 z-20">
      {list_categories.map((item, index) => (
        <Button
          key={index}
          onClick={() => {
            handleClick(item);
          }}
          variant="outline"
          className={`
            text-gray-300 gap-2 px-2 text-lg min-h-12 flex items-center rounded-4xl 
            ${
              listCategorySelected.some(
                (item2) => item2.property_id === item.property_id
              )
                ? "bg-white text-black border-white"
                : "bg-gray-800 border-gray-700"
            }
          `}
        >
          {item.icon}
          {item.title}
        </Button>
      ))}
    </div>
  );
};

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    {
      name: "welcome",
      icon: <MapPin className="h-4 w-4 " />,
      label: "Welcome",
    },
    {
      name: "themes",
      icon: <Layers className="h-4 w-4 " />,
      label: "Themes",
    },
    {
      name: "timeline",
      icon: <Clock className="h-4 w-4 " />,
      label: "Timeline",
    },
    {
      name: "extras",
      icon: <Grid className="h-4 w-4 " />,
      label: "Extras",
    },
  ];

  return (
    <div className="border-b border-gray-700">
      <div className="flex min-h-20 items-center justify-between">
        {tabItems.map((tab) => (
          <Button
            key={tab.name}
            variant="ghost"
            className={`flex min-h-16 flex-col gap-2 items-center text-base ${
              activeTab === tab.name
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
