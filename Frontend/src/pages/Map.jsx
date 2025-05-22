import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useLoaderData } from "react-router";
import imgLogo from "@images/logo.webp";



import { MapProvider, useMapContext } from "@contexts/MapContext";
import LeftSideBar from "@components/map/LeftSideBar";
import MapView from "@components/map/MapView";



export default function MapHaNoi() {
  const loaderData = useLoaderData() || {};

  return (
    <MapProvider initialData={loaderData}>
      <MapHaNoiContent />
    </MapProvider>
  );
}

function MapHaNoiContent() {
  const { selectedMarker, getDetailResource } = useMapContext();

  // Get detail for selected marker when it changes
  useEffect(() => {
    if (selectedMarker?.potential_id) {
      getDetailResource(selectedMarker.potential_id);
    }
  }, [selectedMarker]);

  return (
    <div className="flex flex-col h-screen bg-[rgb(35,37,43)] text-gray-200">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-left gap-6 p-4 bg-[rgb(35,37,43)]">
          <img
            src={imgLogo}
            alt="Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-2xl font-medium text-white">
            Map Hà Nội
          </h1>
        </header>
      <div className="flex flex-1 overflow-hidden">
    
        <LeftSideBar />
        <MapView />
      </div>
    </div>
  );
}