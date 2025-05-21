import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useLoaderData } from "react-router";




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
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar />
        <MapView />
      </div>
    </div>
  );
}