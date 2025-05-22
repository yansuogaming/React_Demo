import { createContext, useContext, useState, useEffect } from "react";
import MapService from "@services/MapService";

// Create the context
const MapContext = createContext();

// Custom hook to use the map context
export const useMapContext = () => {
  return useContext(MapContext);
};

// Sidebar modes
export const SIDEBAR_MODE = {
  SEARCH: "search",
  DESTINATION: "destination",
  CLOSED: "closed",
};

// Context provider component
export const MapProvider = ({ children, initialData }) => {
  const { list_resources, list_categories } = initialData || {};
  const [activeTab, setActiveTab] = useState("welcome");
  const [selectedMarker, setSelectedMarker] = useState(list_resources?.[0]);
  const [listResources, setListResources] = useState(list_resources);
  const [listCategorySelected, setListCategorySelected] = useState([]);
  const [detailResource, setDetailResource] = useState({});
  const [keywords, setKeywords] = useState("");
  const [listFilter, setListFilter] = useState(list_resources);
  const [showVR, setShowVR] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [sidebarMode, setSidebarMode] = useState(SIDEBAR_MODE.CLOSED);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const normalizeVietnameseString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  // Effect to filter resources based on keywords
  useEffect(() => {
    if (!listResources) return;
    
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
  }, [keywords, listResources]);

  // Effect to filter resources based on selected categories
  useEffect(() => {
    // Category filtering logic - commented out as per original code
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

  const getDetailResource = async (id) => {
    console.log("id", id);
    const res = await MapService.getDetailDestination(id);
    setDetailResource(res?.oneResources);
  };

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

  const handleMarkerClick = (destination) => {
    setSelectedMarker(selectedMarker === destination ? null : destination);
  };

  const onClickItem = (item) => {
    setSelectedMarker(item);
    setKeywords("");
  };


  const handleClickNearbyItem = (item) => {
    const temp=listResources.find((item2) => item2.potential_id == item.potential_id);

    setSelectedMarker(temp);
    setKeywords("");
  };

  // Value to be provided to consuming components
  const value = {
    // State
    activeTab,
    selectedMarker,
    showVideo,
    listResources,
    listCategorySelected,
    detailResource,
    keywords,
    listFilter,
    list_categories,
    showVR,
    sidebarMode,
    isFirstLoad,

    // Setters
    setActiveTab,
    setSelectedMarker,
    setKeywords,
    setShowVR,
    setShowVideo,
    setSidebarMode,
    setIsFirstLoad,
    
    // Actions
    getDetailResource,
    onClickCategory,
    handleMarkerClick,
    onClickItem,
    normalizeVietnameseString,
    handleClickNearbyItem
  };

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export default MapContext;