import React from "react";
import Map from "react-map-gl/mapbox";
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import "mapbox-gl/dist/mapbox-gl.css";

const MapHomePlanYourTrip = () => {
    return (
        <Map
            initialViewState={{
                // Mặc định tọa độ ở Hà Nội
                longitude: 105.8542,
                latitude: 21.0285,
                zoom: 14,
            }}
            style={{ width: "100%", height: "480px" }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken="pk.eyJ1IjoiYWJvdXRwcm8iLCJhIjoiY21haHA3d3l2MGYwMjJxb2NmZXlxcWVvbiJ9.xtp-_3wXToNd9zTXG15GBw"
        />
    );
};

export default MapHomePlanYourTrip;
