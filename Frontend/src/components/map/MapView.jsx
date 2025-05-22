import { useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import { MapPin, X } from "lucide-react";

import SearchAndFilterBar from "./SearchAndFilterBar";
import { useMapContext } from "@contexts/MapContext";

const accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

const MapView = () => {
  const {
    selectedMarker,
    handleMarkerClick,
    listResources,
    showVR,
    setShowVR,
    detailResource,
    showVideo,
    setShowVideo,
  } = useMapContext();

  // Tọa độ ranh giới cho Hà Nội (Tây Nam và Đông Bắc)
  const hanoiBounds = [
    [105.2, 20.5], // Góc Tây Nam: [longitude, latitude]
    [106.2, 21.4], // Góc Đông Bắc: [longitude, latitude]
  ];

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
  }, [selectedMarker]);


  
  return (
    <div className="flex-1 relative">
      <SearchAndFilterBar />
      {showVideo && detailResource?.video_url && (
        <div className="relative w-full h-full">
          <iframe
            src={`${detailResource.video_url}?autoplay=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-black" />
          </button>
        </div>
      )}
      {showVR && detailResource?.vr_url && (
        <div className="relative w-full h-full">
          <iframe
            src={detailResource.vr_url}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={() => setShowVR(false)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-black" />
          </button>
        </div>
      )}
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={initialViewState}
        maxBounds={hanoiBounds} // Giới hạn vùng bản đồ
        minZoom={1} // Giới hạn mức zoom tối thiểu
        maxZoom={17} // Giới hạn mức zoom tối đa
        mapStyle="mapbox://styles/aboutpro/cmaxfyayo007h01qxh4n7akqj"
        ref={mapRef}
      >
        {listResources &&
          listResources.map((destination, index) => (
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

export default MapView;
