import React, { useEffect, useRef, useState } from "react";
import iconFullscreen from "@images/icon-fullscreen.svg";
import { Marker, Map } from "react-map-gl/mapbox";
import { MapPin, MapPinIcon } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link, useNavigate } from "react-router";
import location from "@images/location.svg";

const accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

function MapCity({ listDestination }) {
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const defaultDestination = listDestination[0];
  const [selectedMarker, setSelectedMarker] = useState(defaultDestination);
  const [bounds, setBounds] = useState([
    [90, 10],
    [130, 40],
  ]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const isMobileOrTablet = window.innerWidth < 1024;
  const [showHoverItem, setShowHoverItem] = useState(false);

  // Tọa độ ranh giới cho Hà Nội (Tây Nam và Đông Bắc)
  const hanoiBounds = [
    [105.2, 20.5], // Góc Tây Nam: [longitude, latitude]
    [106.2, 21.4], // Góc Đông Bắc: [longitude, latitude]
  ];

  const initialViewState = {
    longitude: +defaultDestination?.map_lo,
    latitude: +defaultDestination?.map_la,
    zoom: 1,
    animate: true,
    transitionDuration: 2000,
  };

  useEffect(() => {
    const checkMapRef = () => {
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.flyTo({
            center: [+defaultDestination.map_lo, +defaultDestination.map_la],
            zoom: 10,
            duration: 8000, // Thời gian di chuyển (ms)
            essential: true, // Đảm bảo animation luôn được thực hiện
          });

          return;
        } else {
          checkMapRef();
        }
      }, 500);
    };
    setTimeout(() => {
      setBounds(hanoiBounds);
    }, 10000);
    checkMapRef();
  }, []);

  useEffect(() => {
    if (mapRef.current && selectedMarker) {
      // Sử dụng flyTo để tạo hiệu ứng di chuyển mượt mà đến vị trí mới
      mapRef.current.flyTo({
        center: [+selectedMarker.map_lo, +selectedMarker.map_la],
        zoom: 12,
        duration: 2000, // Thời gian di chuyển (ms)
        essential: true, // Đảm bảo animation luôn được thực hiện
      });
    }
  }, [selectedMarker]);

  const handleMarkerClick = (destination) => {
    setSelectedMarker(destination);
    if (isMobileOrTablet) {
      setHoveredMarker(destination);
      setShowHoverItem(true);
    } else {
      navigate(`/map-ha-noi/${destination.potential_id}`);
    }
  };

  const handleCloseHoverItem = () => {
    if (isMobileOrTablet) {
      setShowHoverItem(false);
      setHoveredMarker(null);
    }
  };

  const handleMarkerHover = (destination, event) => {
    if (!isMobileOrTablet) {
      setHoveredMarker(destination);
      // Lấy vị trí của marker để định vị HoverItem
      const rect = event.currentTarget.getBoundingClientRect();
      setMarkerPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    }
  };

  console.log(
    "markerPosition",
    hoveredMarker &&
      ((isMobileOrTablet && showHoverItem) ||
        (!isMobileOrTablet && markerPosition))
  );
  return (
    <div className="lg:pt-[108px] ">
      {/* Overlay để đóng hover item khi click bên ngoài (mobile) */}
      {isMobileOrTablet && showHoverItem && (
        <div className="fixed inset-0 z-[999]" onClick={handleCloseHoverItem} />
      )}
      <div className="relative w-[100%]  h-[50vh] xl:h-[296px] xl:max-w-[400px] lg:rounded-tl-[40px] xl:overflow-hidden mx-auto lg:mx-0">
        {hoveredMarker &&
          ((isMobileOrTablet && showHoverItem) ||
            (!isMobileOrTablet && markerPosition)) && (
            <div
              style={{
                position: isMobileOrTablet ? "absolute" : "fixed",
                left: isMobileOrTablet ? "50%" : `${markerPosition?.x}px`,
                top: isMobileOrTablet ? "50%" : `${markerPosition?.y}px`,
                transform: "translate(-50%, -120%)",
                zIndex: 1000,
              }}
            >
              <HoverItem destination={hoveredMarker} navigate={navigate} />
            </div>
          )}
        <Map
          mapboxAccessToken={accessToken}
          minZoom={1} // Giới hạn mức zoom tối thiểu
          maxZoom={17} // Giới hạn mức zoom tối đa
          mapStyle="mapbox://styles/mapbox/streets-v12"
          ref={mapRef}
          initialViewState={initialViewState}
          maxBounds={bounds} // Giới hạn vùng bản đồ
        >
          {listDestination &&
            listDestination.map((destination, index) => (
              <Marker
                key={`marker-${index}`}
                longitude={+destination?.map_lo}
                latitude={+destination?.map_la}
                anchor="bottom"
                onClick={(e) => {
                  handleMarkerClick(destination, e);
                }}
              >
                <div
                  className={`cursor-pointer ${
                    selectedMarker === destination
                      ? "text-red-500"
                      : "text-blue-500"
                  } `}
                  onMouseEnter={(e) => handleMarkerHover(destination, e)}
                  onMouseLeave={() =>
                    !isMobileOrTablet && setHoveredMarker(null)
                  }
                >
                  {selectedMarker === destination ? (
                    <img
                      src={location}
                      alt="Location"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  ) : (
                    <MapPin size={36} />
                  )}
                </div>
              </Marker>
            ))}
        </Map>

        <Link
          to={"/map-ha-noi"}
          className="cursor-pointer absolute bottom-[12px] p-[10px_16px] flex gap-[10px] bg-white rounded-[20px] left-1/2 -translate-x-1/2 text-sm text-black"
        >
          View full map
          <img src={iconFullscreen} alt="Full map" />
        </Link>
      </div>
    </div>
  );
}

export default MapCity;

const HoverItem = ({ destination, navigate }) => {
  if (!destination) return null;

  return (
    <div className="w-[260px] sm:w-[300px] bg-white rounded-[12px] shadow-lg">
      <img
        loading="lazy"
        src={destination.image || ""}
        alt={destination.name}
        className="w-full h-[180px] sm:h-[200px] object-cover rounded-t-[12px]"
      />
      <div className="p-[14px_16px] bg-white rounded-[0_0_12px_12px]">
        <p className="text-[#007BFF] text-[16px] font-bold">
          {destination.name}
        </p>
        <p>{destination.type || "Attractions"}</p>
        <button
          onClick={() => navigate(`/map-ha-noi/${destination.potential_id}`)}
          className="mt-2 w-full xl:hidden bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};