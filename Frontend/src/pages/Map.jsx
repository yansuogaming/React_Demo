import { useState } from "react";

import { Search, Layers, Clock, Grid, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import Map from "react-map-gl/mapbox";

const accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("welcome");

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800">
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MapView />
      </div>
    </div>
  );
}

const MapView = () => {
  // Tọa độ ranh giới cho Hà Nội (Tây Nam và Đông Bắc)
  const hanoiBounds = [
    [103.1, 20.8], // Góc Tây Nam: [longitude, latitude]
    [106.7, 21.6], // Góc Đông Bắc: [longitude, latitude]
  ];
  // Tọa độ và mức zoom ban đầu

  const initialViewState = {
    longitude: 105.861471, // Tọa độ trung tâm Hà Nội
    latitude: 20.995718,
    zoom: 12, // Mức zoom phù hợp cho thành phố
  };

  
  return (
    <div className="flex-1 relative">
      <SearchAndFilterBar />
      <Map
        // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
        mapboxAccessToken={accessToken}
        initialViewState={initialViewState}
        maxBounds={hanoiBounds} // Giới hạn vùng bản đồ
        minZoom={10} // Giới hạn mức zoom tối thiểu
        maxZoom={15} // Giới hạn mức zoom tối đa
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
      <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white bg-opacity-70 px-2 py-1 rounded">
        © mapbox
      </div>
    </div>
  );
};

const LeftSideBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-[400px] p-4 overflow-y-auto flex flex-col gap-4 border-r border-gray-200">
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="relative">
        <Input
          type="text"
          placeholder="Search"
          style={{ fontSize: "1.5em" }}
          className="bg-transparent text-3xl h-full border-gray-300 rounded-md pl-3 pr-10 py-2 w-full"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full"
        >
          <Search className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
      <div className="text-xl font-medium text-gray-900">
        Wominjeka / Womindjeka / Welcome
      </div>

      <div className="relative h-56 w-full">
        <img
          src="https://vcdn1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw"
          alt="Aboriginal sculptures"
          fill
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="space-y-4 text-base text-gray-600">
        <p>
          This interactive map reveals something of Aboriginal peoples' deep
          connection to this Country, the City of Melbourne, and significant
          events and experiences since colonisation. It only scratches the
          surface.
        </p>

        <p>
          The City of Melbourne is located on the sovereign lands of the{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Wurundjeri Woi-wurrung and Bunurong Boon Wurrung
          </Link>
        </p>
      </div>
    </div>
  );
};

const SearchAndFilterBar = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const buttonItems = [
    { icon: <Layers className="h-4 w-4" />, label: "Filter" },
    { icon: <MapPin className="h-4 w-4" />, label: "Urban context" },
    { icon: <Grid className="h-4 w-4" />, label: "Neighbourhoods" },
  ];

  const handleClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  console.log("selectedItems", selectedItems);
  return (
    <div className="p-4 flex gap-3 min-h-18 absolute left-0 top-0 z-20">
      {buttonItems.map((item, index) => (
        <Button
          key={index}
          onClick={() => {
            handleClick(index);
          }}
          variant="outline"
          className={` 
            border-gray-300 text-gray-700 gap-2 px-2 text-lg rounded-4xl  h-full
              ${
                selectedItems.includes(index)
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }
            `}
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
    </div>
  );
};

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex min-h-15 items-center justify-between">
        {tabItems.map((tab) => (
          <Button
            key={tab.name}
            variant="ghost"
            className={`lex min-h-15 flex flex-col items-center text-base ${
              activeTab === tab.name
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 "
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

const tabItems = [
  {
    name: "welcome",
    icon: <MapPin className="h-4 w-4 mr-2" />,
    label: "Welcome",
  },
  {
    name: "themes",
    icon: <Layers className="h-4 w-4 mr-2" />,
    label: "Themes",
  },
  {
    name: "timeline",
    icon: <Clock className="h-4 w-4 mr-2" />,
    label: "Timeline",
  },
  { name: "extras", icon: <Grid className="h-4 w-4 mr-2" />, label: "Extras" },
];
